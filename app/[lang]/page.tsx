import Image from "next/image";
import Home from "./home";
import { getDictionary } from "./dictionaries";


export default async function Page({
  params: { lang },
}: {
  params: { lang: string };
}) {
  console.log(lang);
  const dictionary = await getDictionary(lang);
  return (
    <>
      <Home heroTexts={dictionary.heroSection} />
    </>
  );
}
