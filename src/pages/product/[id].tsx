import { NextPageWithLayout } from '../_app';
import { useRouter } from 'next/router';
import Error from 'next/error';

const IndexPage: NextPageWithLayout = () => {
  const router = useRouter();

  if (router.query.id === '4') {
    return <Error statusCode={404} />;
  }

  return (
    <div className="flex flex-col bg-gray-800 py-8">{router.query.id}</div>
  );
};
export default IndexPage;
