import { Lato } from "next/font/google";
import Banner from "./components/Banner";
import FeatureProduct from "./components/FeatureProduct";
import LeatestProduct from "./components/LeatestProduct";
import Shopex from "./components/Shopex";
import UniqueFeature from "./components/UniqueFeature";
import TrendingProdcut from "./components/TrendingProdcut";
import Brand from "./components/Brand";
import Discount from "./components/Discount";
import TopCategories from "./components/TopCategories";
import LetastUpdate from "./components/LetastUpdate";
import Blog from "./components/Blog";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return (
    <>
    <Banner />
    <FeatureProduct />
    <LeatestProduct />
    <Shopex />
    <UniqueFeature />
    <TrendingProdcut />
    <Discount />
    <TopCategories />
    <LetastUpdate />
    <Brand />
    <Blog />
    </>
  );
}
