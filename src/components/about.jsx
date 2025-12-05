export function About() {
  const skills = [
    { category: "Languages", items: "JavaScript, Java, C, C++, Python, HTML, CSS" },
    { category: "Backend", items: "Node.js, Express.js, GraphQL, Prisma, JWT, Socket.IO, REST APIs" },
    { category: "Frontend", items: "React.js, Zustand, Tailwind CSS, DaisyUI" },
    { category: "Databases & Cloud", items: "MongoDB, PostgreSQL (Neon), AWS S3, EC2, CloudFront, Cloudinary" },
  ]

  return (
    <section id="about" className="py-24 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-serif text-4xl md:text-5xl italic text-foreground">About</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a B.Tech student in Electronics & Communication Engineering at IIIT Bhagalpur (Nov 2022 — Jul 2026).
              I build full-stack web applications with an emphasis on backend architecture, real-time systems, and
              user-focused frontends. My work spans API design, authentication, media pipelines, and scalable data
              models.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm experienced in full-stack development, cloud integrations, and delivering production-ready features.
              Open to internships and early-career SDE roles.
            </p>
          </div>

          <div className="glass rounded-2xl p-6 space-y-4">
            {skills.map((skill) => (
              <div key={skill.category} className="space-y-2">
                <h4 className="text-primary font-semibold text-sm uppercase tracking-wider">{skill.category}</h4>
                <p className="text-muted-foreground">{skill.items}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
