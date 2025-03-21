import React from "react";
import { Typography } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {config} from '@fortawesome/fontawesome-svg-core';
import {faFacebookF,faTwitter,faInstagram,faLinkedin} from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full pt-8 pb-6 mt-8 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-3">
        Projektas 
          <div className="w-full px-4 lg:w-4/12">
            <Typography variant="h4" className="mb-4 font-bold">
              Company Name
            </Typography>
            <Typography className="text-lg font-normal text-blue-gray-500">
              Making the world a better place through innovative solutions.
            </Typography>
            <div className="flex mt-6 space-x-4">
              <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors">
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600 transition-colors">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-700 transition-colors">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="#" className="text-blue-700 hover:text-blue-900 transition-colors">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full px-4 lg:w-2/12">
            <Typography variant="h5" className="mb-4 font-bold">
              Quick Links
            </Typography>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-gray-500 hover:text-blue-gray-700 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-gray-500 hover:text-blue-gray-700 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-gray-500 hover:text-blue-gray-700 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-gray-500 hover:text-blue-gray-700 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full px-4 lg:w-3/12">
            <Typography variant="h5" className="mb-4 font-bold">
              Contact Info
            </Typography>
            <Typography className="block mb-2 text-blue-gray-500">
              Email: info@company.com
            </Typography>
            <Typography className="block mb-2 text-blue-gray-500">
              Phone: +1 234 567 8900
            </Typography>
            <Typography className="text-blue-gray-500">
              Address: 123 Business Ave, Suite 100
              <br />
              New York, NY 10001
            </Typography>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-wrap items-center justify-center mt-8 md:justify-between">
          <Typography className="text-center font-normal text-blue-gray-500">
            &copy; {year} Company Name. All rights reserved.
          </Typography>
          <div className="flex gap-4">
            <Typography as="a" href="#" className="font-normal text-blue-gray-500 hover:text-blue-gray-700 transition-colors">
              Terms & Conditions
            </Typography>
            <Typography as="a" href="#" className="font-normal text-blue-gray-500 hover:text-blue-gray-700 transition-colors">
              Privacy Policy
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
