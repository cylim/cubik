import { EventType, prisma, Project, ProjectVerifyStatus } from '@cubik/database';
import fs from 'fs';
function normalize(data: number[]): number[] {
    const minVal = Math.min(...data);
    const maxVal = Math.max(...data);
    return data.map(x => (x - minVal) / (maxVal - minVal));
}

async function rankProjects(projects: Project[]): Promise<Project[]> {
    // Extract data
    const pageVisits = projects.map(() => 1000);
    const donations = []
    const uniqueDonors = []
    for (const p of projects) {
        const sum = await prisma.contribution.aggregate(
            { _sum: { totalAmount: true }, where: { projectId: p.id }, }
        )
        console.debug(`Total amount for project ${p.id}: ${sum._sum.totalAmount}`)
        donations.push(sum._sum.totalAmount);
        const contributions = await prisma.contribution.findMany({
            where: { projectId: p.id },
        });
        const uniqueContributors = new Set(contributions.map(c => c.userId)).size
        console.debug(`Contributions for project ${p.id}: ${uniqueContributors}`)
        uniqueDonors.push(uniqueContributors);
    }


    // Normalize data
    const normalizedVisits = normalize(pageVisits);
    const normalizedDonations = normalize(donations.map(d => d != null ? d : 0));
    const normalizedDonors = normalize(uniqueDonors);

    // Weights (these can be adjusted)
    const weights = { visits: 0.3, donations: 0.4, donors: 0.3 };


    // Calculate scores and add to projects
    const scoredProjectsPromise = projects.map(async (project, i) => {
        // check if project is participating in an event and if so, give priority to them, if the event is a round, give it more priority than a hackathon event
        const isParticipatingInEvent = await prisma.event.findMany({
            where: {
                projectJoinEvent: {
                    some: {
                        projectId: project.id
                    }
                }
            }
        })
        if (isParticipatingInEvent.length > 0) {
            const isRound = isParticipatingInEvent.filter(e => e.type === EventType.ROUND)
            if (isRound.length > 0) {
                return { ...project, score: 1000 };
            } else {
                return { ...project, score: 500 };
            }
        }
        const score = weights.visits * normalizedVisits[i] +
            weights.donations * normalizedDonations[i] +
            weights.donors * normalizedDonors[i];
        return { ...project, score };
    });

    const scoredProjects = await Promise.all(scoredProjectsPromise);

    // Sort projects based on score
    scoredProjects.sort((a, b) => b.score - a.score);

    // set a rank attribute to each project
    scoredProjects.forEach((project, i) => {
        project.rank = i + 1;
    });

    return scoredProjects;
}

export async function rankedProjectsJob(): Promise<void> {
    console.debug('Running rankedProjectsJob');
    const projects = await prisma.project.findMany({ where: { isArchive: false, isDraft: false, status: ProjectVerifyStatus.VERIFIED } });
    // fs.writeFileSync('projects.json', JSON.stringify(projects, null, 2));
    // const contributions = await prisma.contribution.findMany();
    // fs.writeFileSync('contributions.json', JSON.stringify(contributions, null, 2));
    // const events = await prisma.event.findMany();
    // fs.writeFileSync('events.json', JSON.stringify(events, null, 2));
    const rankedProjects = await rankProjects(projects);
    fs.writeFileSync('rankedProjects.json', JSON.stringify(rankedProjects, null, 2));
    console.log(rankedProjects);
}

