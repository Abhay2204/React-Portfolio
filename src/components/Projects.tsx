import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Eye, Filter, ChevronDown, ChevronUp } from 'lucide-react'

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all')
  const [showAll, setShowAll] = useState(false)

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

  // Show only 6 projects initially, all when expanded
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6)
  const hasMoreProjects = filteredProjects.length > 6

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
      {/* Custom CSS for hiding scrollbars */}
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-primary-500/20 to-purple-500/20 border border-primary-500/30 rounded-full text-primary-600 dark:text-primary-400 text-sm font-semibold">
              ✨ Portfolio Showcase
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Developed Projects
          </h2>

          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-1 w-16 bg-gradient-to-r from-transparent to-primary-500 rounded-full"></div>
            <div className="h-2 w-8 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full"></div>
            <div className="h-1 w-16 bg-gradient-to-r from-purple-600 to-transparent rounded-full"></div>
          </div>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive showcase of my work across web development, mobile apps, and AI/ML projects.
            Each project represents a unique challenge solved with modern technology.
          </p>
        </motion.div>

        {/* Horizontal Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="mb-16"
        >
          <div className="relative max-w-4xl mx-auto">
            {/* Horizontal scrollable container */}
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex items-center gap-3 pb-2 min-w-max px-4">
                {categories.map((category, index) => (
                  <motion.button
                    key={category.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setFilter(category.id)
                      setShowAll(false) // Reset to show only 6 when changing filter
                    }}
                    className={`relative flex items-center gap-2 px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all duration-300 ${filter === category.id
                      ? 'bg-gradient-to-r from-primary-500 to-purple-600 text-white shadow-lg shadow-primary-500/25 transform scale-105'
                      : 'bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700/70 border border-gray-200/50 dark:border-dark-600/50 hover:border-primary-300 dark:hover:border-primary-600'
                      }`}
                  >
                    {/* Active indicator */}
                    {filter === category.id && (
                      <motion.div
                        layoutId="activeFilter"
                        className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}

                    <div className="relative z-10 flex items-center gap-2">
                      <Filter size={16} />
                      <span>{category.name}</span>

                      {/* Project count badge */}
                      <span className={`text-xs px-2 py-0.5 rounded-full transition-all duration-300 ${filter === category.id
                        ? 'bg-white/20 text-white'
                        : 'bg-gray-200 dark:bg-dark-600 text-gray-600 dark:text-gray-400'
                        }`}>
                        {category.id === 'all'
                          ? projects.length
                          : projects.filter(p => p.category === category.id).length
                        }
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Fade indicators for scroll */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-50 dark:from-dark-900 to-transparent pointer-events-none rounded-l-2xl opacity-50"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-50 dark:from-dark-900 to-transparent pointer-events-none rounded-r-2xl opacity-50"></div>
          </div>

          {/* Filter description */}
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center mt-4"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {filter === 'all' && `Showing all ${projects.length} projects across all categories`}
              {filter === 'fullstack' && `Full-stack web applications with both frontend and backend`}
              {filter === 'mobile' && `Native and cross-platform mobile applications`}
              {filter === 'frontend' && `Client-side web applications and websites`}
              {filter === 'ml' && `Machine learning and artificial intelligence projects`}
            </p>
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${filter}-${showAll}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`project-card group relative bg-white/70 dark:bg-dark-800/70 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl border border-gray-200/50 dark:border-dark-600/50 transition-all duration-500 overflow-hidden ${project.featured ? 'ring-2 ring-primary-500/50 shadow-primary-500/10' : ''
                  }`}
              >
                {/* Gradient overlay for better visual appeal */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative overflow-hidden">
                  {/* Fixed aspect ratio container */}
                  <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
                    {availableImages.includes(project.image.split('/').pop() || '') ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-contain p-4 transition-all duration-500 group-hover:scale-110"
                        style={{
                          filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.1))'
                        }}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                          <Github size={48} className="text-white" />
                        </div>
                      </div>
                    )}

                    {/* Enhanced overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {project.featured && (
                    <motion.div
                      initial={{ scale: 0, rotate: -12 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="absolute top-4 left-4 bg-gradient-to-r from-primary-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold z-10 shadow-lg"
                    >
                      ⭐ Featured
                    </motion.div>
                  )}

                  {/* Enhanced action button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                    <motion.a
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white/95 dark:bg-dark-800/95 backdrop-blur-md rounded-full text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 shadow-2xl border border-gray-200/50"
                    >
                      <Github size={24} />
                    </motion.a>
                  </div>
                </div>

                <div className="relative p-6 z-10">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: (index * 0.05) + (techIndex * 0.05) }}
                        className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-dark-600 dark:to-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200/50 dark:border-dark-500/50 hover:scale-105 transition-transform duration-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Enhanced Show More/Less Button */}
        {hasMoreProjects && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(!showAll)}
              className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Button background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative flex items-center gap-3">
                {showAll ? (
                  <>
                    <ChevronUp size={20} />
                    <span>Show Less Projects</span>
                    <span className="text-xs opacity-80">({filteredProjects.length - 6} hidden)</span>
                  </>
                ) : (
                  <>
                    <ChevronDown size={20} />
                    <span>Show More Projects</span>
                    <span className="text-xs opacity-80">({filteredProjects.length - 6} more)</span>
                  </>
                )}
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 -top-1 -left-1 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </motion.button>
          </motion.div>
        )}

        {/* Enhanced Project Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative bg-gradient-to-br from-white/80 via-blue-50/50 to-purple-50/80 dark:from-dark-800/80 dark:via-dark-700/50 dark:to-dark-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 dark:border-dark-600/50 shadow-2xl overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-500/10 to-purple-600/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-500/10 to-teal-600/10 rounded-full translate-y-24 -translate-x-24"></div>

            <div className="relative z-10 text-center mb-8">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
                Project Portfolio Overview
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Comprehensive development across multiple platforms and technologies
              </p>
            </div>

            <div className="relative grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
              {[
                { number: '15+', label: 'Total Projects', icon: '🚀', color: 'from-blue-500 to-indigo-600' },
                { number: '7+', label: 'Full Stack Apps', icon: '🌐', color: 'from-green-500 to-teal-600' },
                { number: '5+', label: 'Mobile Apps', icon: '📱', color: 'from-orange-500 to-red-600' },
                { number: '2+', label: 'Frontend Sites', icon: '💻', color: 'from-purple-500 to-pink-600' },
                { number: '2+', label: 'AI/ML Projects', icon: '🤖', color: 'from-red-500 to-rose-600' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                  whileHover={{ scale: 1.08, y: -5 }}
                  className="group text-center p-6 bg-white/70 dark:bg-dark-700/70 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50 dark:border-dark-600/50 cursor-default transition-all duration-300 hover:shadow-2xl"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
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

        {/* Enhanced View GitHub Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.3, ease: 'easeOut' }}
          className="text-center"
        >
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/Abhay2204"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-100 dark:to-gray-200 text-white dark:text-gray-900 font-semibold rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            {/* Background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-200 dark:to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative flex items-center gap-3">
              <Eye size={20} />
              <span>View All Projects on GitHub</span>
            </div>

            {/* Shine effect */}
            <div className="absolute inset-0 -top-1 -left-1 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects