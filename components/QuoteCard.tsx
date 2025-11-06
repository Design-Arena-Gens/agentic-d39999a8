import Link from "next/link";
import type { Quote } from "../data/quotes";

type QuoteCardProps = {
  quote: Quote;
};

export default function QuoteCard({ quote }: QuoteCardProps) {
  return (
    <article className="quote-card">
      <p className="quote arabic" dir="rtl" lang="ar">
        {quote.arabic}
      </p>
      <p className="quote translation">{quote.albanian}</p>
      <p className="quote translation english">{quote.english}</p>
      <footer className="quote-source">
        <span className="source-work">{quote.source.work}</span>
        {quote.source.volume && <span> · Vëll. {quote.source.volume}</span>}
        {quote.source.page && <span> · f. {quote.source.page}</span>}
        <span>
          {" "}
          ·{" "}
          <Link href={quote.source.referenceUrl} target="_blank">
            Referencë
          </Link>
        </span>
      </footer>
    </article>
  );
}
