"use client"

import { useState } from "react"

const skillCategories = [
  { id: "all", label: "All" },
  { id: "languages", label: "Languages" },
  { id: "backend", label: "Backend" },
  { id: "frontend", label: "Frontend" },
  { id: "database", label: "Database" },
  { id: "devops", label: "DevOps & Tools" },
]

const skills = [
  // Languages
  { name: "JavaScript", category: "languages", color: "bg-yellow-400", textColor: "text-black" },
  { name: "Java", category: "languages", color: "bg-red-600", textColor: "text-white" },
  { name: "C", category: "languages", color: "bg-gray-500", textColor: "text-white" },
  { name: "C++", category: "languages", color: "bg-blue-600", textColor: "text-white" },
  { name: "Python", category: "languages", color: "bg-green-500", textColor: "text-white" },
  { name: "HTML", category: "languages", color: "bg-orange-400", textColor: "text-black" },
  { name: "CSS", category: "languages", color: "bg-blue-400", textColor: "text-black" },

  // Backend
  { name: "Node.js", category: "backend", color: "bg-green-500", textColor: "text-white" },
  { name: "Express.js", category: "backend", color: "bg-gray-600", textColor: "text-white" },
  { name: "GraphQL", category: "backend", color: "bg-pink-500", textColor: "text-white" },
  { name: "Prisma", category: "backend", color: "bg-indigo-600", textColor: "text-white" },
  { name: "JWT", category: "backend", color: "bg-amber-500", textColor: "text-black" },
  { name: "Socket.IO", category: "backend", color: "bg-purple-600", textColor: "text-white" },

  // Frontend
  { name: "React.js", category: "frontend", color: "bg-cyan-500", textColor: "text-black" },
  { name: "Zustand", category: "frontend", color: "bg-indigo-500", textColor: "text-white" },
  { name: "Tailwind CSS", category: "frontend", color: "bg-teal-500", textColor: "text-white" },

  // Database
  { name: "MongoDB", category: "database", color: "bg-emerald-600", textColor: "text-white" },
  { name: "PostgreSQL", category: "database", color: "bg-blue-700", textColor: "text-white" },
  { name: "Neon", category: "database", color: "bg-green-600", textColor: "text-white" },

  // DevOps & Tools
  { name: "AWS S3", category: "devops", color: "bg-orange-500", textColor: "text-white" },
  { name: "EC2", category: "devops", color: "bg-yellow-500", textColor: "text-black" },
  { name: "CloudFront", category: "devops", color: "bg-orange-600", textColor: "text-white" },
  { name: "Cloudinary", category: "devops", color: "bg-blue-500", textColor: "text-white" },
  { name: "Git", category: "devops", color: "bg-red-500", textColor: "text-white" },
  { name: "Postman", category: "devops", color: "bg-sky-500", textColor: "text-white" },
  { name: "Jest", category: "devops", color: "bg-purple-500", textColor: "text-white" },
  { name: "Render", category: "devops", color: "bg-pink-500", textColor: "text-white" },
  { name: "Vercel", category: "devops", color: "bg-indigo-400", textColor: "text-black" },
  { name: "Cloudflare", category: "devops", color: "bg-orange-400", textColor: "text-black" },
]

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredSkills = activeCategory === "all" ? skills : skills.filter((skill) => skill.category === activeCategory)

  return (
    <section id="skills" className="py-24 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-serif text-4xl md:text-5xl italic text-foreground">Skills</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground glow"
                  : "glass text-muted-foreground hover:text-primary hover:border-primary"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* 3D Keyboard Style Grid */}
        <div
          className="glass rounded-3xl p-8 md:p-12"
          style={{
            perspective: "1000px",
          }}
        >
          <div
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4"
            style={{
              transform: "rotateX(10deg) rotateY(-5deg)",
              transformStyle: "preserve-3d",
            }}
          >
            {filteredSkills.map((skill, index) => (
              <div
                key={skill.name}
                className={`${skill.color} ${skill.textColor} rounded-xl p-4 flex items-center justify-center text-center font-semibold text-sm transition-all duration-300 cursor-pointer hover:scale-110 hover:-translate-y-2`}
                style={{
                  boxShadow: "0 4px 0 rgba(0,0,0,0.3), 0 8px 20px rgba(0,0,0,0.2)",
                  transform: "translateZ(0)",
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {skill.name}
              </div>
            ))}
          </div>
        </div>

        {/* Fun Quote */}
        {/* <div className="mt-12 text-center">
          <p className="font-serif text-2xl md:text-3xl italic text-muted-foreground">
            <span className="text-foreground font-bold">JavaScript</span>
            <br />
            <span className="text-lg">yeeting code into the DOM since '95, no cap!</span>
          </p>
        </div> */}
      </div>
    </section>
  )
}
