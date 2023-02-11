import Image from "next/image";
import option1 from "@/public/assets/images/option1.svg";
import option2 from "@/public/assets/images/option2.svg";

export default function Options() {
  return (
    <section id="apply-options" className="container py-24">
      <h1 className="mb-16 text-5xl font-bold">
        Două modalități de depunere a cererii
      </h1>
      <div className="flex gap-5">
        <div
          id="option1"
          className="flex-1 rounded-2xl bg-accent p-10 text-white"
        >
          <h2 className="text-3xl font-bold">Înregistrați-vă</h2>
          <ul className="my-5 list-disc pl-5 text-lg leading-6">
            <li>Completați cererea online prin număr de telefon</li>
            <li>Completați personal formularul de cerere online</li>
            <li>
              Așteptați un răspuns la cererea dumneavoastră în cabinetul
              personal
            </li>
          </ul>
          <div className="mt-10 flex flex-col">
            <button className="rounded-md border bg-white py-2.5 text-accent transition-colors">
              Înregistrează-te
            </button>
          </div>
          <Image src={option1} alt="option1" />
        </div>
        <div id="option2" className="flex-1 rounded-2xl bg-accent/5 p-10">
          <h2 className="text-3xl font-bold">
            Înregistrați-vă prin intermediul unui asistent social sau
            bibliotecar
          </h2>
          <ul className="my-5 list-disc pl-5 text-lg font-medium leading-5 marker:text-accent">
            <li>Găsiți cea mai apropiată adresă</li>
            <li>
              Asistent social sau bibliotecarul vă va ajuta să completați
              cererea.
            </li>
          </ul>
          <Image src={option2} alt="option2" className="mt-auto" />
        </div>
        <div></div>
      </div>
    </section>
  );
}
