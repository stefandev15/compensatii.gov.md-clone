import Link from "next/link";
import { FaFacebookSquare, FaYoutubeSquare } from "react-icons/fa";

import Image from "next/image";
import logo1 from "@/public/assets/images/logo1.svg";
import phonefooter from "@/public/assets/images/phone-footer.svg";
import ue from "@/public/assets/images/ue.svg";
import slovak from "@/public/assets/images/slovak.svg";
import united from "@/public/assets/images/united.svg";

export default function Footer() {
  return (
    <footer className="bg-accent/5 text-neutral-500">
      <div className="container flex p-5">
        <div id="left" className="flex flex-1 flex-col gap-2">
          <div className="flex">
            <Link href="https://compensatii.gov.md">
              <Image src={logo1} alt="logo1" height={64} />
            </Link>
          </div>
          <div className="my-4 flex gap-3">
            <Link href="/terms-and-conditions">Termeni și condiții</Link>
            <Link href="/faq">Întrebări frecvente</Link>
          </div>
          <p className="text-xs">
            Acest site a fost produs cu suportul financiar al Uniunii Europene,
            în cadrul proiectului „Abordarea impactului crizei energetice în
            Republica Moldova”, implementat de Programul Națiunilor Unite pentru
            Dezvoltare. Conținutul site-ului aparține autorilor și nu reflectă
            în mod neapărat viziunea Uniunii Europene și a PNUD.
          </p>
        </div>
        <div id="right" className="flex flex-1 flex-col gap-2 text-right">
          <h3>Centrul de asistență</h3>
          <Link
            href="tel:080005000"
            className="flex justify-end gap-3 text-accent"
          >
            <Image src={phonefooter} alt="phone-footer" />
            <span>0 8000 5000</span>
          </Link>
          <div className="my-2 flex justify-end gap-4 text-3xl">
            <Link href="https://www.facebook.com/social.gov.md">
              <FaFacebookSquare />
            </Link>
            <Link href="https://www.youtube.com/channel/UCDiNnR2Rpv2oowsp-88eIAg">
              <FaYoutubeSquare />
            </Link>
          </div>
          <div className="flex max-h-[90px] justify-end gap-2">
            <Image src={ue} alt="ue" />
            <Image src={slovak} alt="slovak" />
            <Image src={united} alt="united" />
          </div>
        </div>
      </div>
      <p className="text-center">Copyright. Toate drepturile sunt rezervate.</p>
    </footer>
  );
}
