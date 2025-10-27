// src/components/About.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { Users, Award, TrendingUp, Target } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Users, number: '50+', label: 'Happy Clients' },
    { icon: Award, number: '150+', label: 'Projects Completed' },
    { icon: TrendingUp, number: '98%', label: 'Client Satisfaction' },
    { icon: Target, number: '5+', label: 'Years Experience' }
  ]

  const values = [
    {
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions.'
    },
    {
      title: 'Client-Centric',
      description: 'Your success is our priority. We work closely with you to achieve your goals.'
    },
    {
      title: 'Quality Assurance',
      description: 'Every project undergoes rigorous testing to ensure the highest quality.'
    },
    {
      title: 'Timely Delivery',
      description: 'We understand the importance of deadlines and always deliver on time.'
    }
  ]

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-6">
              About AL AMANA TECHNOLOGY
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We are a leading technology solutions provider specializing in web applications, 
              mobile apps, hardware solutions, and enterprise software systems. With over 5 years 
              of experience, we have helped numerous businesses transform their operations through 
              innovative technology.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our team of expert developers, designers, and engineers work collaboratively to deliver 
              solutions that not only meet but exceed our clients' expectations.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-primary mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats and Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-xl shadow-lg text-center"
                >
                  <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-dark mb-2">{stat.number}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-primary p-8 rounded-2xl text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="mb-6">Let's discuss how we can help transform your business with technology.</p>
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Free Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About