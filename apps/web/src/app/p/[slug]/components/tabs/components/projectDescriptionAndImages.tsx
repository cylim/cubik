'use client';

import React from 'react';
import Image from 'next/image';

import { PreviewEditor } from '@cubik/editor';
import { Carousel, CarouselContent, CarouselItem, Text } from '@cubik/ui';

const ImagesCarousel = ({ slides }: { slides: string[] }) => {
  console.log('slides - ', slides);
  return (
    <div className="flex w-full flex-col gap-4 md:min-w-[65%] ">
      <Carousel
        opts={{
          align: 'start',
        }}
        className="h-fit max-h-72 w-full"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem
              key={index}
              className="h-fit border pl-4 sm:basis-[70%]"
            >
              <div className="h-fit w-full">
                <Image
                  src={slide}
                  alt={'carousel image'}
                  objectFit="contain"
                  className="h-auto w-full rounded-lg"
                  width={1400}
                  height={1400}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </div>
  );
};

interface Project {
  slides: string[];
  name: string;
  longDescription: string;
}

const ProjectDescriptionAndImages = ({ project }: { project: Project }) => {
  return (
    <>
      <div className="h-fit">
        <ImagesCarousel slides={project.slides} />
      </div>
      <div className="flex flex-col gap-4 border">
        <Text color="primary" className="h5">
          About {project.name}
        </Text>
        <PreviewEditor
          content={project.longDescription}
          className="max-h-[10rem] overflow-hidden"
        />
      </div>
    </>
  );
};

export default ProjectDescriptionAndImages;
