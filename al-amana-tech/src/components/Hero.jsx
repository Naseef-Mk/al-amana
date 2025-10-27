// src/components/Hero.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Code, Smartphone, Globe, Server, Cpu, Database } from 'lucide-react'

const Hero = () => {
  const services = [
    { icon: Globe, title: 'Web Applications', desc: 'Modern web apps with cutting-edge technologies' },
    { icon: Smartphone, title: 'Mobile Apps', desc: 'Native and cross-platform mobile solutions' },
    { icon: Server, title: 'Hardware Solutions', desc: 'Complete hardware and infrastructure setup' },
    { icon: Database, title: 'ERP & CRM Systems', desc: 'Enterprise resource planning and customer management' }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full filter blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark mb-6">
              Transform Your Business with
              <span className="text-primary"> AL AMANA TECHNOLOGY</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We deliver comprehensive technology solutions including web applications, mobile apps, 
              hardware solutions, and enterprise software systems to drive your business forward.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn-primary flex items-center justify-center">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="btn-secondary flex items-center justify-center">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-primary">150+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-primary">50+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-primary">5+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </div>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-dark mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero