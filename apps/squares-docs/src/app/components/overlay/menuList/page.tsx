'use client';

import React from 'react';
import CodeComponent from '@/app/home-page-components/code-component';
import PageHOC from '@/app/home-page-components/components/pageHOC';

import {
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  SubMenu,
  SubMenuButton,
  SubMenuList,
} from '@cubik/ui';

const MenuListPage = () => {
  return (
    <>
      <PageHOC
        pages={[
          { name: 'Component', href: '/components', current: false },
          { name: 'MenuList', href: '/component/menuList', current: true },
        ]}
        heading={'MenuList'}
        description={'Use the menulist to show menu options'}
      >
        <div className="border-[var(--color-border-primary) overflow-hidden rounded-[8px] border bg-[var(--white)] px-6 py-4">
          <CodeComponent codeString='import { Progress } from "@cubik/ui"' />
        </div>

        <div>
          <Menu>
            <MenuButton>
              <Button>Menu</Button>
            </MenuButton>
            <MenuList>
              <MenuItem text="Download" leftIcon="plus">
                <Icon
                  name="chevronLeft"
                  height={20}
                  width={20}
                  stroke="inherit"
                />
              </MenuItem>
              <MenuItem text="Create a Copy"></MenuItem>
              <MenuDivider />
              <MenuItem text="Mark as Draft"></MenuItem>
              <MenuItem text="Delete"></MenuItem>
              <SubMenu>
                <SubMenuButton>Attend a Workshop</SubMenuButton>
                <SubMenuList>
                  <MenuItem text="Download"></MenuItem>
                  <MenuItem text="Create a Copy"></MenuItem>
                  <MenuItem text="Mark as Draft"></MenuItem>
                  <MenuItem text="Delete"></MenuItem>
                </SubMenuList>
              </SubMenu>
            </MenuList>
          </Menu>
        </div>
      </PageHOC>
    </>
  );
};

export default MenuListPage;
