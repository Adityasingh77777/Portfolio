// "use client"

// import { useState } from "react"
// import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"

// const techColors = {
//   "Node.js": "bg-green-500/20 text-green-400 border-green-500/30",
//   Express: "bg-gray-500/20 text-gray-300 border-gray-500/30",
//   React: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
//   PostgreSQL: "bg-blue-500/20 text-blue-400 border-blue-500/30",
//   MongoDB: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
//   Redis: "bg-red-500/20 text-red-400 border-red-500/30",
//   GraphQL: "bg-pink-500/20 text-pink-400 border-pink-500/30",
//   "Socket.io": "bg-purple-500/20 text-purple-400 border-purple-500/30",
//   JWT: "bg-amber-500/20 text-amber-400 border-amber-500/30",
//   "AWS S3": "bg-orange-500/20 text-orange-400 border-orange-500/30",
//   CloudFront: "bg-orange-500/20 text-orange-400 border-orange-500/30",
//   Zustand: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
//   Tailwind: "bg-teal-500/20 text-teal-400 border-teal-500/30",
//   Neon: "bg-green-500/20 text-green-400 border-green-500/30",
//   Cloudflare: "bg-orange-500/20 text-orange-400 border-orange-500/30",
// }

// const projects = [
//   {
//     title: "Checkpoint",
//     subtitle: "Gaming Social Platform",
//     description:
//       "A social platform for gamers to track gaming sessions, write reviews, and share experiences. Features real-time updates with Redis-based WebSockets, JWT auth, and AWS S3 media uploads with CloudFront CDN.",
//     highlights: [
//       "Real-time activity feed with Redis caching",
//       "Secure JWT authentication system",
//       "Media uploads with AWS S3 + CloudFront CDN",
//       "RESTful API with Express & PostgreSQL",
//     ],
//     tech: ["Node.js", "Express", "React", "PostgreSQL", "Redis", "AWS S3", "CloudFront", "JWT"],
//     github: "https://github.com/aditya/checkpoint",
//     live: null,
//     image: "/gaming-dashboard-with-game-cards-and-ratings-dark-.jpg",
//   },
//   {
//     title: "Weave",
//     subtitle: "Real-Time Messaging App",
//     description:
//       "A full-featured real-time messaging app with real-time chat powered by Socket.io, multimedia sharing, and a responsive interface built with React and Zustand.",
//     highlights: [
//       "Real-time messaging with Socket.io",
//       "Image & file sharing with AWS S3",
//       "State management with Zustand",
//       "Responsive UI with Tailwind CSS",
//     ],
//     tech: ["Node.js", "Express", "MongoDB", "React", "Socket.io", "Zustand", "Tailwind", "AWS S3"],
//     github: "https://github.com/aditya/weave",
//     live: null,
//     image: "/chat-messaging-app-interface-dark-theme-with-conve.jpg",
//   },
//   {
//     title: "Tourism Website",
//     subtitle: "Cultural Heritage Platform",
//     description:
//       "A beautiful tourism website showcasing cultural heritage sites and temples. Built with modern frontend technologies for an immersive user experience.",
//     highlights: [
//       "Interactive map integration",
//       "Image galleries with lazy loading",
//       "Responsive design for all devices",
//       "SEO optimized pages",
//     ],
//     tech: ["React", "Tailwind", "Node.js", "PostgreSQL", "Cloudflare"],
//     github: "https://github.com/aditya",
//     live: null,
//     image: "/tourism-website-cultural-heritage-ancient-temples-.jpg",
//   },
// ]

// export function Projects() {
//   const [activeIndex, setActiveIndex] = useState(0)

//   const nextProject = () => {
//     setActiveIndex((prev) => (prev + 1) % projects.length)
//   }

//   const prevProject = () => {
//     setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length)
//   }

//   const getCardStyle = (index) => {
//     const diff = index - activeIndex
//     const normalizedDiff = (diff + projects.length) % projects.length

//     // Calculate position relative to active card
//     let position = normalizedDiff
//     if (normalizedDiff > projects.length / 2) {
//       position = normalizedDiff - projects.length
//     }

//     const isActive = index === activeIndex
//     const absPosition = Math.abs(position)

//     return {
//       transform: `
//         translateX(${position * 320}px) 
//         scale(${isActive ? 1 : 0.85}) 
//         rotateY(${position * -15}deg)
//       `,
//       zIndex: projects.length - absPosition,
//       opacity: absPosition > 1 ? 0 : isActive ? 1 : 0.7,
//       filter: isActive ? "none" : "blur(2px)",
//     }
//   }

//   return (
//     <section id="projects" className="py-24 px-6 lg:px-20 overflow-hidden">
//       <div className="max-w-6xl mx-auto">
//         <div className="flex items-center gap-4 mb-16">
//           <h2 className="font-serif text-4xl md:text-5xl italic text-foreground">Featured Projects</h2>
//           <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
//         </div>

//         {/* 3D Carousel */}
//         <div className="relative h-[600px] md:h-[550px] flex items-center justify-center perspective-1000">
//           <div className="relative w-full max-w-md mx-auto">
//             {projects.map((project, index) => (
//               <div
//                 key={project.title}
//                 className="absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-sm transition-all duration-500 ease-out cursor-pointer"
//                 style={getCardStyle(index)}
//                 onClick={() => setActiveIndex(index)}
//               >
//                 <div
//                   className={`glass rounded-2xl overflow-hidden ${index === activeIndex ? "glow border-primary/50" : ""}`}
//                 >
//                   {/* Project Image */}
//                   <div className="relative h-48 overflow-hidden">
//                     <img
//                       src={project.image || "/placeholder.svg"}
//                       alt={project.title}
//                       className="w-full h-full object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
//                     <div className="absolute top-4 right-4 flex gap-2">
//                       {project.github && (
//                         <a
//                           href={project.github}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="p-2 rounded-lg bg-card/80 backdrop-blur text-foreground hover:text-primary transition-colors"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           <Github className="w-4 h-4" />
//                         </a>
//                       )}
//                       {project.live && (
//                         <a
//                           href={project.live}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="p-2 rounded-lg bg-card/80 backdrop-blur text-foreground hover:text-primary transition-colors"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           <ExternalLink className="w-4 h-4" />
//                         </a>
//                       )}
//                     </div>
//                   </div>

//                   {/* Project Content */}
//                   <div className="p-6 space-y-4">
//                     <div>
//                       <p className="text-primary text-xs uppercase tracking-wider mb-1">{project.subtitle}</p>
//                       <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
//                     </div>

//                     <p className="text-muted-foreground text-sm line-clamp-3">{project.description}</p>

//                     {/* Highlights */}
//                     <ul className="space-y-1">
//                       {project.highlights.slice(0, 2).map((highlight, i) => (
//                         <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
//                           <span className="text-primary mt-1">•</span>
//                           <span className="line-clamp-1">{highlight}</span>
//                         </li>
//                       ))}
//                     </ul>

//                     {/* Tech Stack */}
//                     <div className="flex flex-wrap gap-2 pt-2">
//                       {project.tech.slice(0, 4).map((tech) => (
//                         <span
//                           key={tech}
//                           className={`px-2.5 py-1 text-xs font-medium rounded-full border transition-all hover:scale-105 ${
//                             techColors[tech] || "bg-muted/50 text-muted-foreground border-muted"
//                           }`}
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                       {project.tech.length > 4 && (
//                         <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-muted/50 text-muted-foreground border border-muted">
//                           +{project.tech.length - 4}
//                         </span>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Navigation Arrows */}
//           <button
//             onClick={prevProject}
//             className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full glass text-foreground hover:text-primary hover:border-primary transition-all z-10"
//             aria-label="Previous project"
//           >
//             <ChevronLeft className="w-6 h-6" />
//           </button>
//           <button
//             onClick={nextProject}
//             className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full glass text-foreground hover:text-primary hover:border-primary transition-all z-10"
//             aria-label="Next project"
//           >
//             <ChevronRight className="w-6 h-6" />
//           </button>
//         </div>

//         {/* Dots Indicator */}
//         <div className="flex justify-center gap-3 mt-8">
//           {projects.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveIndex(index)}
//               className={`w-3 h-3 rounded-full transition-all ${
//                 index === activeIndex ? "bg-primary w-8" : "bg-muted hover:bg-muted-foreground"
//               }`}
//               aria-label={`Go to project ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }








"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"
// import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "CheckPoint",
    subtitle: "Gaming Social Platform",
    description:
      "Full-stack Letterboxd-style gaming platform enabling users to log, rate, review, and wishlist games. Built with REST APIs, JWT auth and Cloudinary for media.",
    role: "Full-stack — architected backend APIs, built React dashboard, integrated Cloudinary and auth.",
    tech: [
      { name: "Node.js", color: "bg-green-600" },
      { name: "Express", color: "bg-neutral-700" },
      { name: "MongoDB", color: "bg-green-500" },
      { name: "React", color: "bg-cyan-500" },
      { name: "Cloudinary", color: "bg-blue-500" },
      { name: "JWT", color: "bg-purple-500" },
      { name: "Tailwind", color: "bg-teal-500" },
    ],
    outcomes: ["+70% session time", "Explorer dashboard improved discovery by 40%", "Backend latency down 30%"],
    liveUrl: "https://checkpoint7.pages.dev/",
    sourceUrl: "https://github.com/Grimoire-Devs/CheckPoint",
    image: "/gaming-dashboard-with-game-cards-and-ratings-dark-.png",
  },
  {
    title: "LiveConnect",
    subtitle: "Real-time Messaging",
    description:
      "Real-time messaging platform with presence tracking, media sharing and multi-room communication. Built with Socket.IO, Zustand and Cloudinary.",
    role: "Full-stack — real-time messaging, presence, media uploads and responsive UI.",
    tech: [
      { name: "Socket.IO", color: "bg-neutral-800" },
      { name: "Node.js", color: "bg-green-600" },
      { name: "React", color: "bg-cyan-500" },
      { name: "Zustand", color: "bg-orange-500" },
      { name: "MongoDB", color: "bg-green-500" },
      { name: "Cloudinary", color: "bg-blue-500" },
    ],
    outcomes: ["Real-time updates & presence — latency down 40%", "Media sharing enabled for images","Improved responsiveness by 25%"],
    liveUrl: "https://liveconnect.pages.dev/login",
    sourceUrl: "https://github.com/Adityasingh77777/LiveConnect",
    image: "/chat-messaging-app-interface-dark-theme-with-conve.jpg",
  },
  // {
  //   title: "EasyTrips",
  //   subtitle: "Trip Planner & Itinerary Manager",
  //   description:
  //     "Web platform for creating, organizing, and tracking trip itineraries with clean UI and modular trip components.",
  //   role:
  //     "Full-stack developer — built trip creation workflows, modular itinerary components, and state-driven UI.",
  //   tech: [
  //     { name: "React.js", color: "bg-blue-600" },
  //     { name: "JavaScript", color: "bg-yellow-500" },
  //     { name: "Tailwind CSS", color: "bg-cyan-600" },
  //     { name: "React Router", color: "bg-indigo-600" }
  //   ],
  //   outcomes: [
  //     "Structured multi-step trip planning flow",
  //     "Dynamic itinerary rendering using reusable components",
  //     "Responsive UI optimized for mobile and desktop"
  //   ],
  //   liveUrl: "", // no live deployment in repo
  //   sourceUrl: "https://github.com/aditya/EasyTrips",
  //   image: "/easytrips-trip-planning-ui.jpg" // replace with your actual uploaded asset
  // }, {
  //   title: "FileFlow",
  //   subtitle: "File Management & Sharing",
  //   description:
  //     "File management platform with upload, preview, and organized file listing. Designed for clean workflow and quick document access.",
  //   role:
  //     "Full-stack developer — implemented upload handling, file preview UI, and component-driven dashboard.",
  //   tech: [
  //     { name: "Next.js", color: "bg-blue-600" },
  //     { name: "JavaScript", color: "bg-yellow-500" },
  //     { name: "Tailwind CSS", color: "bg-cyan-600" },
  //   ],
  //   outcomes: [
  //     "Optimized file browsing with modular components",
  //     "Responsive layout for desktop and mobile",
  //     "Streamlined upload-to-preview flow"
  //   ],
  //   liveUrl: "", // no deployment in the repo
  //   sourceUrl: "https://github.com/aditya/FileFlow",
  //   image: "/fileflow-file-management-ui.jpg" // replace with your actual asset
  // }
  ,
  // {
  //   title: "Bihar Tourism",
  //   subtitle: "Hackathon Project",
  //   description: "Tourism website showcasing Bihar's heritage, culture, and tourist destinations.",
  //   role: "Frontend Developer — 3rd place winner in hackathon competition.",
  //   tech: [
  //     { name: "React", color: "bg-cyan-500" },
  //     { name: "Tailwind", color: "bg-teal-500" },
  //     { name: "JavaScript", color: "bg-yellow-400" },
  //     { name: "REST APIs", color: "bg-purple-500" },
  //   ],
  //   outcomes: ["3rd place in hackathon", "Responsive design", "Interactive maps"],
  //   liveUrl: "#",
  //   sourceUrl: "#",
  //   image: "/tourism-website-cultural-heritage-ancient-temples-.jpg",
  // },
]

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleNavigation = (newIndex) => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex(newIndex)
    setTimeout(() => setIsAnimating(false), 600)
  }

  const handlePrev = () => {
    handleNavigation((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  const handleNext = () => {
    handleNavigation((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  const handleDotClick = (index) => {
    handleNavigation(index)
  }

  const getCardStyle = (index) => {
    const diff = index - activeIndex
    const normalizedDiff = (diff + projects.length) % projects.length
    const adjustedDiff = normalizedDiff > projects.length / 2 ? normalizedDiff - projects.length : normalizedDiff

    const isActive = adjustedDiff === 0
    const absPos = Math.abs(adjustedDiff)

    if (absPos > 1) {
      return {
        transform: `translateX(${adjustedDiff * 150}%) scale(0.5)`,
        opacity: 0,
        zIndex: 0,
        pointerEvents: "none",
      }
    }

    if (isActive) {
      return {
        transform: "translateX(0) scale(1)",
        opacity: 1,
        zIndex: 30,
        filter: "none",
      }
    }

    return {
      transform: `translateX(${adjustedDiff * 100}%) scale(0.75)`,
      opacity: 0.4,
      zIndex: 10,
      filter: "blur(0.5px)",
    }
  }

  return (
    <section id="projects" className="py-20 px-6 md:py-32 overflow-hidden bg-gradient-to-b from-transparent via-transparent to-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-6xl italic text-foreground mb-6">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing my best work in full-stack development, real-time systems, and modern UI design
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-primary to-transparent mx-auto rounded-full mt-6" />
        </div>

        {/* Carousel Container */}
        <div className="relative px-4 md:px-16 lg:px-20">
          <div className="relative h-[620px] md:h-[720px] lg:h-[820px]" style={{ perspective: "1200px" }}>
            <div className="absolute inset-0 flex items-center justify-center">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className="absolute w-full max-w-sm md:max-w-md lg:max-w-xl transition-all duration-600 ease-out cursor-pointer"
                  style={{
                    ...getCardStyle(index),
                    transformStyle: "preserve-3d",
                  }}
                  onClick={() => handleDotClick(index)}
                  role="button"
                  tabIndex={index === activeIndex ? 0 : -1}
                >
                  <div
                    className={`glass rounded-3xl overflow-hidden backdrop-blur-xl border border-white/10 transition-all duration-600 ${index === activeIndex ? "ring-2 ring-primary/50 shadow-2xl shadow-primary/20" : "hover:border-white/20"
                      }`}
                  >
                    {/* Project Image */}
                    <div className="relative h-56  overflow-hidden group">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/0" />

                      {/* Image Overlay Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                        <p className="text-primary text-xs md:text-sm font-bold uppercase tracking-widest mb-2">
                          {project.subtitle}
                        </p>
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                          {project.title}
                        </h3>
                      </div>

                      {/* GitHub Icon */}
                      <a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="absolute top-5 right-5 p-3 bg-black/40 backdrop-blur-sm rounded-full hover:bg-primary/80 transition-all duration-300 hover:scale-110 z-20 group/icon"
                        aria-label="View source code"
                      >
                        <Github className="w-5 h-5 text-white group-hover/icon:text-white transition-colors" />
                      </a>
                    </div>

                    {/* Content Section - Expanded View */}
                    <div
                      className={`transition-all duration-600 overflow-hidden ${index === activeIndex ? "max-h-[500px] opacity-100 p-6 md:p-8" : "max-h-0 opacity-0 p-0"
                        }`}
                    >
                      <div className="space-y-5">
                        {/* Description */}
                        <div>
                          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        {/* Role */}
                        <div className="border-l-2 border-primary pl-4">
                          <p className="text-sm font-semibold text-foreground">
                            {project.role}
                          </p>
                        </div>

                        {/* Outcomes */}
                        <ul className="space-y-2">
                          {project.outcomes.map((outcome, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                              <span className="w-2.5 h-2.5 rounded-full bg-primary flex-shrink-0" />
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.tech.slice(0, 6).map((tech) => (
                            <span
                              key={tech.name}
                              className={`px-4 py-2 text-xs font-semibold rounded-full text-white shadow-lg transition-all hover:scale-110 cursor-default ${tech.color}`}
                            >
                              {tech.name}
                            </span>
                          ))}
                          {project.tech.length > 6 && (
                            <span className="px-4 py-2 text-xs font-semibold rounded-full bg-white/10 text-white border border-white/20">
                              +{project.tech.length - 6}
                            </span>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3 pt-4 flex-wrap">
                          {project.liveUrl && <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary/90 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/40"
                          >
                            <ExternalLink className="w-4 h-4" />
                            View Live
                          </a>}
                          <a
                            href={project.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300"
                          >
                            <Github className="w-4 h-4" />
                            Source
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute -left-4 md:-left-12 lg:-left-16 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-full bg-white/10 hover:bg-primary/60 text-white transition-all duration-300 hover:scale-110 z-40 hover:shadow-lg hover:shadow-primary/30 backdrop-blur-sm"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute -right-4 md:-right-12 lg:-right-16 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-full bg-white/10 hover:bg-primary/60 text-white transition-all duration-300 hover:scale-110 z-40 hover:shadow-lg hover:shadow-primary/30 backdrop-blur-sm"
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          {/* Project Counter */}
          <div className="text-center mt-8 text-sm text-muted-foreground">
            <span className="font-semibold text-primary">{activeIndex + 1}</span>
            <span> / </span>
            <span>{projects.length}</span>
          </div>
        </div>

        {/* Dots Navigation - Enhanced */}
        <div className="flex justify-center gap-4 mt-12">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`transition-all duration-400 rounded-full ${index === activeIndex
                ? "w-12 h-3 bg-gradient-to-r from-primary to-primary/60 shadow-lg shadow-primary/50"
                : "w-3 h-3 bg-white/20 hover:bg-white/40"
                }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
