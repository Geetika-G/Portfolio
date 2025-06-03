import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { motion } from "framer-motion";

const navItems = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "coding", label: "Coding Profiles" },
  { id: "contact", label: "Contact" },
];

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth" });
};

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white z-50 shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1
            className="text-xl font-bold text-indigo-400 cursor-pointer"
            animate={{ y: [0, -5, 0], transition: { repeat: Infinity, duration: 2 } }}
            onClick={() => scrollToSection("about")}
          >
            MyPortfolio
          </motion.h1>
          <ul className="hidden md:flex space-x-6">
            {navItems.map(({ id, label }) => (
              <li
                key={id}
                onClick={() => scrollToSection(id)}
                className="cursor-pointer hover:text-indigo-400 transition"
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="pt-24 bg-gray-900 text-white min-h-screen font-sans">
        {/* Hero Section */}
        <section className="h-[80vh] flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-bold mb-4 text-center"
          >
            Hello, I'm <span className="text-indigo-400">Geetika</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-xl md:text-2xl text-gray-300 text-center px-4"
          >
            Aspiring Front-End Developer | Creative Thinker | Hackathon Enthusiast
          </motion.p>
        </section>

        {/* About */}
        <section id="about" className="p-10 max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 border-b-2 border-indigo-500 pb-2">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            <h5> <strong>Hello! I'm <span className="text-indigo-400 font-semibold">Geetika</span>.</strong></h5>  <br />
I am a motivated and detail-oriented aspiring Frontend Developer with strong expertise in HTML, CSS, and JavaScript, complemented by a solid foundation in data structures and algorithms <strong>DSA</strong> through competitive programming. My coding skills enable me to write efficient, clean, and scalable code, ensuring high-performance and user-friendly web applications.

Participating in various hackathons has strengthened my problem-solving abilities and taught me how to deliver innovative solutions under pressure while collaborating effectively within teams. I am passionate about applying my DSA knowledge to optimize frontend performance and enhance application logic.

I continuously seek to improve by learning modern frontend frameworks and best practices in UI/UX design. With a balanced focus on both frontend development and algorithmic thinking, I am eager to contribute to a dynamic team and build impactful, efficient, and responsive web applications.
          </p>
        </section>

        {/* Projects */}
        <section id="projects" className="p-10 bg-gray-800 rounded-lg max-w-5xl mx-auto my-8">
          <h2 className="text-4xl font-bold mb-6 border-b-2 border-purple-500 pb-2">Projects</h2>
          <div className="space-y-6">
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold">Way2Go </h3><h5>~(Academic Project)</h5>
              <p className="text-gray-300 mt-2">
                A smart tourist travel app for Visakhapatnam. Users can view government buses to popular tourist locations with live map support and distance info. Built using HTML, CSS, JS, and integrated with real-time APIs.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold">SmartShop </h3><h5> ~ (Hackathon Project)</h5>
              <p className="text-gray-300 mt-2">
                A platform where small vendors can display their shops, update timings, and let customers discover and rate them. Built using React, Firebase, and Tailwind CSS.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold">Expense Tracker</h3>
              <p className="text-gray-300 mt-2">
                Developed a responsive web application to track personal expenses with categories, summaries, and monthly reports.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold">Real Time Chat Application</h3>
              <p className="text-gray-300 mt-2">
                A real-time messaging app allowing users to join chat rooms and exchange messages instantly. Built using WebSockets for live communication and React for dynamic user interface.
              </p>
            </div>
            
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="p-10 max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 border-b-2 border-indigo-400 pb-2">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {["HTML", "CSS", "JavaScript", "React", "Tailwind", "Firebase", "Git", "Node.js"].map((skill, i) => (
              <div key={i} className="bg-indigo-600 px-4 py-2 rounded-full text-center text-white shadow-md hover:scale-105 transition">
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Coding Profiles */}
        <section id="coding" className="p-10 bg-gray-800 rounded-lg max-w-5xl mx-auto my-8">
          <h2 className="text-4xl font-bold mb-6 border-b-2 border-yellow-400 pb-2">Coding Profiles</h2>
          <ul className="space-y-4 text-lg text-blue-300">
            <li>
              🔗 <a href="https://leetcode.com/u/geetika0911/" target="_blank" rel="noopener noreferrer" className="hover:underline">LeetCode Profile</a>
            </li>
            <li>
              🔗 <a href="https://github.com/G-Geetika" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub Profile</a>
            </li>
            <li>
              🔗 <a href="https://www.codechef.com/users/geetika0911" target="_blank" rel="noopener noreferrer" className="hover:underline">CodeChef Profile</a>
            </li>
          </ul>
        </section>

        {/* Contact */}
        <section id="contact" className="p-10 max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 border-b-2 border-pink-500 pb-2">Contact Me</h2>
          <p className="text-gray-300 mb-4 text-lg">
            I'm always open to discussing new opportunities or collaborations. Feel free to reach out!
          </p>
          <div className="text-blue-400 mb-3">
            📧 <a href="mailto:your.email@example.com" className="hover:underline">your.email@example.com</a>
          </div>
          <div className="text-blue-400">
            🔗 <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-950 text-gray-400 text-sm">
        © G.Geetika. All Rights Reserved.
      </footer>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
