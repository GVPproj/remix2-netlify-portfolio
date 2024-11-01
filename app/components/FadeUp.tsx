import React, { useState, useEffect } from "react"

interface FadeUpProps {
  delay?: number
  duration?: number
  children: React.ReactElement
  id: string
}

const FadeUp: React.FC<FadeUpProps> = ({
  children,
  delay = 150,
  duration = 500,
  id,
}) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5, rootMargin: "0px 0px -50px 0px" }
    )

    const fadeUpElement = document.getElementById(id)

    if (fadeUpElement) {
      observer.observe(fadeUpElement)
    }

    return () => {
      if (fadeUpElement) {
        observer.unobserve(fadeUpElement)
      }
      observer.disconnect()
    }
  }, [id])

  return (
    <div
      id={id}
      className={`transition-all duration-${duration} delay-${delay} ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      }`}
    >
      {children}
    </div>
  )
}

export default FadeUp
