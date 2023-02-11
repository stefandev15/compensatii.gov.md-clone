import Image from "next/image";
import Link from "next/link";
import { FaGlobe, FaSignInAlt } from "react-icons/fa";

import logogov from "../public/assets/images/logo-gov.png";
import logo3 from "../public/assets/images/logo3.svg";

export default function Header() {
  return (
    <header>
      <div id="header" className="bg-accent py-1 px-3 leading-6 text-white">
        <div className="container flex justify-between">
          <Link href={"https://gov.md/"} className="flex items-center gap-2">
            <Image src={logogov} alt="logo-gov" height={24} />
            <span>Guvernul Republicii Moldova</span>
          </Link>
          <div className="flex gap-5">
            <div className="flex items-center gap-2">
              <FaGlobe />
              <span>Română</span>
            </div>
            <div className="flex items-center gap-2">
              <FaSignInAlt />
              <span>Autentificare</span>
            </div>
          </div>
        </div>
      </div>
      <nav className="container flex items-center justify-between">
        <Image src={logo3} alt="logo3" height={48} />
        <ul className="flex gap-2">
          {[
            ["Despre Program", "#program"],
            ["Întrebări frecvente", "/faq"],
            ["Depunere cerere", "/auth/register"],
            ["Verifică starea cererii", "/compensation-request-status"],
          ].map(([text, url], key) => (
            <li key={key}>
              <Link
                className="block px-3 py-5 text-[#234272] hover:[text-shadow:0_0_.01px_#234272]"
                href={url}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
