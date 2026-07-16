
import React  from 'react';
import {   useNavigate  } from "react-router-dom";
import {motion, AnimatePresence} from "framer-motion";
import homebg from "../assets/mainbg.jpg";

const HomePage = () => {

  const navigate = useNavigate();

  return (
    <div
    className=" mx-auto relative h-screen bg-cover bg-center max-w-full"
          style={{
            backgroundImage: `url(${homebg})`,
          }} >
      
      <AnimatePresence>
        <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
             className="max-w-6xl mx-auto  border-y-green-200 lg:px-8">

        <aside className="relative overflow-hidden text-cyan-300 rounded-lg  mx-2 sm:py-12">
            <div className="relative z-10 max-w-screen-xl px-2 pb-2 pt-2 sm:py-8 mx-1 sm:px-6 lg:px-2">
             <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">

             <section className="mb-2 ">
              <h2 className="text-5xl mb-2 text-orange-400 font-bold sm:text-5xl">
           Prashant Kumar
          <span className=" hidden text-orange-400 sm:block text-2xl"> (Full-Stack Developer)</span>
          <span className='mb-4 hidden text-brown-900 sm:block text-2xl'><i>(MERN)</i></span>
            </h2>
              <p className="text-lg text-gray-300 justify-start">
                Hi, I'm <strong className='text-cyan-400 text-xl'> <i>Prashant kumar</i></strong>, and i am passionate <strong> <i>Full-Stack Developer</i></strong>  who loves building modern web applications, solving real-world problems, and crafting beautiful user experiences.
                 I have experience in creating dynamic, responsive, accessible products that solve real problems and help teams move quickly from concept to launch. I love building intuitive and user-friendly experiences on the web.
              </p>
            </section>

              <div className="absolute inset-0 w-full shadow-2xl sm:my-20 sm:pt-1 pt-12 pointer-events-none">
                     <img className="  w-96 h-96 rounded-full shadow-m bg-transparent" src="prashant.jpg"
                      alt="Prashant" />
                 </div>  
           
            <div className='mt-20'>
               <button
             onClick={() => navigate("/Work")}
              className=" mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-900 text-white rounded-full text-lg"
            >
              See my work
              </button>
            </div>
        {/* <------------------------------ Email button --------------------------------> */}
          <div className=" flex items-start justify-end">
                     <div className='place-items-end'>
                      <h4 className='mt-6 text-xl  font-bold '> If you want to contact me </h4>

                  <div className="  flex justify-end">
                    <button
                      onClick={() => navigate("/SendMail")}
                      className=" mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-900 text-white rounded-full text-lg"
                    >
                      Send Mail
                    </button>
                  </div>

             
                </div>
                     
                </div> 
               </div>
            </div>
        </aside>
         </motion.div>
        </AnimatePresence>
    </div>

  );
};


export default HomePage;

