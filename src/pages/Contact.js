import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  User,
  Sparkles,
} from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic front-end validation
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setError("Please fill all fields.");
      setMessage(null);
      return;
    }

    setLoading(true);
    setError(null);
    setMessage(null);

    const formData = { name, email, phone };

    try {
      const response = await fetch("http://localhost:8088/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Check status before parsing
      if (!response.ok) {
        let errorText;
        try {
          const errorData = await response.json();
          errorText = errorData.message;
        } catch {
          errorText = `HTTP error: ${response.status}`;
        }
        throw new Error(errorText);
      }

      const result = await response.json();
      setMessage(result.message || "Message sent successfully.");
      setName("");
      setEmail("");
      setPhone("");
    } catch (err) {
      setError(err.message || "There was an error submitting the message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative min-h-screen px-4 pt-24 pb-16 sm:px-6 sm:pt-28 lg:px-8">
      <div className="mx-auto max-w-6xl ">
        {/* ================= PAGE HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className=" text-center sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-400 shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Get in Touch</span>
          </div>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-cyan-400 bg-clip-text text-transparent">
              Together
            </span>
          </h1>
          {/* <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Have a project idea, a job opportunity, or just want to say hello?
            Fill in the details below and I'll get back to you promptly.
          </p> */}
        </motion.div>

        {/* ================= MAIN CONTENT GRID ================= */}
        <div className="grid items-start gap-8 lg:grid-cols-12">
          {/* ================= LEFT: CONTACT INFO CARD ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6 lg:col-span-5"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 px-6 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8">
              {/* Background ambient glow */}
              <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-cyan-500/15 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-amber-500/10 blur-3xl" />

              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Contact Information
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  Feel free to reach out directly through any of the following
                  channels.
                </p>

                {/* Contact List */}
                <div className="mt-6 space-y-4">
                  {/* Location */}
                  <div className="group flex items-start gap-4 rounded-3xl border border-white/5 bg-slate-950/50 p-2 transition-all duration-300 hover:border-amber-400/30 hover:bg-slate-950/80">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-3xl border border-amber-400/20 bg-amber-400/10 text-amber-400 transition group-hover:scale-105">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Location
                      </p>
                      <p className="mt-1 text-sm font-medium text-slate-200">
                        Sector-53, Noida, Pin Code- 201307
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <a
                    href="tel:+917484976808"
                    className="group flex items-start gap-4 rounded-3xl border border-white/5 bg-slate-950/50 p-2 transition-all duration-300 hover:border-cyan-400/30 hover:bg-slate-950/80"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-3xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400 transition group-hover:scale-105">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Phone
                      </p>
                      <p className="mt-1 text-sm font-medium text-cyan-300 transition group-hover:text-cyan-200">
                        +91 7484976808
                      </p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:prashantkumar.pcpk@gmail.com"
                    className="group flex items-start gap-4 rounded-32xl border border-white/5 bg-slate-950/50 p-2 transition-all duration-300 hover:border-purple-400/30 hover:bg-slate-950/80"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-3xl border border-purple-400/20 bg-purple-400/10 text-purple-400 transition group-hover:scale-105">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Email Address
                      </p>
                      <p className="mt-1 break-all text-sm font-medium text-slate-200 transition group-hover:text-purple-300">
                        prashantkumar.pcpk@gmail.com
                      </p>
                    </div>
                  </a>
                </div>

                {/* Status Badge */}
                <div className="mt-8 flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                  </span>
                  <p className="text-xs font-medium text-emerald-300">
                    Available for full-time opportunities & freelance projects
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT: CONTACT FORM ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 px-6 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-10">
              {/* Background ambient glow */}
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />

              <div className="relative z-10">
                <div className="mb-4">
                  <h2 className="text-2xl font-bold text-white sm:text-3xl">
                    Send a Message
                  </h2>
                  <p className="mt-2 text-sm text-slate-400">
                    Fill out the form below and I will get back to you as soon
                    as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Full Name */}
                  <div className="flex flex-col space-y-2">
                    <label
                      htmlFor="name"
                      className="flex items-center gap-2 text-sm font-semibold text-slate-200"
                    >
                      <User className="h-3 w-3 text-amber-400" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="e.g. Prashant Kumar"
                      className="w-full rounded-3xl border border-slate-700/80 bg-slate-950/70 px-4 py-2.5 text-sm font-medium text-white placeholder-slate-500 transition-all duration-300 focus:border-amber-400 focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-amber-400/20"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col space-y-2">
                    <label
                      htmlFor="email"
                      className="flex items-center gap-2 text-sm font-semibold text-slate-200"
                    >
                      <Mail className="h-3 w-3 text-cyan-400" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="e.g. prashant@example.com"
                      className="w-full rounded-3xl border border-slate-700/80 bg-slate-950/70 px-4 py-2.5 text-sm font-medium text-white placeholder-slate-500 transition-all duration-300 focus:border-cyan-400 focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col space-y-2">
                    <label
                      htmlFor="phone"
                      className="flex items-center gap-2 text-sm font-semibold text-slate-200"
                    >
                      <Phone className="h-3 w-3 text-purple-400" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="e.g. +91 7484976808"
                      className="w-full rounded-3xl border border-slate-700/80 bg-slate-950/70 px-4 py-2.5 text-sm font-medium text-white placeholder-slate-500 transition-all duration-300 focus:border-purple-400 focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-purple-400/20"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  {/* Notification Alerts */}
                  <AnimatePresence>
                    {message && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/15 p-2 text-sm font-medium text-emerald-300"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                        <span>{message}</span>
                      </motion.div>
                    )}

                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-3 rounded-xl border border-red-500/30 bg-red-500/15 p-2 text-sm font-medium text-red-300"
                      >
                        <AlertCircle className="h-4 w-4 shrink-0 text-red-400" />
                        <span>{error}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: loading ? 1 : 1.01 }}
                    whileTap={{ scale: loading ? 1 : 0.98 }}
                    className="group relative mt-2 flex mx-auto px-8 items-center justify-center gap-2 overflow-hidden rounded-3xl bg-gradient-to-r from-amber-400 via-orange-500 to-cyan-500 px-6 py-4 font-semibold text-slate-950 shadow-lg shadow-amber-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? (
                      <div className="flex items-center gap-2">
                        <svg
                          className="h-5 w-5 animate-spin text-slate-950"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8H4z"
                          />
                        </svg>
                        <span>Sending Message...</span>
                      </div>
                    ) : (
                      <>
                        <span>Submit Message</span>
                        <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
