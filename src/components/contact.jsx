import React from "react"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Code2 } from "lucide-react"
import { useForm, ValidationError } from "@formspree/react"

export function Contact() {
  const [state, handleSubmit] = useForm("xdkqddjz")

  return (
    <section id="contact" className="py-24 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-serif text-4xl md:text-5xl italic text-foreground">{"Let's Connect"}</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <p className="text-muted-foreground text-lg">
              {
                "I'm currently open to internships and early-career SDE roles. Feel free to reach out for opportunities or collaborations."
              }
            </p>

            <div className="space-y-4">
              <a
                href="mailto:singhadityakumar2022@gmail.com"
                className="flex items-center gap-4 p-4 glass rounded-xl hover:border-primary transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground">singhadityakumar2022@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+918252791161"
                className="flex items-center gap-4 p-4 glass rounded-xl hover:border-primary transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground">+91 8252791161</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 glass rounded-xl">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground">Bhagalpur, Bihar, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="https://github.com/Adityasingh77777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass rounded-xl text-muted-foreground hover:text-primary hover:border-primary transition-all hover:scale-110"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/aditya-kumar-singh-758361257/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass rounded-xl text-muted-foreground hover:text-primary hover:border-primary transition-all hover:scale-110"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://leetcode.com/u/invincible_guy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass rounded-xl text-muted-foreground hover:text-primary hover:border-primary transition-all hover:scale-110"
                >
                  <Code2 className="w-6 h-6" />
                </a>
              </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
            {state.succeeded ? (
              <div className="flex items-center justify-center h-64">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-xl font-semibold text-foreground mb-2">Thanks for reaching out!</p>
                  <p className="text-muted-foreground">I'll get back to you soon.</p>
                </div>
              </div>
            ) : (
              <>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-muted-foreground">
                      Name <span className="text-primary">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-muted-foreground">
                      Email <span className="text-primary">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground"
                      placeholder="your@email.com"
                    />
                    <ValidationError 
                      prefix="Email" 
                      field="email"
                      errors={state.errors}
                      className="text-xs text-red-500 mt-1"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm text-muted-foreground">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-muted-foreground">
                    Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground resize-none"
                    placeholder="Your message..."
                  />
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                    className="text-xs text-red-500 mt-1"
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  {state.submitting ? "Sending..." : "Send Message"}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
