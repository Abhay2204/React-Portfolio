import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Calendar, MapPin, Code2, Briefcase, GraduationCap, Star, Zap } from 'lucide-react'

const Experience: React.FC = () => {
  useEffect(() => {
    // Initialize AOS with optimized settings for immediate response
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 500, // Reduced duration for snappier feel
        easing: 'ease-out-cubic',
        once: true, // Animation happens only once for better UX
        mirror: false, // Disable reverse animations
        offset: 50, // Reduced offset for earlier trigger
        delay: 0,
        anchorPlacement: 'top-center', // Better anchor placement
        disable: false,
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99
      })

      // Refresh AOS on component mount to ensure proper initialization
      setTimeout(() => {
        AOS.refresh()
      }, 100)
    }

    // Clean up on unmount
    return () => {
      if (typeof window !== 'undefined') {
        AOS.refreshHard()
      }
    }
  }, [])

  const experiences = [
    {
      title: 'Web Development Journey',
      company: 'Self-Taught',
      location: 'Remote',
      period: '2022 – 2023',
      description: 'Built a strong foundation in HTML, CSS, JavaScript, Node.js, MongoDB & SQL. Completed multiple full-stack projects focusing on performance and responsiveness.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB', 'SQL'],
      icon: <Code2 className="w-6 h-6" />,
      type: 'learning',
      highlight: 'Foundation Phase'
    },
    {
      title: 'Learned Core & Advanced Java',
      company: 'Self-Taught',
      location: 'Remote',
      period: '2023 – 2024',
      description: 'Learned OOP principles, multithreading, sockets, JDBC, and Hibernate. Created Java-based tools and backend systems using Spring Boot and REST APIs.',
      technologies: ['Java', 'Spring Boot', 'Hibernate', 'JDBC', 'REST APIs'],
      icon: <GraduationCap className="w-6 h-6" />,
      type: 'learning',
      highlight: 'Skill Building'
    },
    {
      title: 'Internship at The Kiran Academy',
      company: 'The Kiran Academy',
      location: 'Pune',
      period: 'Jan – Jun 2024',
      description: 'Completed industry-grade training in Java Full Stack. Worked on real projects with Spring Boot, JSP/Servlets, and MySQL integration.',
      technologies: ['Java', 'Spring Boot', 'JSP', 'Servlets', 'MySQL'],
      icon: <Briefcase className="w-6 h-6" />,
      type: 'internship',
      highlight: 'First Experience'
    },
    {
      title: 'Internship at Inspire Engineering',
      company: 'Inspire Engineering',
      location: 'Remote',
      period: 'Jul 2024 – Jan 2025',
      description: 'Focused on Kotlin, Jetpack Compose, and Firebase. Built modern Android apps with real-time databases, authentication, and AI integration.',
      technologies: ['Kotlin', 'Jetpack Compose', 'Firebase', 'AI'],
      icon: <Star className="w-6 h-6" />,
      type: 'internship',
      highlight: 'Advanced Learning'
    },
    {
      title: 'Advanced Android Developer',
      company: 'Self-Employed',
      location: 'Remote',
      period: '2025 – Present',
      description: 'Building high-performance Android applications using Jetpack Compose and AI-powered features. Currently working on multiple live projects with production-grade architecture.',
      technologies: ['Android', 'Jetpack Compose', 'AI'],
      icon: <Zap className="w-6 h-6" />,
      type: 'current',
      highlight: 'Current Role'
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-dark-800/50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div 
          data-aos="fade-in" 
          data-aos-duration="1000" 
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"
        ></div>
        <div
          data-aos="fade-in"
          data-aos-duration="1200"
          data-aos-delay="200"
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-500/8 to-primary-500/8 rounded-full blur-3xl animate-pulse"
        ></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section with Staggered Animations */}
        <div className="text-center mb-20">
          <h2
            data-aos="fade-up"
            data-aos-duration="600"
            className="text-4xl md:text-6xl font-bold mb-6 gradient-text"
          >
            My Career Timeline
          </h2>
          <div
            data-aos="scale-in"
            data-aos-duration="400"
            data-aos-delay="100"
            className="w-32 h-2 bg-gradient-to-r from-primary-500 via-purple-500 to-primary-600 mx-auto mb-8 rounded-full shadow-lg"
          ></div>
          <p
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="200"
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            My professional journey and the impact I've made along the way
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Timeline Line */}
          <div
            data-aos="fade-down"
            data-aos-duration="800"
            data-aos-delay="100"
            className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 via-purple-500 via-primary-400 to-purple-600 rounded-full shadow-lg"
          ></div>

          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-16 last:mb-0">
              {/* Timeline Dot */}
              <div
                data-aos="zoom-in"
                data-aos-duration="400"
                data-aos-delay={index * 150} // Staggered delay based on index
                className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 top-8 w-8 h-8 z-20"
              >
                <div className={`
                  w-full h-full rounded-full border-4 border-white dark:border-dark-700 shadow-xl flex items-center justify-center
                  ${exp.type === 'current' ? 'bg-gradient-to-br from-primary-500 to-primary-600 animate-pulse' :
                    exp.type === 'internship' ? 'bg-gradient-to-br from-purple-500 to-purple-600' :
                    'bg-gradient-to-br from-gray-500 to-gray-600'}
                `}>
                  <div className="text-white text-xs font-bold">
                    {index + 1}
                  </div>
                </div>
              </div>

              {/* Experience Card */}
              <div
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-duration="600"
                data-aos-delay={index * 150 + 100} // Slightly delayed after the dot
                className={`
                  ml-12 md:ml-0 md:w-5/12 
                  ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}
                  relative
                `}
              >
                {/* Card Arrow */}
                <div className={`
                  hidden md:block absolute top-8 w-0 h-0 
                  ${index % 2 === 0 ? 
                    'right-4 border-l-8 border-l-white dark:border-l-dark-700 border-y-8 border-y-transparent' : 
                    'left-4 border-r-8 border-r-white dark:border-r-dark-700 border-y-8 border-y-transparent'
                  }
                `}></div>

                {/* Main Card */}
                <div className={`
                  bg-white dark:bg-dark-700 rounded-2xl shadow-2xl overflow-hidden group
                  transform transition-all duration-500 hover:scale-105 hover:rotate-1
                  border-2 
                  ${exp.type === 'current' ? 'border-primary-200 dark:border-primary-800' :
                    exp.type === 'internship' ? 'border-purple-200 dark:border-purple-800' :
                    'border-gray-200 dark:border-gray-600'}
                `}>
                  {/* Card Header with Gradient */}
                  <div className={`
                    p-6 
                    ${exp.type === 'current' ? 'bg-gradient-to-r from-primary-500/10 to-primary-600/10' :
                      exp.type === 'internship' ? 'bg-gradient-to-r from-purple-500/10 to-purple-600/10' :
                      'bg-gradient-to-r from-gray-500/10 to-gray-600/10'}
                  `}>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`
                        p-4 rounded-xl shadow-lg
                        ${exp.type === 'current' ? 'bg-gradient-to-br from-primary-500 to-primary-600' :
                          exp.type === 'internship' ? 'bg-gradient-to-br from-purple-500 to-purple-600' :
                          'bg-gradient-to-br from-gray-500 to-gray-600'}
                        transform group-hover:rotate-12 transition-transform duration-300
                      `}>
                        <div className="text-white">
                          {exp.icon}
                        </div>
                      </div>
                      <div className={`
                        px-3 py-1 rounded-full text-xs font-bold
                        ${exp.type === 'current' ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300' :
                          exp.type === 'internship' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300' :
                          'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'}
                      `}>
                        {exp.highlight}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {exp.title}
                    </h3>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center gap-2 font-semibold text-primary-600 dark:text-primary-400">
                        <Briefcase size={16} />
                        {exp.company}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        {exp.period}
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-lg">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-3">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={tech}
                            data-aos="flip-up"
                            data-aos-duration="300"
                            data-aos-delay={index * 150 + 300 + techIndex * 50} // Staggered tech animations
                            className={`
                              px-4 py-2 rounded-xl text-sm font-medium shadow-md
                              transform hover:scale-110 hover:-translate-y-1 transition-all duration-300
                              ${exp.type === 'current' ? 'bg-primary-100 text-primary-700 hover:bg-primary-200 dark:bg-primary-900 dark:text-primary-300' :
                                exp.type === 'internship' ? 'bg-purple-100 text-purple-700 hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-300' :
                                'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300'}
                            `}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Current Role Pulse Effect */}
                  {exp.type === 'current' && (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-purple-500/5 rounded-2xl animate-pulse pointer-events-none"></div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Timeline End Marker */}
          <div 
            data-aos="fade-up" 
            data-aos-duration="600" 
            data-aos-delay="100"
            className="flex justify-center"
          >
            <div className="bg-gradient-to-r from-primary-500 to-purple-600 text-white px-8 py-4 rounded-full shadow-xl font-bold text-lg">
              🚀 Journey Continues...
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience