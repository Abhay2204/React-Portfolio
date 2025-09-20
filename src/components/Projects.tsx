import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Eye, Filter } from 'lucide-react'

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'NoteXpense',
      description: 'Android app for managing notes and tracking expenses with intuitive UI. Features include categorized expense tracking, note organization, and financial insights.',
      image: '/images/notexpense.jpg',
      technologies: ['Kotlin', 'Android Jetpack', 'Room Database', 'MVVM'],
      category: 'mobile',
      github: 'https://github.com/Abhay2204/NoteXpense',
      featured: true,
    },
    {
      id: 2,
      title: 'Bit Campus Navigator App',
      description: 'Real-time campus navigation for rooms and facilities with satellite view. Search rooms/facilities by name with floorwise layouts and additional campus facilities.',
      image: '/images/bit campus navigaor.jpg',
      technologies: ['Kotlin', 'Firebase', 'Jetpack Compose'],
      category: 'mobile',
      github: 'https://github.com/Abhay2204/Bit_Campus_Navigator',
      featured: false,
    },
    {
      id: 3,
      title: 'Beyond Bark App',
      description: 'AI-powered app for pet mood, disease detection, and rescue. Identifies pet species, mood, and provides rescue assistance.',
      image: '/images/beyond bark.png',
      technologies: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Netmind AI'],
      category: 'mobile',
      github: 'https://github.com/Abhay2204/Beyond-bark',
      featured: true,
    },
    {
      id: 4,
      title: 'PoxDetector',
      description: 'Machine learning model with high accuracy to predict types of Pox using medical images. Advanced image classification for healthcare applications.',
      image: '/images/pox-detector.jpg',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'HTML', 'CSS'],
      category: 'ml',
      github: 'https://github.com/Abhay2204/PoxDetector',
      featured: true,
    },
    {
      id: 5,
      title: 'Mindmaze App',
      description: '46+ progressive puzzle levels with AI-powered unlimited puzzle generation. Co-op mode to challenge friends with real-time score, Global Leaderboard with achievement tracking.',
      image: '/images/mindmaze.jpg',
      technologies: ['React Native', 'Node.js', 'Supabase'],
      category: 'mobile',
      github: 'https://github.com/Abhay2204/Mindmaze',
      featured: true,
    },
    {
      id: 6,
      title: 'ATS Resume Builder',
      description: 'Powerful ATS-friendly Resume Builder achieving 75+ ATS score with multiple templates. AI support integrated in every step for enhanced resume content.',
      image: '/images/resume builder.png',
      technologies: ['React', 'Gemini AI'],
      category: 'fullstack',
      github: 'https://github.com/Abhay2204',
      featured: true,
    },
    {
      id: 7,
      title: 'InspireEngg',
      description: 'Engineering inspiration platform built with React. Features engineering resources, project showcases, and community engagement for engineering students.',
      image: '/images/inspire-engg.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      category: 'fullstack',
      github: 'https://github.com/Abhay2204/InspireEngg',
      featured: false,
    },
    {
      id: 8,
      title: 'Carrier Map AI',
      description: 'AI-powered career mapping platform providing personalized career recommendations and roadmaps based on skills, interests, and market trends.',
      image: '/images/carrier-map-ai.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript', 'AI API'],
      category: 'fullstack',
      github: 'https://github.com/Abhay2204/carrier-map-Ai',
      featured: false,
    },
    {
      id: 9,
      title: 'Student Management System',
      description: 'Comprehensive system for managing student records, attendance, grades, and academic information with admin dashboard and reporting features.',
      image: '/images/student-management.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      category: 'fullstack',
      github: 'https://github.com/Abhay2204/Student-management-System',
      featured: false,
    },
    {
      id: 10,
      title: 'Blood Bank & Organ Donation',
      description: 'Healthcare platform connecting blood donors with recipients and facilitating organ donation. Features donor registration, emergency requests, and inventory management.',
      image: '/images/bloodbank.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      category: 'fullstack',
      github: 'https://github.com/Abhay2204/Bloodbank-organdonation',
      featured: false,
    },
    {
      id: 11,
      title: 'Attorney Legal Services',
      description: 'Professional website for legal services with case management, client portal, appointment scheduling, and legal document templates.',
      image: '/images/attorney.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      category: 'frontend',
      github: 'https://github.com/Abhay2204/Attorney',
      featured: false,
    },
    {
      id: 12,
      title: 'Elite Stay Hotel',
      description: 'Luxury hotel booking platform with room reservation system, amenities showcase, virtual tours, and customer review management.',
      image: '/images/elite-stay.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      category: 'frontend',
      github: 'https://github.com/Abhay2204/Elite-Stay',
      featured: false,
    },
    {
      id: 13,
      title: 'AI Code Reviewer',
      description: 'Intelligent code review system using AI to analyze code quality, suggest improvements, detect bugs, and ensure best practices compliance.',
      image: '/images/ai-code-reviewer.jpg',
      technologies: ['CSS', 'JavaScript', 'Python', 'AI API'],
      category: 'ml',
      github: 'https://github.com/Abhay2204/AI-code-reviwer',
      featured: false,
    },
    {
      id: 14,
      title: 'SLRS App',
      description: 'Smart Learning Recommendation System suggesting tech stacks and roadmaps. AI-powered recommendations for personalized learning paths.',
      image: '/images/slrs.jpg',
      technologies: ['Kotlin', 'Firebase'],
      category: 'mobile',
      github: 'https://github.com/Abhay2204/SLRS',
      featured: false,
    },
    {
      id: 15,
      title: 'Recipe Reveal',
      description: 'Personalized recipe suggestions according to ingredients you have. More than 9000 recipes. Can share personal special recipes. AI-powered Health Chatbot.',
      image: '/images/recipe reveal.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
      category: 'fullstack',
      github: 'https://github.com/Abhay2204/Recipe-Reveal',
      featured: false,
    },
  ]

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'ml', name: 'AI/ML' },
  ]

  const availableImages = ['beyond bark.png', 'bit campus navigaor.jpg', 'mindmaze.jpg', 'recipe reveal.jpg', 'resume builder.png', 'slrs.jpg']

  const filteredProjects = (filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter))
    .sort((a, b) => {
      const aHasImage = availableImages.includes(a.image.split('/').pop() || '')
      const bHasImage = availableImages.includes(b.image.split('/').pop() || '')

      // Projects with images come first
      if (aHasImage && !bHasImage) return -1
      if (!aHasImage && bHasImage) return 1

      // Within same category (both have images or both don't), maintain original order
      return 0
    })

  return (
    <section id="projects" className="py-20 bg-white dark:bg-dark-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Developed Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive showcase of my work across web development, mobile apps, and AI/ML projects
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${filter === category.id
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-600'
                }`}
            >
              <Filter size={16} />
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
                whileHover={{ y: -4 }}
                className={`bg-white dark:bg-dark-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group ${project.featured ? 'ring-2 ring-primary-500/50' : ''
                  }`}
              >
                <div className="relative overflow-hidden">
                  {/* Fixed aspect ratio container */}
                  <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
                    {/* Check if image exists in the available images list */}
                    {availableImages.includes(project.image.split('/').pop() || '') ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                        style={{
                          filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))'
                        }}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                          <Github size={48} className="text-white" />
                        </div>
                      </div>
                    )}

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-primary-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
                      Featured
                    </div>
                  )}

                  {/* Action button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/95 dark:bg-dark-800/95 backdrop-blur-sm rounded-full text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 shadow-lg"
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-dark-600 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Project Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 mb-12"
        >
          <div className="bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-primary-100 dark:border-primary-800">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Project Portfolio Overview
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Comprehensive development across multiple platforms and technologies
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
              {[
                { number: '25+', label: 'Total Projects', icon: '🚀', color: 'from-blue-500 to-indigo-600' },
                { number: '10+', label: 'Full Stack Apps', icon: '🌐', color: 'from-green-500 to-teal-600' },
                { number: '6+', label: 'Mobile Apps', icon: '📱', color: 'from-orange-500 to-red-600' },
                { number: '3+', label: 'Frontend Sites', icon: '💻', color: 'from-purple-500 to-pink-600' },
                { number: '3+', label: 'AI/ML Projects', icon: '🤖', color: 'from-red-500 to-rose-600' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-white dark:bg-dark-700 rounded-xl shadow-lg border border-gray-100 dark:border-dark-600 group cursor-default"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.3, ease: 'easeOut' }}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="https://github.com/Abhay2204"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Eye size={20} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects