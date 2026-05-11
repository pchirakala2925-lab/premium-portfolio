import { useEffect, useState } from 'react'

export default function Typewriter({
  text = '',
  speed = 80,
  className = '',
  showCursor = true,
}) {
  const [visible, setVisible] = useState('')

  useEffect(() => {
    let idx = 0

    const t = window.setInterval(() => {
      idx += 1
      setVisible(text.slice(0, idx))

      if (idx >= text.length) {
        window.clearInterval(t)
      }
    }, speed)

    return () => window.clearInterval(t)
  }, [text, speed])


  return (
    <span className={className}>
      {visible}
      {showCursor ? <span className="typing-cursor" aria-hidden="true" /> : null}
    </span>
  )
}

