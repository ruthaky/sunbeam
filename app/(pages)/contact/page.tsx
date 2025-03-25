export const dynamic = "force-static";
import React from "react";
import ContactSection from "./sections";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {

  return <ContactSection />;
}
