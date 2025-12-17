"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const OplossingPage = () => {
  const heroRef = useRef(null);
  const archRef = useRef(null);
  const aiRef = useRef(null);
  const securityRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const archInView = useInView(archRef, { once: true, margin: "-100px" });
  const aiInView = useInView(aiRef, { once: true, margin: "-100px" });
  const securityInView = useInView(securityRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <main>
      {/* SECTIE 1: Hero */}
      <section
        ref={heroRef}
        className="bg-[#F1F5F9] pt-32 pb-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-slate-900 mb-6"
          >
            Intelligente technologie, lokaal verankerd.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-slate-700 leading-relaxed"
          >
            Ontdek hoe FlowTIQ werkt als veilige schil over uw applicatielandschap. Geen black box, maar transparante logica.
          </motion.p>
        </div>
      </section>

      {/* SECTIE 2: De Architectuur */}
      <section
        ref={archRef}
        className="bg-white py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Tekst Links */}
            <div className="space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={archInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl font-heading font-bold text-slate-900"
              >
                De Extensie als Centraal Knooppunt
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={archInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg text-slate-700 leading-relaxed"
              >
                FlowTIQ nestelt zich niet <em>in</em> uw software, maar werkt er <em>overheen</em>. Via een veilige browser-extensie fungeert FlowTIQ als een intelligente hub tussen de gebruiker, de webapplicatie en onze lokale AI-modellen.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={archInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-slate-700 leading-relaxed font-medium"
              >
                Input (De Gebruiker) → Verwerking (Extensie + Local LLM) → Output (Actie in Applicatie).
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={archInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-4 pt-4"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#14B8A6] flex-shrink-0 mt-0.5" />
                  <p className="text-lg text-slate-700 leading-relaxed">
                    Leest en begrijpt de context op het scherm (DOM-elementen).
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#14B8A6] flex-shrink-0 mt-0.5" />
                  <p className="text-lg text-slate-700 leading-relaxed">
                    Vertaalt spraak of ruwe data naar gestructureerde invoer.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#14B8A6] flex-shrink-0 mt-0.5" />
                  <p className="text-lg text-slate-700 leading-relaxed">
                    Visualiseert dashboards direct als overlay over de applicatie heen.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Illustratie Rechts */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={archInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-first lg:order-none"
            >
              <div className="bg-slate-100 rounded-2xl shadow-md aspect-video flex items-center justify-center">
                <span className="text-slate-500 font-medium text-lg text-center px-4">
                  Diagram: Browser Extensie Architectuur
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTIE 3: Deep Dive AI */}
      <section
        ref={aiRef}
        className="bg-slate-100 py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={aiInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-heading font-bold text-slate-900 text-center mb-6"
          >
            Hoe werkt onze AI?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={aiInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-slate-700 leading-relaxed text-center max-w-3xl mx-auto mb-12"
          >
            Wij gebruiken geavanceerde Large Language Models (LLM's) en Neurale Netwerken die getraind zijn op proces-logica. In tegenstelling tot generieke modellen (zoals ChatGPT), draaien onze modellen geïsoleerd.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={aiInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-[0_20px_25px_-5px_rgb(15_23_42_/_0.05),_0_8px_10px_-6px_rgb(15_23_42_/_0.02)] p-8"
            >
              <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">
                Het Neurale Netwerk
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                Zie dit als het brein dat patronen herkent. Het leert van de handelingen van uw beste medewerkers. Na een korte inleerperiode 'snapt' het model dat bij 'Diagnose X' vaak 'Behandeling Y' hoort, en doet die suggestie.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={aiInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-[0_20px_25px_-5px_rgb(15_23_42_/_0.05),_0_8px_10px_-6px_rgb(15_23_42_/_0.02)] p-8"
            >
              <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">
                De MCP Server (Model Context Protocol)
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                Dit is de veiligheidspoort. Het zorgt ervoor dat de AI alleen toegang heeft tot de data die op dat moment relevant is voor de taak. Geen data-hengelen, maar strikte 'need-to-know' verwerking.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTIE 4: Security & Privacy */}
      <section
        ref={securityRef}
        className="bg-[#0F172A] py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={securityInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-heading font-bold text-white text-center mb-12"
          >
            Data Soevereiniteit als Standaard
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={securityInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/5 border border-slate-700 rounded-2xl p-6 lg:p-8"
            >
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">
                Lokale Verwerking
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Uw data verlaat uw eigen domein (of uw vertrouwde Nederlandse cloud) niet. Er gaat niets naar servers in de VS.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={securityInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 border border-slate-700 rounded-2xl p-6 lg:p-8"
            >
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">
                Open Source Core
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Wij bouwen op bewezen open-source fundamenten. Dit betekent dat de code controleerbaar is en geen verborgen achterdeurtjes bevat.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={securityInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/5 border border-slate-700 rounded-2xl p-6 lg:p-8"
            >
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">
                Certificering
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Onze processen zijn ingericht conform ISO27001 en NEN7510. Wij tekenen probleemloos verwerkersovereenkomsten.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTIE 5: CTA */}
      <section
        ref={ctaRef}
        className="bg-white py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <p className="text-lg text-slate-700">
              Wilt u de technische documentatie inzien of een DPIA bespreken?
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#16A34A] hover:bg-[#15803D] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Plan een technisch gesprek
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default OplossingPage;

