import Image from "next/image";

export default function Home() {
  return (
    <main className="coming-soon-page">
      <Image
        src="/lami-logo.png"
        alt="Lami Studios logo"
        width={1000}
        height={1000}
        priority
        className="logo logo-top-left"
      />
      <h1 className="coming-soon-title">
        <span className="coming-soon-typed">Coming Soon...</span>
      </h1>
    </main>
  );
}
