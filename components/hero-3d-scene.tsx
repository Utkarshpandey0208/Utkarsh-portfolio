"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"

function ParticleField() {
  const ref = useRef<THREE.Points>(null!)
  const count = 2500

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 6 + Math.random() * 6
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)
    }
    return pos
  }, [])

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.getElapsedTime()
    ref.current.rotation.x = Math.sin(t * 0.04) * 0.15
    ref.current.rotation.y = t * 0.025
    ref.current.rotation.z = Math.sin(t * 0.03) * 0.1
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#8B5CF6"
        size={0.025}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  )
}

function GridPlane() {
  const ref = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (!ref.current) return
    ref.current.position.z = (state.clock.getElapsedTime() * 0.15) % 1
  })

  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
      <planeGeometry args={[30, 30, 30, 30]} />
      <meshBasicMaterial
        color="#3B82F6"
        wireframe
        transparent
        opacity={0.06}
      />
    </mesh>
  )
}

function FloatingOrbs() {
  const orb1 = useRef<THREE.Mesh>(null!)
  const orb2 = useRef<THREE.Mesh>(null!)
  const orb3 = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (orb1.current) {
      orb1.current.position.x = Math.sin(t * 0.4) * 3
      orb1.current.position.y = Math.cos(t * 0.3) * 2 + 1
    }
    if (orb2.current) {
      orb2.current.position.x = Math.cos(t * 0.35) * 4 - 2
      orb2.current.position.y = Math.sin(t * 0.5) * 1.5 - 0.5
    }
    if (orb3.current) {
      orb3.current.position.x = Math.sin(t * 0.25 + 1) * 3.5
      orb3.current.position.y = Math.sin(t * 0.45) * 2
    }
  })

  return (
    <>
      <mesh ref={orb1} position={[3, 1, -2]}>
        <sphereGeometry args={[0.18, 16, 16]} />
        <meshBasicMaterial color="#8B5CF6" transparent opacity={0.8} />
      </mesh>
      <mesh ref={orb2} position={[-2, -0.5, -1]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshBasicMaterial color="#3B82F6" transparent opacity={0.9} />
      </mesh>
      <mesh ref={orb3} position={[1.5, 2, -3]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshBasicMaterial color="#22D3EE" transparent opacity={0.85} />
      </mesh>
    </>
  )
}

export function Hero3DScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 65 }}
        gl={{ antialias: false, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.3} />
        <ParticleField />
        <GridPlane />
        <FloatingOrbs />
      </Canvas>
    </div>
  )
}
