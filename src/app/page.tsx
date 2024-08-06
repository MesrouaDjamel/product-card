import ProductCard from "@/components/ProductCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-red-700">
      <ProductCard />
    </main>
  );
}
