import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="py-12">
        <div className="container">
          <h1 className="mx-auto items-center bg-linear-to-b from-neutral-800 via-neutral-700 to-neutral-700 bg-clip-text py-6 text-center text-4xl font-semibold tracking-tight text-transparent [text-shadow:0px_1px_2px_rgba(0,0,0,0.12)] md:text-4xl lg:max-w-4xl lg:text-7xl">
            Build Faster with Tailwind-Powered UI Blocks
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-center max-w-4xl mx-auto">
            TailMesh is a collection of clean, responsive, and reusable UI components built with Tailwind CSS. Open source, developer-friendly, and ready to plug into your next project.
          </p>
          <div className="flex gap-3 md:gap-4 justify-center mt-5 md:mt-10">
            <Link href={"/block"} className="btn-dark">
              Browse All Blocks
            </Link>
            <Link href={"/"} className="btn-light">
              Browse All Blocks
            </Link>
          </div>
        </div>
      </div>
    
    </>
  );
}
