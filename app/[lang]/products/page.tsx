import React from "react";
import AboutSection from "./sections/page";
import { getDictionary } from "../dictionaries";

export default async function About({ params: { lang } }: any) {
  const dictionary = await getDictionary(lang);
  return <AboutSection productpageTexts={dictionary.productpage} />;
}
