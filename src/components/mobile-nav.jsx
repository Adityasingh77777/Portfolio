"use client"

import { useState } from "react"
import {
  Menu,
  X,
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
  { href: "https://github.com/aditya", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/aditya", icon: Linkedin, label: "LinkedIn" },
  { href: "https://leetcode.com/u/user9160fd/", icon: Code2, label: "LeetCode" },
]

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (href) => {
    const element = document.getElementById(href.slice(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <div className="lg:hidden">
      {/* Floating Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-3 glass rounded-xl text-foreground hover:text-primary transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Logo */}
      <div className="fixed top-4 left-4 z-50">
        <span className="font-serif italic text-2xl text-primary">AK</span>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl">
          <div className="flex flex-col items-center justify-center h-full gap-4 p-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="flex items-center gap-4 p-4 w-full max-w-xs glass rounded-xl text-foreground hover:text-primary hover:border-primary transition-all"
              >
                <item.icon className="w-5 h-5" />
                <span className="text-lg">{item.label}</span>
              </button>
            ))}

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass rounded-xl text-muted-foreground hover:text-primary transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="w-6 h-6" />
                </a>
              ))}
              <a
                href="/resume.pdf"
                download
                className="p-3 glass rounded-xl text-muted-foreground hover:text-primary transition-colors"
                aria-label="Download CV"
              >
                <Download className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
