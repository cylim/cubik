'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { ProjectPageLayoutType } from '@/types/project';
import { parseDateISO } from '@/utils/helpers/date';
import { isFuture } from 'date-fns';

import { Button, Icon, Popover } from '@cubik/ui';

import { useProjectEventStore } from '../store';
import { EventSelector } from './eventSelector';

interface Props {
  projectWithEvent: ProjectPageLayoutType;
}
export const ProjectHeader = ({ projectWithEvent }: Props) => {
  const [isHovered, setIsHovered] = useState<boolean>(true);
  const { event } = useProjectEventStore();
  return (
    <>
      <div className="flex h-full w-full flex-col items-center justify-center space-y-12 py-8 md:flex-row md:justify-end md:space-y-0 md:py-10">
        <div className="flex w-full flex-col items-start gap-4 md:gap-6">
          <div className="relative h-24 w-24">
            <Image
              src={projectWithEvent.logo}
              alt={projectWithEvent.name}
              priority
              fill
              style={{
                borderRadius: '10px',
                objectFit: 'cover',
              }}
            />
          </div>

          <div className="flex w-full flex-col items-start justify-center gap-3  md:gap-5">
            <div className="flex items-center space-x-1">
              <div className="overflow-hidden break-words text-2xl font-bold capitalize text-white md:text-3xl">
                {projectWithEvent.name}
              </div>
            </div>
            <div
              className="overflow-hidden break-words text-base font-semibold text-[#AAAAAA] md:text-xl"
              style={{
                WebkitLineClamp: 2,
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
              }}
            >
              {projectWithEvent.shortDescription}
            </div>
          </div>
        </div>

        <div className="min-h-20 flex w-full min-w-full max-w-[30rem] flex-col items-end gap-10 md:min-w-[20rem] md:gap-0">
          <div className="flex h-28 flex-col gap-4 md:h-14 md:flex-row md:gap-6">
            <Button
              variant="link"
              className="flex items-center gap-2 p-4 text-[#848484] hover:bg-white hover:text-black"
            >
              <Icon name="bookmark" fill="none" stroke="#848484" />
              Collect
            </Button>
            <Link
              style={{
                width: '100%',
                height: '100%',
              }}
              href={projectWithEvent.projectLink}
            >
              <Button
                variant="outline"
                className="flex items-center p-4 hover:bg-white hover:text-black"
              >
                Visit
              </Button>
            </Link>
            {event && isFuture(parseDateISO(event.endTime.toISOString())) ? (
              <Popover
                open={isHovered}
                setOpen={setIsHovered}
                trigger={<Button variant="primary">Contribute</Button>}
                content={
                  <div className="none flex w-80 items-center justify-center bg-[#FFD600] p-4 md:block">
                    <div className="text-sm font-semibold text-black">
                      WTF is Contribute?
                    </div>
                    <div className="my-2 text-xs font-medium text-black">
                      When you contribute to a project your contribution matches
                      a portion from the matching pool based on the amount of
                      your donation.
                    </div>
                    <Button
                      className="rounded-full bg-black px-3 py-0 text-sm text-white hover:bg-black"
                      onClick={() => setIsHovered(false)}
                    >
                      Dismiss
                    </Button>
                  </div>
                }
              />
            ) : (
              <Popover
                open={isHovered}
                setOpen={setIsHovered}
                trigger={
                  <Button variant="link" className="min-h-10 flex text-black">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.5 4.5835V5.31683C5.5 6.34359 5.5 6.85697 5.30018 7.24914C5.12441 7.59411 4.84395 7.87457 4.49898 8.05034C4.10681 8.25016 3.59343 8.25016 2.56667 8.25016H1.83333M16.5 17.4168V16.6835C16.5 15.6567 16.5 15.1434 16.6998 14.7512C16.8756 14.4062 17.1561 14.1258 17.501 13.95C17.8932 13.7502 18.4066 13.7502 19.4333 13.7502H20.1667M16.5 4.5835V5.31683C16.5 6.34359 16.5 6.85697 16.6998 7.24914C16.8756 7.59411 17.1561 7.87457 17.501 8.05034C17.8932 8.25016 18.4066 8.25016 19.4333 8.25016H20.1667M5.5 17.4168V16.6835C5.5 15.6567 5.5 15.1434 5.30018 14.7512C5.12441 14.4062 4.84395 14.1258 4.49898 13.95C4.10681 13.7502 3.59343 13.7502 2.56667 13.7502H1.83333M4.76667 17.4168H17.2333C18.2601 17.4168 18.7735 17.4168 19.1656 17.217C19.5106 17.0412 19.7911 16.7608 19.9668 16.4158C20.1667 16.0236 20.1667 15.5103 20.1667 14.4835V7.51683C20.1667 6.49007 20.1667 5.97668 19.9668 5.58451C19.7911 5.23955 19.5106 4.95909 19.1656 4.78332C18.7735 4.5835 18.2601 4.5835 17.2333 4.5835H4.76667C3.7399 4.5835 3.22652 4.5835 2.83435 4.78332C2.48939 4.95909 2.20892 5.23955 2.03316 5.58451C1.83333 5.97668 1.83333 6.49007 1.83333 7.51683V14.4835C1.83333 15.5103 1.83333 16.0236 2.03316 16.4158C2.20892 16.7608 2.48939 17.0412 2.83435 17.217C3.22652 17.4168 3.7399 17.4168 4.76667 17.4168ZM11 13.7502C9.48122 13.7502 8.25 12.5189 8.25 11.0002C8.25 9.48138 9.48122 8.25016 11 8.25016C12.5188 8.25016 13.75 9.48138 13.75 11.0002C13.75 12.5189 12.5188 13.7502 11 13.7502Z"
                        stroke="black"
                        strokeWidth="1.7"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Send Donation
                  </Button>
                }
                content={
                  <div className="none flex w-80 items-center justify-center bg-white p-4 md:block">
                    <div className="text-sm font-semibold text-black">
                      WTF is Donation?
                    </div>
                    <div className="my-2 text-xs font-medium text-black">
                      {`Currently, the project isn't in a active grants round.
                            Contributions done now go directly to the project
                            without any matching with any additional funds.`}
                    </div>
                    <Button
                      className="rounded-full bg-black px-3 py-0 text-sm text-white hover:bg-black"
                      onClick={() => setIsHovered(false)}
                    >
                      Dismiss
                    </Button>
                  </div>
                }
              />
            )}
          </div>

          <EventSelector events={projectWithEvent.events} />
        </div>
      </div>
    </>
  );
};
