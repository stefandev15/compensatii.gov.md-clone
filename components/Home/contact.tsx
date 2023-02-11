import Image from "next/image";
import option3 from "@/public/assets/images/option3.svg";
import option4 from "@/public/assets/images/option4.svg";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container flex flex-col gap-5 py-24 lg:flex-row">
        <div id="contact1" className="flex flex-1 rounded-2xl bg-accent/5">
          <div className="flex-1 p-10 pr-0">
            <h1 className="my-2 text-2xl font-bold">
              Înregistrați-va cu ajutorul unui asistent social sau bibliotecar
            </h1>
            <p className="text-lg font-medium">
              Peste 1.000 de adrese pentru a depune cererea
            </p>
            <div className="my-5 flex flex-col">
              <button className="rounded-lg border bg-accent py-2.5 px-4 text-white transition-colors">
                Vizualizează lista de adrese
              </button>
            </div>
          </div>
          <div className="flex-1 flex-grow">
            <Image src={option3} alt="option3" />
          </div>
        </div>
        <div
          id="contact-2"
          className="flex flex-1 rounded-2xl bg-accent text-white"
        >
          <div className="flex-2 flex flex-grow flex-col justify-between p-10 pr-0">
            <h1 className="my-2 text-2xl font-bold">
              Contactați-ne dacă aveți întrebări
            </h1>
            <div>
              <Link href="tel:080005000" className="flex items-center gap-3">
                <Image
                  src={"/assets/images/phone-option.svg"}
                  alt="phone-option.svg"
                  height={32}
                  width={32}
                />
                <span className="text-lg">0 8000 5000</span>
              </Link>
              <p className="mt-2 mb-3">
                Luni - Vineri: 10.00 - 20.00 <br /> Sâmbătă: 10.00 - 16.00
              </p>
              <Link
                href="mailto:support@compensatii.gov.md"
                className="flex items-center gap-3"
              >
                <Image
                  src={"/assets/images/mail-option.svg"}
                  alt="mail-option.svg"
                  height={32}
                  width={32}
                />
                <span className="text-lg">support@compensatii.gov.md</span>
              </Link>
            </div>
          </div>
          <div>
            <Image src={option4} alt="option4" />
          </div>
        </div>
      </div>
    </section>
  );
}
