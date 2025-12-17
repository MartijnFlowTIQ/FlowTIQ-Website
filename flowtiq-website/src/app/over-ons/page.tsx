"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Eye, Handshake } from "lucide-react";

const OverOnsPage = () => {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const teamInView = useInView(teamRef, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Users,
      title: "Nabijheid",
      description: "We zijn geen anonieme helpdesk. We komen langs, drinken koffie en kijken mee op het scherm. Je bent een klant, geen nummer.",
    },
    {
      icon: Eye,
      title: "Transparantie",
      description: "Geen black-box magie. We leggen uit wat we doen, gebruiken open-source standaarden en zijn eerlijk over wat wel én niet kan.",
    },
    {
      icon: Handshake,
      title: "Doen wat je zegt",
      description: "Een Twentse mentaliteit: nuchter, betrouwbaar en resultaatgericht. Afspraak is afspraak.",
    },
  ];

  const teamMembers = [
    {
      name: "Martijn",
      role: "Co-Founder",
      title: "De Strateeg & Procesbewaker",
    },
    {
      name: "Oscar",
      role: "Co-Founder",
      title: "De Architect & Bouwer",
    },
    {
      name: "Tim, Daan & Romy",
      role: "Teamleden",
      title: "Development & Support",
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
            Technologie met een menselijk gezicht.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-slate-700 leading-relaxed"
          >
            Wij zijn FlowTIQ. Ontstaan uit frustratie over inefficiëntie, gedreven door de wil om het beter te doen.
          </motion.p>
        </div>
      </section>

      {/* SECTIE 2: Het Ontstaansverhaal */}
      <section
        ref={storyRef}
        className="bg-white py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Tekst */}
            <div className="space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={storyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl font-heading font-bold text-slate-900"
              >
                Van stagiair en manager tot partners.
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={storyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-4 text-lg text-slate-700 leading-relaxed"
              >
                <p>
                  Het begon allemaal tijdens een stage. Oscar kwam als stagiair binnen bij Martijn. De klik was er direct: beiden zagen ze hoe organisaties worstelden met starre systemen en eindeloos overtyp-werk.
                </p>
                <p>
                  Tijdens de coronacrisis kwam dit in een stroomversnelling. Samen met een klein team bouwden we RPA-oplossingen om duizenden BCO-medewerkers te ondersteunen. Daar zagen we de kracht van slimme technologie: Outlook en het ONS ECD van Nedap lieten we veilig met elkaar praten. De werkdruk daalde, de fouten verdwenen.
                </p>
                <p>
                  Die ervaring vormde de basis voor FlowTIQ. Nu, jaren later, combineren we Martijn's 20+ jaar ervaring in programmamanagement en privacy met Oscar's frisse blik op AI en automation.
                </p>
              </motion.div>
            </div>

            {/* Foto Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-first lg:order-none"
            >
              <div className="bg-slate-100 rounded-2xl shadow-md aspect-square flex items-center justify-center">
                <span className="text-slate-500 font-medium text-lg text-center px-4">
                  Foto Ontstaansverhaal
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTIE 3: Onze Missie & Waarden */}
      <section
        ref={valuesRef}
        className="bg-slate-50 py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-heading font-bold text-slate-900 text-center mb-12"
          >
            Onze Missie & Waarden
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="bg-white rounded-2xl shadow-[0_20px_25px_-5px_rgb(15_23_42_/_0.05),_0_8px_10px_-6px_rgb(15_23_42_/_0.02)] p-6 lg:p-8"
                >
                  <div className="text-[#14B8A6] mb-4">
                    <Icon className="w-10 h-10 lg:w-12 lg:h-12" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-heading font-bold text-slate-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTIE 4: Het Team */}
      <section
        ref={teamRef}
        className="bg-white py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-heading font-bold text-slate-900 text-center mb-12"
          >
            Het Team
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center"
              >
                <div className="bg-slate-100 rounded-full aspect-square w-48 h-48 mx-auto mb-6 flex items-center justify-center shadow-md">
                  <span className="text-slate-500 font-medium text-sm text-center px-4">
                    Foto {member.name}
                  </span>
                </div>
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-sm text-[#14B8A6] font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-lg text-slate-700">
                  {member.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default OverOnsPage;
