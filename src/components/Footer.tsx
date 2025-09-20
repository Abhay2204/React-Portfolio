import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, ArrowUp, Phone, MapPin } from 'lucide-react'

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Abhay2204', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/abhaymallick2002', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:abhaymallick.dev@gmail.com', label: 'Email' },
  ]

  const contactInfo = [
    { icon: Mail, text: 'abhaymallick.dev@gmail.com', href: 'mailto:abhaymallick.dev@gmail.com' },
    { icon: Phone, text: '+91-8421822204', href: 'tel:+918421822204' },
    { icon: MapPin, text: 'Chandrapur, Maharashtra', href: '#' },
  ]

  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Abhay Mallick
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Full Stack & Android Developer with hands-on experience in building mobile and web 
              applications using modern technologies. Passionate about creating scalable, user-friendly solutions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <motion.button
                  key={link}
                  whileHover={{ x: 5 }}
                  onClick={() => document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  {link}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-3">
              <p className="text-gray-400 mb-4">
                Ready to start your next project? Let's create something amazing together.
              </p>
              
              {/* Contact Details */}
              <div className="space-y-2">
                {contactInfo.map(({ icon: Icon, text, href }) => (
                  <motion.a
                    key={text}
                    href={href}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    <Icon size={16} />
                    <span>{text}</span>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 pt-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-400 text-sm flex items-center gap-1">
            Made with <Heart className="text-red-500" size={16} /> by Abhay Mallick
          </p>
          
          <div className="flex items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 All rights reserved.
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="p-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition-colors duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer