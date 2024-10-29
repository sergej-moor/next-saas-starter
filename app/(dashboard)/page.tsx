"use client";

import { useState } from "react";
import {
  Menu,
  X,
  Layers,
  MousePointer,
  Sliders,
  Eye,
  FileDown,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    icon: Layers,
    title: "Easy 2D to 3D Conversion",
    description: "Seamlessly transform your vector graphics.",
  },
  {
    icon: MousePointer,
    title: "Intuitive Interface",
    description: "User-friendly design for all skill levels.",
  },
  {
    icon: Sliders,
    title: "Customizable Settings",
    description: "Tailor your 3D models with various parameters.",
  },
  {
    icon: Eye,
    title: "Real-Time Preview",
    description: "Instant visualization of changes.",
  },
  {
    icon: FileDown,
    title: "Export Options",
    description: "Multiple formats for versatile use.",
  },
];

const footerLinks = {
  legal: [
    { name: "Imprint", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
};

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/*       <header className="flex justify-between items-center p-4 relative z-50 border-b border-[#CADD57]">
        <h1 className="text-2xl font-bold">Resend</h1>
        <button
          className="p-2 rounded-md bg-[#CADD57] text-black"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </header> */}

      {/* Full-screen Navigation Menu */}
      {/*      <div
        className={`fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center transition-opacity duration-300 ease-in-out z-40 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col space-y-6 text-center">
          <Link
            href="#"
            className="text-2xl font-semibold hover:text-[#CADD57]"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-2xl font-semibold hover:text-[#CADD57]"
          >
            Features
          </Link>
          <Link
            href="#"
            className="text-2xl font-semibold hover:text-[#CADD57]"
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="text-2xl font-semibold hover:text-[#CADD57]"
          >
            Contact
          </Link>
        </nav>
      </div> */}

      <main className="flex-grow flex flex-col">
        {/* Hero Section */}
        <section className="flex-grow flex flex-col lg:flex-row items-center justify-center px-4 lg:px-20 xl:px-32 py-12 lg:py-0">
          <div className="lg:w-1/2 text-center lg:text-left lg:pr-12">
            <Link
              href="#"
              className="inline-block mb-8 px-6 py-2 rounded-full bg-[#CADD57] text-black font-semibold hover:bg-opacity-90 transition-colors"
            >
              New Schedule API &gt;
            </Link>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
              Elevate your
              <br />
              graphics
            </h2>
            <p className="mb-8 text-gray-400 max-w-md mx-auto lg:mx-0">
              The best way to reach humans instead of spam folders. Deliver
              transactional and marketing emails at scale.
            </p>
            <Link
              href="#"
              className="inline-block px-8 py-3 bg-[#CADD57] text-black rounded-full font-semibold text-lg hover:bg-opacity-90 transition-colors"
            >
              Get Started &gt;
            </Link>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="3D Cube"
              width={400}
              height={400}
              className="mx-auto"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 lg:px-20 xl:px-32 bg-black">
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-12">
            Features
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 bg-gray-900 rounded-lg"
              >
                <feature.icon className="w-8 h-8 text-[#CADD57] mb-3" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* CTA Section */}
      <section className="bg-[#CADD57] py-12 px-4 lg:px-20 xl:px-32">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
            Ready to Elevate Your Designs? Start Creating in 3D Today!
          </h2>
          <Link
            href="#"
            className="inline-block px-8 py-3 bg-black text-white rounded-full font-semibold text-lg hover:bg-opacity-90 transition-colors"
          >
            Get Started for Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-[#CADD57] py-6 px-4 lg:px-20 xl:px-32 text-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <h2 className="text-lg font-bold mb-2 md:mb-0">Dimensio</h2>
            <nav>
              <ul className="flex flex-wrap justify-center md:justify-end gap-6">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#CADD57] transition-colors text-xs"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="text-center text-gray-400 text-xs">
            All rights reserved © 2024
          </div>
        </div>
      </footer>
    </div>
  );
}
