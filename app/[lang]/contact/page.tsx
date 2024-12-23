export const dynamic = "force-static";
import React from "react";
import ContactSection from "./sections";
import { getDictionary } from "../dictionaries";

export default async function Contact({ params: { lang } }: any) {
  const dictionary = await getDictionary(lang);
  return <ContactSection contactText={dictionary.contactPage} />;
}
