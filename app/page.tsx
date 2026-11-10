import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GraduationCap, Award, Camera, Gamepad2, Music, Dumbbell, ArrowRight } from "lucide-react";

const skills = [
  "Networking Fundamentals",
  "Hardware Troubleshooting",
  "Python Programming",
  "Set Up Computer Networks and Servers",
  "JavaScript / TypeScript",
  "React & Next.js",
  "Linux System Administration",
  "Git & Version Control",
];

const educationList = [
  {
    degree: "BS in Information Technology",
    institution: "University of Nueva Caceres",
    period: "2020 - 2024",
    description: "Intensive program covering software engineering, networking, web development, and system administration.",
    achievements: ["Dean's List", "Capstone Project Lead"],
  },
];

const hobbies = [
  { title: "Photography", icon: Camera, description: "Capturing street landscapes and urban architecture." },
  { title: "Gaming", icon: Gamepad2, description: "Enthusiast for strategy and RPG games." },
  { title: "Music & Guitar", icon: Music, description: "Playing acoustic guitar and exploring indie music." },
  { title: "Fitness & Running", icon: Dumbbell, description: "Staying active through regular workouts and runs." },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground px-4 py-12 md:px-12 max-w-5xl mx-auto space-y-16">
      {/* Hero Section */}
      <section className="space-y-6 text-center md:text-left py-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Hi, I'm <span className="text-primary">AA Bustamante</span> 👋
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
          IT Professional & Web Developer passionate about networking, system administration, and building modern web applications.
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
          <Button asChild>
            <Link href="#skills">View Skills <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      {/* Skills & Technologies Section */}
      <section id="skills" className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Skills & Technologies</h2>
        <Card className="rounded-2xl border p-6 shadow-sm">
          <CardContent className="p-0">
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3.5 py-1.5 rounded-full text-sm font-medium bg-muted text-muted-foreground hover:bg-muted/80 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Education Section */}
      <section id="education" className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Education</h2>
        <div className="space-y-6">
          {educationList.map((item, idx) => (
            <Card key={idx}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{item.degree}</CardTitle>
                      <CardDescription>{item.institution}</CardDescription>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    {item.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{item.description}</p>
                <div>
                  <h4 className="text-sm font-semibold flex items-center gap-1.5 mb-2">
                    <Award className="h-4 w-4 text-primary" /> Key Highlights
                  </h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    {item.achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Hobbies & Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {hobbies.map((hobby) => {
            const Icon = hobby.icon;
            return (
              <Card key={hobby.title} className="hover:shadow-md transition-shadow">
                <CardHeader className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-base">{hobby.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-xs text-muted-foreground">{hobby.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </main>
  );
}