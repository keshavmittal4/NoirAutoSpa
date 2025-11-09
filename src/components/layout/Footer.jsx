import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'
import logo from '../../assets/IMG_2117.JPG'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Vehicle Wrapping', path: '/services' },
      { name: 'Auto Detailing', path: '/services' },
      { name: 'Window Tinting', path: '/services' },
      { name: 'Paint Protection', path: '/services' }
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Process', path: '/services' },
      { name: 'Portfolio', path: '/services' },
      { name: 'Contact', path: '/contact' }
    ],
    support: [
      { name: 'Get Quote', path: '/contact' },
      { name: 'FAQ', path: '/contact' },
      { name: 'Warranties', path: '/about' },
      { name: 'Maintenance', path: '/services' }
    ]
  }

  const socialLinks = [
    // { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/noir.auto.spa/', name: 'Instagram' },
    // { icon: Twitter, href: '#', name: 'Twitter' },
    // { icon: Linkedin, href: '#', name: 'LinkedIn' }
  ]

  const contactInfo = [
    {
      icon: MapPin,
      text: 'Unit #15-5732 Hwy 7 Woodbridge, ON L4L2Z9'
    },
    {
      icon: Phone,
      text: '(647) 632-3260'
    },
    {
      icon: Mail,
      text: 'noirautospacanada@gmail.com'
    }
  ]

  return (
    <footer className="bg-noir-950 border-t border-noir-800">
      {/* Main Footer Content */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Link to="/" className="flex items-center mb-6">
              <img 
                src={logo} 
                alt="NoirAutoSpa Logo" 
                className="h-12 w-auto object-contain"
              />
            </Link>
            
            <p className="text-gray-300 mb-6 max-w-sm">
              Transforming vehicles with premium wrapping, detailing, and protection services. 
              Where luxury meets precision in automotive care.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-3 text-gray-300">
                  <info.icon className="w-5 h-5 text-golden-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{info.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-golden-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-golden-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white">Support</h3>
            <ul className="space-y-3 mb-8">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-golden-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-white">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-noir-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-golden-400 hover:bg-noir-700 transition-colors duration-200 "
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Newsletter Section */}
      {/* <div className="border-t border-noir-800">
        <div className="container-custom py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-noir-900 rounded-xl p-6 md:p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
                <p className="text-gray-300 text-sm">
                  Get the latest news, special offers, and automotive care tips delivered to your inbox.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-noir-800 border border-noir-700 rounded-lg focus:border-golden-400 focus:outline-none transition-colors text-white placeholder-gray-400"
                />
                <button className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div> */}

      {/* Bottom Footer */}
      <div className="border-t border-noir-800">
        <div className="container-custom py-2">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 text-sm text-center md:text-left"
            >
              <p>
                © {currentYear} NoirAutoSpa. All rights reserved. 
                <span className="mx-2">|</span>
                {/* <Link to="/privacy" className="hover:text-golden-400 transition-colors">
                  Privacy Policy
                </Link>
                <span className="mx-2">|</span>
                <Link to="/terms" className="hover:text-golden-400 transition-colors">
                  Terms of Service
                </Link> */}
              </p>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-400 text-sm"
            >
              <p>Designed & Built with ❤️ by Keshav Mittal</p>
            </motion.div> */}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer