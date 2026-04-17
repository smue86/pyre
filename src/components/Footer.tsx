"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative py-16 bg-[#0a0a0a] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/pyre-logo.svg"
                alt="PYRE"
                width={120}
                height={33}
                className="h-7 w-auto"
              />
            </Link>
            <p className="text-sm text-[#525252] leading-relaxed">
              The future of fire.
              <br />
              Engineered from the material up.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] text-[#a3a3a3] mb-6">
              PRODUCT
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Design", href: "#design" },
                { label: "AeroCore", href: "#foundation" },
                { label: "Platform", href: "#platform" },
                { label: "PyreMind", href: "#pyremind" },
                { label: "Configure", href: "/configure" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#525252] hover:text-[#c9a962] transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] text-[#a3a3a3] mb-6">
              COMPANY
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Our Story", href: "#observation" },
                { label: "Momentum Labs", href: "#observation" },
                { label: "Swag", href: "#swag" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#525252] hover:text-[#c9a962] transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] text-[#a3a3a3] mb-6">
              CONNECT
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@pyrefire.com"
                  className="text-sm text-[#525252] hover:text-[#c9a962] transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <Link
                  href="#cta"
                  className="text-sm text-[#525252] hover:text-[#c9a962] transition-colors duration-300"
                >
                  Get Updates
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#1a1a1a] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#333] tracking-wider">
            &copy; {new Date().getFullYear()} PYRE. A Momentum Labs project.
            All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-xs text-[#333] hover:text-[#c9a962] transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-xs text-[#333] hover:text-[#c9a962] transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
