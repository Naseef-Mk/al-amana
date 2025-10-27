// src/components/Services.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { Code, Smartphone, Server, Database, Shield, Cloud, Monitor, Cpu } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Application Development',
      description: 'Custom web applications built with modern frameworks like React, Angular, and Vue.js. Scalable, secure, and user-friendly solutions.',
      features: ['Responsive Design', 'API Integration', 'Real-time Updates', 'Progressive Web Apps']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android. Deliver exceptional user experiences on any device.',
      features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Optimization']
    },
    {
      icon: Server,
      title: 'Hardware Solutions',
      description: 'Complete hardware infrastructure solutions including servers, networking equipment, and IoT device integration.',
      features: ['Server Setup', 'Network Configuration', 'IoT Integration', 'Hardware Maintenance']
    },
    {
      icon: Database,
      title: 'ERP Systems',
      description: 'Enterprise Resource Planning systems to streamline your business processes and improve operational efficiency.',
      features: ['Inventory Management', 'Financial Planning', 'HR Management', 'Supply Chain']
    },
    {
      icon: Shield,
      title: 'CRM Solutions',
      description: 'Customer Relationship Management systems to enhance customer interactions and drive sales growth.',
      features: ['Lead Management', 'Sales Pipeline', 'Customer Support', 'Analytics & Reporting']
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Cloud migration, deployment, and management services for scalable and reliable infrastructure.',
      features: ['AWS/Azure/GCP', 'Cloud Migration', 'DevOps', 'Auto Scaling']
    }
  ]

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to meet your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-dark mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services