import React from "react";
import { motion } from "framer-motion";
import {
  Building,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

// SlidingBanner Component
function SlidingBanner() {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnuRR7ovBahar7WHq8R5de6Xae-KANYZgnyQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSafqs9BWbR5MsKjK6zf1szWOpjs-NamoGNZg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAX1QVjo026vDTPx-mq5PtRGjiwQmK2sMTPA&s",
  ];

  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[75vh] overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"}`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}

      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col md:flex-row justify-between items-center px-8 py-10 text-white">
        <div className="max-w-md">
          <h2 className="text-3xl font-bold">Construct Your Dream House</h2>
          <p className="text-lg mt-2">Your Home, Our Expertise</p>
          <span className="inline-block bg-yellow-400 text-black px-3 py-1 mt-4 rounded-full font-semibold text-sm">
            🏷️ With Stickers
          </span>
        </div>

        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 w-full md:w-96 mt-6 md:mt-0">
          <h3 className="text-xl font-bold mb-4">Get Instant Quotation</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded-md" />
            <input type="text" placeholder="Contact No" className="w-full px-4 py-2 border rounded-md" />
            <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-md" />
            <input type="text" placeholder="Plot Location" className="w-full px-4 py-2 border rounded-md" />
            <input type="text" placeholder="Plot Size (sq ft)" className="w-full px-4 py-2 border rounded-md" />
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
              Get Instant Quotation
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

// Main App Component
export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-yellow-500 text-white p-4 shadow-md flex justify-between items-center">
        <div className="text-2xl font-bold flex items-center gap-2">
          <Building className="w-6 h-6" />
          VIDWAT ASSOCIATES
        </div>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#about" className="hover:underline">About</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#team" className="hover:underline">Our Team</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Sliding Banner Section */}
      <SlidingBanner />

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Building Dreams, Delivering Excellence
        </motion.h1>
        <p className="text-lg text-gray-300 max-w-xl mx-auto">
          With decades of experience in world-class infrastructure, we turn blueprints into reality.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 md:px-20 bg-gray-70">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="text-gray-700 max-w-6xl">
        At VIDWAT ASSOCIATES, we are a passionate Design & Build company committed to delivering innovative, end-to-end architectural and construction solutions. With a focus on quality, functionality, and aesthetics, we turn visions into reality through meticulous design and efficient execution. Our integrated approach ensures seamless collaboration from concept to completion, creating spaces that inspire and endure.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-semibold mb-8">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-6 border rounded-lg shadow hover:shadow-lg">
            <h3 className="font-bold mb-2">Planning & Architecture</h3>
            <p className="text-gray-600">Comprehensive design solutions that seamlessly integrate functionality, aesthetics, and strategic planning to create impactful built environments</p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg">
            <h3 className="font-bold mb-2">Structural Design & Detailing</h3>
            <p className="text-gray-600">Expertly engineered structural systems with meticulous detailing to ensure integrity, durability, and compliance with industry standards.</p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg">
            <h3 className="font-bold mb-2">Project Management</h3>
            <p className="text-gray-600">End-to-end project oversight ensuring timely delivery, quality execution, and optimal resource coordination across all phases.</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 md:px-20 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-8">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://via.placeholder.com/400x200" alt="Project 1" className="w-full" />
            <div className="p-4">
              <h3 className="font-bold">Metro Rail Project</h3>
              <p className="text-sm text-gray-600">Urban connectivity with cutting-edge design.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://via.placeholder.com/400x200" alt="Project 2" className="w-full" />
            <div className="p-4">
              <h3 className="font-bold">Smart City Development</h3>
              <p className="text-sm text-gray-600">Creating sustainable and connected communities.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://via.placeholder.com/400x200" alt="Project 3" className="w-full" />
            <div className="p-4">
              <h3 className="font-bold">Industrial Complex</h3>
              <p className="text-sm text-gray-600">High-tech industrial zone for global industries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-semibold mb-8">Meet Our Experts</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center shadow rounded-lg p-6 hover:shadow-lg">
            <img className="w-32 h-32 mx-auto rounded-full mb-4" src="https://via.placeholder.com/150" alt="Engineer 1" />
            <h3 className="font-bold text-lg">Er. Sachin Kulkarni</h3>
            <p className="text-gray-600">Senior Civil Engineer</p>
            <p className="text-sm mt-2">Expert in infrastructure design with 15+ years of experience in metro and smart city projects.</p>
          </div>
          <div className="text-center shadow rounded-lg p-6 hover:shadow-lg">
            <img className="w-32 h-32 mx-auto rounded-full mb-4" src="https://via.placeholder.com/150" alt="Engineer 2" />
            <h3 className="font-bold text-lg">Ar. Prajwal Kulkarni</h3>
            <p className="text-gray-600">Chief Architect</p>
            <p className="text-sm mt-2">Leads architectural innovation in commercial and residential construction, with a focus on green design.</p>
          </div>
          <div className="text-center shadow rounded-lg p-6 hover:shadow-lg">
            <img className="w-32 h-32 mx-auto rounded-full mb-4" src="https://via.placeholder.com/150" alt="Engineer 3" />
            <h3 className="font-bold text-lg">Er. Krishna Desai</h3>
            <p className="text-gray-600">Project Manager</p>
            <p className="text-sm mt-2">Expert in managing large-scale industrial and residential projects with a strong technical background.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="text-gray-700">
            <p className="flex items-center gap-2 mb-2"><MapPin className="text-yellow-500" /> Vijayapura,Karnataka,India</p>
            <p className="flex items-center gap-2 mb-2"><Phone className="text-yellow-500" /> +91 78927 87054</p>
            <p className="flex items-center gap-2"><Mail className="text-yellow-500" />vidwatassociates@gmail.com</p>
          </div>
          <form className="flex flex-col gap-4">
            <input className="border p-2 rounded" placeholder="Name" />
            <input className="border p-2 rounded" placeholder="Email" />
            <textarea className="border p-2 rounded" rows={4} placeholder="Message"></textarea>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white p-6 text-center text-sm">
        <div className="flex justify-center gap-4 mb-2">
          <a href="#"><Facebook /></a>
          <a href="#"><Instagram /></a>
          <a href="#"><Linkedin /></a>
        </div>
        <p>© 2025 Vidwat Associates. All rights reserved.</p>
        <p className="mt-2 text-gray-400">This site is currently under construction. Check back soon for updates!</p>
      </footer>

      {/* Scroll-to-top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full shadow-lg transition-all duration-300"
        title="Back to top"
      >
        ↑
      </button>
    </div>
  );
}
