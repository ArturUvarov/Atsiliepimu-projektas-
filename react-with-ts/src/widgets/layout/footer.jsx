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
    <footer className="relative w-full bg-cover bg-center">
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
                  { icon: faFacebookF, color: "hover:text-blue-500" },
                  { icon: faTwitter, color: "hover:text-blue-400" },
                  { icon: faInstagram, color: "hover:text-pink-500" },
                  { icon: faLinkedin, color: "hover:text-blue-600" }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href="#"
                    className={`p-2 bg-white/5 rounded-lg ${social.color} transition-all duration-300 hover:scale-110`}
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
                      className="text-blue-gray-100 hover:text-blue-500 transition-all duration-300 flex items-center gap-2 hover:translate-x-2"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"></span>
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
                  className="px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-blue-gray-400 focus:outline-none focus:border-blue-500 transition-all"
                />
                <Button 
                  size="xl"
                  className="bg-gradient-to-r from-blue-500 to-blue-700 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-lg"
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
    </footer>
  );
}

export default Footer;
