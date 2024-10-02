import { Lato } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return (
    <>
      <h1 className={`font-bold`}>hello world</h1>
      <h3 className={`${lato.className} font-semibold`}>This is Our Contury</h3>
    </>
  );
}
