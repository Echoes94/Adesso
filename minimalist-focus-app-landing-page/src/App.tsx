import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)] selection:bg-[var(--color-ink)] selection:text-[var(--color-paper)]">
      {/* Navbar */}
      <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50 bg-[var(--color-paper)]/80 backdrop-blur-md border-b border-[var(--color-border)]">
        <div className="font-serif text-xl font-medium tracking-wide">Adesso.</div>
        <a href="https://project-adesso.lovable.app" target="_blank" rel="noopener noreferrer" className="text-sm font-medium border border-[var(--color-ink)] rounded-full px-4 py-2 hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)] transition-colors inline-block">
          Apri l'app
        </a>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 max-w-4xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-light leading-tight tracking-tight mb-8"
        >
          Ti aiuta a fare solo ciò che conta senza rumore.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-[var(--color-ink-light)] max-w-2xl mx-auto font-light leading-relaxed mb-12"
        >
          Serenità attraverso attenzione protetta.<br/>
          Non è produttività. Non è performance. Non è ottimizzazione.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <a href="https://project-adesso.lovable.app" target="_blank" rel="noopener noreferrer" className="bg-[var(--color-ink)] text-[var(--color-paper)] rounded-full px-8 py-4 text-sm font-medium hover:opacity-90 transition-opacity inline-flex items-center gap-2 mx-auto">
            Apri l'app <ArrowRight size={16} />
          </a>
        </motion.div>
      </section>

      {/* The Problem */}
      <section className="py-24 px-6 border-t border-[var(--color-border)]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-light mb-8">Il problema non sei tu.<br/>È il sistema.</h2>
              <p className="text-[var(--color-ink-light)] font-light leading-relaxed mb-6">
                Troppe notifiche. Troppe task. Troppi sistemi. Viviamo in una sovrastimolazione digitale continua che ci porta a vivere in reazione invece che in intenzione.
              </p>
              <p className="text-[var(--color-ink-light)] font-light leading-relaxed">
                Il risultato è un disallineamento tra i nostri valori e le nostre azioni, pressione psicologica e un costante senso di colpa da "non abbastanza".
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <div className="bg-white p-8 rounded-2xl border border-[var(--color-border)] shadow-sm">
                <div className="text-sm font-medium uppercase tracking-widest text-[var(--color-ink-light)] mb-6">La formula del rumore</div>
                <div className="space-y-4 font-serif text-xl">
                  <div className="flex items-center gap-4"><span className="text-[var(--color-ink-light)]">01.</span> Sovrastimolazione</div>
                  <div className="w-px h-4 bg-[var(--color-border)] ml-2"></div>
                  <div className="flex items-center gap-4"><span className="text-[var(--color-ink-light)]">02.</span> Reattività</div>
                  <div className="w-px h-4 bg-[var(--color-border)] ml-2"></div>
                  <div className="flex items-center gap-4"><span className="text-[var(--color-ink-light)]">03.</span> Disallineamento</div>
                  <div className="w-px h-4 bg-[var(--color-border)] ml-2"></div>
                  <div className="flex items-center gap-4 text-red-800"><span className="text-red-800/50">04.</span> Colpa</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-6 bg-[#f0efe9]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-16">Principi inviolabili.</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="flex flex-col items-center">
              <div className="text-sm font-medium mb-2">Sottrazione</div>
              <div className="text-[var(--color-ink-light)] text-xs uppercase tracking-widest">&gt; Aggiunta</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-sm font-medium mb-2">Presente</div>
              <div className="text-[var(--color-ink-light)] text-xs uppercase tracking-widest">&gt; Dashboard</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-sm font-medium mb-2">Una cosa</div>
              <div className="text-[var(--color-ink-light)] text-xs uppercase tracking-widest">Alla volta</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-sm font-medium mb-2">Ritmo</div>
              <div className="text-[var(--color-ink-light)] text-xs uppercase tracking-widest">&gt; Velocità</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-sm font-medium mb-2">Gentilezza</div>
              <div className="text-[var(--color-ink-light)] text-xs uppercase tracking-widest">&gt; Pressione</div>
            </div>
          </div>

          <div className="mt-20 pt-12 border-t border-[var(--color-border)]">
            <div className="text-sm font-medium uppercase tracking-widest text-[var(--color-ink-light)] mb-8">Cosa non troverai mai qui</div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-[var(--color-ink-light)]">
              <span className="px-4 py-2 rounded-full border border-[var(--color-border)] bg-white/50">❌ Gamification</span>
              <span className="px-4 py-2 rounded-full border border-[var(--color-border)] bg-white/50">❌ Streak</span>
              <span className="px-4 py-2 rounded-full border border-[var(--color-border)] bg-white/50">❌ Notifiche push</span>
              <span className="px-4 py-2 rounded-full border border-[var(--color-border)] bg-white/50">❌ Metriche</span>
              <span className="px-4 py-2 rounded-full border border-[var(--color-border)] bg-white/50">❌ Grafici</span>
              <span className="px-4 py-2 rounded-full border border-[var(--color-border)] bg-white/50">❌ Task illimitate</span>
            </div>
          </div>
        </div>
      </section>

      {/* How it works - The 4 Phases */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-light mb-4">Quattro momenti. Nessun rumore.</h2>
            <p className="text-[var(--color-ink-light)] font-light">Una struttura logica per proteggere la tua attenzione.</p>
          </div>

          <div className="space-y-32">
            {/* Phase 1: Settimana */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="text-sm font-medium uppercase tracking-widest text-[var(--color-ink-light)] mb-4">01. Orientamento</div>
                <h3 className="text-3xl font-serif mb-4">🌿 Settimana</h3>
                <p className="text-[var(--color-ink-light)] font-light leading-relaxed mb-6">
                  Massimo 7 cose. Nessuna assegnazione per giorno. Nessuna priorità. Nessuna scadenza multipla.
                </p>
                <div className="text-sm font-medium border-l-2 border-[var(--color-ink)] pl-4 py-1">
                  Serve a: Proteggere la direzione.
                </div>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-[var(--color-border)] shadow-sm flex justify-center">
                <div className="w-full max-w-xs space-y-3">
                  <div className="text-xs font-medium uppercase tracking-widest text-center mb-6">Questa Settimana</div>
                  {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                    <div key={i} className="h-10 border border-[var(--color-border)] border-dashed rounded-lg flex items-center px-4 text-sm text-[var(--color-ink-light)]">
                      {i === 1 ? 'Scrivere documento fase 1' : i === 2 ? 'Revisione design system' : ''}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Phase 2: Mattino */}
            <div className="grid md:grid-cols-2 gap-16 items-center flex-col-reverse md:flex-row-reverse">
              <div>
                <div className="text-sm font-medium uppercase tracking-widest text-[var(--color-ink-light)] mb-4">02. Intenzione</div>
                <h3 className="text-3xl font-serif mb-4">🌅 Mattino</h3>
                <p className="text-[var(--color-ink-light)] font-light leading-relaxed mb-6">
                  Una sequenza guidata di 5 minuti. Definisci cosa conta oggi e seleziona fino a 5 azioni dalla tua settimana.
                </p>
                <div className="text-sm font-medium border-l-2 border-[var(--color-ink)] pl-4 py-1">
                  Serve a: Proteggere l'intenzione.
                </div>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-[var(--color-border)] shadow-sm flex justify-center">
                <div className="w-full max-w-xs text-center">
                  <div className="text-xs font-medium uppercase tracking-widest mb-8">Oggi</div>
                  <div className="font-serif text-xl mb-6">Cosa conta.</div>
                  <input type="text" placeholder="Scrivi qui..." className="w-full border-b border-[var(--color-border)] pb-2 mb-8 text-center focus:outline-none focus:border-[var(--color-ink)] bg-transparent" />
                  <button className="w-full bg-[var(--color-ink)] text-[var(--color-paper)] rounded-full py-3 text-sm font-medium">
                    Inizia oggi
                  </button>
                </div>
              </div>
            </div>

            {/* Phase 3: Giorno (Nucleo Inviolabile) */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="text-sm font-medium uppercase tracking-widest text-[var(--color-ink-light)] mb-4">03. Modalità Operativa</div>
                <h3 className="text-3xl font-serif mb-4">☀️ Giorno</h3>
                <p className="text-[var(--color-ink-light)] font-light leading-relaxed mb-6">
                  Il nucleo inviolabile. Durante il giorno vedi solo la prossima azione singola. Nessuna lista visibile di default. Nessuna panoramica.
                </p>
                <div className="text-sm font-medium border-l-2 border-[var(--color-ink)] pl-4 py-1">
                  Serve a: Proteggere l'attenzione.
                </div>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-[var(--color-border)] shadow-sm flex justify-center items-center min-h-[300px]">
                <div className="w-full max-w-xs text-center">
                  <div className="text-xs font-medium uppercase tracking-widest text-[var(--color-ink-light)] mb-4">Adesso</div>
                  <div className="font-serif text-2xl mb-12">Scrivere documento fase 1</div>
                  <div className="flex gap-4 justify-center">
                    <button className="px-6 py-2 border border-[var(--color-border)] rounded-full text-sm hover:bg-[var(--color-paper)] transition-colors">Cambia</button>
                    <button className="px-6 py-2 bg-[var(--color-ink)] text-[var(--color-paper)] rounded-full text-sm">Fatto</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 4: Sera */}
            <div className="grid md:grid-cols-2 gap-16 items-center flex-col-reverse md:flex-row-reverse">
              <div>
                <div className="text-sm font-medium uppercase tracking-widest text-[var(--color-ink-light)] mb-4">04. Revisione Leggera</div>
                <h3 className="text-3xl font-serif mb-4">🌙 Sera</h3>
                <p className="text-[var(--color-ink-light)] font-light leading-relaxed mb-6">
                  Rivedi oggi. Sei stato intenzionale? Una domanda, una frase opzionale. Se una task non viene fatta, torna alla settimana. Non resta come debito.
                </p>
                <div className="text-sm font-medium border-l-2 border-[var(--color-ink)] pl-4 py-1">
                  Serve a: Chiudere il ciclo senza colpa.
                </div>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-[var(--color-border)] shadow-sm flex justify-center">
                <div className="w-full max-w-xs text-center">
                  <div className="text-xs font-medium uppercase tracking-widest mb-8">Rivedi Oggi</div>
                  <div className="font-serif text-xl mb-8">Sei stato intenzionale?</div>
                  <div className="flex flex-col gap-3 mb-8">
                    <button className="py-2 border border-[var(--color-border)] rounded-lg text-sm hover:border-[var(--color-ink)] transition-colors">Sì</button>
                    <button className="py-2 border border-[var(--color-border)] rounded-lg text-sm hover:border-[var(--color-ink)] transition-colors">In parte</button>
                    <button className="py-2 border border-[var(--color-border)] rounded-lg text-sm hover:border-[var(--color-ink)] transition-colors">No</button>
                  </div>
                  <button className="w-full bg-[var(--color-ink)] text-[var(--color-paper)] rounded-full py-3 text-sm font-medium">
                    Concludi
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24 px-6 bg-[#f0efe9] border-y border-[var(--color-border)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-6">Non è per principianti.</h2>
          <p className="text-[var(--color-ink-light)] font-light text-lg mb-12">
            È per chi ha già provato tutto. Per chi ha sistemi perfetti ma si sente comunque disconnesso.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-medium">
            <div className="p-4 border border-[var(--color-border)] rounded-xl bg-[var(--color-paper)]">Founder</div>
            <div className="p-4 border border-[var(--color-border)] rounded-xl bg-[var(--color-paper)]">Persona in burnout</div>
            <div className="p-4 border border-[var(--color-border)] rounded-xl bg-[var(--color-paper)]">Biohacker</div>
            <div className="p-4 border border-[var(--color-border)] rounded-xl bg-[var(--color-paper)]">Mente brillante</div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-serif mb-12">Basta così.</h2>
          <a href="https://project-adesso.lovable.app" target="_blank" rel="noopener noreferrer" className="bg-[var(--color-ink)] text-[var(--color-paper)] rounded-full px-8 py-4 text-sm font-medium hover:opacity-90 transition-opacity inline-block mx-auto">
            Apri l'app
          </a>
          <p className="mt-8 text-xs text-[var(--color-ink-light)] uppercase tracking-widest">
            Uso personale. Nessuna notifica. Nessun rumore.
          </p>
        </div>
      </section>
    </div>
  );
}
