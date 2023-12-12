import { NextPageWithLayout } from '../_app';
import { useRouter } from 'next/router';
import Error from 'next/error';
import React from 'react';
import { Cell, GridContainer } from '~/components/product/MainGrid';

const IndexPage: NextPageWithLayout = () => {
  const router = useRouter();
  if (router.query.id === '4') {
    return <Error statusCode={404} />;
  }

  return (
    <div className="m-4">
      <GridContainer>
        <div className="row-span-3">
          <Cell>
            <h1>1</h1>
          </Cell>
        </div>
        <div className="col-span-2">
          <Cell>
            <h1>2</h1>
          </Cell>
        </div>
        <div className="row-span-2 col-span-2">
          <Cell>
            <h1>3</h1>
          </Cell>
        </div>
      </GridContainer>
    </div>
  );
};
export default IndexPage;
