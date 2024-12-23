export const dynamic = "force-static";
import React from "react";
import AboutSection from "./sections/aboutsection";
import { getDictionary } from "../dictionaries";

export default async function About({ params: { lang } }: any) {
  const dictionary = await getDictionary(lang);
  return <AboutSection aboutpageTexts={dictionary.aboutpage} />;
}
