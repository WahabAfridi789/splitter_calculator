import PanelLayout from '@/components/PanelLayout';
import TipForm from '@/components/TipForm';
import { cn } from "@/lib/utils"; 
import "./globals.css"
import Image from 'next/image';

import { Space_Mono } from "next/font/google";

const font = Space_Mono({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main className= {cn(" flex min-h-screen flex-col items-center justify-center p-5 lg:p-24",font.Space_Mono)}>
    
      <Image 
        src="/logo.png"
        alt="logo"
        width={100}
        height={100}
        
      />

      <PanelLayout>
        <TipForm />
      </PanelLayout>
    </main>
  );
}
