export const dynamic = "force-static";
import React from "react";
import ProductSection from "./sections";

export default async function About({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  return <ProductSection />;
}
