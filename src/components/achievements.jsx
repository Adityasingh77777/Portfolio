import { Award, Code2, Trophy, Star } from "lucide-react"

const achievements = [
  {
    icon: Code2,
    title: "LeetCode Knight",
    value: "1850+",
    description: "Contest rating 1850+, top 6% globally",
    link: "https://leetcode.com/u/invincible_guy/",
    color: "from-amber-500 to-orange-500",
    glowColor: "shadow-amber-500/20",
  },
  {
    icon: Code2,
    title: "Competitive Problem Solving",
    value: "500+",
    description: "500+ problems solved across platforms",
    link: "https://codeforces.com/profile/aditya.07",
    color: "from-cyan-500 to-blue-500",
    glowColor: "shadow-cyan-500/20",
  },
  {
    icon: Trophy,
    title: "Flipkart GRiD 7.0",
    value: "Semi-Finalist",
    description: "Reached semi-finals in Flipkart software challenge",
    link: "https://drive.google.com/file/d/1UJhbbTKeDjD51T7yG_4lH73jzTkWV2aw/view?usp=sharing",
    color: "from-purple-500 to-pink-500",
    glowColor: "shadow-purple-500/20",
  },
  {
    icon: Award,
    title: "Smart India Hackathon",
    value: "Selected",
    description: "Chosen for SIH (2024, 2025) for multiple projects",
    link: "https://drive.google.com/file/d/1j5Fj3sHdHLTLI1JWcNtYMWGa6wNh5_6T/view?usp=sharing",
    color: "from-green-500 to-emerald-500",
    glowColor: "shadow-green-500/20",
  },
  {
    icon: Star,
    title: "Cisco Cybersecurity",
    value: "Certified",
    description: "Cisco Cybersecurity certification with hands-on exposure to network safety",
    link: "https://drive.google.com/file/d/1a8zmONHYVBK8SPJdswaHoFD_ch-b29SM/view?usp=sharing",
    color: "from-blue-400 to-blue-500",
    glowColor: "shadow-blue-400/20",
  },
  {
    icon: Award,
    title: "Accenture Developer",
    value: "Simulation",
    description: "Completed Accenture Developer & Technology Simulation (Forage)",
    link: "https://drive.google.com/file/d/1bsI1D2o1WPBBcMrKiumPpyzEnJzF0MBa/view?usp=sharing",
    color: "from-purple-500 to-purple-600",
    glowColor: "shadow-purple-500/20",
  },
  {
    icon: Code2,
    title: "Open Source",
    value: "Contributor",
    description: "Contributed to open-source projects, refining documentation and workflows",
    link: null,
    color: "from-pink-400 to-pink-500",
    glowColor: "shadow-pink-400/20",
  },
]

export function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-serif text-4xl md:text-5xl italic text-foreground">Achievements</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement) => {
            const Wrapper = achievement.link ? "a" : "div"
            const wrapperProps = achievement.link
              ? { href: achievement.link, target: "_blank", rel: "noopener noreferrer" }
              : {}

            return (
              <Wrapper
                key={achievement.title}
                {...wrapperProps}
                className={`glass rounded-2xl p-6 transition-all duration-300 hover:scale-105 group ${achievement.glowColor} hover:shadow-lg`}
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <achievement.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{achievement.title}</h3>
                <p
                  className={`text-3xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent mb-2`}
                >
                  {achievement.value}
                </p>
                <p className="text-muted-foreground text-sm">{achievement.description}</p>
              </Wrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
