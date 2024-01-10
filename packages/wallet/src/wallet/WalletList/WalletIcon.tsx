'use client';

import React, {
  DetailedHTMLProps,
  FC,
  ImgHTMLAttributes,
  useRef,
  useState,
} from 'react';
//import Image from 'next/image';
import { Adapter } from '@solana/wallet-adapter-base';
import { AnimatePresence, motion } from 'framer-motion';

import { Avatar, Spinner, Text } from '@cubik/ui';
import { useMediaQuery } from '@cubik/ui/hooks';

export interface WalletIconProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  wallet: Adapter | null;
}

export const WalletIcon: FC<WalletIconProps> = ({ wallet }) => {
  //const [hasError, setHasError] = React.useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isSmallDevice = useMediaQuery('only screen and (max-width : 768px)');
  const hoverTimeoutRef = useRef<any>(null); // the connect text is only shown if user hovers for more than 600ms on the wallet icon

  const handleMouseEnter = () => {
    // Set a timeout to change the state after 1 second
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(true);
    }, 1100);
  };

  const handleMouseLeave = () => {
    // Clear the timeout if it exists
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setIsHovered(false);
  };

  // const onError = useCallback(() => setHasError(true), []);
  const variants = {
    initial: {
      opacity: 0,
      y: -4,
      transition: {
        delay: 1,
        duration: 0.2, // Duration of 0.3 seconds
        ease: [0.17, 0.67, 0.83, 0.67], // Easing function for the animation
      },
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.17, 0.67, 0.83, 0.67],
      },
    },
    exit: {
      opacity: 0,
      y: 4,
      transition: {
        duration: 0.3,
        ease: 'easeIn',
      },
    },
  };

  // Define your animation variants for the glare effect
  const glareVariants = {
    initial: { x: '-100%' },
    animate: {
      x: '100%',
      transition: { duration: 0.8, ease: 'easeInOut' },
    },
  };

  if (wallet && wallet.icon) {
    // && !hasError
    return (
      <div
        style={{
          width: 'clamp(92px, 16vw, 102px)',
          height: '100px',
          //  position: 'relative',
          //  overflow: 'hidden',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex transform active:scale-95 items-center justify-center gap-2 w-fit flex-col"
      >
        {/* Glare Effect */}

        {/* Wallet icon */}
        {wallet.connecting ? (
          <div className="w-12 h-12 flex justify-center items-center">
            <Spinner color="black" />
          </div>
        ) : (
          <div className="relative overflow-hidden">
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  key={`glare-${wallet.name}`} // Ensure key is unique for each wallet icon
                  className="absolute z-1 top-0 left-0 right-0 bottom-0"
                  variants={glareVariants}
                  initial="initial"
                  animate="animate"
                  style={{
                    zIndex: 1,
                    background:
                      //'linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%)',
                      'linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.6) 50%, transparent 100%)',
                  }}
                />
              )}
            </AnimatePresence>
            <Avatar
              alt={wallet.name}
              src={wallet.icon}
              size={isSmallDevice ? 'lg' : 'md'}
            />
          </div>
        )}
        {/*animated text */}
        <AnimatePresence mode="wait">
          {isHovered ? (
            <motion.span
              key={'connect - ' + wallet.name}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Text className="b3 md:b4-light line-clamp-1" color={'primary'}>
                Connect
              </Text>
            </motion.span>
          ) : (
            <motion.span
              key={'wallet - ' + wallet.name}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{
                maxWidth: '80px',
                overflow: 'hidden',
              }}
            >
              <Text className="b3 md:b4-light line-clamp-1" color={'primary'}>
                {wallet.name}
              </Text>
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    );
  } else {
    return <div>?</div>;
  }
};
