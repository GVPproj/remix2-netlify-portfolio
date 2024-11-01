import React, { useState, useEffect } from "react"

interface FadeUpProps {
  delay?: number
  duration?: number
  children: React.ReactElement
}

const FadeUp: React.FC<FadeUpProps> = ({
  children,
  delay = 0.1,
  duration = 0.6,
}) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entries[0].target)
        }
      },
      { threshold: 1, rootMargin: "0px" }
    )

    const fadeUpElement = document.getElementById("fade-up")

    if (fadeUpElement) {
      observer.observe(fadeUpElement)
    }

    return () => {
      if (fadeUpElement) {
        observer.unobserve(fadeUpElement)
      }
      observer.disconnect()
    }
  }, [])

  return (
    <div
      id="fade-up"
      className={`transition duration-${duration} delay-${delay} ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {children}
    </div>
  )
}

export default FadeUp
