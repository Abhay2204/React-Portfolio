
import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'React', level: 88 },
        { name: 'Responsive Design', level: 92 },
      ],
    },
    {
      title: 'Mobile Development',
      skills: [
        { name: 'Android Studio', level: 90 },
        { name: 'Kotlin', level: 88 },
        { name: 'Java', level: 85 },
        { name: 'Mobile UI/UX', level: 82 },
      ],
    },
    {
      title: 'Backend & Databases',
      skills: [
        { name: 'Java', level: 88 },
        { name: 'Python', level: 80 },
        { name: 'Node.js', level: 78 },
        { name: 'SQL/MySQL', level: 80 },
        { name: 'REST APIs', level: 85 },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'Eclipse IDE', level: 88 },
        { name: 'WordPress', level: 82 },
        { name: 'Machine Learning', level: 75 },
        { name: 'AI Integration', level: 78 },
      ],
    },
  ]

  // Simplified animation variants

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.06 // Reduced from complex delay calculations
      }
    }
  }

  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark-900">
      <div className="container mx-auto px-6">
        {/* Header - Single animation */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to build innovative solutions across web, mobile, and AI applications
          </p>
        </motion.div>

        {/* Skills Grid - Simplified stagger */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-10%" }}
          className="grid md:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, ease: "easeOut" }
                }
              }}
              className="skill-card bg-gray-50 dark:bg-dark-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-dark-700"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8 text-center pb-4 border-b border-gray-200 dark:border-dark-600">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="skill-item">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium text-sm skill-name">
                        {skill.name}
                      </span>
                      <span className="text-primary-600 dark:text-primary-400 font-bold text-xs bg-primary-50 dark:bg-primary-900/20 px-2 py-1 rounded-full">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2.5 overflow-hidden shadow-inner">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          ease: "easeOut"
                        }}
                        className="h-full bg-gradient-to-r from-primary-500 to-purple-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills - CSS animations for tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Additional Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto additional-skills">
            {[
              'Portfolio Development', 'Student Management Systems', 'Healthcare Apps',
              'Blood Bank Systems', 'Recipe Applications', 'Hotel Booking Systems',
              'Disease Detection Models', 'Code Review Tools', 'Campus Navigation',
              'Fee Tracking Systems', 'AI-Powered Solutions'
            ].map((skill, index) => (
              <span
                key={skill}
                className="skill-tag px-4 py-2 bg-gradient-to-r from-primary-100 to-purple-100 dark:from-primary-900/30 dark:to-purple-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium cursor-default border border-primary-200 dark:border-primary-700"
                style={{
                  animationDelay: `${index * 0.05}s`
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>


    </section>
  )
}

export default Skills