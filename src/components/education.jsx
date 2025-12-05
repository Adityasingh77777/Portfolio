import { GraduationCap, BookOpen } from "lucide-react"

const courseColors = [
  "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "bg-purple-500/20 text-purple-400 border-purple-500/30",
  "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  "bg-amber-500/20 text-amber-400 border-amber-500/30",
]

export function Education() {
  const courses = ["Data Structures", "DBMS", "Networks", "Operating Systems"]

  return (
    <section id="education" className="py-24 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-serif text-4xl md:text-5xl italic text-foreground">Education</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
        </div>

        <div className="glass rounded-2xl p-8 glow">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>

            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">IIIT Bhagalpur</h3>
                  <p className="text-primary">B.Tech, Electronics & Communication Engineering</p>
                </div>
                <p className="text-muted-foreground">Nov 2022 – Jul 2026</p>
              </div>

              <div className="flex flex-wrap gap-6 mb-6">
                <div className="text-center glass rounded-xl px-6 py-3">
                  <p className="text-3xl font-bold text-primary">8.43</p>
                  <p className="text-xs text-muted-foreground uppercase">Latest GPA</p>
                </div>
                <div className="text-center glass rounded-xl px-6 py-3">
                  <p className="text-3xl font-bold text-foreground">7.78</p>
                  <p className="text-xs text-muted-foreground uppercase">Overall CGPA</p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                    Relevant Coursework
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {courses.map((course, index) => (
                    <span
                      key={course}
                      className={`px-4 py-1.5 text-sm font-medium rounded-full border transition-all hover:scale-105 ${courseColors[index]}`}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
