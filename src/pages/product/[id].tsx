import { NextPageWithLayout } from "../_app";
import { useRouter } from "next/router";
import Error from "next/error";


function InfoCell() {
  
}


const IndexPage: NextPageWithLayout = () => {
  const router = useRouter();
  if (router.query.id === "4") {
    return <Error statusCode={404} />;
  }

  return (
    <div className="m-4">
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-span-3 rounded-lg bg-amber-800 border border-">01</div>
        <div className="col-span-2 rounded-lg bg-amber-800">02</div>
        <div className="row-span-2 col-span-2 rounded-lg bg-amber-800">03</div>
      </div>
      {/*<h1>AAAA</h1>*/}
    </div>
  );
};
export default IndexPage;
