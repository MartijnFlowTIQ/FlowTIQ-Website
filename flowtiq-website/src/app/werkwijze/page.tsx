"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, FileText, Settings, Rocket, ArrowRight } from "lucide-react";

const WerkwijzePage = () => {
  const heroRef = useRef(null);
  const timelineRef = useRef(null);
  const adoptieRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const timelineInView = useInView(timelineRef, { once: true, margin: "-100px" });
  const adoptieInView = useInView(adoptieRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: Search,
      week: "Week 1",
      title: "Verkenning",
      description: "We starten niet blind. We bepalen samen waar de grootste pijn zit. Is het proces geschikt voor AI-ondersteuning? Wat is de business case?",
      deliverable: "Projectkaart & Go/No-Go besluit.",
    },
    {
      icon: FileText,
      week: "Week 2-3",
      title: "De Diepte In",
      description: "We analyseren de klik-paden en datastromen. We leggen vast hoe de 'ideale flow' eruitziet en ontwerpen de interactie.",
      deliverable: "Functioneel Ontwerp & UX Demo.",
    },
    {
      icon: Settings,
      week: "Week 4-6",
      title: "Bouwen & Trainen",
      description: "We configureren de FlowTIQ assistent en trainen het model op uw specifieke casuïstiek. We testen dit uitvoerig met een kleine groep key-users.",
      deliverable: "Werkende Pilot-versie.",
    },
    {
      icon: Rocket,
      week: "Week 7+",
      title: "Go-Live & Groei",
      description: "De techniek werkt, nu de mens nog. We rollen uit en monitoren het gebruik intensief.",
      deliverable: "Livegang & Rapportage.",
    },
  ];

  return (
    <main>
      {/* SECTIE 1: Hero */}
      <section
        ref={heroRef}
        className="bg-slate-50 pt-32 pb-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-slate-900 mb-6"
          >
            Van Analyse tot Adoptie.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-slate-700 leading-relaxed"
          >
            Wij geloven in vertragen aan de voorkant, om te versnellen in de uitvoering. Zo voorkomen we teleurstellingen en garanderen we resultaat.
          </motion.p>
        </div>
      </section>

      {/* SECTIE 2: De Routekaart (Verticale Tijdlijn) */}
      <section
        ref={timelineRef}
        className="bg-white py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Verticale Lijn - Alleen zichtbaar op desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 border-l-2 border-[#14B8A6] border-dashed transform -translate-x-1/2" />

            {/* Tijdlijn Items */}
            <div className="space-y-12 lg:space-y-24">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={timelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="relative flex flex-col lg:flex-row items-center gap-8"
                  >
                    {/* Kaart Links (voor even items) */}
                    {isEven && (
                      <div className="w-full lg:w-5/12 lg:text-right lg:pr-8 order-1 lg:order-1">
                        <div className="bg-white shadow-[0_20px_25px_-5px_rgb(15_23_42_/_0.05),_0_8px_10px_-6px_rgb(15_23_42_/_0.02)] rounded-2xl p-6">
                          <div className="flex items-center gap-3 mb-3 lg:justify-end">
                            <span className="text-sm font-semibold text-[#14B8A6]">
                              {step.week}
                            </span>
                          </div>
                          <h3 className="text-2xl font-heading font-bold text-slate-900 mb-3">
                            {step.title}
                          </h3>
                          <p className="text-lg text-slate-700 leading-relaxed mb-4">
                            {step.description}
                          </p>
                          <p className="text-sm text-slate-600 italic">
                            <strong>Deliverable:</strong> {step.deliverable}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Spacer voor even items */}
                    {isEven && <div className="hidden lg:block w-2/12 order-2" />}

                    {/* Bol (Station) - Altijd in het midden */}
                    <div className="relative z-10 flex-shrink-0 order-2 lg:order-3">
                      <div className="w-16 h-16 bg-[#14B8A6] rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Spacer voor oneven items */}
                    {!isEven && <div className="hidden lg:block w-2/12 order-2" />}

                    {/* Kaart Rechts (voor oneven items) */}
                    {!isEven && (
                      <div className="w-full lg:w-5/12 lg:text-left lg:pl-8 order-1 lg:order-1">
                        <div className="bg-white shadow-[0_20px_25px_-5px_rgb(15_23_42_/_0.05),_0_8px_10px_-6px_rgb(15_23_42_/_0.02)] rounded-2xl p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-sm font-semibold text-[#14B8A6]">
                              {step.week}
                            </span>
                          </div>
                          <h3 className="text-2xl font-heading font-bold text-slate-900 mb-3">
                            {step.title}
                          </h3>
                          <p className="text-lg text-slate-700 leading-relaxed mb-4">
                            {step.description}
                          </p>
                          <p className="text-sm text-slate-600 italic">
                            <strong>Deliverable:</strong> {step.deliverable}
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTIE 3: Adoptie Strategie */}
      <section
        ref={adoptieRef}
        className="bg-slate-50 py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={adoptieInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-heading font-bold text-slate-900 text-center mb-6"
          >
            Techniek is makkelijk, verandering is moeilijk.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={adoptieInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-slate-700 leading-relaxed text-center max-w-3xl mx-auto mb-12"
          >
            Daarom integreren we adoptie direct in de software.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={adoptieInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-[0_20px_25px_-5px_rgb(15_23_42_/_0.05),_0_8px_10px_-6px_rgb(15_23_42_/_0.02)] p-6 lg:p-8"
            >
              <h3 className="text-xl lg:text-2xl font-heading font-bold text-slate-900 mb-4">
                Pre-Go-Live
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                We warmen de organisatie op. Demo's, heldere communicatie en het betrekken van ambassadeurs (floorwalkers) op de werkvloer.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={adoptieInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-[0_20px_25px_-5px_rgb(15_23_42_/_0.05),_0_8px_10px_-6px_rgb(15_23_42_/_0.02)] p-6 lg:p-8"
            >
              <h3 className="text-xl lg:text-2xl font-heading font-bold text-slate-900 mb-4">
                Digital Nudging (Tijdens werk)
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                Geen dikke handboeken. Onze assistent geeft 'in-app' prompts en mini-video's precies op het moment dat de medewerker vastloopt.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={adoptieInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-[0_20px_25px_-5px_rgb(15_23_42_/_0.05),_0_8px_10px_-6px_rgb(15_23_42_/_0.02)] p-6 lg:p-8"
            >
              <h3 className="text-xl lg:text-2xl font-heading font-bold text-slate-900 mb-4">
                Nazorg & Monitoring
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                We meten niet alleen of het werkt, maar ook of het gebruikt wordt. We sturen bij op basis van data.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTIE 4: CTA */}
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
              Benieuwd hoe zo'n traject er voor uw proces uitziet?
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#16A34A] hover:bg-[#15803D] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Plan een vrijblijvende verkenning
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default WerkwijzePage;
