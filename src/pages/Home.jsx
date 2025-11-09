import React, { Suspense } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Sparkles, Award, Users } from 'lucide-react';
import Hero from '../components/layout/Hero';
import windowTint from '../assets/windowTint.jpg'
import ceramicCoating from '../assets/ceramicCoating.jpg'
import paintProtection from '../assets/ppf.jpg'
import customStyling from '../assets/customDecals.jpg'


// Hero Section
const HeroSection = () => {
  const images = [fordImage, heroImage];
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="NoirAutoSpa - Premium Ford Detailing"
            className={`w-full h-full object-cover scale-105 animate-slow-zoom absolute transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-noir-950 via-noir-950/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-noir-950/80 via-transparent to-noir-950/40"></div>
      </div>
      
      {/* 3D Car - positioned on the right side */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block opacity-60">
        <Hero3D />
      </div>
      
      <div className="relative z-20 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-white">Premium</span>{' '}
              <span className="gradient-text">Auto Spa</span>
              <br />
              <span className="text-white">Experience</span>
            </motion.h1>
            
            {/* <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transform your vehicle with our premium window tinting, ceramic coating, paint protection, and custom styling services. Where luxury meets precision.
            </motion.p> */}
            
            {/* Key Features */}
            <motion.div
              className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {[
                'Ceramic Coating',
                'Paint Protection',
                'Window Tints',
                'Custom Styling'
              ].map((feature, idx) => (
                <div 
                  key={idx}
                  className="bg-noir-900/50 backdrop-blur-sm border border-golden-400/20 px-4 py-2 rounded-lg text-sm"
                >
                  <span className="text-golden-400">✓</span> {feature}
                </div>
              ))}
            </motion.div>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/services" className="btn-primary group">
                Explore Services
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Get Free Quote
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Additional Image Card (visible on mobile/tablet) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:hidden relative"
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-golden-400/30 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&h=800&fit=crop&q=80"
                alt="Premium Car Care"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-golden-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-golden-400 rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  )
}

// Features Section
const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Premium Protection",
      description: "Advanced paint protection and ceramic coatings to keep your vehicle looking pristine."
    },
    {
      icon: Sparkles,
      title: "Expert Detailing",
      description: "Meticulous attention to detail with professional-grade products and techniques."
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "We stand behind our work with comprehensive warranties and quality assurance."
    },
    {
      icon: Users,
      title: "Trusted Professionals",
      description: "Certified technicians with years of experience in automotive care and customization."
    }
  ]

  return (
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
            Why Choose <span className="gradient-text">NoirAutoSpa</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the difference with our premium automotive services, where every detail matters 
            and excellence is our standard.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-noir-800 p-6 rounded-lg hover:bg-noir-700 transition-colors duration-300"
            >
              <feature.icon className="w-12 h-12 text-golden-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// CTA Section
const CTASection = () => {
  return (
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
            Get started with a free consultation and discover how we can enhance 
            your vehicle's appearance and protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Schedule Consultation
            </Link>
            <Link to="/services" className="btn-secondary">
              View Our Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Services Preview Section
const ServicesPreview = () => {
  const services = [
    {
      title: 'Window Tints',
      description: 'Premium automotive window tinting for privacy, UV protection, and enhanced aesthetics with professional-grade films.',
      features: ['UV Protection up to 99%', 'Heat Reduction Technology', 'Professional Installation'],
      image: windowTint,
      price: 'From $250'
    },
    {
      title: 'Ceramic Coating',
      description: 'Advanced nano-ceramic coating technology providing ultimate protection and brilliant shine for years.',
      features: ['9H Hardness Protection', 'Hydrophobic Surface', '5-7 Year Durability'],
      image: ceramicCoating,
      price: 'From $800'
    },
    {
      title: 'Paint Protection Film',
      description: 'Premium PPF installation protecting your paint from rock chips, scratches, and environmental damage.',
      features: ['Self-Healing Technology', 'Rock Chip Protection', '10+ Year Warranty'],
      image: paintProtection,
      price: 'From $1,500'
    },
    {
      title: 'Custom Styling',
      description: 'Custom racing stripes and vehicle graphics that add personality and style to your ride.',
      features: ['Custom Color Options', 'Precision Alignment', 'Premium Vinyl Materials'],
      image: customStyling,
      price: 'From $150'
    }
  ]

  return (
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
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From protection to styling, we offer comprehensive automotive services to enhance and preserve your vehicle.
          </p>
        </motion.div>

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
                      {/* {service.price} */}
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
                    {service.features.map((feature, idx) => (
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
                    <Link 
                      to="/services" 
                      className="btn-secondary"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link to="/services" className="btn-primary text-lg px-8 py-4">
            View All Services
            <ArrowRight className="inline-block ml-2" size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// Stats Section
const StatsSection = () => {
  const stats = [
    { number: '500+', label: 'Happy Customers', icon: Users },
    { number: '1000+', label: 'Vehicles Serviced', icon: Award },
    { number: '5+', label: 'Years Experience', icon: Shield },
    { number: '100%', label: 'Satisfaction Rate', icon: Sparkles }
  ]

  return (
    <section className="section-padding bg-noir-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <stat.icon className="w-12 h-12 text-golden-400 mx-auto mb-4" />
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Michael Rodriguez',
      role: 'BMW M4 Owner',
      text: 'The ceramic coating they applied looks incredible! My car shines like never before and the water just beads right off. Worth every penny.',
      rating: 5
    },
    {
      name: 'Sarah Chen',
      role: 'Tesla Model 3 Owner',
      text: 'Professional window tinting service with perfect results. The team was knowledgeable and the installation was flawless. Highly recommend!',
      rating: 5
    },
    {
      name: 'James Williams',
      role: 'Porsche 911 Owner',
      text: 'Had PPF installed on the front end of my Porsche. The protection is amazing and you can\'t even tell it\'s there. Excellent craftsmanship!',
      rating: 5
    }
  ]

  return (
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
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. See what our satisfied customers have to say about our services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-noir-900 p-8 rounded-xl border border-noir-800 hover:border-golden-400/30 transition-colors"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Sparkles key={i} className="w-5 h-5 text-golden-400 fill-golden-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-400">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Home = () => {
  const heroTitle = (
    <>
      <span className="text-white">Premium</span> <span className="gradient-text">Auto Spa</span> <br />
      <span className="text-white">Experience</span>
    </>
  );

  const heroSubtitle = `Transform your vehicle with our premium window tinting, ceramic coating, paint protection, and custom styling services. Where luxury meets precision.`;
  return (
    <div className="pt-20 md:pt-32">
      <Hero title={heroTitle} subtitle={heroSubtitle}>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link to="/services" className="btn-primary group">
            Explore Services
            <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Link>
          <Link to="/contact" className="btn-secondary">
            Get Free Quote
          </Link>
        </motion.div>
      </Hero>
      {/* <StatsSection /> */}
      <FeaturesSection />
      <ServicesPreview />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}

export default Home