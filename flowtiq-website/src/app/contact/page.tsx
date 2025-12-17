"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Mail, Phone, Building2, ArrowRight } from "lucide-react";

const ContactPage = () => {
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const flowCheckRef = useRef(null);

  const formInView = useInView(formRef, { once: true, margin: "-100px" });
  const infoInView = useInView(infoRef, { once: true, margin: "-100px" });
  const flowCheckInView = useInView(flowCheckRef, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    naam: "",
    organisatie: "",
    email: "",
    telefoon: "",
    onderwerp: "",
    bericht: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic hier
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main>
      {/* SECTIE 1: Split Layout */}
      <section className="bg-slate-50 pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* LINKER KOLOM: Contactgegevens & Uitnodiging */}
            <motion.div
              ref={infoRef}
              initial={{ opacity: 0, x: -30 }}
              animate={infoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-slate-900">
                Zullen we kennismaken?
              </h1>
              <p className="text-xl text-slate-700 leading-relaxed">
                Of je nu een concreet procesprobleem hebt of gewoon eens wilt sparren over de mogelijkheden van AI: de koffie staat klaar.
              </p>

              {/* Contact Details */}
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#14B8A6] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-slate-700 font-medium">Adres</p>
                    <p className="text-slate-600">FlowTIQ, Nederland</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-[#14B8A6] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-slate-700 font-medium">E-mail</p>
                    <a
                      href="mailto:info@flowtiq.nl"
                      className="text-slate-600 hover:text-[#14B8A6] transition-colors"
                    >
                      info@flowtiq.nl
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[#14B8A6] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-slate-700 font-medium">Telefoon</p>
                    <p className="text-slate-600">[Telefoonnummer]</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Building2 className="w-6 h-6 text-[#14B8A6] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-slate-700 font-medium">KVK</p>
                    <p className="text-slate-600">[Nummer]</p>
                  </div>
                </div>
              </div>

              {/* Extra Call-out */}
              <div className="bg-white rounded-2xl shadow-[0_20px_25px_-5px_rgb(15_23_42_/_0.05),_0_8px_10px_-6px_rgb(15_23_42_/_0.02)] p-6 border-l-4 border-[#16A34A] mt-8">
                <p className="text-slate-700 leading-relaxed">
                  <strong className="text-slate-900">Liever direct weten waar je aan toe bent?</strong> Vraag de Flow-Check aan.
                </p>
              </div>
            </motion.div>

            {/* RECHTER KOLOM: Het Formulier */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: 30 }}
              animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6 }}
            >
              <form
                onSubmit={handleSubmit}
                className="bg-white shadow-[0_20px_25px_-5px_rgb(15_23_42_/_0.05),_0_8px_10px_-6px_rgb(15_23_42_/_0.02)] rounded-2xl p-6 lg:p-8 space-y-6"
              >
                <div>
                  <label
                    htmlFor="naam"
                    className="block text-sm font-semibold text-slate-900 mb-2"
                  >
                    Naam *
                  </label>
                  <input
                    type="text"
                    id="naam"
                    name="naam"
                    required
                    value={formData.naam}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-[#14B8A6] focus:border-[#14B8A6] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="organisatie"
                    className="block text-sm font-semibold text-slate-900 mb-2"
                  >
                    Organisatie
                  </label>
                  <input
                    type="text"
                    id="organisatie"
                    name="organisatie"
                    value={formData.organisatie}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-[#14B8A6] focus:border-[#14B8A6] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-slate-900 mb-2"
                  >
                    E-mailadres *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-[#14B8A6] focus:border-[#14B8A6] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="telefoon"
                    className="block text-sm font-semibold text-slate-900 mb-2"
                  >
                    Telefoonnummer
                  </label>
                  <input
                    type="tel"
                    id="telefoon"
                    name="telefoon"
                    value={formData.telefoon}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-[#14B8A6] focus:border-[#14B8A6] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="onderwerp"
                    className="block text-sm font-semibold text-slate-900 mb-2"
                  >
                    Onderwerp *
                  </label>
                  <select
                    id="onderwerp"
                    name="onderwerp"
                    required
                    value={formData.onderwerp}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-[#14B8A6] focus:border-[#14B8A6] outline-none transition-colors bg-white"
                  >
                    <option value="">Selecteer een onderwerp</option>
                    <option value="flow-check">Flow-Check aanvragen</option>
                    <option value="demo">Demo</option>
                    <option value="vraag">Vraag</option>
                    <option value="anders">Anders</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="bericht"
                    className="block text-sm font-semibold text-slate-900 mb-2"
                  >
                    Bericht *
                  </label>
                  <textarea
                    id="bericht"
                    name="bericht"
                    required
                    rows={5}
                    value={formData.bericht}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-[#14B8A6] focus:border-[#14B8A6] outline-none transition-colors resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#16A34A] hover:bg-[#15803D] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  Verstuur bericht
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTIE 2: Flow-Check Uitleg */}
      <section
        ref={flowCheckRef}
        className="bg-white py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-200"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={flowCheckInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-lg text-slate-700 leading-relaxed">
              <strong className="text-slate-900">Wat is de Flow-Check?</strong> In een sessie van 30 minuten scannen we één specifiek proces en vertellen we direct of (en hoeveel) winst er te behalen is.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
