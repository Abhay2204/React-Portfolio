
import { motion } from 'framer-motion'
import { Code, Coffee, Cloud, GitBranch, Database, PenTool, Rocket, Smartphone } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: Code,
      title: 'HTML, CSS & JavaScript',
      description: 'Creating responsive and interactive web pages with clean markup and modern design.',
    },
    {
      icon: Rocket,
      title: 'Node.js & Express.js',
      description: 'Building fast, scalable backend servers and REST APIs for web and mobile apps.',
    },
    {
      icon: Coffee,
      title: 'Core & Advanced Java',
      description: 'Expertise in OOP, multithreading, and backend development with Spring Boot.',
    },
    {
      icon: Smartphone,
      title: 'Kotlin & Jetpack Compose',
      description: 'Creating modern Android apps with declarative UI and clean architecture.',
    },
    {
      icon: Database,
      title: 'MongoDB & SQL',
      description: 'Designing and managing efficient databases for diverse applications.',
    },
    {
      icon: PenTool,
      title: 'WordPress',
      description: 'Building customizable, SEO-friendly websites and blogs.',
    },
    {
      icon: Cloud,
      title: 'AWS',
      description: 'Deploying and managing cloud infrastructure with reliability and scalability.',
    },
    {
      icon: GitBranch,
      title: 'Git & GitHub',
      description: 'Version control and collaboration for efficient software development.',
    },
  ]

  // Minimal, performance-first animation variants
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.08 // Reduced stagger delay
      }
    }
  }

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-800/50">
      <div className="container mx-auto px-6">
        {/* Header - Single optimized animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content - Single block animation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Passionate Developer & Creative Thinker
            </h3>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm a passionate developer with strong skills in backend systems, full-stack development, and AI integration. With hands-on experience in Node.js, Kotlin, and cloud services, I build performance-focused apps that deliver real value.
            </p>

            {/* Tech tags - Static with CSS hover only */}
            <div className="flex flex-wrap gap-3 pt-4">
              {['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Kotlin', 'Firebase', 'AWS', 'Git', 'Node.js', 'MongoDB', 'Spring Boot', 'Jetpack Compose', 'React Native', 'Supabase'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium transition-colors duration-200 hover:bg-primary-200 dark:hover:bg-primary-900/50 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right features - Optimized stagger animation */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-10%" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={{
                  initial: { opacity: 0, y: 15 },
                  animate: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.3,
                      ease: "easeOut"
                    }
                  }
                }}
                className="feature-card p-6 bg-white dark:bg-dark-700 rounded-xl shadow-lg group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 feature-icon">
                  <feature.icon className="text-white" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>


    </section>
  )
}

export default About