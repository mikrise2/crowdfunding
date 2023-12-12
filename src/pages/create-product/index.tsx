import { NextPageWithLayout } from '~/pages/_app';

import React from 'react';
import { Form } from "~/components/product-create/CreatePageComponents";

const IndexPage: NextPageWithLayout = () => {
  return (
    <div className="m-4">
      <Form />
    </div>
  );
};
export default IndexPage;
