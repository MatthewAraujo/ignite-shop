import { globalStyles } from "@/styles/globa";
import { Container, Header } from "@/styles/pages/app";
import type { AppProps } from "next/app";
import Image from "next/image";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src="logo.svg" alt="" width={130} height={52} quality={1} />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
