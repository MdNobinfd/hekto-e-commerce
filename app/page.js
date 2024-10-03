import { Lato } from "next/font/google";
import Banner from "./components/Banner";
import FeatureProduct from "./components/FeatureProduct";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return (
    <>
    <Banner />
    <FeatureProduct />
    </>
  );
}
