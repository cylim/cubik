'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { components } from 'react-select';
import type { GroupBase, Options } from 'react-select';
import { SelectComponents } from 'react-select/dist/declarations/src/components';

import { Icon } from '../../../icons/icon';
import { cn } from '../../../lib/utils';
import { AvatarLabelGroup } from '../Avatar/AvatarLabelGroup';
import { Text } from '../text/text';

export type { Options } from 'react-select';

const menuVariants = {
  hidden: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  visible: { opacity: 1, y: 5, transition: { duration: 0.2 } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

type OptionType = {
  label: string;
  value: string;
  icon?: string;
  disabled?: boolean;
  errorMessage?: string;
};

export const CustomComponents: Partial<
  SelectComponents<Options<OptionType>, boolean, GroupBase<Options<OptionType>>>
> = {
  // The wrapper around the entire select component.
  SelectContainer: (props) => {
    return <components.SelectContainer {...props} />;
  },
  // The second highest level wrapper around the components. It is responsible for the positioning of the ValueContainer and IndicatorsContainer. It is followed by the Menu.
  Control: (props) => {
    return (
      <div
        className={cn(
          'z-1 px-0 w-full rounded-[8px] transition-all bg-[var(--form-input-surface-default)] hover:text-[var(--form-input-fg-hovered)] border border-[var(--form-input-border-default)] hover:ring-4 ring-[var(--color-surface-primary-transparent)] hover:bg-[var(--form-input-surface-hovered)',
          props.isFocused
            ? 'rounded-[8px] border border-[var(--color-border-primary-base)] ring-4 ring-[var(--color-surface-primary-transparent)] bg-[var(--form-input-surface-focused)] text-[var(--form-input-fg-focused)]'
            : props.isDisabled
            ? 'border-[var(--form-input-border-disabled)] bg-[var(--form-input-surface-disabled)]'
            : 'rounded-[8px] transition-all bg-[var(--form-input-surface-default)] hover:text-[var(--form-input-fg-hovered)] border hover:ring-4  ring-[var(--color-surface-primary-transparent)] hover:bg-[var(--form-input-surface-hovered)',
        )}
      >
        <components.Control {...props}>
          <div className="flex w-full flex-row items-center">
            {props.children}
          </div>
        </components.Control>
      </div>
    );
  },
  Menu: (props) => {
    // console.log('is open', props.selectProps.menuIsOpen); todo: fix closing animation
    return (
      <components.Menu {...props}>
        <AnimatePresence>
          {props.selectProps.menuIsOpen && (
            <motion.div
              key={'select menu'}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              className="shadow-lg rounded-xl z-10 bg-[var(--menu-surface)]"
            >
              {props.children}
            </motion.div>
          )}
        </AnimatePresence>
      </components.Menu>
    );
  },
  MenuList: (props) => (
    <div
      // initial="hidden"
      // animate="visible"
      // exit="hidden"
      // variants={menuVariants}
      // transition={{ duration: 0.1 }}
      className="shadow-lg overflow-hidden rounded-xl bg-[var(--menu-list-surface)] h-full p-2"
    >
      <components.MenuList {...props} />
    </div>
  ),
  IndicatorsContainer: (props) => {
    return (
      <div className="">
        <components.IndicatorsContainer {...props} />
      </div>
    );
  },
  Option: (props) => {
    return (
      <div
        className="cursor-pointer hover:bg-[var(--menu-list-item-surface-hovered)] text-[var(--menu-list-item-fg-default)] hover:text-[var(--menu-list-item-fg-hovered)] hover:rounded-lg hover:stroke-[var(--menu-list-item-hovered)] stroke-[var(--menu-list-item-icon)] focus-visible:outline-none p-2 py-2"
        {...props.innerProps}
        {...props.innerRef}
      >
        {props.data.icon ? (
          <AvatarLabelGroup
            size="xs"
            shape="circle"
            avatarSrc={props.data.icon ? props.data.icon : undefined}
            title={props.data.label ? props.data.label : undefined}
          />
        ) : (
          <Text className="l1" color={'inherit'}>
            {props.label}
          </Text>
        )}
      </div>
    );
  },
  Placeholder: (props) => {
    return (
      <components.Placeholder {...props}>
        <Text className="l1 top-0 absolute ps-2" color="placeholder">
          {props.children}
        </Text>
      </components.Placeholder>
    );
  },
  Input: (props) => {
    if (props.isHidden) {
      return <components.Input {...props} />;
    } else if (props.isMulti) {
      return (
        <div className="px-2">
          <components.Input {...props} />
        </div>
      );
    } else {
      return <components.Input {...props}>{props.children}</components.Input>;
    }
  },
  ValueContainer: (props) => {
    return (
      <div className="w-full items-center ps-1 flex flex-row flex-nowrap overflow-visible">
        <components.ValueContainer {...props} />
      </div>
    );
  },
  SingleValue: (props) => {
    return (
      <components.SingleValue {...props}>
        <AnimatePresence>
          <motion.div
            key={props.data?.label}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.2 }}
            className="text-[var(--color-fg-primary-depth)] absolute overflow-visible top-0 px-1"
          >
            {props.data.icon ? (
              <AvatarLabelGroup
                size="xs"
                shape="circle"
                avatarSrc={props.data.icon}
                title={props.data.label}
              />
            ) : (
              <Text className="l1 px-1" color={'inherit'}>
                {props.data.label}
              </Text>
            )}
          </motion.div>
        </AnimatePresence>
      </components.SingleValue>
    );
  },
  MultiValueContainer: (props) => {
    return (
      <AnimatePresence>
        <motion.div
          key={props.data.label}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 5 }}
          className="w-fit bg-[var(--tag-subtle-surface-default)] mr-2 my-1 rounded-md px-2 py-1"
        >
          <components.MultiValueContainer {...props} />
        </motion.div>
      </AnimatePresence>
    );
  },
  MultiValueLabel: (props) => {
    return (
      <Text className="l2" color="primary">
        {props.children}
      </Text>
    );
  },
  MultiValueRemove: (props) => (
    <div className="pl-1 pt-[2px]">
      <components.MultiValueRemove {...props}>
        <Icon
          name="cross"
          color={'var(--color-fg-primary-base)'}
          width={18}
          height={18}
        />
      </components.MultiValueRemove>
    </div>
  ),
  DropdownIndicator: () => (
    <div className="scale-75 md:scale-1 transform translate-x-[-4px] transition-all p-1 rounded-md hover:bg-[var(--color-surface-primary-transparent)] active:scale-95">
      <Icon
        name="chevronDown"
        width={20}
        height={20}
        strokeWidth={2}
        color="var(--form-input-fg-default)"
      />
    </div>
  ),
};
