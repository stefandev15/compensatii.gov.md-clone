export default function Program() {
  return (
    <section id="program" className="bg-accent/5 py-20">
      <div className="container flex flex-col gap-10 xl:flex-row">
        <div>
          <h1 className="my-8 text-5xl font-bold">
            Despre Programul “Ajutor la contor”
          </h1>
          <div className="font-medium">
            Programul de compensații este finanțat din Fondul de reducere a
            vulnerabilității energetice, instituit prin Legea nr. 241 din
            28-07-2022.
            <br />
            <br />
            Crearea Fondului de reducere a vulnerabilității energetice permite
            acordarea în factură a compensațiilor lunare pentru consumul de
            energie.
            <br />
            <br />
            Pentru obținerea compensațiilor lunare, consumatorii casnici de
            energie se vor înregistra în Registrul vulnerabilității energetice
            pe compensatii.gov.md. Sistemul electronic este gestionat de
            Ministerul Muncii și Protecției Sociale și va permite acumularea
            datelor necesare pentru atribuirea categoriei de vulnerabilitate
            energetică:
            <ul className="mb-3 list-disc pl-10 marker:text-accent">
              <li>consumatori cu vulnerabilitate energetică foarte ridicată</li>
              <li>consumatori cu vulnerabilitate energetică ridicată</li>
              <li>consumatori cu vulnerabilitate energetică medie</li>
              <li>consumatori cu vulnerabilitate energetică scăzută</li>
              <li>consumatori non-vulnerabili</li>
            </ul>
            Clasificarea categoriilor de consumatori vulnerabili se bazează pe o
            serie de parametri aprobați de Guvern, și anume: venitul, numărul de
            membri ai familiei, ponderea cheltuielilor pentru energie din
            consumul gospodăriei, tipul sistemului de încălzire utilizate ș.a.
          </div>
        </div>
        <div className="grid place-items-center">
          <iframe
            width="720"
            src="https://www.youtube.com/embed/oYdodZ4mvSw"
            title="Programul „Ajutor la contor” (integral)"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="aspect-video rounded-2xl"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
