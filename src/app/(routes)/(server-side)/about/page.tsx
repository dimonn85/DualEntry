import { getClient } from "@/lib/client";

import { gql } from "@apollo/client";

const query = gql`query invoice {
    invoice {
        title
    }
}`;

export default async function About() {
  const client = getClient();
  const {
    data: {
      invoice: {
        title,
      }
    }
  } = await client.query({ query });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      About
      Server side data: {title}
    </main>
  );
}
