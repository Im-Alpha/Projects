import Image from "next/image";
import Homes from "./Homes/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Homes />
    </main>
  );
}
