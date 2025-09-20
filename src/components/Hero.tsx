import React, { useRef, useEffect, useState } from 'react'
import { motion, Variants, useMotionValue } from 'framer-motion'
import { Github, Linkedin, Mail, Download, Sparkles, Code2, Palette } from 'lucide-react'
import * as THREE from 'three'
import { useTheme } from '../contexts/ThemeContext'

const Hero: React.FC = () => {
  const { isDark } = useTheme()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [isHovering, setIsHovering] = useState(false)
  const targetRotation = useRef({ x: 0, y: 0 })
  const currentRotation = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = (e.clientY / window.innerHeight) * 2 - 1
      mouseX.set(x)
      mouseY.set(y)
      
      // Update target rotation for the text
      targetRotation.current = {
        x: y * Math.PI * 0.3,
        y: x * Math.PI * 0.3
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ 
      canvas, 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.2

    // Create enhanced metallic material
    const material = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(isDark ? 0x8899ff : 0x4444aa),
      metalness: 0.9,
      roughness: 0.1,
      envMapIntensity: 2,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      iridescence: 0.8,
      iridescenceIOR: 2.5,
      iridescenceThicknessRange: [200, 600] as [number, number],
      sheen: 1.0,
      sheenRoughness: 0.2,
      sheenColor: new THREE.Color(isDark ? 0x00ffff : 0x0088ff),
      transmission: 0.1,
      thickness: 0.5,
    })

    // Create a procedural 3D dragon
    const createDragonGeometry = () => {
      const dragon = new THREE.Group()
      
      // Dragon body (main torso)
      const bodyGeometry = new THREE.SphereGeometry(1.2, 12, 8)
      bodyGeometry.scale(2, 0.8, 1)
      const bodyMesh = new THREE.Mesh(bodyGeometry, material.clone())
      bodyMesh.name = 'body'
      dragon.add(bodyMesh)
      
      // Dragon neck
      const neckGeometry = new THREE.CylinderGeometry(0.6, 0.8, 2, 8)
      const neckMesh = new THREE.Mesh(neckGeometry, material.clone())
      neckMesh.position.set(1.5, 0.5, 0)
      neckMesh.rotation.z = -0.3
      neckMesh.name = 'neck'
      dragon.add(neckMesh)
      
      // Dragon head
      const headGeometry = new THREE.SphereGeometry(0.8, 8, 6)
      headGeometry.scale(1.3, 1, 1.2)
      const headMesh = new THREE.Mesh(headGeometry, material.clone())
      headMesh.position.set(2.8, 1.2, 0)
      headMesh.name = 'head'
      dragon.add(headMesh)
      
      // Dragon snout
      const snoutGeometry = new THREE.ConeGeometry(0.3, 0.8, 6)
      const snoutMesh = new THREE.Mesh(snoutGeometry, material.clone())
      snoutMesh.position.set(3.5, 1.2, 0)
      snoutMesh.rotation.z = Math.PI / 2
      snoutMesh.name = 'snout'
      dragon.add(snoutMesh)
      
      // Dragon eyes
      const eyeGeometry = new THREE.SphereGeometry(0.15, 8, 6)
      const eyeMaterial = new THREE.MeshPhysicalMaterial({
        color: isDark ? 0xff4444 : 0xaa0000,
        emissive: isDark ? 0x220000 : 0x110000,
        metalness: 0.1,
        roughness: 0.2
      })
      
      const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial)
      leftEye.position.set(3.2, 1.4, 0.3)
      leftEye.name = 'leftEye'
      dragon.add(leftEye)
      
      const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial)
      rightEye.position.set(3.2, 1.4, -0.3)
      rightEye.name = 'rightEye'
      dragon.add(rightEye)
      
      // Dragon horns
      const hornGeometry = new THREE.ConeGeometry(0.1, 0.6, 6)
      const hornMaterial = material.clone()
      hornMaterial.color = new THREE.Color(isDark ? 0xffd700 : 0xb8860b)
      
      const leftHorn = new THREE.Mesh(hornGeometry, hornMaterial)
      leftHorn.position.set(2.6, 1.8, 0.2)
      leftHorn.rotation.z = -0.2
      leftHorn.name = 'leftHorn'
      dragon.add(leftHorn)
      
      const rightHorn = new THREE.Mesh(hornGeometry, hornMaterial)
      rightHorn.position.set(2.6, 1.8, -0.2)
      rightHorn.rotation.z = -0.2
      rightHorn.name = 'rightHorn'
      dragon.add(rightHorn)
      
      // Dragon wings - properly shaped and positioned (BIGGER!) - NOW FACING BACKWARD
      const wingMaterial = material.clone()
      wingMaterial.transparent = true
      wingMaterial.opacity = 0.85
      wingMaterial.color = new THREE.Color(isDark ? 0x6366f1 : 0x4f46e5)
      wingMaterial.side = THREE.DoubleSide
      
      // Create custom wing geometry using triangular shape (MUCH LARGER) - BACKWARD FACING
      const createWingGeometry = () => {
        const wingGeometry = new THREE.BufferGeometry()
        
        // Wing vertices - massive bat-like dragon wing shape - FACING BACKWARD
        const vertices = new Float32Array([
          // Main wing membrane (triangular sections) - FACING BACKWARD (negative X values)
          0, 0, 0,        // Wing root (attached to body)
          -4.5, 1.8, 0,   // Wing tip (backward and up)
          -2.2, -1.2, 0,  // Wing bottom edge (backward and down)
          
          // Upper wing section - BACKWARD
          0, 0, 0,
          -3.8, 2.8, 0,   // Upper tip backward
          -4.5, 1.8, 0,
          
          // Lower wing section - BACKWARD
          0, 0, 0,
          -1.8, -2.5, 0,  // Lower section backward
          -2.2, -1.2, 0,
          
          // Wing tip sections for more detail - BACKWARD
          -3.8, 2.8, 0,
          -5.2, 2.2, 0,   // Extended tip backward
          -4.5, 1.8, 0,
          
          // Lower wing tips - BACKWARD
          -1.8, -2.5, 0,
          -3.0, -3.2, 0,  // Extended lower tip backward
          -2.2, -1.2, 0,
          
          // Additional wing sections for more impressive span - BACKWARD
          0, 0, 0,
          -5.0, 0.5, 0,   // Middle section backward
          -4.5, 1.8, 0,
          
          0, 0, 0,
          -4.2, -0.8, 0,  // Lower middle backward
          -2.2, -1.2, 0,
        ])
        
        wingGeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
        wingGeometry.computeVertexNormals()
        return wingGeometry
      }
      
      const wingGeometry = createWingGeometry()
      
      // Left wing
      const leftWing = new THREE.Group()
      leftWing.name = 'leftWing'
      
      // Wing bone structure - BIGGER BONES - FACING BACKWARD
      const wingBoneGeometry = new THREE.CylinderGeometry(0.06, 0.1, 3.5, 8)
      const wingBoneMaterial = material.clone()
      wingBoneMaterial.color = new THREE.Color(isDark ? 0xffd700 : 0xb8860b)
      
      // Main wing bone - FACING BACKWARD
      const leftWingBone = new THREE.Mesh(wingBoneGeometry, wingBoneMaterial)
      leftWingBone.position.set(-2.2, 0.4, 0)  // Negative X for backward
      leftWingBone.rotation.z = -0.3
      leftWing.add(leftWingBone)
      
      // Secondary wing bone for support - BACKWARD
      const leftWingBone2 = new THREE.Mesh(
        new THREE.CylinderGeometry(0.04, 0.06, 2.8, 6), 
        wingBoneMaterial
      )
      leftWingBone2.position.set(-1.5, -0.8, 0)  // Negative X for backward
      leftWingBone2.rotation.z = 0.4
      leftWing.add(leftWingBone2)
      
      // Wing membrane
      const leftWingMesh = new THREE.Mesh(wingGeometry, wingMaterial)
      leftWing.add(leftWingMesh)
      
      // Position left wing - BETTER POSITIONING FOR BACKWARD-FACING WINGS
      leftWing.position.set(0.5, 0.8, 1.8)  // Moved toward back of body
      leftWing.rotation.y = -0.2  // Adjusted rotation for backward facing
      leftWing.scale.set(1.2, 1.2, 1.2) // Extra scaling for massive effect
      dragon.add(leftWing)
      
      // Right wing (mirrored) - EQUALLY MASSIVE AND BACKWARD
      const rightWing = new THREE.Group()
      rightWing.name = 'rightWing'
      
      // Right wing bones - BIGGER AND BACKWARD
      const rightWingBone = new THREE.Mesh(wingBoneGeometry, wingBoneMaterial)
      rightWingBone.position.set(-2.2, 0.4, 0)  // Negative X for backward
      rightWingBone.rotation.z = -0.3
      rightWing.add(rightWingBone)
      
      const rightWingBone2 = new THREE.Mesh(
        new THREE.CylinderGeometry(0.04, 0.06, 2.8, 6), 
        wingBoneMaterial
      )
      rightWingBone2.position.set(-1.5, -0.8, 0)  // Negative X for backward
      rightWingBone2.rotation.z = 0.4
      rightWing.add(rightWingBone2)
      
      // Right wing membrane (flipped) - MASSIVE AND BACKWARD
      const rightWingMesh = new THREE.Mesh(wingGeometry, wingMaterial)
      rightWingMesh.scale.z = -1 // Mirror the wing
      rightWing.add(rightWingMesh)
      
      // Position right wing - BETTER POSITIONING FOR BACKWARD-FACING
      rightWing.position.set(0.5, 0.8, -1.8)  // Moved toward back of body
      rightWing.rotation.y = 0.2  // Adjusted rotation for backward facing
      rightWing.scale.set(1.2, 1.2, 1.2) // Extra scaling for massive effect
      dragon.add(rightWing)
      
      // Dragon tail segments
      const tailSegments = 8
      for (let i = 0; i < tailSegments; i++) {
        const segmentSize = 0.6 - (i * 0.05)
        const tailSegmentGeometry = new THREE.SphereGeometry(segmentSize, 6, 4)
        tailSegmentGeometry.scale(1.5, 0.6, 0.8)
        const tailSegmentMesh = new THREE.Mesh(tailSegmentGeometry, material.clone())
        
        const x = -2 - (i * 0.8)
        const y = -0.3 - (i * 0.1)
        const z = Math.sin(i * 0.5) * 0.3
        
        tailSegmentMesh.position.set(x, y, z)
        tailSegmentMesh.rotation.y = i * 0.2
        tailSegmentMesh.name = `tailSegment${i}`
        dragon.add(tailSegmentMesh)
      }
      
      // Dragon legs
      const legGeometry = new THREE.CylinderGeometry(0.2, 0.3, 1.2, 6)
      const legMaterial = material.clone()
      
      // Front legs
      const frontLeftLeg = new THREE.Mesh(legGeometry, legMaterial)
      frontLeftLeg.position.set(0.8, -1, 0.8)
      frontLeftLeg.name = 'frontLeftLeg'
      dragon.add(frontLeftLeg)
      
      const frontRightLeg = new THREE.Mesh(legGeometry, legMaterial)
      frontRightLeg.position.set(0.8, -1, -0.8)
      frontRightLeg.name = 'frontRightLeg'
      dragon.add(frontRightLeg)
      
      // Back legs
      const backLeftLeg = new THREE.Mesh(legGeometry, legMaterial)
      backLeftLeg.position.set(-0.8, -1, 0.8)
      backLeftLeg.name = 'backLeftLeg'
      dragon.add(backLeftLeg)
      
      const backRightLeg = new THREE.Mesh(legGeometry, legMaterial)
      backRightLeg.position.set(-0.8, -1, -0.8)
      backRightLeg.name = 'backRightLeg'
      dragon.add(backRightLeg)
      
      // Dragon spikes along the back
      const spikeGeometry = new THREE.ConeGeometry(0.1, 0.4, 4)
      const spikeMaterial = material.clone()
      spikeMaterial.color = new THREE.Color(isDark ? 0xff6b6b : 0xdc2626)
      
      for (let i = 0; i < 6; i++) {
        const spike = new THREE.Mesh(spikeGeometry, spikeMaterial)
        spike.position.set(-0.5 + i * 0.5, 0.8, 0)
        spike.rotation.z = Math.PI
        spike.name = `spike${i}`
        dragon.add(spike)
      }
      
      return dragon
    }

    // Create the dragon geometry
    const dragonMesh = createDragonGeometry()
    // Rotate the dragon to face forward (towards the viewer)
    dragonMesh.rotation.y = Math.PI // 180 degrees to face forward
    scene.add(dragonMesh)

    // Enhanced lighting setup
    const ambientLight = new THREE.AmbientLight(isDark ? 0x222244 : 0xffffff, isDark ? 0.4 : 0.6)
    scene.add(ambientLight)

    const mainLight = new THREE.DirectionalLight(0xffffff, isDark ? 1.2 : 1.5)
    mainLight.position.set(5, 5, 5)
    mainLight.castShadow = true
    scene.add(mainLight)

    // Color accent lights
    const accentLight1 = new THREE.PointLight(isDark ? 0x00ffff : 0x3b82f6, 3, 20)
    accentLight1.position.set(-8, 5, 8)
    scene.add(accentLight1)

    const accentLight2 = new THREE.PointLight(isDark ? 0xff00ff : 0xec4899, 3, 20)
    accentLight2.position.set(8, -5, 8)
    scene.add(accentLight2)

    const rimLight = new THREE.PointLight(0xffffff, 2, 15)
    rimLight.position.set(0, 0, -8)
    scene.add(rimLight)

    // Additional metallic reflection lights
    const topLight = new THREE.SpotLight(0xffffff, 2, 30, Math.PI * 0.2, 0.5)
    topLight.position.set(0, 10, 5)
    topLight.target = dragonMesh
    scene.add(topLight)

    camera.position.z = 8

    // Particle system for ambient effect
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 300
    const positions = new Float32Array(particlesCount * 3)
    
    for (let i = 0; i < particlesCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 25
      positions[i + 1] = (Math.random() - 0.5) * 25
      positions[i + 2] = (Math.random() - 0.5) * 25
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    
    const particlesMaterial = new THREE.PointsMaterial({
      color: new THREE.Color(isDark ? 0x8888ff : 0x3b82f6),
      size: 0.05,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending
    })
    
    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)

    // Animation loop
    const clock = new THREE.Clock()
    
    const animate = () => {
      requestAnimationFrame(animate)
      
      const elapsedTime = clock.getElapsedTime()
      
      // Smooth rotation interpolation
      currentRotation.current.x += (targetRotation.current.x - currentRotation.current.x) * 0.05
      currentRotation.current.y += (targetRotation.current.y - currentRotation.current.y) * 0.05
      
      // Majestic dragon flight pattern - more realistic dragon movement
      const baseSpeed = 0.25 // Slightly faster for more life
      const amplitudeY = 0.4 // Reduced vertical movement
      const amplitudeX = 0.3 // Reduced horizontal swaying
      const amplitudeZ = 0.2 // Reduced forward/backward drift
      
      // Main dragon body movement - smooth gliding with subtle undulation
      dragonMesh.position.y = Math.sin(elapsedTime * baseSpeed * 0.8) * amplitudeY
      dragonMesh.position.x = Math.cos(elapsedTime * baseSpeed * 0.6) * amplitudeX
      dragonMesh.position.z = Math.sin(elapsedTime * baseSpeed * 0.4) * amplitudeZ
      
      // More natural dragon rotation - less erratic, more purposeful
      dragonMesh.rotation.x = currentRotation.current.x + Math.sin(elapsedTime * baseSpeed * 0.5) * 0.08
      dragonMesh.rotation.y = Math.PI + currentRotation.current.y + elapsedTime * 0.12 // Keep facing forward + steady turning
      dragonMesh.rotation.z = Math.sin(elapsedTime * baseSpeed * 0.7) * 0.06 // Subtle banking
      
      // Individual dragon part animations for lifelike movement
      dragonMesh.children.forEach((child, index) => {
        if (child instanceof THREE.Mesh) {
          const name = child.name
          const phase = index * 0.8 // Phase offset for wave motion
          
          if (name === 'head') {
            // Head moves more naturally, looking ahead with occasional side glances
            child.rotation.y = Math.sin(elapsedTime * 0.4 + phase) * 0.15
            child.rotation.x = Math.cos(elapsedTime * 0.3 + phase) * 0.1
            // Slight up/down head movement
            child.position.y = 1.2 + Math.sin(elapsedTime * 0.35) * 0.05
          }
          
          if (name === 'neck') {
            // Neck follows head movement naturally
            child.rotation.y = Math.sin(elapsedTime * 0.35 + phase) * 0.1
            child.rotation.x = Math.cos(elapsedTime * 0.25 + phase) * 0.08
          }
          
          if (name.includes('Wing')) {
            // Realistic dragon wing flapping - adjusted for 1/4 back opening with 45-degree tail angle
            const wingSpeed = 0.8
            const flapPhase = elapsedTime * wingSpeed
            const isLeftWing = name === 'leftWing'
            
            // Main wing rotation - gentle flapping for 1/4 back opening
            const flapAngle = Math.sin(flapPhase) * 0.3 // Reduced flap for smaller wings
            const restAngle = isLeftWing ? 0.1 : -0.1 // Subtle rest angles
            
            child.rotation.y = restAngle + (isLeftWing ? flapAngle : -flapAngle)
            
            // Wing tip motion - subtle movement for realistic 1/4 opening
            child.rotation.z = Math.cos(flapPhase * 0.8) * 0.15 // Reduced Z rotation
            
            // Vertical motion during flap cycle - subtle
            const originalY = 0.5
            child.position.y = originalY + Math.sin(flapPhase) * 0.1 // Reduced vertical motion
            
            // Backward motion to simulate air displacement - adjusted for 1/4 opening
            const originalX = -0.2
            child.position.x = originalX - Math.cos(flapPhase) * 0.05 // Subtle backward motion
            
            // Wing bones animation - adjusted for smaller wings
            child.children.forEach((bone, boneIndex) => {
              if (bone instanceof THREE.Mesh && bone.material) {
                if (boneIndex === 0) { // Main wing bone
                  bone.rotation.z = -0.2 + Math.sin(flapPhase) * 0.1 // Subtle bone flex
                  // Reduced magical energy effect
                  if (bone.material instanceof THREE.MeshPhysicalMaterial) {
                    bone.material.emissiveIntensity = Math.abs(Math.sin(flapPhase)) * 0.2
                  }
                }
              }
            })
          }
          
          if (name.includes('tailSegment')) {
            // Natural dragon tail flow - follows body movement with delay
            const segmentIndex = parseInt(name.replace('tailSegment', ''))
            const tailFollowSpeed = 0.3
            const segmentDelay = segmentIndex * 0.15 // Each segment follows the previous one
            
            // Tail follows the main dragon's movement with increasing delay down the tail
            const bodyInfluence = 1.0 - (segmentIndex * 0.1) // Front segments follow more closely
            const delayedTime = elapsedTime - segmentDelay
            
            // Natural swaying motion that follows the dragon's body rotation
            child.rotation.y = (dragonMesh.rotation.y * bodyInfluence * 0.3) + 
                              Math.sin(delayedTime * tailFollowSpeed) * (0.2 - segmentIndex * 0.02)
            
            // Subtle vertical flow
            const baseY = child.userData.originalY || child.position.y
            child.position.y = baseY + Math.sin(delayedTime * tailFollowSpeed * 0.8) * (0.1 - segmentIndex * 0.01)
            
            // Side-to-side motion that decreases towards tail tip
            const baseZ = child.userData.originalZ || child.position.z
            child.position.z = baseZ + Math.sin(delayedTime * tailFollowSpeed) * (0.15 - segmentIndex * 0.015)
            
            // Store original positions if not already stored
            if (!child.userData.originalY) {
              child.userData.originalY = child.position.y
              child.userData.originalZ = child.position.z
            }
          }
          
          if (name.includes('Eye')) {
            // Eyes glow and pulse with life
            if (child.material instanceof THREE.MeshPhysicalMaterial) {
              child.material.emissiveIntensity = 0.5 + Math.sin(elapsedTime * 2 + phase) * 0.3
            }
          }
          
          if (name.includes('Horn')) {
            // Horns have subtle magical energy
            child.rotation.z += Math.sin(elapsedTime * 0.5 + phase) * 0.05
          }
          
          if (name.includes('spike')) {
            // Back spikes ripple with energy
            const spikeIndex = parseInt(name.replace('spike', ''))
            child.scale.y = 1 + Math.sin(elapsedTime * 1.2 + spikeIndex * 0.3) * 0.1
          }
          
          // Enhanced material effects for metallic shine
          if (child.material instanceof THREE.MeshPhysicalMaterial) {
            child.material.iridescenceIOR = 2.5 + Math.sin(elapsedTime * 0.8 + phase) * 0.3
            child.material.metalness = 0.9 + Math.sin(elapsedTime * 0.4 + phase) * 0.05
            child.material.clearcoatRoughness = 0.05 + Math.sin(elapsedTime * 0.6 + phase) * 0.02
          }
        }
      })
      
      // Rotate particles slowly
      particles.rotation.y = elapsedTime * 0.02
      particles.rotation.x = elapsedTime * 0.015
      
      // Dynamic lighting that follows dragon movement
      accentLight1.intensity = 3 + Math.sin(elapsedTime * 1.5) * 0.8
      accentLight2.intensity = 3 + Math.cos(elapsedTime * 1.3) * 0.8
      
      // Move accent lights in a slow orbit around the dragon
      accentLight1.position.x = Math.cos(elapsedTime * 0.3) * 10
      accentLight1.position.z = Math.sin(elapsedTime * 0.3) * 10
      
      accentLight2.position.x = Math.cos(elapsedTime * 0.25 + Math.PI) * 8
      accentLight2.position.z = Math.sin(elapsedTime * 0.25 + Math.PI) * 8
      
      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
      material.dispose()
      particlesGeometry.dispose()
      particlesMaterial.dispose()
    }
  }, [isDark])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.05,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    }),
  }

  const name = "ABHAY MALLICK"

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-700 ${isDark ? 'bg-black' : 'bg-white'}`}>
      {/* 3D Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ 
          background: isDark 
            ? 'radial-gradient(ellipse at center, #0a0a1f 0%, #000000 50%, #000000 100%)' 
            : 'radial-gradient(ellipse at center, #f0f4ff 0%, #ffffff 50%, #e6edff 100%)',
          opacity: isDark ? 1 : 0.85 // Less reduction in opacity
        }}
      />
      
      {/* Animated gradient overlay */}
      <motion.div 
        className="absolute inset-0 z-5"
        animate={{
          background: isDark 
            ? ['radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
               'radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)',
               'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)']
            : ['radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)',
               'radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.05) 0%, transparent 50%)',
               'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)']
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Light overlay for text visibility - much lighter */}
      {!isDark && (
        <div className="absolute inset-0 z-10 bg-white/10" />
      )}
      
      <div className="container mx-auto px-6 z-20 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center relative z-30"
        >
          {/* Floating badges */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-4 mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={`px-4 py-2 rounded-full backdrop-blur-md flex items-center gap-2 ${
                isDark ? 'bg-white/5 border border-white/10 text-white/70' : 'bg-black/5 border border-black/10 text-black/70'
              }`}
            >
              <Code2 size={14} />
              <span className="text-xs font-mono">DEVELOPER</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, rotate: -5 }}
              className={`px-4 py-2 rounded-full backdrop-blur-md flex items-center gap-2 ${
                isDark ? 'bg-white/5 border border-white/10 text-white/70' : 'bg-black/5 border border-black/10 text-black/70'
              }`}
            >
              <Palette size={14} />
              <span className="text-xs font-mono">DESIGNER</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={`px-4 py-2 rounded-full backdrop-blur-md flex items-center gap-2 ${
                isDark ? 'bg-white/5 border border-white/10 text-white/70' : 'bg-black/5 border border-black/10 text-black/70'
              }`}
            >
              <Sparkles size={14} />
              <span className="text-xs font-mono">CREATOR</span>
            </motion.div>
          </motion.div>

          {/* Animated Name with 3D effect */}
          <motion.div
            variants={itemVariants}
            className="mb-8 perspective-1000"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="flex flex-wrap justify-center items-center gap-1 md:gap-2 mb-4">
              {name.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  custom={index}
                  whileHover={{ 
                    scale: 1.2, 
                    rotateY: 180,
                    color: isDark ? '#60a5fa' : '#3b82f6'
                  }}
                  className={`inline-block text-5xl md:text-7xl lg:text-8xl font-thin tracking-wider cursor-default select-none ${
                    letter === ' ' ? 'w-4 md:w-8' : ''
                  }`}
                  style={{
                    color: isDark ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.9)',
                    textShadow: isDark 
                      ? '0 0 40px rgba(59, 130, 246, 0.5), 0 0 80px rgba(59, 130, 246, 0.3)' 
                      : '0 2px 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.4)',
                    transform: isHovering ? `translateZ(${index * 2}px)` : 'translateZ(0)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    zIndex: 50,
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Animated location with pulse */}
          <motion.div
            variants={itemVariants}
            className={`${isDark ? 'text-blue-400/60' : 'text-blue-600/60'} text-sm font-mono mb-8 tracking-widest flex items-center justify-center gap-2`}
          >
            <motion.div
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`w-2 h-2 rounded-full ${isDark ? 'bg-blue-400' : 'bg-blue-600'}`}
            />
            21°08'19.8"N 79°06'04.1"E • NAGPUR
          </motion.div>

          {/* Animated Role Description */}
          <motion.div
            variants={itemVariants}
            className={`text-xl md:text-2xl ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-12 font-light tracking-wide`}
          >
            <motion.span
              animate={{ 
                opacity: [1, 0.5, 1],
                scale: [1, 1.02, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <span className={`mx-4 md:mx-6 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>×</span>
            <motion.span
              animate={{ 
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.02, 1]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
              Creative Technologist
            </motion.span>
          </motion.div>

          {/* Interactive CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-16"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: `0 0 40px ${isDark ? 'rgba(59, 130, 246, 0.4)' : 'rgba(59, 130, 246, 0.3)'}`,
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className={`group px-8 py-4 relative overflow-hidden rounded-full transition-all duration-300 ${
                isDark 
                  ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/20 text-white hover:border-white/40' 
                  : 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-black/20 text-black hover:border-black/40'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2 text-sm tracking-wider font-light">
                EXPLORE WORK
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              />
            </motion.button>
            
            <motion.a
              whileHover={{
                scale: 1.05,
                boxShadow: `0 0 40px ${isDark ? 'rgba(168, 85, 247, 0.4)' : 'rgba(168, 85, 247, 0.3)'}`,
              }}
              whileTap={{ scale: 0.95 }}
              href="/documents/Abhay_M_Latest_8421822204_resume.pdf"
              download
              className={`group px-8 py-4 relative overflow-hidden rounded-full transition-all duration-300 ${
                isDark
                  ? 'bg-white/10 border border-white/20 text-white hover:bg-white/20'
                  : 'bg-black/10 border border-black/20 text-black hover:bg-black/20'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2 text-sm tracking-wider font-light">
                <Download size={16} className="group-hover:animate-bounce" />
                RESUME
              </span>
            </motion.a>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-6 md:gap-8"
          >
            {[
              { icon: Github, href: 'https://github.com/Abhay2204', label: 'GitHub', color: '#6e5494' },
              { icon: Linkedin, href: 'https://linkedin.com/in/abhay-mallick', label: 'LinkedIn', color: '#0077b5' },
              { icon: Mail, href: 'mailto:abhaymallick2204@gmail.com', label: 'Email', color: '#ea4335' },
            ].map(({ icon: Icon, href, label, color }) => (
              <motion.a
                key={label}
                whileHover={{ 
                  scale: 1.2, 
                  y: -5,
                  rotate: 360,
                }}
                whileTap={{ scale: 0.9 }}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative p-3 rounded-full ${
                  isDark ? 'bg-white/5 text-gray-400 hover:text-white' : 'bg-black/5 text-gray-600 hover:text-black'
                } transition-all duration-300 group`}
                aria-label={label}
              >
                <Icon size={20} />
                <motion.div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                  style={{ backgroundColor: color }}
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Floating side text */}
          <motion.div
            variants={itemVariants}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className={`absolute bottom-20 left-6 ${isDark ? 'text-gray-600' : 'text-gray-400'} text-xs font-mono tracking-wider transform -rotate-90 origin-left hidden lg:block`}
          >
            CRAFTING DIGITAL EXPERIENCES
          </motion.div>

          <motion.div
            variants={itemVariants}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            className={`absolute bottom-20 right-6 ${isDark ? 'text-gray-600' : 'text-gray-400'} text-xs font-mono tracking-wider transform rotate-90 origin-right hidden lg:block`}
          >
            AVAILABLE FOR COLLABORATION
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className={`w-7 h-12 border-2 ${isDark ? 'border-white/30' : 'border-black/30'} rounded-full flex justify-center relative overflow-hidden group cursor-pointer`}
          onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className={`w-1.5 h-4 ${isDark ? 'bg-gradient-to-b from-blue-400 to-purple-400' : 'bg-gradient-to-b from-blue-600 to-purple-600'} rounded-full mt-2`}
          />
          <div className={`absolute inset-0 ${isDark ? 'bg-white/10' : 'bg-black/10'} transform translate-y-full group-hover:translate-y-0 transition-transform duration-300`} />
        </div>
      </motion.div>

    </section>
  )
}

export default Hero
