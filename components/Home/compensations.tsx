import Image from "next/image";
import claimhome from "@/public/assets/images/claim-home.svg";

export default function Compensations() {
  return (
    <section id="compensations" className="py-20">
      <div className="container flex flex-col lg:flex-row">
        <div className="flex-1 lg:max-w-lg">
          <h1 className="my-4 text-6xl text-[4rem] font-bold">
            Solicitați compensații la energie
          </h1>
          <p className="font-medium">
            În perioada noiembrie 2022 – martie 2023, Guvernul Republicii
            Moldova va compensa parțial creșterea tarifelor la resursele
            energetice prin Programul “Ajutor la contor”. Pentru a primi
            compensații, înregistrați familia dumneavoastră electronic sau
            apelați la bibliotecarul sau asistentul social din localitate.
          </p>
          <div className="my-2 flex flex-col gap-5 lg:flex-row">
            <button className="w-full rounded-md bg-accent py-2 text-white transition-colors hover:bg-[#0b5ed7]">
              Depune cerere
            </button>
            <button className="w-full rounded-md border border-accent py-2 text-accent transition-colors hover:bg-accent hover:text-white">
              Verifică starea cererii
            </button>
          </div>
        </div>
        <div className="flex-2 flex-grow">
          <div className="grid h-full w-full place-items-center">
            <Image src={claimhome} alt={"claim-home"} priority />
          </div>
        </div>
      </div>
    </section>
  );
}
