'use client';

import React, { useState } from 'react';
import CodeComponent from '@/app/home-page-components/code-component';
import PageHOC from '@/app/home-page-components/components/pageHOC';
import DocsTabsHOC from '@/app/home-page-components/components/Tabs';

import { SelectOptionsType } from '@cubik/common-types';
import { getValidToken } from '@cubik/common/tokens/getValidTokenList';
import { Select, Text } from '@cubik/ui';

const SelectPage = () => {
  const [selectedValue1, setSelectedValue1] = useState<
    SelectOptionsType[] | undefined
  >();
  const [selectedValue2, setSelectedValue2] = useState<
    SelectOptionsType[] | undefined
  >();
  const [selectedValue3, setSelectedValue3] = useState<
    SelectOptionsType[] | undefined
  >();
  const [selectedValue4, setSelectedValue4] = useState<
    SelectOptionsType[] | undefined
  >();
  const tokens = getValidToken();

  const TokenOptions: SelectOptionsType[] = tokens.map((token) => ({
    value: token.address,
    label: token.symbol,
    icon: token.logoURI,
  }));

  const data: SelectOptionsType[] = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Orange' },
    { value: 'mango', label: 'Mango' },
    { value: 'grape', label: 'Grape' },
    { value: 'pineapple', label: 'Pineapple' },
    { value: 'berry', label: 'Berry' },
    { value: 'peach', label: 'Peach' },
    { value: 'pear', label: 'Pear' },
    { value: 'plum', label: 'Plum' },
  ];

  return (
    <PageHOC
      pages={[
        { name: 'Component', href: '/components', current: false },
        {
          name: 'Input',
          href: '/component/button',
          current: true,
        },
      ]}
      heading={'Button'}
      description="Button is used to initiate actions on a page or form."
    >
      <DocsTabsHOC>
        <div className="flex flex-col gap-8 py-8">
          <div className="flex flex-col gap-4 py-8">
            <div className="rounded-md border border-[var(--color-border-primary-base)] bg-[var(--color-bg-primary-base)] p-10">
              <div className="align-center flex flex-row flex-wrap justify-start gap-12">
                <div className="mx-auto w-64">
                  <Select
                    placeholder="Search Category here"
                    isMulti={true}
                    onChange={(e) => {
                      if (!e) return;
                      console.log('input value - ', e);
                      setSelectedValue1(e as any);
                    }}
                    value={selectedValue1 as any} // make this strict type
                    options={data as any}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 py-8">
            <Text className="h4" color="primary">
              Variant
            </Text>
            <div className="rounded-md border border-[var(--color-border-primary-base)] bg-[var(--color-bg-primary-base)] p-10">
              <div className="align-center flex flex-row flex-wrap justify-start gap-12">
                <div className="mx-auto w-44">
                  <Select
                    placeholder="Search Category here"
                    isMulti={false}
                    isSearchable={false}
                    defaultValue={TokenOptions[0]}
                    onChange={(e) => {
                      if (!e) return;
                      setSelectedValue2(e as any);
                    }}
                    size="md"
                    value={selectedValue2}
                    options={TokenOptions}
                  />
                </div>
                <div className="mx-auto w-64">
                  <Select
                    placeholder="Search Category here"
                    isMulti={true}
                    onChange={(e) => {
                      if (!e) return;
                      console.log('input value - ', e);
                      setSelectedValue3(e as any);
                    }}
                    value={selectedValue3 as any}
                    options={data as any}
                  />
                </div>
                <div className="mx-auto w-64">
                  <Select
                    placeholder="Search Category here"
                    isMulti={false}
                    size="md"
                    isSearchable={false}
                    onChange={(e) => {
                      if (!e) return;
                      console.log('input value - ', e);
                      setSelectedValue4(e as any);
                    }}
                    value={selectedValue4 as any}
                    options={data as any}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 py-8">
            <Text className="h4" color="primary">
              Sizes
            </Text>
            <div className="rounded-md border border-[var(--color-border-primary-base)] bg-[var(--color-primary-surface-subdued)] p-10">
              <div className="align-center flex flex-row flex-wrap justify-start gap-12"></div>
            </div>
          </div>
        </div>
        <CodeComponent codeString='import { Button } from "@cubik/ui"' />
        <></>
      </DocsTabsHOC>
    </PageHOC>
  );
};

export default SelectPage;
