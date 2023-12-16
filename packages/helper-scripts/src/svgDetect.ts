import axios from 'axios';

import { generateUserBackupImage, Project_Backup } from '@cubik/common';
import { prisma } from '@cubik/database';

async function replaceSvgWithBackup() {
  const users = await prisma.user.findMany({
    select: {
      profilePicture: true,
      id: true,
    },
  });
  const projects = await prisma.project.findMany({
    select: {
      logo: true,
      id: true,
    },
  });
  for (const project of projects) {
    let change = false;
    try {
      const url = project.logo!;
      const res = await axios.get(url, {
        responseType: 'arraybuffer',
      });
      const mime = res.headers['content-type'];
      console.log(`mime: ${mime}`);
      if (mime === 'image/svg+xml') {
        change = true;
        console.log(JSON.stringify(project));
      }
    } catch (e) {
      change = true;
    }
    if (change) {
      await prisma.project.update({
        where: {
          id: project.id,
        },
        data: {
          logo: Project_Backup,
        },
      });
      console.log(`changed: ${project.id}`);
    }
  }

  for (const user of users) {
    let change = false;
    try {
      const url = user.profilePicture!;
      const res = await axios.get(url, {
        responseType: 'arraybuffer',
      });
      const mime = res.headers['content-type'];
      console.log(`mime: ${mime}`);
      if (mime === 'image/svg+xml') {
        change = true;
        console.log(JSON.stringify(user));
      }
    } catch (e) {
      change = true;
    }
    if (change) {
      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          profilePicture: generateUserBackupImage(),
        },
      });
      console.log(`changed: ${user.id}`);
    }
  }
}

export { replaceSvgWithBackup };
