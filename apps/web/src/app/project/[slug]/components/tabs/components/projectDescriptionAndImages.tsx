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
        className="w-full h-fit max-h-72"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem
              key={index}
              className="border h-fit pl-4 sm:basis-[70%]"
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
      <div className="border flex flex-col gap-4">
        <Text color="primary" className="h5">
          About {project.name}
        </Text>
        <PreviewEditor
          content={project.longDescription}
          className="overflow-hidden max-h-[10rem]"
        />
      </div>
    </>
  );
};

export default ProjectDescriptionAndImages;
