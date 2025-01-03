import Container from "./Container";
import FeatureCarousel from "./FeatureCarousel";
import getAlldata from "@/lib/getAlldata";

const FeatureProduct = async () => {
  const allProduct = await getAlldata();
  return (
    <section className="lg:mt-[129px] mt-[30px] lg:mb-[71px] mb-[30px]">
      <Container>
        <div className="mb-[48px]">
          <h2 className="header">Featured Products</h2>
        </div>
        <FeatureCarousel allProduct={allProduct} />
      </Container>
    </section>
  );
};

export default FeatureProduct;
