export const dynamic = "force-static";
import React from "react";
import AboutSection from "./sections";
import { getDictionary } from "../dictionaries";

export default async function About({ params: { lang } }: any) {
  const dictionary = await getDictionary(lang);
  return <AboutSection productpageTexts={dictionary.productpage} />;
}
