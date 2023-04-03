import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";

export default function home() {
  return (
    <div>
      <HomeContainer>
        <Product>
          <Image src="/1.png" alt="" width={520} height={480} quality={80} />

          <footer>
            <strong> Camiseta X</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>
        <Product>
          <Image src="/1.png" alt="" width={520} height={480} quality={80} />
          <footer>
            <strong> Camiseta X</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>
      </HomeContainer>
    </div>
  );
}
