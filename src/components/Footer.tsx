"use client";

import Link from "next/link";
import { Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-16 bg-[#0a0a0a] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Logo and tagline */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-light tracking-[0.3em] text-gradient">
                PYRE
              </span>
            </Link>
            <p className="text-sm text-[#525252] leading-relaxed">
              The future of fire.
              <br />
              Engineered for perfection.
            </p>
          </div>

          {/* Product */}
          <div>
            <p className="text-xs tracking-[0.2em] text-[#737373] mb-6">
              PRODUCT
            </p>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#technology"
                  className="text-sm text-[#525252] hover:text-[#c9a962] transition-colors"
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  href="#platform"
                  className="text-sm text-[#525252] hover:text-[#c9a962] transition-colors"
                >
                  Platform
                </Link>
              </li>
              <li>
                <Link
                  href="#intelligence"
                  className="text-sm text-[#525252] hover:text-[#c9a962] transition-colors"
                >
                  Intelligence
                </Link>
              </li>
              <li>
                <Link
                  href="/configure"
                  className="text-sm text-[#525252] hover:text-[#c9a962] transition-colors"
                >
                  Configure
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs tracking-[0.2em] text-[#737373] mb-6">
              COMPANY
            </p>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#525252] hover:text-[#c9a962] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#525252] hover:text-[#c9a962] transition-colors"
                >
                  Press
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#525252] hover:text-[#c9a962] transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#525252] hover:text-[#c9a962] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs tracking-[0.2em] text-[#737373] mb-6">LEGAL</p>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#525252] hover:text-[#c9a962] transition-colors"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#525252] hover:text-[#c9a962] transition-colors"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#525252] hover:text-[#c9a962] transition-colors"
                >
                  Warranty
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#1a1a1a] flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-[#404040]">
            © 2026 PYRE. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-[#404040] hover:text-[#c9a962] transition-colors"
            >
              <Instagram size={18} strokeWidth={1.5} />
            </a>
            <a
              href="#"
              className="text-[#404040] hover:text-[#c9a962] transition-colors"
            >
              <Twitter size={18} strokeWidth={1.5} />
            </a>
            <a
              href="#"
              className="text-[#404040] hover:text-[#c9a962] transition-colors"
            >
              <Youtube size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
