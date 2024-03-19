"use client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { gql } from "@apollo/client";

const query = gql`query invoice {
    invoice {
        title
        list {
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
    }
}`;

export default function About() {
  const { data } = useSuspenseQuery(query);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      About
    </main>
  );
}
