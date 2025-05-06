import React from "react";
import { Typography, Button, Card } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-white/5 bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-gray-900/95 to-blue-gray-900/100" />

      <div className="relative mx-auto px-8 pb-8 pt-16">
        <Card className="rounded-xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <Typography
                variant="h5"
                className="mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text font-bold text-transparent"
              >
                Atsiliepimu projektas
              </Typography>
              <Typography className="mb-6 font-normal text-blue-gray-100">
                Making the world a better place through innovative solutions.
              </Typography>
              <div className="flex gap-4">
                {[
                  {
                    icon: faFacebookF,
                    color: "hover:text-blue-500",
                    url: "https://www.facebook.com/",
                  },
                  {
                    icon: faTwitter,
                    color: "hover:text-blue-400",
                    url: "https://x.com/",
                  },
                  {
                    icon: faInstagram,
                    color: "hover:text-pink-500",
                    url: "https://www.instagram.com/",
                  },
                  {
                    icon: faLinkedin,
                    color: "hover:text-blue-600",
                    url: "https://www.linkedin.com/",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    className={`rounded-lg bg-white/5 p-2 ${social.color} hover:shadow-current/20 transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:shadow-lg`}
                  >
                    <FontAwesomeIcon icon={social.icon} className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <Typography
                variant="h5"
                className="mb-6 font-semibold text-blue-500"
              >
                Quick Links
              </Typography>
              <ul className="space-y-3">
                {["About Us", "Services", "Blog", "Contact"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="group flex items-center gap-2 text-blue-gray-100 transition-all duration-300 hover:translate-x-2 hover:text-blue-500"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 transition-transform group-hover:scale-150"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Typography
                variant="h5"
                className="mb-6 font-semibold text-blue-500"
              >
                Contact Info
              </Typography>
              <div className="space-y-4">
                {[
                  { icon: EnvelopeIcon, text: "info@company.com" },
                  { icon: PhoneIcon, text: "+1 234 567 8900" },
                  { icon: MapPinIcon, text: "123 Business Ave, Suite 100" },
                ].map((contact, index) => (
                  <div key={index} className="group flex items-center gap-3">
                    <div className="rounded-lg bg-blue-50 p-2 transition-colors group-hover:bg-blue-100">
                      <contact.icon className="h-5 w-5 text-blue-500" />
                    </div>
                    <Typography className="font-normal text-blue-gray-700 transition-colors group-hover:text-blue-500">
                      {contact.text}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Typography
                variant="h5"
                className="mb-6 font-semibold text-white"
              >
                Newsletter
              </Typography>
              <Typography className="mb-4 text-blue-gray-100">
                Stay updated with our latest news and updates.
              </Typography>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-blue-gray-400 transition-all focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
                <Button
                  size="xl"
                  className="transform bg-gradient-to-r from-blue-500 to-blue-700 text-lg transition-all duration-300 hover:-translate-y-1 hover:from-blue-600 hover:to-blue-800 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          {/* Copyright section remains unchanged */}
          <div className="mt-16 border-t border-white/10 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <Typography className="text-center font-normal text-blue-gray-100">
                &copy; {year} Company Name. All rights reserved.
              </Typography>
              <div className="flex gap-8">
                {["Terms & Conditions", "Privacy Policy"].map((text) => (
                  <Typography
                    key={text}
                    as="a"
                    href="#"
                    className="font-normal text-blue-gray-100 transition-colors hover:text-white"
                  >
                    {text}
                  </Typography>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="group fixed bottom-8 right-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 p-3 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/25"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 transform transition-transform group-hover:scale-110"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
}

export default Footer;
