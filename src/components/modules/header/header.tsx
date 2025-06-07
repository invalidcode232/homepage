import Link from "next/link";
import NavLink from "./nav-link";

const navLinks = [
  { href: "/terminal", text: "Terminal" },
  { href: "/projects", text: "Projects" },
];

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center mb-10 text-white">
      <span className="text-3xl inline-block align-middle">
        <Link href="/">James Sungarda</Link>
      </span>
      <nav>
        {navLinks.map((link) => (
          <NavLink key={link.href} href={link.href} text={link.text} />
        ))}
      </nav>
    </header>
  );
}
