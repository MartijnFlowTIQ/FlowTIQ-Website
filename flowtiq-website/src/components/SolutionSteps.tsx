"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import clsx from "clsx";

const SolutionSteps = () => {
  const steps = [
    {
      title: "Je slimme ondersteuner in de browser",
      text: "De digitale assistenten van FlowTIQ nemen repeterend invoer- en klikwerk over. Ze vullen applicaties op basis van spraakinvoer, bestaande data, of enkele simpele keuzes door de medewerker.",
      usp: "FlowTIQ is snel en simpel beschikbaar te maken. Het toevoegen van een veilige add-on aan de browser is voldoende om direct samen te werken met bestaande webapplicaties.",
      label: "Screenshot Browser Overlay"
    },
    {
      title: "Van onderbuikgevoel naar duidelijke data",
      text: "FlowTIQ biedt inzicht in procesknelpunten. We zetten informatie uit applicaties en andere bronnen om naar real-time dashboards voor de noodzakelijke inzichten. Geen complexe BI-trajecten, maar snel zicht op werkdruk, doorlooptijden en andere belangrijke indicatoren.",
      usp: "Inzicht in processen en prestaties zonder extra registratiedruk voor de medewerkers.",
      label: "Dashboard Weergave"
    },
    {
      title: "Kijk niet meer achterom, maar vooruit",
      text: "Als de basis op orde is, helpen onze AI-assistenten jouw organisatie om vooruit te kijken. Voorspel piekmomenten in meldingen en registraties en stuur proactief bij.",
      quote: "AI waar het kan. Mens waar het moet.",
      label: "Voorspellende Grafiek"
    }
  ];

  return (
    <section className="bg-slate-50 py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 space-y-24 lg:space-y-32">
        {steps.map((step, index) => (
          <div 
            key={index}
            className={clsx(
              "flex flex-col lg:flex-row items-center gap-12 lg:gap-20",
              index % 2 === 1 && "lg:flex-row-reverse"
            )}
          >
            {/* Tekst Kant */}
            <motion.div 
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <h3 className="text-3xl font-heading font-bold text-primary mb-6">
                {step.title}
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                {step.text}
              </p>
              
              {step.usp && (
                <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                  <CheckCircle2 className="w-6 h-6 text-brand-flow shrink-0 mt-1" />
                  <p className="text-slate-700 font-medium">{step.usp}</p>
                </div>
              )}

              {step.quote && (
                <div className="relative p-6 bg-brand-flow/5 rounded-xl border-l-4 border-brand-flow mt-6">
                  <p className="text-xl font-heading font-bold text-primary italic">
                    "{step.quote}"
                  </p>
                </div>
              )}
            </motion.div>

            {/* Beeld Kant (Placeholder) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex-1 w-full"
            >
              <div className="bg-white aspect-video rounded-2xl shadow-soft-xl flex items-center justify-center border border-slate-100 relative overflow-hidden group">
                 <div className="absolute inset-0 bg-slate-50/50 group-hover:bg-slate-50/20 transition-colors" />
                 <span className="relative font-medium text-slate-400 bg-white px-4 py-2 rounded-full shadow-sm">
                    {step.label}
                 </span>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SolutionSteps;
// Force update fix