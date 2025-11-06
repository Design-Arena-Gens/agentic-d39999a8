import QuoteCard from "../components/QuoteCard";
import { quotes } from "../data/quotes";

export default function HomePage() {
  return (
    <main>
      <h1 className="page-title">Fjalë nga Ibn Abd al-Barr</h1>
      <p className="page-intro">
        Përzgjedhje thëniesh të Imam Abu Umar Ibn Abd al-Barr (978–1071), dijetar
        andaluzian i medh’hab-it Maliki, të shoqëruara me burimet origjinale,
        përkthim në shqip dhe përmbledhje në anglisht. Qasuni tek referencat për
        të parë tekstin e plotë.
      </p>
      <section className="quotes-grid">
        {quotes.map((quote) => (
          <QuoteCard key={quote.id} quote={quote} />
        ))}
      </section>
    </main>
  );
}
