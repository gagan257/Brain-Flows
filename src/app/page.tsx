import Image from "next/image";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col h-screen items-center justify-center gap-5">
      <div className="flex items-center gap-4">
        <Image src={logo} alt="Brain Flows Logo" width={100} height={100} />
        <span className="font-extrabold tracking-tight text-4xl lg:text-5xl">
          Brain Flows
        </span>
      </div>
      <p className="pl-10 max-w-prose font-bold">
        Intelligent note-taking Web App with AI Integration
      </p>
      <Button size="lg" asChild>
        <Link href="/notes">Go to Notes</Link>
      </Button>
    </main>
  );
}
