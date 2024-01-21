/* eslint-disable react/jsx-no-undef */
'use client';

import React from 'react';
import { CustomModal } from '@/app/@modal/(...)p/[slug]/moda';

import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerPortal,
} from '@cubik/ui';
import { cn } from '@cubik/ui/lib/utils';

interface Props {
  children: React.ReactNode;
  params: {
    slug: string;
  };
}
const ProjectLayoutDrawer = ({ children, params }: Props) => {
  // return (
  //   <Drawer modal open={true}>
  //     <DrawerPortal>
  //       <DrawerOverlay />
  //       <DrawerContent className={cn('h-max')}>
  //         <DrawerBody>
  //           <div className="min-h-[90vh] bg-black">{children}</div>
  //         </DrawerBody>
  //       </DrawerContent>
  //     </DrawerPortal>
  //   </Drawer>
  // );
  return <CustomModal>{children}</CustomModal>;
};

export default ProjectLayoutDrawer;
