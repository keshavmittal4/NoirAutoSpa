import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import Accordion from "../components/Accordion";
import Hero from "../components/layout/Hero";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [status, setStatus] = useState("");
  const captchaRef = useRef(null);
  const [captchaToken, setcaptchaToken] = useState("");
  const [captchaError, setCaptchaError] = useState(false);

  const handleVerify = (captchaToken) => {
    setcaptchaToken(captchaToken);
    setCaptchaError(false);
  };

  const onSubmit = async (data) => {
    if (!captchaToken) {
      setCaptchaError(true);
      return;
    }
    setStatus("Sending...");
    console.log("Form data:", data);

    const formData = new FormData();
    formData.append("access_key", "ab2584b3-d00f-42e8-85c3-c29f528e1d96");
    formData.append("subject", "New Inquiry from Noir Auto Spa Contact Form");
    formData.append("replyto", data.email);

    // custom email message
    const messageBody = `
    
    Name: ${data.firstName} ${data.lastName}
    Email: ${data.email}
    Phone: ${data.phone || "N/A"}
    Service Interested In: ${data.service}
    Vehicle: ${data.vehicle || "N/A"}
    
    Message:
    ${data.message}
    
    — Sent from the Noir Auto Spa Website
    `;

    formData.append("message", messageBody.trim());

    formData.append("h-captcha-response", captchaToken);

    //appending all form fields
    // Object.keys(data).forEach((key) => {
    //   formData.append(key, data[key]);
    // });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        setStatus("Message sent successfully! ✅");
        captchaRef.current.resetCaptcha();
        setcaptchaToken("");
        reset();
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Something went wrong. Please try again later.");
    }

    // Here you would typically send the data to your backend
    // alert("Thank you for your message! We'll get back to you soon.");
    // reset();
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Shop",
      details: ["Unit #15-5732 Hwy 7", "Woodbridge, ON L4L2Z9"],
      // action: 'Get Directions'
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["(647) 632-3260", "(226) 698-3260"],
      // action: 'Call Now'
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["noirautospacanada@gmail.com"],
      // action: 'Send Email'
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 9:00 AM - 8:00 PM", "Sat-Sun: 10:00 AM - 8:00 PM"],
      action: "",
    },
  ];

  const services = [
    "Vehicle Wrapping",
    "Auto Detailing",
    "Window Tinting",
    "Paint Protection",
    "Custom Graphics",
    "Other",
  ];

  return (
    <div className="pt-20 md:pt-32">
      <Hero
        title={
          <>
            Get In <span className="gradient-text">Touch</span>
          </>
        }
        subtitle="Ready to transform your vehicle? Contact us today for a free consultation and quote. We're here to bring your vision to life."
      />

      {/* Contact Info Grid */}
      <section className="section-padding bg-noir-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-noir-800 p-6 rounded-lg text-center hover:bg-noir-700 transition-colors duration-300"
              >
                <info.icon className="w-12 h-12 text-golden-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{info.title}</h3>
                <div className="space-y-1 mb-4">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-300">
                      {detail}
                    </p>
                  ))}
                </div>
                {info.action && (
                  <button className="text-golden-400 hover:text-golden-300 font-medium transition-colors">
                    {info.action}
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="section-padding bg-noir-950">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-display font-bold mb-6">
                Send Us a <span className="gradient-text">Message</span>
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium mb-2"
                    >
                      First Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      {...register("firstName", {
                        required: "First name is required",
                      })}
                      className="w-full px-4 py-3 bg-noir-800 border border-noir-700 rounded-lg focus:border-golden-400 focus:outline-none transition-colors"
                      placeholder="John"
                    />
                    {errors.firstName && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium mb-2"
                    >
                      Last Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      {...register("lastName", {
                        required: "Last name is required",
                      })}
                      className="w-full px-4 py-3 bg-noir-800 border border-noir-700 rounded-lg focus:border-golden-400 focus:outline-none transition-colors"
                      placeholder="Doe"
                    />
                    {errors.lastName && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="w-full px-4 py-3 bg-noir-800 border border-noir-700 rounded-lg focus:border-golden-400 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register("phone")}
                    className="w-full px-4 py-3 bg-noir-800 border border-noir-700 rounded-lg focus:border-golden-400 focus:outline-none transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium mb-2"
                  >
                    Service Interested In{" "}
                    <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="service"
                    {...register("service", {
                      required: "Please select a service",
                    })}
                    className="w-full px-4 py-3 bg-noir-800 border border-noir-700 rounded-lg focus:border-golden-400 focus:outline-none transition-colors bg-[#0a0a0a]"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.service.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="vehicle"
                    className="block text-sm font-medium mb-2"
                  >
                    Vehicle Information
                  </label>
                  <input
                    type="text"
                    id="vehicle"
                    {...register("vehicle")}
                    className="w-full px-4 py-3 bg-noir-800 border border-noir-700 rounded-lg focus:border-golden-400 focus:outline-none transition-colors"
                    placeholder="e.g. 2023 BMW M3"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register("message", {
                      required: "Message is required",
                    })}
                    className="w-full px-4 py-3 bg-noir-800 border border-noir-700 rounded-lg focus:border-golden-400 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project, timeline, budget, or any questions you have..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <div className="flex justify-center mt-4">
                  <HCaptcha
                    sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                    theme="dark"
                    onVerify={handleVerify}
                    ref={captchaRef}
                  />
                </div>

                {captchaError && (
                  <p className="text-red-400 text-center text-sm mt-1">
                    Please complete the captcha before submitting.
                  </p>
                )}

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full btn-primary group"
                >
                  Send Message
                  <Send
                    className="inline-block ml-2 group-hover:translate-x-1 transition-transform"
                    size={18}
                  />
                </motion.button>
                {status && (
                  <p className="text-center text-sm text-golden-400 mt-3">
                    {status}
                  </p>
                )}
              </form>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="bg-noir-800 rounded-lg overflow-hidden h-64 lg:h-80">
                <div className="w-full h-full bg-gradient-to-br from-noir-700 to-noir-800 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-golden-400 mx-auto mb-4" />
                    <p className="text-gray-300">Interactive Map Coming Soon</p>
                    <p className="text-sm text-gray-400 mt-2">
                      Unit #15-5732 Hwy 7, Woodbridge, ON
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-noir-800 p-6 rounded-lg border border-golden-400/20">
                <h3 className="text-xl font-bold mb-4">
                  Need Immediate Assistance?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-golden-400 mr-3" />
                    <div>
                      <p className="font-medium">Call Us Now</p>
                      <p className="text-golden-400">(647) 632-3260</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-golden-400 mr-3" />
                    <div>
                      <p className="font-medium">Email Response</p>
                      <p className="text-gray-300 text-sm">
                        Usually within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-noir-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">What to Expect</h3>
                <div className="space-y-3">
                  {[
                    "Quick response within 24 hours",
                    "Free consultation and quote",
                    "Detailed project timeline",
                    "No obligation estimate",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-golden-400 mr-3" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-noir-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display font-bold mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Accordion
              items={[
                {
                  question: "How long does a vehicle wrap take?",
                  answer:
                    "Most vehicle wraps take 3-5 business days, depending on the complexity and size of your vehicle.",
                },
                {
                  question: "Do you offer warranties?",
                  answer:
                    "Yes! We offer comprehensive warranties depending on the service and materials used.",
                },
                {
                  question: "Can I see my design before installation?",
                  answer:
                    "Absolutely! We provide detailed mockups and renderings for your approval before any work begins.",
                },
                {
                  question: "Do you work on all vehicle types?",
                  answer:
                    "Yes, we work on cars, trucks, SUVs, motorcycles, boats, and commercial vehicles of all sizes.",
                },
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
