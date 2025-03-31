import React from "react";
import { Typography, Button, Card } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-cover bg-center bg-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-gray-900/95 to-blue-gray-900/100" />
      
      <div className="relative mx-auto px-8 pt-16 pb-8">
        <Card className="backdrop-blur-xl bg-white/10 p-8 rounded-xl border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <Typography variant="h5" className="mb-6 font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Atsiliepimu projektas
              </Typography>
              <Typography className="mb-6 font-normal text-blue-gray-100">
                Making the world a better place through innovative solutions.
              </Typography>
              <div className="flex gap-4">
                {[
                  { icon: faFacebookF, color: "hover:text-blue-500" , url:"https://www.facebook.com/" },
                  { icon: faTwitter, color: "hover:text-blue-400", url:"https://x.com/" },
                  { icon: faInstagram, color: "hover:text-pink-500", url:"https://www.instagram.com/" },
                  { icon: faLinkedin, color: "hover:text-blue-600", url: "https://www.linkedin.com/" }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    target="_blank" 
                    className={`p-2 bg-white/5 rounded-lg ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-current/20 hover:bg-white/10`}
                  >
                    <FontAwesomeIcon icon={social.icon} className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <Typography variant="h5" className="mb-6 font-semibold text-blue-500">
                Quick Links
              </Typography>
              <ul className="space-y-3">
                {["About Us", "Services", "Blog", "Contact"].map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-blue-gray-100 hover:text-blue-500 transition-all duration-300 flex items-center gap-2 hover:translate-x-2 group"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 group-hover:scale-150 transition-transform"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Typography variant="h5" className="mb-6 font-semibold text-blue-500">
                Contact Info
              </Typography>
              <div className="space-y-4">
                {[
                  { icon: EnvelopeIcon, text: "info@company.com" },
                  { icon: PhoneIcon, text: "+1 234 567 8900" },
                  { icon: MapPinIcon, text: "123 Business Ave, Suite 100" }
                ].map((contact, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                      <contact.icon className="h-5 w-5 text-blue-500" />
                    </div>
                    <Typography 
                      className="font-normal text-blue-gray-700 group-hover:text-blue-500 transition-colors"
                    >
                      {contact.text}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Typography variant="h5" className="mb-6 font-semibold text-white">
                Newsletter
              </Typography>
              <Typography className="mb-4 text-blue-gray-100">
                Stay updated with our latest news and updates.
              </Typography>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-blue-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
                <Button 
                  size="xl"
                  className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-lg"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          {/* Copyright section remains unchanged */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <Typography className="text-center font-normal text-blue-gray-100">
                &copy; {year} Company Name. All rights reserved.
              </Typography>
              <div className="flex gap-8">
                {["Terms & Conditions", "Privacy Policy"].map((text) => (
                  <Typography
                    key={text}
                    as="a"
                    href="#"
                    className="font-normal text-blue-gray-100 hover:text-white transition-colors"
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
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1 group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 transform group-hover:scale-110 transition-transform"
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
