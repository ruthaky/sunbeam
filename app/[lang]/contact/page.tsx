export const dynamic = "force-static";
import React from "react";
import ContactSection from "./sections/page";
import { getDictionary } from "../dictionaries";

export default async function About({ params: { lang } }: any) {
  const dictionary = await getDictionary(lang);
  return <ContactSection contactTexts={dictionary.contactPage} />;
}
