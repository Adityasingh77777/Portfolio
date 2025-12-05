"use client"

import { useState, useEffect, useRef } from "react"
import { Calendar, MapPin, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"

const techColors = {
  "Node.js": "bg-green-500/20 text-green-400 border-green-500/30",
  Express: "bg-gray-500/20 text-gray-300 border-gray-500/30",
  PostgreSQL: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  React: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  TypeScript: "bg-blue-600/20 text-blue-400 border-blue-600/30",
  MongoDB: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  Redis: "bg-red-500/20 text-red-400 border-red-500/30",
  AWS: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  Docker: "bg-sky-500/20 text-sky-400 border-sky-500/30",
  GraphQL: "bg-pink-500/20 text-pink-400 border-pink-500/30",
}

const experiences = [
  {
    role: "Full Stack Development Intern",
    company: "1StopMandi (Govt. of Bihar–funded Startup)",
    type: "Internship",
    location: "Remote",
    period: "May 2025 – Jul 2025",
    description:
      "Worked on marketplace backend and integrations for a government-funded agri-tech startup, focused on secure transactions and media handling.",
    highlights: [
      "Architected backend infrastructure using Node.js, Express, and MongoDB, delivering 20+ secure REST APIs for core marketplace operations",
      "Integrated Razorpay and Cloudinary, improving transaction reliability and image handling speed",
      "Collaborated with frontend team to connect React interfaces with APIs, reducing UI latency",
      "Improved backend stability and reduced manual review time through automation and integrations",
    ],
    tech: ["Node.js", "Express", "MongoDB", "Razorpay", "Cloudinary", "JWT"],
    certificate: null,
  },
]

export function Experience() {
  const [activeIndex, setActiveIndex] = useState(0)
  const autoSwitchRef = useRef(null)
  const exp = experiences[activeIndex]

  // Auto-switch experiences every 8 seconds
  useEffect(() => {
    const startAutoSwitch = () => {
      autoSwitchRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev === experiences.length - 1 ? 0 : prev + 1))
      }, 8000)
    }

    startAutoSwitch()

    return () => {
      if (autoSwitchRef.current) {
        clearInterval(autoSwitchRef.current)
      }
    }
  }, [])

  // Reset auto-switch when user manually navigates
  const resetAutoSwitch = (newIndex) => {
    setActiveIndex(newIndex)
    if (autoSwitchRef.current) {
      clearInterval(autoSwitchRef.current)
    }
    autoSwitchRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev === experiences.length - 1 ? 0 : prev + 1))
    }, 8000)
  }

  const handlePrev = () => {
    resetAutoSwitch(activeIndex === 0 ? experiences.length - 1 : activeIndex - 1)
  }

  const handleNext = () => {
    resetAutoSwitch(activeIndex === experiences.length - 1 ? 0 : activeIndex + 1)
  }

  return (
    <section id="experience" className="py-24 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-serif text-4xl md:text-5xl italic text-foreground">Experience</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
        </div>

        {/* Timeline Stepper with Navigation */}
        <div className="relative mb-12 flex items-center justify-between gap-6">
          {/* Previous Arrow */}
          {experiences.length > 1 && (
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all hover:scale-110 flex-shrink-0"
              aria-label="Previous experience"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Timeline */}
          <div className="flex-1">
            <div className="relative">
              <div className="absolute top-3 left-0 right-0 h-0.5 bg-muted" />
              <div className="flex justify-between relative gap-2">
                {experiences.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => resetAutoSwitch(index)}
                    className={`relative z-10 w-4 h-4 rounded-full border-2 transition-all flex-shrink-0 ${
                      index === activeIndex
                        ? "bg-primary border-primary scale-125 glow shadow-lg shadow-primary/50"
                        : index < activeIndex
                          ? "bg-primary/50 border-primary/50 hover:bg-primary/70"
                          : "bg-card border-muted hover:border-primary hover:bg-primary/10"
                    }`}
                    title={`${experiences[index].company} - ${experiences[index].role}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Next Arrow */}
          {experiences.length > 1 && (
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all hover:scale-110 flex-shrink-0"
              aria-label="Next experience"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Experience Counter */}
        {experiences.length > 1 && (
          <div className="text-center mb-6 text-sm text-muted-foreground">
            <span className="font-semibold text-primary">{activeIndex + 1}</span>
            <span> / </span>
            <span>{experiences.length}</span>
          </div>
        )}

        {/* Experience Card */}
        <div className="glass rounded-2xl p-8 glow">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
              <p className="text-primary text-lg">{exp.company}</p>
            </div>
            <div className="flex flex-wrap gap-4 text-muted-foreground text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span>{exp.period}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>{exp.location}</span>
              </div>
            </div>
          </div>

          <p className="text-muted-foreground mb-6">{exp.description}</p>

          <ul className="space-y-3 mb-8">
            {exp.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-3 text-foreground">
                <span className="text-primary text-xl mt-0.5">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          {/* Bottom Section - Tech Stack on Left, Links on Right */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Tech Stack - Left */}
            <div className="flex flex-wrap gap-2">
              {exp.tech.map((tech) => (
                <span
                  key={tech}
                  className={`px-3 py-1.5 text-sm font-medium rounded-full border transition-all hover:scale-105 ${techColors[tech] || "bg-muted/50 text-muted-foreground border-muted"
                    }`}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links - Right */}
            <div className="flex flex-wrap gap-3 justify-start lg:justify-end">
              {exp.liveLink && (
                <a
                  href={exp.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary/90 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/40"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Link
                </a>
              )}
              {exp.certificate && (
                <a
                  href={exp.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary/90 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/40"
                >
                  <ExternalLink className="w-4 h-4" />
                  Certificate
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
