import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <h2 className="text-p">Data Structures</h2>
      <Link href="/documentation">
        <a className="link-btn">Documentation</a>
      </Link>
    </nav>
  );
}
