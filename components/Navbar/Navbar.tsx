import { LinkButton } from "../common/Button";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5">
      <h2 className="text-purple text-2xl font-bold">Data Structures</h2>
      <LinkButton href="/documentation" text="Documentation" />
    </nav>
  );
}
