import CoreValue from "@/components/CoreValue";
import Hero from "@/components/Hero";
import WordsOfManager from "@/components/WordsOfManager";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <WordsOfManager />
      <CoreValue />
    </div>
  );
}
