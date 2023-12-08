import Head from 'next/head';
import { ReactNode } from 'react';
import Navbar from '~/components/Navbar';

type DefaultLayoutProps = { children: ReactNode };

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <Head>
        <title>Prisma Starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen">
        <Navbar />
        <div className="m-2">{children}</div>
      </main>
    </>
  );
};
