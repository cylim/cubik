import * as React from 'react';
import { ClassValue } from 'clsx';
import * as Dialog from 'vaul';

import { cn } from '../../../lib/utils';

interface WithFadeFromProps {
  snapPoints: (number | string)[];
  fadeFromIndex: number;
}
interface WithoutFadeFromProps {
  snapPoints?: (number | string)[];
  fadeFromIndex?: never;
}

export type DrawerProps = {
  activeSnapPoint?: number | string | null;
  setActiveSnapPoint?: (snapPoint: number | string | null) => void;
  children?: React.ReactNode;
  open?: boolean;
  closeThreshold?: number;
  onOpenChange?: (open: boolean) => void;
  shouldScaleBackground?: boolean;
  scrollLockTimeout?: number;
  fixed?: boolean;
  dismissible?: boolean;
  onDrag?: (
    event: React.PointerEvent<HTMLDivElement>,
    percentageDragged: number,
  ) => void;
  onRelease?: (
    event: React.PointerEvent<HTMLDivElement>,
    open: boolean,
  ) => void;
  modal?: boolean;
  nested?: boolean;
  onClose?: () => void;
} & (WithFadeFromProps | WithoutFadeFromProps);

interface DrawerPortalProps {
  children: React.ReactNode;
}
interface DrawerContentProps {
  children: React.ReactNode;
  className?: ClassValue;
}
interface DrawerHeaderProps {
  children: React.ReactNode;
}
interface DrawerBodyProps {
  children: React.ReactNode;
  className?: string;
}
interface DrawerFooterProps {
  children: React.ReactNode;
}

const Drawer = ({ open, children, onOpenChange, ...props }: DrawerProps) => (
  <Dialog.Drawer.Root
    //shouldScaleBackground
    open={open}
    onOpenChange={onOpenChange}
    {...props}
  >
    {children}
  </Dialog.Drawer.Root>
);
const DrawerPortal = ({ children }: DrawerPortalProps) => {
  return <Dialog.Drawer.Portal>{children}</Dialog.Drawer.Portal>;
};

const DrawerOverlay = ({ className }: { className?: ClassValue }) => (
  <Dialog.Drawer.Overlay
    className={cn(
      'fixed inset-0 bg-gradient-to-b from-white/10 dark:from-[#27272710] to-black/10 dark:to-[#27272705] backdrop-blur-[4px]',
      className,
    )}
  />
);

const DrawerContent = ({ children, className }: DrawerContentProps) => (
  <Dialog.Drawer.Content
    className={cn(
      className,
      'fixed max-h-[90%] pt-2 focus:outline-none bottom-0 left-0 right-0 rounded-t-[12px] overflow-hidden w-screen bg-[var(--color-surface-primary)]',
    )}
  >
    <div className="mx-auto w-12 h-[3px] flex-shrink-0 rounded-full bg-[var(--color-surface-primary-transparent)] mb-2" />
    {children}
  </Dialog.Drawer.Content>
);

const DrawerCloseButton = () => (
  <Dialog.Drawer.Close className="drawerCloseButton">X</Dialog.Drawer.Close>
);

const DrawerHeader = ({ children, ...props }: DrawerHeaderProps) => (
  <div className="drawerHeader" {...props}>
    {children}
  </div>
);

const DrawerBody = ({ children, ...props }: DrawerBodyProps) => (
  <div {...props}>{children}</div>
);

const DrawerFooter = ({ children, ...props }: DrawerFooterProps) => (
  <div className="drawerFooter" {...props}>
    {children}
  </div>
);

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
};
