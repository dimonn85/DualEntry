import React, { FC } from 'react';
import { InvoiceHeaderProps } from '@/interfaces';
import { PlusIcon } from '@radix-ui/react-icons';
import { Button } from '@radix-ui/themes';

const InvoiceHeader: FC<InvoiceHeaderProps> = ({ title }) => {
  return (
    <header className='bg-lime-100 p-4'>
      <div className="text-xs mb-2">
        Finansials / Workflows
      </div>
      <div className="sm:flex justify-between">
        <h1 className="flex gap-2 sm:mb-0 mb-2 text-5xl items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"/>
          </svg>
          {title}
        </h1>
        <div className="sm:-mt-2">
          <Button size="3" variant="surface" radius="none">
            <PlusIcon />
            Add New
          </Button>
        </div>
      </div>
    </header>
  );
};

export default InvoiceHeader;