export const dynamic = "force-static";
import React from "react";
import AboutSection from "./sections/aboutsection";

export default async function About({
  params,
}: {
  params: Promise<{ lang: string }>
}) {

  return <AboutSection />;
}
