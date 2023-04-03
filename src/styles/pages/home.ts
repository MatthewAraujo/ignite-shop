import { styled } from "..";

export const HomeContainer = styled("main", {
  display: "flex",
  gap: "3rem",
  width: "100%",
  maxWidth: "calc(100vw - ((100vw - 1180px) /2))",
  marginLeft: "auto", // need to understand why is not applying
  minHeight: 656,
});

export const Product = styled("div", {});
