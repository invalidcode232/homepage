import Link from "next/link";
import { MailIcon } from "lucide-react";
import { SiGithub, SiLinkerd } from "@icons-pack/react-simple-icons";

const contacts = [
  {
    icon: MailIcon,
    href: "mailto:james.sungarda@gmail.com",
    label: "mail@invalidcode.me",
  },
  {
    icon: SiGithub,
    href: "https://github.com/invalidcode232",
    label: "invalidcode232",
  },
  {
    icon: SiLinkerd,
    href: "https://www.linkedin.com/in/james-sungarda/",
    label: "James Sungarda",
  },
];

export default function ContactsList() {
  return (
    <ul className="mt-5">
      {contacts.map((contact) => (
        <li key={contact.label} className="flex">
          <contact.icon className="w-8 h-6 text-slate-400" />
          <Link
            href={contact.href}
            className="mb-2 ml-2 hover:underline text-blue-300 hover:text-blue-400"
          >
            {contact.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
