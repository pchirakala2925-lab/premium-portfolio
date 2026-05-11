import { useEffect, useMemo, useRef } from 'react'
import { motion, useMotionTemplate, useSpring } from 'framer-motion'

function usePrefersReducedMotion() {
  if (typeof window === 'undefined') return false
  return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false
}

export default function CyberBackground() {
  const reduced = usePrefersReducedMotion()
  const ref = useRef(null)

  // Mouse-follow glow
  const mouse = useRef({ x: 0, y: 0 })
  const x = useSpring(0, { stiffness: 120, damping: 20, mass: 0.6 })
  const y = useSpring(0, { stiffness: 120, damping: 20, mass: 0.6 })

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      x.set(e.clientX)
      y.set(e.clientY)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [x, y])

  const cursorGlow = useMemo(() => {
    return {
      background: useMotionTemplate`radial-gradient(600px circle at ${x}px ${y}px, rgba(56,189,248,0.18), transparent 40%)`,
      mixBlendMode: 'screen',
      opacity: reduced ? 0.35 : 1,
    }
  }, [reduced, x, y])

  const blobs = useMemo(() => {
    // fixed positions so it feels like a premium showcase video
    return [
      { left: '8%', top: '18%', size: 520, color: 'rgba(124,58,237,0.16)' },
      { right: '8%', top: '14%', size: 620, color: 'rgba(56,189,248,0.14)' },
      { left: '22%', bottom: '8%', size: 520, color: 'rgba(236,72,153,0.11)' },
      { right: '26%', bottom: '14%', size: 460, color: 'rgba(124,58,237,0.12)' },
    ]
  }, [])

  const particles = useMemo(() => {
    // deterministic-ish particle layout
    const res = []
    const count = 42
    for (let i = 0; i < count; i++) {
      const t = (i + 1) / count
      const x = (t * 100 + (i % 7) * 3.2) % 100
      const y = (Math.sin(i * 1.7) * 16 + 50 + (i % 5) * 4) % 100
      const size = 2 + (i % 6) * 0.55
      const dur = 6 + (i % 9)
      const delay = (i % 7) * 0.35
      const opacity = 0.35 + ((i % 8) / 10)
      const hue = i % 2 === 0 ? 'rgba(56,189,248,' : 'rgba(124,58,237,'
      res.push({ x, y, size, dur, delay, opacity, hue })
    }
    return res
  }, [])

  return (
    <div ref={ref} className="cyber-bg" aria-hidden="true">
      <div className="cyber-bg__base" />
      <div className="cyber-bg__grid" />

      {/* Cursor glow */}
      <motion.div
        className="cyber-bg__cursor"
        style={cursorGlow}
      />

      {/* Blobs */}
      {blobs.map((b, idx) => (
        <motion.div
          key={idx}
          className="cyber-bg__blob"
          style={{
            left: b.left,
            right: b.right,
            top: b.top,
            bottom: b.bottom,
            width: b.size,
            height: b.size,
            background: b.color,
          }}
          animate={reduced ? undefined : { y: [0, -18, 0], x: [0, 10, 0] }}
          transition={{ duration: 9 + idx * 2, repeat: reduced ? 0 : Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* Particles */}
      {particles.map((p, idx) => (
        <motion.span
          key={idx}
          className="cyber-bg__particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: `${p.hue}${p.opacity})`,
          }}
          animate={reduced ? undefined : { y: [-12, 18, -12], opacity: [0.2, 0.9, 0.25] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: reduced ? 0 : Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* Subtle vignette */}
      <div className="cyber-bg__vignette" />
    </div>
  )
}

