import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,CardContent,CardHeader,CardTitle, CardDescription,
} from "@/components/ui/card";
import {
  GraduationCap,Award,Camera, Music,BookOpen,Compass,ArrowRight,Code2,Sparkles, CheckCircle2,
} from "lucide-react";

const skills = [
  "Networking Fundamentals",
  "Hardware Troubleshooting",
  "Python Programming",
  "Git & Version Control",
  "Web Development",
  "Database Management",
];

const educationList = [
  {
    degree: "BS in Information Technology",
    institution: "Naga College Foundation",
    period: "2025 - Present",
    description:
      "Passionate about learning new programming languages, creating websites, and developing practical technology solutions.",
    achievements: ["Dean's List (1 Year)"],
  },
  {
    degree: "Senior High School Education",
    institution: "Gregorio Ocampo Bercasio Memorial High School",
    period: "2023 - 2025",
    description: "General Academic Strand student with focus on academics and tech fundamentals.",
    achievements: ["Graduated With Honors", "4th Rank Overall"],
  },
  {
    degree: "High School Education",
    institution: "Gregorio Ocampo Bercasio Memorial High School",
    period: "2019 - 2023",
    description:
      "Learned basic programming concepts, web design basics, and database management.",
    achievements: [
      "Graduated With Honors",
      "Member of BANHUBAY & SCI-FI CLUB",
      "Conduct Awardee",
    ],
  },
];

const hobbies = [
  {
    title: "Photography",
    icon: Camera,
    description: "Capturing street landscapes and urban architecture.",
  },
  {
    title: "Reading",
    icon: BookOpen,
    description: "Enjoy reading books to expand perspectives and refresh the mind.",
  },
  {
    title: "Music & Guitar",
    icon: Music,
    description: "Playing acoustic guitar and singing as a member of the church choir.",
  },
  {
    title: "Travel & Hiking",
    icon: Compass,
    description: "Exploring national parks, hiking trails, and new places.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground px-4 py-12 md:px-8 lg:px-12 max-w-5xl mx-auto space-y-20">
      {/* Hero Section */}
      <section className="relative space-y-6 pt-6 pb-4">
        {/* Decorative background glow */}
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />
        
        <Badge variant="outline" className="px-3 py-1 gap-1.5 rounded-full border-primary/30 bg-primary/5 text-primary">
          <Sparkles className="w-3.5 h-3.5" /> 2nd-Year IT Student
        </Badge>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          Hi, I'm <span className="text-primary bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Aaron Bustamante</span> 👋
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          Welcome to my personal portfolio! I am currently studying at Naga College Foundation.
          I build practical web applications, study software development, and refine my coding skills to become a professional software developer.
        </p>
        
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Button asChild size="lg" className="rounded-full shadow-md hover:shadow-lg transition-all">
            <Link href="#skills">
              Explore Skills <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="rounded-full">
            <Link href="#education">View Education</Link>
          </Button>
        </div>
      </section>

      {/* Skills & Technologies Section */}
      <section id="skills" className="space-y-6">
        <div className="flex items-center gap-2">
          <Code2 className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold tracking-tight">Skills & Technologies</h2>
        </div>
        
        <Card className="rounded-2xl border bg-card/50 backdrop-blur-sm p-6 shadow-sm">
          <CardContent className="p-0">
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium rounded-xl hover:bg-primary hover:text-primary-foreground transition-all cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Education Section */}
      <section id="education" className="space-y-6">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold tracking-tight">Education</h2>
        </div>

        <div className="space-y-4">
          {educationList.map((item, idx) => (
            <Card key={idx} className="rounded-2xl transition-all duration-200 hover:border-primary/40 hover:shadow-md">
              <CardHeader className="pb-3">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-primary/10 rounded-xl text-primary shrink-0">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold">{item.degree}</CardTitle>
                      <CardDescription className="text-muted-foreground font-medium">{item.institution}</CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline" className="w-fit text-xs font-semibold px-3 py-1 rounded-full">
                    {item.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                
                <div className="pt-2 border-t border-border/50">
                  <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider flex items-center gap-1.5 mb-2">
                    <Award className="h-4 w-4 text-primary" /> Key Highlights
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-muted-foreground">
                    {item.achievements.map((ach, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="space-y-6">
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold tracking-tight">Hobbies & Interests</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {hobbies.map((hobby) => {
            const Icon = hobby.icon;
            return (
              <Card key={hobby.title} className="rounded-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-primary/40">
                <CardHeader className="p-5 pb-2">
                  <div className