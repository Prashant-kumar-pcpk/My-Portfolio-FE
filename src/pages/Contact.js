import React, { useState } from "react";
import {motion, AnimatePresence} from "framer-motion";
import bg from '../assets/skill.avif';


export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null); // success or error message
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
  e.preventDefault(); // stop page reload

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
    // const response = await axios.post("/contact", formData);


    const response = await fetch("http://localhost:8088/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),


});

    // ✅ check status before parsing
    if (!response.ok) {
      // backend might not always return JSON on error
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
    
      <div className=" flex items-top border-fuchsia-600 justify-center min-h-[700px] sm:items-center sm:pt-0"
      style={{
           backgroundImage: `url(${bg})`
                }} >

        <AnimatePresence>
        <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
             className="max-w-6xl mx-auto sm:px-6 border-y-green-200 lg:px-8">

          <div 
          className="mt-8  overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 mr-2 bg-gray-200 sm:rounded-xl">
                <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                  Get in touch:
                </h1>
                <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
                  Fill in the form to contact me.
                </p>

                <div className="flex items-center mt-8 text-gray-600">
                  {/* address icon and content */}
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                   Sector-53, Noida, pin Code- 201307
                  </div>
                </div>

                <div className="flex items-center mt-4 text-gray-600">
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    +91 7484976808
                  </div>
                </div>

                <div className="flex items-center mt-2 text-gray-600">
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    prashantkumar.pcpk@gmail.com
                  </div>
                </div>
              </div>

              <form className="p-6 flex flex-col justify-center" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-amber-900 font-bold">
                    Full Name :
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    className="w-100 mt-2 py-3 px-3 rounded-2xl bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col mt-2">
                  <label htmlFor="email" className="text-amber-900 font-bold ">
                    Email :
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="w-100 mt-2 py-3 px-3 rounded-2xl bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="flex flex-col mt-2">
                  <label htmlFor="tel" className="text-amber-900 font-bold">
                    Phone :
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Telephone Number"
                    className="w-100 mt-2 py-3 px-3 rounded-2xl bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="md:w-auto flex justify-center bg-blue-500 text-white font-bold py-3 px-6 rounded-full mt-4 hover:bg-blue-800 transition ease-in-out duration-300 disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Submit"}
                </button>

                {message && <div className="mt-4 text-green-500">{message}</div>}
                {error && <div className="mt-4 text-red-500">{error}</div>}
              </form>
            </div>
          </div>
        </motion.div>
        </AnimatePresence>
      </div>
   
  );
}
