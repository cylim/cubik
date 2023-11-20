import React from 'react';
import { randomColorSet } from '@/theme/colorSet';

interface Props {
  tags: string;
}
export const ProjectTags = (props: Props) => {
  const tags = JSON.parse(props.tags) as {
    label: string;
    value: string;
    colorScheme: string;
  }[];
  const randomColor = randomColorSet(tags.length || 0);

  return (
    <>
      <div className="flex flex-col items-start gap-3">
        <div className="flex items-center">
          <div>
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-white"
            >
              <path
                d="M7 20L10 4M14 20L17 4M19.5 15H3.5M20.5 9L4.5 9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="text-xl font-bold text-white">Tags</div>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <p
              className={`rounded-lg border-2 px-5 py-2 `}
              style={{
                borderColor: randomColor[index]?.border,
                color: randomColor[index]?.color,
              }}
              key={index}
            >
              {tag.label}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};
