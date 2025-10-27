// src/components/Portfolio.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Application',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600',
      description: 'Full-featured online shopping platform with payment integration',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      github: '#'
    },
    {
      title: 'Healthcare Management System',
      category: 'ERP System',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600',
      description: 'Comprehensive hospital management and patient care system',
      technologies: ['Angular', 'Java', 'PostgreSQL', 'Docker'],
      link: '#',
      github: '#'
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile Application',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600',
      description: 'Secure mobile banking application with biometric authentication',
      technologies: ['React Native', 'Firebase', 'Node.js', 'JWT'],
      link: '#',
      github: '#'
    },
    {
      title: 'IoT Smart Home System',
      category: 'Hardware Solution',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
      description: 'Complete smart home automation with IoT device integration',
      technologies: ['Raspberry Pi', 'Python', 'MQTT', 'React'],
      link: '#',
      github: '#'
    },
    {
      title: 'CRM for Sales Team',
      category: 'CRM System',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
      description: 'Customer relationship management system for sales optimization',
      technologies: ['Vue.js', 'Django', 'Redis', 'PostgreSQL'],
      link: '#',
      github: '#'
    },
    {
      title: 'Educational Platform',
      category: 'Web Application',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600',
      description: 'Online learning platform with video streaming and assessments',
      technologies: ['Next.js', 'AWS', 'WebRTC', 'MongoDB'],
      link: '#',
      github: '#'
    }
  ]

  return (
    <section id="portfolio" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our recent projects and see how we've helped businesses achieve their goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                    <a href={project.link} className="bg-white p-3 rounded-full hover:bg-gray-100">
                      <Eye className="w-5 h-5 text-dark" />
                    </a>
                    <a href={project.github} className="bg-white p-3 rounded-full hover:bg-gray-100">
                      <Github className="w-5 h-5 text-dark" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </span>
                  <a href={project.link} className="text-primary hover:text-blue-700">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                
                <h3 className="text-xl font-bold text-dark mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Want to see more of our work?
          </p>
          <button className="btn-primary">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio