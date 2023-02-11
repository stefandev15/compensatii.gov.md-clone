import {
  Compensations,
  Contact,
  Options,
  Program,
  Questions,
} from "@/components/Home";

export default function Home() {
  return (
    <main>
      <Compensations />
      <Program />
      <Options />
      <Questions />
      <Contact />
    </main>
  );
}
