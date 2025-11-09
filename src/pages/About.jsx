import React from 'react'
import { motion } from 'framer-motion'
import { Target, Users, Award, Clock } from 'lucide-react';
import Hero from '../components/layout/Hero';

const About = () => {
  const stats = [
    // { number: '500+', label: 'Happy Customers' },
    // { number: '5+', label: 'Years Experience' },
    { number: '1-1', label: 'Consultation' },
    { number: '24/7', label: 'Support' },
  ]

  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Every detail matters. We approach each project with meticulous attention to precision and quality.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Your vision drives our work. We listen, understand, and deliver results that exceed expectations.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We use only premium materials and cutting-edge techniques to ensure exceptional results.'
    },
    {
      icon: Clock,
      title: 'Reliability',
      description: 'On-time delivery and consistent quality you can count on, project after project.'
    }
  ]

  return (
    <div className="pt-20 md:pt-32">
      <Hero 
        title={<>About <span className="gradient-text">NoirAutoSpa</span></>}
        subtitle="Where passion for automotive excellence meets unparalleled craftsmanship. We're not just a service provider – we're your partners in transforming your vehicle into a masterpiece."
      />

      {/* Story Section */}
      <section className="section-padding bg-noir-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-display font-bold mb-6">Our Story</h2>
              <p className="text-gray-300 mb-6">
                Founded in 2025, NoirAutoSpa began as a vision to redefine automotive care and customization. 
                What started as a small operation driven by passion for automotive excellence has grown into 
                a premier destination for vehicle transformation.
              </p>
              <p className="text-gray-300 mb-6">
                Our founder recognized a gap in the market for truly premium automotive services that combined 
                cutting-edge technology with artisanal craftsmanship. Today, we continue to push boundaries 
                and set new standards in the industry.
              </p>
              <p className="text-gray-300">
                Every project we undertake is a testament to our commitment to excellence, innovation, and 
                customer satisfaction. We don't just work on cars – we create automotive art.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-golden-400/20 to-golden-600/20 rounded-2xl p-8 border border-golden-400/30">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                      <div className="text-gray-300 text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-noir-950">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-300">
              To transform vehicles into expressions of individuality while providing unmatched quality, 
              service, and innovation in automotive care and customization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-noir-800 p-6 rounded-lg text-center hover:bg-noir-700 transition-colors duration-300"
              >
                <value.icon className="w-12 h-12 text-golden-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-noir-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Expert <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our certified professionals bring years of experience and passion to every project, 
              ensuring your vehicle receives the care and attention it deserves.
            </p>
          </motion.div>

          <div className="bg-noir-800 rounded-2xl p-8 md:p-12 border border-golden-400/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Certified Excellence</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-golden-400 rounded-full mr-3"></div>
                    Professional certification in vehicle wrapping and protection
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-golden-400 rounded-full mr-3"></div>
                    Ongoing training in latest techniques and technologies
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-golden-400 rounded-full mr-3"></div>
                    Years of hands-on experience with luxury and exotic vehicles
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-golden-400 rounded-full mr-3"></div>
                    Commitment to continuous learning and improvement
                  </li>
                </ul>
              </div>
              <div className="text-center lg:text-right">
                <div className="text-6xl font-bold gradient-text mb-2">100%</div>
                <div className="text-xl text-gray-300">Customer Satisfaction</div>
                <p className="text-gray-400 mt-4">
                  Every team member is dedicated to delivering exceptional results 
                  that exceed your expectations.
                </p>
              </div>
            </div>
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
              Experience the NoirAutoSpa Difference
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who trust us with their most valuable vehicles. 
              Let's transform your car into something extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Start Your Project
              </a>
              <a href="/services" className="btn-secondary">
                View Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About