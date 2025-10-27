// src/pages/Services.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { Code, Smartphone, Server, Database, Shield, Cloud, Monitor, Cpu, ArrowRight } from 'lucide-react'

const ServicesPage = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Application Development',
      description: 'Custom web applications built with modern frameworks like React, Angular, and Vue.js. We create scalable, secure, and user-friendly solutions tailored to your business needs.',
      features: [
        'Responsive Design',
        'API Integration',
        'Real-time Updates',
        'Progressive Web Apps',
        'E-commerce Solutions',
        'Content Management Systems'
      ],
      cta: 'Start Your Web Project'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android. We deliver exceptional user experiences on any device with performance optimization.',
      features: [
        'iOS & Android Development',
        'React Native Apps',
        'Flutter Applications',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality'
      ],
      cta: 'Build Your Mobile App'
    },
    {
      icon: Server,
      title: 'Hardware Solutions',
      description: 'Complete hardware infrastructure solutions including servers, networking equipment, and IoT device integration for modern businesses.',
      features: [
        'Server Setup & Configuration',
        'Network Infrastructure',
        'IoT Device Integration',
        'Hardware Maintenance',
        'Security Systems',
        'Cloud Integration'
      ],
      cta: 'Get Hardware Solutions'
    },
    {
      icon: Database,
      title: 'ERP Systems',
      description: 'Enterprise Resource Planning systems to streamline your business processes and improve operational efficiency across all departments.',
      features: [
        'Inventory Management',
        'Financial Planning',
        'HR Management',
        'Supply Chain Management',
        'Customer Management',
        'Reporting & Analytics'
      ],
      cta: 'Implement ERP System'
    },
    {
      icon: Shield,
      title: 'CRM Solutions',
      description: 'Customer Relationship Management systems to enhance customer interactions, drive sales growth, and improve customer satisfaction.',
      features: [
        'Lead Management',
        'Sales Pipeline Tracking',
        'Customer Support',
        'Marketing Automation',
        'Analytics & Reporting',
        'Integration Services'
      ],
      cta: 'Setup CRM System'
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Cloud migration, deployment, and management services for scalable and reliable infrastructure that grows with your business.',
      features: [
        'AWS/Azure/GCP Services',
        'Cloud Migration',
        'DevOps Implementation',
        'Auto Scaling Setup',
        'Backup & Recovery',
        'Cost Optimization'
      ],
      cta: 'Move to Cloud'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We discuss your requirements and understand your business goals.'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Our team creates a detailed project plan and timeline.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'We build your solution using the latest technologies and best practices.'
    },
    {
      step: '04',
      title: 'Delivery',
      description: 'We deploy the solution and provide ongoing support and maintenance.'
    }
  ]

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to meet your business needs and drive growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-dark mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="btn-primary w-full flex items-center justify-center">
                  {service.cta}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Let's discuss how we can help transform your business with our technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Free Consultation
              </button>
              <button className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all">
                View Pricing
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage