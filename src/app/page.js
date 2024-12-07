import HomepageImage from "@/components/HomepageImage";
import About from "../components/About";
import { Button } from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
  // return <h1>Hello, Next.js!</h1>
  return (
    <div style={{ height: '200vh' }} className="overflow-auto">
      <div>
        <HomepageImage />

        <About />
        <p>This is the root-level page content.</p>
      </div>
      <main className="pt-20">

      </main>
    </div>
  );
}
