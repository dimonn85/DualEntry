"use client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { useTransition } from 'react';
import { gql } from '@apollo/client';
import InvoiceHeader from '@/components/InvoiceHeader/InvoiceHeader';
import Loader from '@/components/Loader/Loader';
import { InvoicesData } from '@/interfaces';
import InvoiceList from '@/app/scenes/InvoiceList/InvoiceList';

const query = gql`query Invoice(
    $offset: Int,
    $limit: Int,
    $search: String,
    $sortField: String,
    $sortOrder: String) {
  invoice(offset: $offset,
    limit: $limit,
    search: $search,
    sortField: $sortField,
    sortOrder: $sortOrder) {
    items {
      id
      issue_date
      due_date
      number
      customer
      company_name
      total
      currency
      exchange_rate
    }
    search
    sortField
    sortOrder
    total
  }
}`;

export default function Home() {
  const [loading, startTransition] = useTransition();
  const { error, data, fetchMore, refetch }: InvoicesData = useSuspenseQuery(query, {
    variables: { offset: 0, limit: 5 },
  });

  if (error) return 'Error loading Invoices.';

  const fetchMoreData = () => {
    startTransition(() => {
      fetchMore({
        variables: {
          limit: data.invoice.items.length + 5,
        },
      });
    });
  };

  const onSearchHandler = (value: string) => {
    if(value && value !== data.invoice.search) {
      startTransition(() => {
        refetch({
          offset: 0,
          search: value,
        });
      });
    }
  };

  const onClearSearchHandler = () => {
    startTransition(() => {
      refetch({
        offset: 0,
        search: '',
      });
    });
  };

  const onChangeSortHandler = (field: string, order: string) => {
    if(field && order) {
      startTransition(() => {
        refetch({
          offset: 0,
          sortField: field,
          sortOrder: order
        });
      });
    }
  };

  return (
    <main className="bg-gray-100 min-h-full">
      {!data ? <Loader /> : (
        <>
          <InvoiceHeader title='Invoice'/>
          {loading ? '...' : (
            <InvoiceList
              list={data.invoice.items || []}
              totalInvoices={data.invoice.total}
              fetchMore={fetchMoreData}
              loading={loading}
              onSearch={onSearchHandler}
              searchValue={data.invoice.search}
              sortField={data.invoice.sortField}
              sortOrder={data.invoice.sortOrder}
              onChangeSort={onChangeSortHandler}
              clearSearch={onClearSearchHandler}
            />)}
        </>
      )}
    </main>
  );
}