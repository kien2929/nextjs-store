import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl font-thin text-center">
        Xin chào, đây là trang chủ của tôi
      </h1>
      <div className="w-[700px] h-[700px] bg-red-300">
        <Image
          src='/images/cat.webp'
          alt="Cat"
          width={200}
          height={200}
        />
      </div>
    </main>
  );
}
