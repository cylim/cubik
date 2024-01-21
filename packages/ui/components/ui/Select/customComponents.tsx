'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { components } from 'react-select';
import type { GroupBase } from 'react-select';
import { SelectComponents } from 'react-select/dist/declarations/src/components';

import { Options, SelectOptionsType } from '@cubik/common-types';

import { Icon } from '../../../icons/icon';
import { cn } from '../../../lib/utils';
import { AvatarLabelGroup } from '../Avatar/AvatarLabelGroup';
import { Spinner } from '../Spinner/Spinner';
import { Text } from '../text/text';

const menuVariants = {
  hidden: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  visible: { opacity: 1, y: 5, transition: { duration: 0.2 } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export const InputFieldVariants = {
  variants: {
    size: {
      md: 'min-h-[36.4px] md:min-h-[38.4px]',
      sm: 'min-h-[32.4px] md:min-h-[34.4px]',
    },
  },
};

export const OptionVariants = {
  variants: {
    size: {
      md: 'sm',
      sm: 'xs',
    },
  },
};

export const CustomComponents: Partial<
  SelectComponents<
    Options<SelectOptionsType>,
    boolean,
    GroupBase<Options<SelectOptionsType>>
  >
> = {
  // The wrapper around the entire select component.
  SelectContainer: (props) => {
    return <components.SelectContainer {...props} />;
  },
  // The second highest level wrapper around the components. It is responsible for the positioning of the ValueContainer and IndicatorsContainer. It is followed by the Menu.
  Control: (props) => {
    const size = props.getStyles('control', props).size as 'sm' | 'md'; // this is a workaround for passing size from styles to components
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
          <div
            className={cn(
              'flex w-full flex-row items-center',
              InputFieldVariants.variants.size[size],
            )}
          >
            {props.children}
          </div>
        </components.Control>
      </div>
    );
  },
  Menu: (props) => {
    return (
      <AnimatePresence>
        {props.selectProps.menuIsOpen && (
          <components.Menu {...props}>
            <motion.div
              key={props.selectProps.id}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              className="shadow-lg rounded-xl z-10 bg-[var(--menu-surface)]"
            >
              {props.children}
            </motion.div>
          </components.Menu>
        )}
      </AnimatePresence>
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
  Option: (props) => {
    const size = props.getStyles('option', props).size as 'sm' | 'md';
    return (
      <div
        className="cursor-pointer hover:bg-[var(--menu-list-item-surface-hovered)] text-[var(--menu-list-item-fg-default)] hover:text-[var(--menu-list-item-fg-hovered)] hover:rounded-lg hover:stroke-[var(--menu-list-item-hovered)] stroke-[var(--menu-list-item-icon)] focus-visible:outline-none p-2 py-2 flex flex-row items-center transform scale-95"
        {...props.innerProps}
        {...props.innerRef}
      >
        {props.data.icon ? (
          <AvatarLabelGroup
            size={cn('', OptionVariants.variants.size[size]) as 'xs' | 'sm'}
            shape="circle"
            avatarSrc={props.data.icon ? props.data.icon : undefined}
            title={props.data.label ? props.data.label : undefined}
          />
        ) : (
          <Text className="b2 md:l1" color={'inherit'}>
            {props.label}
          </Text>
        )}
        {props.data?.secondaryValue && (
          <Text className="l2" color={'tertiary'}>
            {props.data.secondaryValue}
          </Text>
        )}
      </div>
    );
  },
  LoadingMessage: (props) => {
    return (
      <components.LoadingMessage {...props}>
        <Text className="l2 border border-red-500" color={'secondary'}>
          Hello world
        </Text>
      </components.LoadingMessage>
    );
  },
  LoadingIndicator: (props) => {
    return (
      <AnimatePresence>
        {props.selectProps.isLoading && (
          <motion.div
            layoutId={props.selectProps.id}
            // animate opacity
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="transform translate-x-[-4px] transition-all p-1 rounded-md "
          >
            <Spinner />
          </motion.div>
        )}
      </AnimatePresence>
    );
  },
  DropdownIndicator: (props) => {
    return (
      <AnimatePresence>
        {!props.selectProps.isLoading && (
          <motion.div
            layoutId={props.selectProps.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <components.DropdownIndicator {...props}>
              <div className="transform translate-x-[-4px] transition-all p-1 rounded-md hover:bg-[var(--color-surface-primary-transparent)] active:scale-95">
                <Icon
                  name="chevronDown"
                  width={
                    Number(props.getStyles('dropdownIndicator', props).size) ||
                    20
                  }
                  height={
                    Number(props.getStyles('dropdownIndicator', props).size) ||
                    20
                  }
                  strokeWidth={2}
                  color="var(--form-input-fg-default)"
                />
              </div>
            </components.DropdownIndicator>
          </motion.div>
        )}
      </AnimatePresence>
    );
  },
  Placeholder: (props) => {
    const size = props.getStyles('placeholder', props).size as 'sm' | 'md';
    return (
      <components.Placeholder {...props}>
        <Text
          className={cn(
            'l1 top-0 absolute ps-2 flex items-center',
            InputFieldVariants.variants.size[size],
          )}
          color="placeholder"
        >
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
        <div className="px-2 flex items-center">
          <components.Input {...props} />
        </div>
      );
    } else {
      return (
        <div className="ps-2 ">
          <components.Input {...props} />
        </div>
      );
    }
  },
  ValueContainer: (props) => {
    const size = props.getStyles('valueContainer', props).size as 'sm' | 'md';
    return (
      <div
        className={cn(
          'w-full ps-1 flex flex-row items-center flex-nowrap overflow-scroll',
          InputFieldVariants.variants.size[size],
        )}
      >
        <components.ValueContainer {...props} />
      </div>
    );
  },
  SingleValue: (props) => {
    const size = props.getStyles('singleValue', props).size as 'sm' | 'md';
    return (
      <components.SingleValue {...props}>
        <AnimatePresence>
          <motion.div
            key={props.data?.value}
            initial={{ opacity: 0, y: -5, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 0.9 }}
            exit={{ opacity: 0, y: 5, scale: 0.85 }}
            transition={{ duration: 0.2 }}
            className={cn(
              'text-[var(--color-fg-primary-depth)] flex items-center absolute overflow-visible top-0 bottom-0 px-1',
              InputFieldVariants.variants.size[size],
            )}
          >
            {props.data?.icon ? (
              <AvatarLabelGroup
                size={cn('', OptionVariants.variants.size[size]) as 'xs' | 'sm'}
                shape="circle"
                avatarSrc={props.data.icon}
                title={props.data.label}
              />
            ) : (
              <Text className="b2 md:l1 px-1" color={'inherit'}>
                {props.data?.label ? props.data.label : ''}
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
};
