import { Accordion } from "@/components";
import Link from "next/link";

export default function Questions() {
  return (
    <section id="questions" className="py-24">
      <div className="container">
        <h1 className="pb-10 text-5xl font-bold">Răspunsuri la întrebări</h1>
        <div className="my-5">
          <Accordion
            className="rounded-t-2xl"
            title="Cum, în această iarnă, Guvernul va susține cetățenii să plătească facturile pentru energie?"
          >
            Guvernul va oferi compensații în factură pentru consumul de energie.
            Anul acesta compensațiile vor fi oferite în baza categoriilor de
            vulnerabilitate energetică în care este încadrată familia pe baza
            cererii depusă de către aceasta. Programul guvernamental „Ajutor la
            contor” este implementat de către Ministerul Muncii și Protecției
            Sociale, cu sprijinul Uniunii Europene și Programului Națiunilor
            Unite pentru Dezvoltare, prin intermediul Programului Abordarea
            impactului crizei energetice în Republica Moldova.
          </Accordion>
          <Accordion title="Cine va beneficia de compensațiile oferite de Guvern?">
            De compensații pentru energie vor beneficia majoritatea cetățenilor.
            <br />
            Mărimea compensației va varia pentru fiecare gospodărie și va fi
            stabilită în funcție de categoria de vulnerabilitate energetică
            atribuită. Consumatorii casnici vor fi grupați în 5 categorii de
            vulnerabilitate energetică, de la foarte ridicată până la non -
            vulnerabil.
          </Accordion>
          <Accordion title="Cum se pot consumatorii înregistra pentru compensații?">
            Consumatorii se vor înregistra pe pagina web{" "}
            <Link
              href="compensatii.gov.md"
              target="_blank"
              className="text-accent underline"
            >
              compensatii.gov.md
            </Link>
            , unde vor completa o cerere. Persoanele care nu dispun de
            echipament tehnic și acces la internet sau nu au abilitățile
            necesare pentru a completa cererea pe{" "}
            <Link
              href="compensatii.gov.md"
              target="_blank"
              className="text-accent underline"
            >
              compensatii.gov.md
            </Link>{" "}
            vor fi ajutate la înregistrare de către registratori. <br />
            Registratorii vor completa cererea din spusele persoanei care
            solicită compensația și vor introduce datele în sistem.
            <br />
            Registratori sunt asistenții sociali comunitari, bibliotecarii,
            lucrătorii direcțiilor cultură și alte persoane împuternicite din
            localitate.
          </Accordion>
          <Accordion title="Cum vor fi achitate compensațiile? ">
            Compensațiile vor fi transferate direct în contul furnizorilorși vor
            fi reflectate în facturile consumatorilor
          </Accordion>
          <Accordion
            className="rounded-b-2xl"
            title="Pentru ce perioadă va fi acordată compensația la energie? "
          >
            Compensațiile vor fi acordate pentru lunile noiembrie - martie.
          </Accordion>
        </div>
        <div className="grid place-items-center">
          <button className="rounded-lg border bg-accent py-2.5 px-4 text-lg text-white transition-colors">
            Vezi mai multe
          </button>
        </div>
      </div>
    </section>
  );
}
