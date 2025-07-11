import React from "react";
import { Typography, Button, Card } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

const socialLinks = [
  {
    icon: faFacebookF,
    color: "hover:text-blue-500",
    url: "https://www.facebook.com/",
    label: "Facebook",
  },
  {
    icon: faTwitter,
    color: "hover:text-blue-400",
    url: "https://x.com/",
    label: "Twitter",
  },
  {
    icon: faInstagram,
    color: "hover:text-pink-500",
    url: "https://www.instagram.com/",
    label: "Instagram",
  },
  {
    icon: faLinkedin,
    color: "hover:text-blue-600",
    url: "https://www.linkedin.com/",
    label: "LinkedIn",
  },
  {
    icon: faGithub,
    color: "hover:text-gray-900",
    url: "https://github.com/",
    label: "GitHub",
  },
];

const quickLinks = [
  { text: "Apie mus", href: "/about" },
  { text: "Paslaugos", href: "/services" },
  { text: "Dienoraštis", href: "/blog" },
  { text: "Kontaktai", href: "/contact" },
  { text: "FAQ", href: "/faq" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const [email, setEmail] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <footer className="relative w-full bg-cover bg-center" role="contentinfo">
      <div className="absolute inset-0 bg-gradient-to-b" />

      <div className="relative mx-auto px-8 pb-8 pt-16">
        <Card className="rounded-2xl border-2 p-8 shadow-xl backdrop-blur-xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 ">
            {/* Company Info Section */}
            <div>
              <Typography
                variant="h5"
                className="mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-2xl font-bold text-transparent"
              >
                Atsiliepimu projektas
              </Typography>
              <Typography className="mb-6 text-xl font-normal ">
                Padaryti pasaulį geresne vieta pasitelkiant naujoviškus
                sprendimus.
              </Typography>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`rounded-lg bg-white/5 p-2 ${social.color} hover:shadow-current/20 transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:shadow-lg`}
                  >
                    <FontAwesomeIcon icon={social.icon} className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links Section */}
            <div>
              <Typography
                variant="h5"
                className="mb-6 text-2xl font-semibold text-blue-500"
              >
                Greitos nuorodos
              </Typography>
              <nav>
                <ul className="space-y-4">
                  {quickLinks.map((link) => (
                    <li key={link.text}>
                      <a
                        href={link.href}
                        className="group flex items-center gap-2 text-xl transition-all duration-300 hover:translate-x-2 hover:text-blue-500"
                      >
                        <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 transition-transform group-hover:scale-150" />
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Contact Info Section */}
            <div>
              <Typography
                variant="h5"
                className="mb-6 text-2xl font-semibold text-blue-500"
              >
                Kontaktinė informacija
              </Typography>
              <address className="space-y-4 text-xl not-italic">
                {[
                  {
                    icon: EnvelopeIcon,
                    text: "info@company.com",
                    href: "mailto:info@company.com",
                  },
                  {
                    icon: PhoneIcon,
                    text: "+1 234 567 8900",
                    href: "tel:+12345678900",
                  },
                  {
                    icon: MapPinIcon,
                    text: "123 Business Ave, Suite 100",
                    href: "https://maps.google.com",
                  },
                ].map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="group flex items-center gap-3 hover:text-blue-500"
                  >
                    <div className="rounded-lg bg-blue-50 p-2 transition-colors group-hover:bg-blue-100">
                      <contact.icon className="h-5 w-5 text-blue-500" />
                    </div>
                    <Typography className="font-normal transition-colors group-hover:text-blue-500">
                      {contact.text}
                    </Typography>
                  </a>
                ))}
              </address>
            </div>

            {/* Newsletter Section */}
            <div>
              <Typography variant="h5" className="mb-6 text-2xl font-semibold">
                Naujienlaiškis
              </Typography>
              <Typography className="mb-4 text-xl">
                Sekite mūsų naujausias naujienas ir atnaujinimus.
              </Typography>
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="rounded-lg border border-black/10 bg-white/5 px-4 py-2.5 transition-all focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  required
                  aria-label="Email for newsletter"
                />
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className={`h-10transform bg-gradient-to-r from-blue-500 to-blue-700 text-lg transition-all duration-300 hover:-translate-y-1 hover:from-blue-600 hover:to-blue-800 hover:shadow-lg hover:shadow-blue-500/25 ${
                    isSubmitting ? "opacity-75" : ""
                  }`}
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="mt-16 border-t-2 border-white/20 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <Typography className="text-center text-xl font-normal">
                &copy; {year} Atsiliepimu projektas. Visos teisės saugomos.
              </Typography>
              <div className="flex gap-8">
                {["Terms & Conditions", "Privacy Policy", "Cookie Policy"].map(
                  (text) => (
                    <Typography
                      key={text}
                      as="a"
                      href="#"
                      className="text-xl font-normal transition-colors hover:text-blue-500"
                    >
                      {text}
                    </Typography>
                  ),
                )}
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="group fixed bottom-8 right-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 p-3 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/25"
        aria-label="Scroll to top"
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
