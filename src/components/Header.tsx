import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <Link className="brand brandLogo" href="/" aria-label="Higher Enterprises">
        <Image
          src="/assets/higher-enterprises-logo.png"
          alt="Higher Enterprises"
          width={430}
          height={218}
          priority
        />
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/">Rising</Link>
        <Link href="/ventures">Ventures</Link>
        <Link href="/studios">Studios</Link>
        {/* <Link href="/technologies">Technologies</Link>
         <Link href="/industries">Industries</Link>
        <Link href="/consulting">Consulting</Link> */}
        {/* <Link href="/academy">Academy</Link> */}
        <Link href="/perspective">Perspective</Link>
      </nav>
      <Link className="headerCta" href="/contact">Take Me Higher<span aria-hidden="true"></span></Link>
    </header>
  );
}
