"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface StepItem {
  id: number;
  imageLabel: string;
  title: string;
  description: string;
  usp: string;
  imageLeft: boolean;
}

const StepBlock = ({ step, index }: { step: StepItem; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="mb-24 last:mb-0"
    >
      <div
        className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
          step.imageLeft ? "lg:grid-flow-dense" : ""
        }`}
      >
        {/* Beeld */}
        <div
          className={`${
            step.imageLeft ? "lg:col-start-1" : "lg:col-start-2"
          } order-1 lg:order-none`}
        >
                  <div className="bg-slate-100 rounded-3xl shadow-[0_20px_25px_-5px_rgb(15_23_42_/_0.05),_0_8px_10px_-6px_rgb(15_23_42_/_0.02)] aspect-video flex items-center justify-center">
            <span className="text-slate-400 font-medium text-lg">
              {step.imageLabel}
            </span>
          </div>
        </div>

        {/* Tekst */}
        <div
          className={`${
            step.imageLeft ? "lg:col-start-2" : "lg:col-start-1"
          } order-2 lg:order-none`}
        >
          <h3 className="text-3xl font-heading font-bold mb-4 text-slate-900">
            {step.title}
          </h3>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            {step.description}
          </p>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-[#14B8A6] flex-shrink-0 mt-0.5" />
            <p className="text-lg text-slate-700 leading-relaxed">
              {step.usp}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SolutionSteps = () => {
  const steps: StepItem[] = [
    {
      id: 1,
      imageLabel: "Screenshot Browser Overlay",
      title: "Je slimme ondersteuner in de browser",
      description: "De digitale assistenten van FlowTIQ nemen repeterend invoer- en klikwerk over. Ze vullen applicaties op basis van spraakinvoer, bestaande data, of enkele simpele keuzes door de medewerker.",
      usp: "FlowTIQ is snel en simpel beschikbaar te maken. Het toevoegen van een veilige add-on aan de browser is voldoende om direct samen te werken met bestaande webapplicaties.",
      imageLeft: false, // Tekst links, beeld rechts
    },
    {
      id: 2,
      imageLabel: "Dashboard Weergave",
      title: "Van onderbuikgevoel naar duidelijke data",
      description: "FlowTIQ biedt inzicht in procesknelpunten. We zetten informatie uit applicaties en andere bronnen om naar real-time dashboards voor de noodzakelijke inzichten. Geen complexe BI-trajecten, maar snel zicht op werkdruk en doorlooptijden.",
      usp: "Inzicht in processen en prestaties zonder extra registratiedruk voor de medewerkers.",
      imageLeft: true, // Beeld links, tekst rechts
    },
    {
      id: 3,
      imageLabel: "Voorspellende Grafiek",
      title: "Kijk niet meer achterom, maar vooruit",
      description: "Als de basis op orde is, helpen onze AI-assistenten jouw organisatie om vooruit te kijken. Voorspel piekmomenten in meldingen en registraties en stuur proactief bij.",
      usp: "Proactief sturen op basis van voorspellingen in plaats van reactief reageren op problemen.",
      imageLeft: false, // Tekst links, beeld rechts
    },
  ];

  return (
    <section className="bg-white py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <StepBlock key={step.id} step={step} index={index} />
        ))}
      </div>
    </section>
  );
};

export default SolutionSteps;

