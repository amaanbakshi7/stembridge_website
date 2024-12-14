import './index.css';
import React from "react";
import FeaturesCarousel from './components/features-carousel';
import TeamSection from './components/team-section';
import { ReactTyped as Typed } from "react-typed";
import AnchorLink from "react-anchor-link-smooth-scroll"
const App: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navbar */}
      <nav className="bg-gray-950 bg-opacity-90 fixed w-full top-0 z-20 shadow-md">
  <div className="container mx-auto px-6 py-4 flex justify-between items-center">
    {/* Logo */}
    <AnchorLink
      href="#hero"
      className="text-purple-500 text-3xl font-extrabold tracking-wide hover:text-purple-400 transition"
    >
      STEMBridge
    </AnchorLink>
    {/* Navigation Links */}
    <div className="space-x-6 text-lg">
      <AnchorLink
        href="#about"
        className="text-gray-300 hover:text-purple-400 transition duration-300"
      >
        About
      </AnchorLink>
      <AnchorLink
        href="#features"
        className="text-gray-300 hover:text-purple-400 transition duration-300"
      >
        Features
      </AnchorLink>
      <AnchorLink
        href="#team"
        className="text-gray-300 hover:text-purple-400 transition duration-300"
      >
        Team
      </AnchorLink>
      <AnchorLink
        href="#contact"
        className="text-gray-300 hover:text-purple-400 transition duration-300"
      >
        Contact
      </AnchorLink>
    </div>
  </div>
</nav>



      {/* Hero Section */}
      <header className="relative h-[75vh] w-full overflow-hidden"> {/* Shortened header */}
        {/* Blurred Background */}
        <div
          className="absolute inset-0 bg-cover bg-center blur-sm"
          style={{
            backgroundImage: `url('https://advochild.org/wp-content/uploads/2021/05/AdobeStock_166557610-scaled.jpeg')`,
          }}
        ></div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        {/* Centered Text */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl md:text-8xl font-extrabold text-purple-700 mb-6">
            Welcome to <span className="text-white">STEMBridge</span>
          </h1>
          <Typed
            className="text-xl md:text-3xl text-gray-300"
            strings={[
              "A welcoming community where everyone belongs.",
              "Build a professional network to shape your future.",
              "Personalized one-on-one guidance for your growth.",
              "Gain cutting-edge skills to stand out and succeed.",
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
          <a
            href="#about"
            className="mt-8 bg-purple-700 text-black py-3 px-8 rounded-full font-semibold shadow-lg hover:bg-purple-600 transition"
          >
            Learn More
          </a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-black">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          {/* Image on the Left */}
          <div className="w-full md:w-1/2">
            <img
              src="https://us.images.westend61.de/0001152500pw/portrait-confident-junior-high-school-students-in-classroom-CAIF22925.jpg"
              alt="STEMBridge Kids"
              className="w-full h-full object-cover rounded-sm"
            />
          </div>
          {/* Text on the Right */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-12 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-6 text-purple-700">About Us</h2>
            <p className="text-lg text-gray-300 mb-4">
            STEMBridge is an after-school club where students can learn valuable coding and STEM skills in a welcoming and inclusive environment.
             Our goal is to create opportunities for underrepresented communities to engage in STEM.
          

            </p>
            <p className="text-lg text-gray-300 mb-4">

            We’re more than just a club—we’re a community. We offer personalized one-on-one tutoring, hands-on learning experiences, and access to a growing network of professional alumni who are here to support and guide you.

            </p>
            <p className="text-lg text-gray-300">
              
            When you join STEMBridge, you’ll gain technical skills, build confidence, and connect with like-minded people who are passionate about STEM. Together, we hope make STEM more inclusive for all!



            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <div id ="features">
      <FeaturesCarousel />

      </div>

      {/* Team Section */}
      <div id ="team">

      <TeamSection />
      </div>

      {/* Call-to-Action Section */}
      <section id="contact" className="bg-gray-950 py-20">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-5xl font-bold mb-8 text-purple-500">
      Ready to Join the STEM Revolution?
    </h2>
    <p className="text-xl mb-8 text-gray-300 leading-relaxed">
      Enroll in the nearest STEMBridge chapter and empower your kids with the skills and confidence to excel in STEM.
    </p>
    <a
      href="#"
      className="inline-block bg-purple-500 text-black py-4 px-10 rounded-full font-semibold shadow-lg hover:bg-purple-600 hover:scale-105 transform transition duration-300"
    >
      Find a Chapter
    </a>
    <div className="mt-10">
      <p className="text-lg text-gray-400 mb-4">
        No chapter near you?{" "}
        <a
          href="mailto:contact@stembridge.com"
          className="text-purple-400 hover:text-purple-500 transition"
        >
          Contact us to open a chapter in your area!
        </a>
      </p>
    </div>
    <div className="mt-10">
      <p className="text-gray-400">Have questions? Reach out to us at:</p>
      <a
        href="mailto:contact@stembridge.com"
        className="text-purple-400 hover:text-purple-500 transition"
      >
        contact@stembridge.com
      </a>
    </div>
  </div>
</section>


      {/* Footer Section */}
      <footer className="bg-black text-gray-400 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-2">&copy; 2024 STEMBridge. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
