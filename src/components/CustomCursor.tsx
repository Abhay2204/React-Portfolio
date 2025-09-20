import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.matches('a, button, .cursor-pointer, [role="button"], .project-card, .skill-card')) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.matches('a, button, .cursor-pointer, [role="button"], .project-card, .skill-card')) {
        setIsHovering(false)
      }
    }

    document.addEventListener('mousemove', updateMousePosition)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseover', handleMouseEnter)
    document.addEventListener('mouseout', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', updateMousePosition)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseover', handleMouseEnter)
      document.removeEventListener('mouseout', handleMouseLeave)
    }
  }, [])

  return (
    <>
      {/* Modern Crosshair Container */}
      <motion.div
        className={`crosshair-container fixed top-0 left-0 pointer-events-none z-[9999] ${isClicking ? 'crosshair-clicking' : ''}`}
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isClicking ? 0.8 : isHovering ? 1.2 : 1,
          rotate: isHovering ? 45 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
          mass: 0.3
        }}
        style={{
          width: '48px',
          height: '48px',
        }}
      >
        {/* Outer Glow Ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-30 blur-sm animate-pulse" />

        {/* Main Ring */}
        <div className="absolute inset-2 rounded-full border-2 border-white/80 bg-black/20 backdrop-blur-sm" />

        {/* Center Dot */}
        <div className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg" />

        {/* Crosshair Lines */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {/* Horizontal Line */}
          <div className="absolute w-6 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-1/2 -translate-y-1/2" />
          {/* Vertical Line */}
          <div className="absolute w-0.5 h-6 bg-gradient-to-b from-transparent via-white to-transparent -translate-x-1/2 -translate-y-1/2" />
        </div>

        {/* Corner Indicators */}
        <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-cyan-400" />
        <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-cyan-400" />
        <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-cyan-400" />
        <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-cyan-400" />

        {/* Animated Scanning Lines */}
        <motion.div
          className="absolute inset-0 rounded-full border border-cyan-400/50"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Trailing Effect */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          mass: 0.8
        }}
      >
        <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full shadow-lg" />
      </motion.div>

      {/* Secondary Trail */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997]"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 1.2
        }}
      >
        <div className="w-1 h-1 bg-pink-400 rounded-full opacity-60" />
      </motion.div>
    </>
  )
}

export default CustomCursor