"use client";
import Link from "next/link";
import ActionButton from "@/components/modules/hero/action-button";
import { DownloadIcon, MailIcon } from "lucide-react";
import ContactsList from "@/components/modules/hero/contacts-list";

export default function Home() {
  return (
    <>
      <section className="mb-2" aria-label="greeting">
        <h1 className="text-3xl font-semibold inline-block mr-3 text-white">
          Hello!
        </h1>
        <h2 className="text-md mb-2 text-gray-400 inline-block">
          Halo / 你好 / こんにちは
        </h2>
      </section>

      <section
        className="mb-4 leading-6 lg:max-w-[75%]"
        aria-label="introduction"
      >
        <p className="mb-2">
          I am currently a first year undergraduate student studying Computer
          Science at
          <a
            href={"https://hku.hk"}
            className="text-blue-400 no-underline hover:underline ml-1"
            target="_blank"
          >
            The University of Hong Kong
          </a>
          .
        </p>

        <p className="mb-4">
          I am interested in all things software development, including machine
          learning, artificial intelligence, and web development.
        </p>

        <p>
          Want to know more about me? Check out my{" "}
          <Link
            href="/terminal"
            className="text-blue-400 hover:underline no-underline"
          >
            interactive terminal
          </Link>
          .
        </p>
      </section>

      <section aria-label="action buttons" className="flex items-center">
        <ActionButton href="/#">
          <DownloadIcon className="mr-2 inline-block" />
          Download CV
        </ActionButton>
        <span className="mx-3 text-gray-400">or</span>
        <ActionButton href="/#">
          <MailIcon className="mr-2 inline-block" />
          Email Me
        </ActionButton>
      </section>

      <section aria-label="contacts">
        <ContactsList />
      </section>
    </>
  );
}
