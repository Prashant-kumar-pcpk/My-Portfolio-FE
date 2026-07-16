import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import  bg from "../assets/skill.avif";

export default function SendMail() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:8088/sendmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await res.json();

      if (result.success) {
        alert("Mail sent successfully!");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Failed to sending Email.");
      }
    } catch (error) {
      alert("Server not responding.");
    }

    setLoading(false);
  };

  return (
<div
 className="{`min-h-screen`}"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
>

<AnimatePresence>
        <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
             className="max-w-6xl mx-auto sm:px-6 border-y-green-800 lg:px-8">


          <div className="min-h-screen bg-transparent rounded-lg flex items-center justify-center p-6">

            <div className="w-full max-w-2xl bg-gr shadow-lg rounded-3xl px-12 py-4">
              <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">
                Send Mail
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">

                {/* Name */}
                <div>
                  <label className="text-gray-700 font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full p-3 mt-1 border rounded-2xl focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Name"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-gray-700 font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full p-3 mt-1 border rounded-2xl focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Email"
                    required
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="text-gray-700 font-medium">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full p-3 mt-1 border rounded-2xl focus:ring-2 focus:ring-blue-500"
                    placeholder="Mail Subject"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-gray-700 font-medium">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full p-3 mt-1 border rounded-2xl focus:ring-2 focus:ring-blue-500"
                    placeholder="Write message here..."
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}

                <div className="flex justify-center p-4">
                  <button
                  type="submit"
                  disabled={loading}
                  className="w-56 px-6  bg-blue-600  text-white py-3 rounded-3xl font-semibold hover:bg-blue-800 transition disabled:bg-gray-400"
                >
                  {loading ? "Sending..." : "Send Mail"}
                </button>
                </div>
              </form>
            </div>
          </div>
     </motion.div>
  </AnimatePresence>
  </div>
  );
}
