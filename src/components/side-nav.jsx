"use client"

import { useState, useEffect } from "react"
import {
  Home,
  User,
  FolderOpen,
  Briefcase,
  Award,
  GraduationCap,
  Wrench,
  Mail,
  Github,
  Linkedin,
  Code2,
  Download,
} from "lucide-react"

const navItems = [
  { href: "#hero", icon: Home, label: "Home" },
  { href: "#about", icon: User, label: "About" },
  { href: "#projects", icon: FolderOpen, label: "Projects" },
  { href: "#experience", icon: Briefcase, label: "Experience" },
  { href: "#achievements", icon: Award, label: "Achievements" },
  { href: "#education", icon: GraduationCap, label: "Education" },
  { href: "#skills", icon: Wrench, label: "Skills" },
  { href: "#contact", icon: Mail, label: "Contact" },
]

const socialLinks = [
  { href: "https://github.com/Adityasingh77777", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/aditya-kumar-singh-758361257/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://leetcode.com/u/invincible_guy/", icon: Code2, label: "LeetCode" },
]

export function SideNav() {
  const [activeSection, setActiveSection] = useState("#hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1))
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(`#${section}`)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href) => {
    const element = document.getElementById(href.slice(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Left Side - Social Links */}
      <nav className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass rounded-xl text-muted-foreground hover:text-primary hover:border-primary hover:glow transition-all duration-300 group relative"
            aria-label={link.label}
          >
            <link.icon className="w-5 h-5" />
            <span className="absolute left-14 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-card text-foreground text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {link.label}
            </span>
          </a>
        ))}
        <a
          href="/resume.pdf"
          download
          className="p-3 glass rounded-xl text-muted-foreground hover:text-primary hover:border-primary hover:glow transition-all duration-300 group relative"
          aria-label="Download CV"
        >
          <Download className="w-5 h-5" />
          <span className="absolute left-14 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-card text-foreground text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Download CV
          </span>
        </a>
      </nav>

      {/* Right Side - Section Navigation */}
      <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-2">
        {navItems.map((item) => {
          const isActive = activeSection === item.href
          return (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className={`p-3 rounded-xl transition-all duration-300 group relative ${
                isActive
                  ? "bg-primary text-primary-foreground glow"
                  : "glass text-muted-foreground hover:text-primary hover:border-primary"
              }`}
              aria-label={item.label}
            >
              <item.icon className="w-5 h-5" />
              <span className="absolute right-14 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-card text-foreground text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {item.label}
              </span>
            </button>
          )
        })}
      </nav>
    </>
  )
}
