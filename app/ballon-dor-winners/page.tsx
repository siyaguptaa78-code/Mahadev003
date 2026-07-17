import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, ChevronLeft, ChevronDown } from 'lucide-react';
import type { Metadata } from 'next';
import { SITE_CONFIG, generatePageMetadata } from '../../lib/siteConfig';

export const metadata: Metadata = generatePageMetadata(
  "Ballon d'Or: Winners, Records & the 2026 Race",
  "Who won the Ballon d'Or 2025, who has the most wins, and everything about the 2026 ceremony in London on 26 October. Recent winners list and records in one place.",
  "/ballon-dor-winners/"
);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Who won the Ballon d'Or 2025?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Men's Ballon d'Or 2025 was won by PSG and France forward Ousmane Dembele, beating Barcelona's Lamine Yamal and Paris teammate Vitinha, at the award ceremony in Paris on 22 September 2025."
      }
    },
    {
      "@type": "Question",
      "name": "When is the Ballon d'Or 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Ballon d'Or 2026 takes place on 26 October 2026, in London, England, marking the 70th anniversary of the award, and the first time it has been presented outside Paris."
      }
    },
    {
      "@type": "Question",
      "name": "Who has won the most Ballons d'Or?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lionel Messi has the record number of Ballons d'Or, with eight in total, won across fifteen years."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Super Ballon d'Or?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A special award presented once, in 1989, by France Football. The Super Ballon d'Or was given to Real Madrid and Spain legend Alfredo di Stéfano as the best-ever winner in the history of the award."
      }
    },
    {
      "@type": "Question",
      "name": "Why wasn't there a Ballon d'Or in 2020?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Ballon d'Or 2020 was cancelled due to pandemic restrictions — the only time since 1956 that the prestigious prize has not been awarded."
      }
    }
  ]
};

export default function BallonDorWinnersPage() {
  return (
    <div className="min-h-screen bg-black py-16">
      {/* Inject FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-1 text-zinc-400 hover:text-amber-500 text-sm font-semibold transition-colors group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to Insights
          </Link>
        </div>

        {/* Article header */}
        <div className="space-y-4 mb-10 pb-8 border-b border-zinc-900">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
              Football
            </span>
            <span className="text-2xl">⚽</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-white leading-tight">
            Ballon d'Or: Winners, Records & the 2026 Race
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-zinc-500 text-xs pt-2">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>July 14, 2026</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>6 min read</span>
            </div>
            <div className="text-zinc-650">By Mahadev Book Analyst</div>
          </div>
        </div>

        {/* Table of Contents / Jump to */}
        <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 mb-10">
          <span className="text-zinc-400 text-xs font-bold uppercase tracking-wider block mb-3">
            Jump to:
          </span>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-amber-500 font-semibold">
            <a href="#2025-winner" className="hover:text-amber-400 transition-colors">2025 Winner</a>
            <span className="text-zinc-700">|</span>
            <a href="#recent-winners" className="hover:text-amber-400 transition-colors">Recent Winners</a>
            <span className="text-zinc-700">|</span>
            <a href="#most-ballons" className="hover:text-amber-400 transition-colors">Most Ballons</a>
            <span className="text-zinc-700">|</span>
            <a href="#the-2026-race" className="hover:text-amber-400 transition-colors">The 2026 Race</a>
            <span className="text-zinc-700">|</span>
            <a href="#faqs" className="hover:text-amber-400 transition-colors">FAQs</a>
          </div>
        </div>

        {/* Content body */}
        <article className="prose prose-invert max-w-none prose-amber prose-headings:font-serif prose-headings:font-bold prose-headings:text-white prose-p:text-zinc-300 prose-p:leading-relaxed prose-p:font-light prose-p:mb-6 prose-a:text-amber-400 hover:prose-a:text-amber-300 prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-li:text-zinc-300 prose-li:font-light prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4">
          
          <p>
            For almost two decades it had two possible winners. Now the Ballon d'Or has none, making the prestigious but contentious prize difficult to predict. Rodri in 2024, Ousmane Dembele in 2025 and a similarly tight 2026 vote should be watched from London on 26 October — the 70th anniversary of the award, and the first time it has been presented outside Paris.
          </p>

          <h2 id="2025-winner" className="scroll-mt-24">The 2025 Ballon d'Or: Ousmane Dembele's Year</h2>
          <p>
            The Frenchman, on the back of a Champions League-winning campaign with PSG, beat Barcelona's teenage prodigy Lamine Yamal (second) and his Paris teammate Vitinha (third) to claim the Men's Ballon d'Or at the Théâtre du Châtelet on 22 September. The top ten included five Parisian players, including Achraf Hakimi, Gianluigi Donnarumma and Nuno Mendes. It was a remarkable comeback for the 28-year-old, whose early years at Barcelona were wrecked by injuries and who was widely written off before his Paris revival.
          </p>

          <h2 id="recent-winners" className="scroll-mt-24">Ballon d'Or Winners: Last Few Years</h2>
          
          <div className="overflow-x-auto my-6 border border-zinc-800 rounded-xl">
            <table className="min-w-full divide-y divide-zinc-800 text-left text-sm text-zinc-300">
              <thead className="bg-zinc-900/50">
                <tr>
                  <th className="py-3 px-4 font-semibold text-white">Year</th>
                  <th className="py-3 px-4 font-semibold text-white">Winner</th>
                  <th className="py-3 px-4 font-semibold text-white">Club</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900 bg-zinc-950/20">
                <tr>
                  <td className="py-3 px-4 font-medium text-zinc-400">2015</td>
                  <td className="py-3 px-4">Lionel Messi</td>
                  <td className="py-3 px-4">Barcelona</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-zinc-400">2016</td>
                  <td className="py-3 px-4">Cristiano Ronaldo</td>
                  <td className="py-3 px-4">Real Madrid</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-zinc-400">2017</td>
                  <td className="py-3 px-4">Cristiano Ronaldo</td>
                  <td className="py-3 px-4">Real Madrid</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-zinc-400">2018</td>
                  <td className="py-3 px-4">Luka Modric</td>
                  <td className="py-3 px-4">Real Madrid</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-zinc-400">2019</td>
                  <td className="py-3 px-4">Lionel Messi</td>
                  <td className="py-3 px-4">Barcelona</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-zinc-400">2020</td>
                  <td className="py-3 px-4 italic text-zinc-550">Not awarded (pandemic)</td>
                  <td className="py-3 px-4 text-zinc-500">—</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-zinc-400">2021</td>
                  <td className="py-3 px-4">Lionel Messi</td>
                  <td className="py-3 px-4">Barcelona/PSG</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-zinc-400">2022</td>
                  <td className="py-3 px-4">Karim Benzema</td>
                  <td className="py-3 px-4">Real Madrid</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-zinc-400">2023</td>
                  <td className="py-3 px-4">Lionel Messi</td>
                  <td className="py-3 px-4">Inter Miami</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-zinc-400">2024</td>
                  <td className="py-3 px-4">Rodri</td>
                  <td className="py-3 px-4">Manchester City</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-zinc-400">2025</td>
                  <td className="py-3 px-4 font-semibold text-amber-400">Ousmane Dembele</td>
                  <td className="py-3 px-4">PSG</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs text-zinc-500 italic -mt-2 mb-6">
            Three consecutive first-time winners since Messi's final win in 2023 — the most open voting since the 2000s.
          </p>

          <h2 id="most-ballons" className="scroll-mt-24">Who Has Won the Most Ballons d'Or?</h2>
          <p>
            Lionel Messi, and by quite some distance: eight in total, spread across fifteen years from 2009 to 2023. Second belongs to Cristiano Ronaldo, with five between 2008 and 2017, while Michel Platini, Johan Cruyff and Marco van Basten take third with three each. As for the "Super Ballon d'Or" people search for — that was a one-off prize from France Football in 1989, given to the best of all previous winners, Alfredo di Stéfano. It has not been presented since, despite the internet's almost annual insistence that it is now Lionel Messi's turn.
          </p>

          <h2 id="the-2026-race" className="scroll-mt-24">The 2026 Ballon d'Or: London, 26 October</h2>
          <p>
            The 2026 edition will be held in London — a first for the event — on 26 October and, as ever, the race to the podium should be followed with interest. In particular, the vote in the wake of the World Cup in North America (see our guide to <Link href="/fifa-world-cup-winners-list/" className="text-amber-500 hover:underline">FIFA WC winners</Link> for reference) will be fascinating — the tournament is always a deciding factor for the Ballon d'Or in the year it is played. The shortlist is likely to be announced in early September, with this page updated on the candidates, the likely winner, and what happens on the night in London.
          </p>

          <h2 id="faqs" className="scroll-mt-24">Ballon d'Or FAQs</h2>
          
          <div className="space-y-4 my-8 not-prose">
            <details className="group border border-zinc-800 bg-zinc-900/20 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-5 font-semibold text-white cursor-pointer select-none hover:bg-zinc-900/40 transition-colors">
                <span className="text-zinc-200">Who won the Ballon d'Or 2025?</span>
                <span className="transition duration-300 group-open:-rotate-180">
                  <ChevronDown className="w-4 h-4 text-amber-500" />
                </span>
              </summary>
              <div className="p-5 pt-0 text-zinc-400 text-sm font-light leading-relaxed border-t border-zinc-900/50">
                The Men's Ballon d'Or 2025 was won by PSG and France forward Ousmane Dembele, beating Barcelona's Lamine Yamal and Paris teammate Vitinha, at the award ceremony in Paris on 22 September 2025.
              </div>
            </details>

            <details className="group border border-zinc-800 bg-zinc-900/20 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-5 font-semibold text-white cursor-pointer select-none hover:bg-zinc-900/40 transition-colors">
                <span className="text-zinc-200">When is the Ballon d'Or 2026?</span>
                <span className="transition duration-300 group-open:-rotate-180">
                  <ChevronDown className="w-4 h-4 text-amber-500" />
                </span>
              </summary>
              <div className="p-5 pt-0 text-zinc-400 text-sm font-light leading-relaxed border-t border-zinc-900/50">
                The Ballon d'Or 2026 takes place on 26 October 2026, in London, England, marking the 70th anniversary of the award, and the first time it has been presented outside Paris.
              </div>
            </details>

            <details className="group border border-zinc-800 bg-zinc-900/20 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-5 font-semibold text-white cursor-pointer select-none hover:bg-zinc-900/40 transition-colors">
                <span className="text-zinc-200">Who has won the most Ballons d'Or?</span>
                <span className="transition duration-300 group-open:-rotate-180">
                  <ChevronDown className="w-4 h-4 text-amber-500" />
                </span>
              </summary>
              <div className="p-5 pt-0 text-zinc-400 text-sm font-light leading-relaxed border-t border-zinc-900/50">
                Lionel Messi has the record number of Ballons d'Or, with eight in total, won across fifteen years.
              </div>
            </details>

            <details className="group border border-zinc-800 bg-zinc-900/20 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-5 font-semibold text-white cursor-pointer select-none hover:bg-zinc-900/40 transition-colors">
                <span className="text-zinc-200">What is the Super Ballon d'Or?</span>
                <span className="transition duration-300 group-open:-rotate-180">
                  <ChevronDown className="w-4 h-4 text-amber-500" />
                </span>
              </summary>
              <div className="p-5 pt-0 text-zinc-400 text-sm font-light leading-relaxed border-t border-zinc-900/50">
                A special award presented once, in 1989, by France Football. The Super Ballon d'Or was given to Real Madrid and Spain legend Alfredo di Stéfano as the best-ever winner in the history of the award.
              </div>
            </details>

            <details className="group border border-zinc-800 bg-zinc-900/20 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-5 font-semibold text-white cursor-pointer select-none hover:bg-zinc-900/40 transition-colors">
                <span className="text-zinc-200">Why wasn't there a Ballon d'Or in 2020?</span>
                <span className="transition duration-300 group-open:-rotate-180">
                  <ChevronDown className="w-4 h-4 text-amber-500" />
                </span>
              </summary>
              <div className="p-5 pt-0 text-zinc-400 text-sm font-light leading-relaxed border-t border-zinc-900/50">
                The Ballon d'Or 2020 was cancelled due to pandemic restrictions — the only time since 1956 that the prestigious prize has not been awarded.
              </div>
            </details>
          </div>

          <div className="border-t border-zinc-900 pt-6 mt-12 text-xs text-zinc-500 space-y-1">
            <p>Last updated: 14 July 2026. Updated on the list of nominees and the results after the ceremony on 26 October 2026.</p>
            <p>Results based on information from France Football/UEFA.</p>
          </div>
        </article>

        {/* Bottom Call to action box */}
        <div className="mt-16 p-8 rounded-2xl glass-card border border-amber-500/10 text-center space-y-4">
          <h3 className="text-xl font-serif font-bold text-white">Want to put these insights into action?</h3>
          <p className="text-zinc-400 text-sm font-light max-w-md mx-auto">
            Get your verified Mahadev Book ID on WhatsApp in under 5 minutes and start placing smart bets now.
          </p>
          <div className="pt-2">
            <a 
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-extrabold px-6 py-3 rounded-xl hover:brightness-110 transition-all duration-300 shadow-md shadow-amber-500/10"
            >
              Get Your ID Now
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
