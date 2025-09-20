
import { motion } from 'framer-motion'
import { Award, Calendar, Building, Download } from 'lucide-react'

const Certificates = () => {
  const certificates = [
    {
      title: 'Full Stack Software Development',
      issuer: 'Inspire Engineering Services',
      period: '16th July 2024 to 28th Jan 2025',
      issued: 'Jan 2025',
      description: 'Comprehensive industrial internship training program covering full-stack software development with modern technologies.',
      skills: ['Full Stack Development', 'Software Engineering', 'Industrial Training'],
      icon: '🚀',
      category: 'Full Stack',
      type: 'Internship'
    },
    {
      title: 'Java Full Stack Development',
      issuer: 'The Kiran Academy, Pune',
      period: '10th Jan 2024 to 25th June 2024',
      issued: 'June 2024',
      description: 'Specialized internship program focusing on Java full-stack development with hands-on project experience.',
      skills: ['Java', 'Full Stack', 'Spring Boot', 'Web Development'],
      icon: '☕',
      category: 'Java Development',
      type: 'Internship'
    },
    {
      title: 'Essentials in Java for Professionals',
      issuer: 'Cadd Centre',
      period: '15th Oct 2023 to 30th Nov 2023',
      issued: 'Jan 2024',
      description: 'Hands-on training in essential Java programming concepts for professional development.',
      skills: ['Java Core', 'Professional Development', 'Object-Oriented Programming'],
      icon: '🎓',
      category: 'Programming',
      type: 'Certification'
    },
    {
      title: 'Web Design & Development Workshop',
      issuer: 'Satguru Institute',
      period: '30th May 2022 to 5th June 2022',
      issued: 'Sept 2023',
      description: 'Seven days intensive workshop covering web design principles and development fundamentals.',
      skills: ['HTML', 'CSS', 'JavaScript', 'Web Design'],
      icon: '🌐',
      category: 'Web Development',
      type: 'Workshop'
    },
    {
      title: 'Java Programming Internship',
      issuer: 'Soft-Tech Solutions',
      period: '10th July 2023 to 20th Aug 2023',
      issued: 'August 2023',
      description: 'Industrial internship training program focusing on Java programming fundamentals and applications.',
      skills: ['Java Programming', 'Industrial Training', 'Software Development'],
      icon: '💻',
      category: 'Programming',
      type: 'Internship'
    },
    {
      title: 'Web Application Development',
      issuer: 'Code Infosystem',
      period: '15th Mar 2022 to 13th Apr 2022',
      issued: 'April 2022',
      description: '4-week industrial training program in web application development using PHP and MySQL.',
      skills: ['PHP', 'MySQL', 'Web Applications', 'Database Management'],
      icon: '🔧',
      category: 'Web Development',
      type: 'Training'
    }
  ]

  const handleDownload = (certificateTitle: string) => {
    const fileMap: { [key: string]: string } = {
      'Resume': '/documents/Abhay_M_Latest_8421822204_resume.pdf',
      'Essentials in Java for Professionals': '/documents/CADD Java.pdf',
      'Web Design & Development Workshop': '/documents/Satguru Institude web.pdf',
      'Java Programming Internship': '/documents/soft tech java.pdf',
      'Web Application Development': '/documents/code infosystem web.pdf',
      'BIT Aptitude Test': '/documents/bit aptitude.pdf',
      'Full Stack Software Development': '/documents/Inspire Engineering (1).pdf',
      'Java Full Stack Development': '/documents/TheKiranAcademy_Abhay_Mallick (1).pdf'
    }

    const filePath = fileMap[certificateTitle]
    if (filePath) {
      const link = document.createElement('a')
      link.href = filePath
      link.download = filePath.split('/').pop() || 'download'
      link.click()
    }
  }

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Full Stack': 'from-blue-500 to-indigo-600',
      'Java Development': 'from-orange-500 to-red-600',
      'Programming': 'from-green-500 to-teal-600',
      'Web Development': 'from-purple-500 to-pink-600',
      'Soft Skills': 'from-yellow-500 to-orange-600'
    }
    return colors[category] || 'from-primary-500 to-purple-600'
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Internship': return '🏢'
      case 'Certification': return '🏆'
      case 'Workshop': return '🛠️'
      case 'Training': return '📚'
      default: return '🎯'
    }
  }

  // Simplified animation variants

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.05 // Much faster stagger
      }
    }
  }

  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-dark-800/50">
      <div className="container mx-auto px-6">
        {/* Header - Single animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Certificates & Training
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional certifications, internships, and training programs that shaped my expertise
          </p>
        </motion.div>

        {/* Certificates Grid - Optimized stagger */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-10%" }}
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={{
                initial: { opacity: 0, y: 15 },
                animate: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, ease: "easeOut" }
                }
              }}
              className="cert-card bg-white dark:bg-dark-700 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-dark-600"
            >
              {/* Certificate Header */}
              <div className="relative p-6 bg-gradient-to-br from-primary-500/5 to-purple-500/10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-14 h-14 bg-gradient-to-br ${getCategoryColor(cert.category)} rounded-xl flex items-center justify-center text-2xl shadow-lg`}>
                      {cert.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="inline-block px-2 py-1 bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 text-xs font-semibold rounded-full">
                          {cert.category}
                        </span>
                        <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-dark-600 text-gray-600 dark:text-gray-400 text-xs font-medium rounded-full">
                          {getTypeIcon(cert.type)} {cert.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDownload(cert.title)}
                    className="download-btn p-2 bg-primary-500 text-white rounded-lg shadow-lg"
                    title="Download Certificate"
                  >
                    <Download size={16} />
                  </button>
                </div>

                <h3 className="cert-title text-lg font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                  {cert.title}
                </h3>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Building size={14} />
                    <span className="font-medium">{cert.issuer}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Calendar size={14} />
                    <span>{cert.period}</span>
                  </div>
                  <div className="inline-block px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-semibold rounded-full">
                    Issued: {cert.issued}
                  </div>
                </div>
              </div>

              {/* Certificate Body */}
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills - Static with CSS animation */}
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Skills Gained:</h4>
                  <div className="flex flex-wrap gap-2 skill-tags">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className="skill-tag px-2 py-1 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 text-primary-700 dark:text-primary-300 rounded-md text-xs font-medium border border-primary-100 dark:border-primary-800"
                        style={{ animationDelay: `${skillIndex * 0.05}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Certificate Footer */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-dark-800 dark:to-dark-700 border-t border-gray-100 dark:border-dark-600 p-4">
                <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 text-xs font-semibold">
                  <Award size={14} />
                  Verified Achievement
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Resume Download - Single animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-16"
        >
          <div className="resume-card bg-white dark:bg-dark-700 rounded-2xl shadow-lg p-8 max-w-md mx-auto border border-gray-100 dark:border-dark-600">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
              📄
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Latest Resume</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
              Updated April 2025 - Complete professional profile and achievements
            </p>
            <button
              onClick={() => handleDownload('Resume')}
              className="download-btn flex items-center gap-2 bg-gradient-to-r from-primary-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg mx-auto"
            >
              <Download size={16} />
              Download Resume
            </button>
          </div>
        </motion.div>

        {/* Stats - Static with CSS animation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto stats-grid">
          {[
            { number: '5+', label: 'Certificates', icon: '🏆' },
            { number: '2', label: 'Internships', icon: '🏢' },
            { number: '3+', label: 'Years Learning', icon: '📚' },
            { number: '25+', label: 'Skills Gained', icon: '⚡' }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="stat-card text-center p-4 bg-white dark:bg-dark-700 rounded-xl shadow-md border border-gray-100 dark:border-dark-600"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>


    </section>
  )
}

export default Certificates