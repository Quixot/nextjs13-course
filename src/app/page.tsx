"use client";

import Image from 'next/image'
import MyHeader from '@/components/Header';
import logotype from '../../public/next.svg';

export default function Home() {
  const name = "Alex"
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MyHeader name={name} age={47} />
      <h1>Hellow, This is my Main Page!</h1>
      <Image src='/next.svg' width={400} height={200} alt='Logo' />
      <div className="w-[500px]">
        <Image quality={75} src={logotype} alt="Logo2" />
        {/* https://nextjs.org/docs/app/api-reference/components/image */}
      </div>
      
    </main>
  )
}
