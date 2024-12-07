import { Button } from "@nextui-org/react";
import Navbar from '../components/Navbar';

export default function Home() {
  // return <h1>Hello, Next.js!</h1>
  return (
    <div style={{ height: '200vh' }} className="overflow-auto">
      <main className="z-10">
      <div className="flex flex-col w-full h-[500px] bg-[#e5e5e5] items-center justify-center relative box-border">
        <span className="absolute bottom-[35%] left-1/2 transform -translate-x-1/2 font-bold font-[arial] text-3xl text-center">
          Menghubungkan kesehatan Indonesia melalui jaringan klinik terstandarisasi
        </span>
        <a href="/List" className="absolute bottom-[8%] left-1/2 transform -translate-x-1/2 px-14 py-3 bg-[#03cafc] rounded-lg text-[#f5f5f5]">
          Daftar Sekarang
        </a>
      </div>

      <div className="flex w-full h-[500px] relative box-border">
        
      </div>
      </main>
    </div>
  );
}
