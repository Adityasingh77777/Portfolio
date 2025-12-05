import { ArrowDown, MapPin, Mail, Phone, Github, Linkedin } from "lucide-react"

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 lg:px-20 pt-16 lg:pt-0 relative">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-primary text-sm tracking-widest uppercase">Software Engineer</p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-foreground leading-tight">
              {"Hey there, I'm"}
              <br />
              <span className="text-gradient">Aditya Kumar Singh</span>
            </h1>
          </div>

            <p className="text-muted-foreground text-lg max-w-xl">
              B.Tech (ECE) student at IIIT Bhagalpur — building scalable full-stack systems, real-time
              features, and production-ready APIs. Open to internships and SDE roles.
            </p>

          {/* Metrics */}
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold text-lg">15+</span>
              <span className="text-muted-foreground">features shipped</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold text-lg">99.9%</span>
              <span className="text-muted-foreground">uptime</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold text-lg">1850+</span>
              <span className="text-muted-foreground">LeetCode rating</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              download="Aditya_Kumar_Singh_Resume.pdf"
              className="px-6 py-3 rounded-xl border border-primary/30 text-foreground hover:border-primary hover:bg-primary/10 transition-all"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right - Contact Card */}
        <div className="glass rounded-2xl p-8 glow">
          <div className="space-y-6">
            <div className="text-center pb-4 border-b border-border">
                <img
                  src="/profilepic.jpg"
                  alt="Aditya Kumar Singh"
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-primary/30"
                />
                <h3 className="text-xl font-semibold text-foreground">Aditya Kumar Singh</h3>
                <p className="text-muted-foreground text-sm">B.Tech (ECE) • Full-Stack Developer</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Bhagalpur, Bihar, India 813210</span>
              </div>
                  <a
                    href="mailto:singhadityakumar2022@gmail.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="truncate">singhadityakumar2022@gmail.com</span>
                  </a>
                  <a
                    href="tel:+918252791161"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>+91 8252791161</span>
                  </a>
            </div>

            <div className="flex gap-3 pt-4">
                <a
                  href="https://github.com/Adityasingh77777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 glass rounded-xl p-3 flex items-center justify-center gap-2 text-muted-foreground hover:text-primary hover:border-primary transition-all"
                >
                  <Github className="w-5 h-5" />
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/aditya-kumar-singh-758361257/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 glass rounded-xl p-3 flex items-center justify-center gap-2 text-muted-foreground hover:text-primary hover:border-primary transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm">LinkedIn</span>
                </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  )
}
