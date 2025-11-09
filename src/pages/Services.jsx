import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Palette, Shield, Droplets, Sun, CheckCircle, ArrowRight } from 'lucide-react';
import Hero from '../components/layout/Hero';
import windowTint from '../assets/windowTint.jpg'
import ceramicCoating from '../assets/ceramicCoating.jpg'
import paintProtection from '../assets/paint-protection-film.jpeg'
import dashCam from '../assets/dashCamInstallation.jpg'
import racingStrips from '../assets/stylingRacingStrips.jpg'
import customStyling from '../assets/stickering-custom-decals.jpg'
import galleryOne from '../assets/customDecals.jpg'
import galleryTwo from '../assets/fordImage.jpg'

const Services = () => {
  const services = [
    {
      icon: Sun,
      title: 'Window Tints',
      description: 'Premium automotive window tinting for privacy, UV protection, and enhanced aesthetics with professional-grade films.',
      features: [
        'Automotive window tinting',
        'UV protection up to 99%',
        'Heat reduction technology',
        'Multiple tint levels available',
        'Lifetime warranty options',
        'Professional installation',
        'No bubbles or peeling',
        'Legal tint levels certified'
      ],
      // price: 'Starting at $250',
      popular: false,
      image: windowTint,
    },
    {
      icon: Shield,
      title: 'Ceramic Coating',
      description: 'Advanced nano-ceramic coating technology providing ultimate protection and brilliant shine for years.',
      features: [
        '9H hardness protection',
        'Hydrophobic surface',
        'UV damage protection',
        'Chemical resistance',
        'Enhanced gloss finish',
        '5-7 year durability',
        'Self-cleaning properties',
        'Oxidation prevention'
      ],
      // price: 'Starting at $800',
      popular: true,
      image: ceramicCoating,
    },
    {
      icon: Shield,
      title: 'Paint Protection Film',
      description: 'Premium PPF installation protecting your paint from rock chips, scratches, and environmental damage.',
      features: [
        'Self-healing technology',
        'Rock chip protection',
        'Scratch resistance',
        '10+ year warranty',
        'Crystal clear finish',
        'Full or partial coverage',
        'Maintains resale value',
        'Professional installation'
      ],
      // price: 'Starting at $1,500',
      popular: true,
      image: paintProtection,
    },
    {
      icon: Palette,
      title: 'Dashcam Installation',
      description: 'Professional dashcam installation with clean wiring and optimal camera placement for maximum coverage.',
      features: [
        'Front and rear cameras',
        'Hardwired installation',
        'Hidden wire routing',
        'Parking mode setup',
        '4K resolution options',
        'GPS tracking available',
        'Cloud storage setup',
        'Professional calibration'
      ],
      // price: 'Starting at $200',
      popular: false,
      image: dashCam
    },
    {
      icon: Droplets,
      title: 'Styling - Racing Strips',
      description: 'Custom racing stripes and vehicle graphics that add personality and style to your ride.',
      features: [
        'Custom color options',
        'Precision alignment',
        'Premium vinyl materials',
        'Racing stripe designs',
        'Hood and roof stripes',
        'Side body accents',
        'Removable application',
        'Professional installation'
      ],
      // price: 'Starting at $350',
      popular: false,
      image: racingStrips,
    },
    {
      icon: Palette,
      title: 'Custom Decals',
      description: 'Personalized vehicle decals and graphics designed to make your vehicle stand out from the crowd.',
      features: [
        'Custom design service',
        'Logo reproduction',
        'Business branding',
        'Personal graphics',
        'High-quality vinyl',
        'Weather resistant',
        'Easy maintenance',
        'Professional application'
      ],
      // price: 'Starting at $150',
      popular: false,
      image: customStyling,
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We discuss your vision, needs, and budget to create the perfect plan for your vehicle.'
    },
    {
      step: '02',
      title: 'Design & Planning',
      description: 'Our team creates detailed plans and designs, ensuring every detail meets your expectations.'
    },
    {
      step: '03',
      title: 'Professional Installation',
      description: 'Expert technicians execute the work with precision using premium materials and tools.'
    },
    {
      step: '04',
      title: 'Quality Inspection',
      description: 'Thorough inspection ensures perfect results before delivering your transformed vehicle.'
    }
  ]

  return (
    <div className="pt-20 md:pt-32">
      <Hero 
        title={<>Our <span className="gradient-text">Services</span></>}
        subtitle="From complete vehicle transformations to protective treatments, we offer comprehensive automotive services designed to enhance and protect your investment."
      />

      {/* Services Grid */}
      <section className="section-padding bg-noir-900">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Image */}
                <motion.div
                  className={`relative group ${
                    index % 2 === 1 ? 'lg:col-start-2' : ''
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-noir-950/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                      <span className="bg-golden-400 text-noir-950 px-4 py-2 rounded-full text-sm font-bold">
                        {service.price}
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  className={`${
                    index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                        {service.title}
                      </h3>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-golden-400 rounded-full mr-4 flex-shrink-0"></div>
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Link 
                        to="/contact" 
                        className="btn-primary group"
                      >
                        Get Quote
                        <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-noir-950">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a proven process to ensure exceptional results and complete customer satisfaction 
              from start to finish.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-golden-400 to-golden-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-noir-950">{step.step}</span>
                  </div>
                  {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-20 w-full h-0.5 bg-gradient-to-r from-golden-400 to-transparent" />
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-noir-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-display font-bold mb-6">
                Additional <span className="gradient-text">Services</span>
              </h2>
              <p className="text-gray-300 mb-8">
                Beyond our core services, we offer specialized treatments and custom solutions 
                to meet your unique automotive needs.
              </p>
              
              <div className="space-y-4">
                {[
                  'Custom vinyl graphics and decals',
                  'Chrome delete and trim wrapping',
                  'Headlight and taillight tinting',
                  'Interior accent wrapping',
                  'Fleet vehicle branding',
                  'Paint touch-up and repair'
                ].map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center text-gray-300"
                  >
                    <CheckCircle className="w-5 h-5 text-golden-400 mr-3" />
                    {service}
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-noir-800 p-8 rounded-2xl border border-golden-400/20"
            >
              <h3 className="text-2xl font-bold mb-6">Why Choose Our Services?</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-golden-400 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Premium Materials</h4>
                    <p className="text-gray-300 text-sm">
                      We use only the highest quality materials from trusted brands like 3M, Avery Dennison, and XPEL.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-golden-400 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Expert Installation</h4>
                    <p className="text-gray-300 text-sm">
                      Our certified technicians have years of experience and ongoing training in the latest techniques.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Sun className="w-6 h-6 text-golden-400 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Comprehensive Warranty</h4>
                    <p className="text-gray-300 text-sm">
                      All our work is backed by comprehensive warranties for your peace of mind.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-noir-950 overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Our <span className="gradient-text">Work Gallery</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our portfolio of stunning automotive transformations and professional installations.
            </p>
          </motion.div>
        </div>

        {/* Horizontal Scrolling Gallery */}
        <div className="relative">
          <motion.div 
            className="flex gap-6 px-4 overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {[
              { url: galleryOne, title: 'Custom Graphics' },
              { url: galleryTwo, title: 'Luxury Sports Car' },
              { url: paintProtection, title: 'Paint Protection' },
              { url: windowTint, title: 'Window Tinting' },
              { url: ceramicCoating, title: 'Ceramic Coating' },
              { url: dashCam, title: 'Dashcam Install' },
              { url: racingStrips, title: 'Racing Stripes' },
              { url: customStyling, title: 'Custom Detailing' }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-80 h-98 relative group overflow-hidden rounded-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-noir-950/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Scroll Indicator */}
          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm">← Scroll horizontally to view more →</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-noir-950 to-noir-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center bg-noir-800 p-8 md:p-12 rounded-2xl border border-golden-400/20"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Transform Your Vehicle?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get a free consultation and quote for any of our services. We'll help you choose 
              the perfect solution for your vehicle and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Get Free Quote
              </Link>
              <Link to="/about" className="btn-secondary">
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services