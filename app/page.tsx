import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import {
  GraduationCap,
  Award,
  Camera,
  Music,
  BookOpen,
  ArrowRight,
  Code2,
  Sparkles,
  CheckCircle2,
  Mail,
  Plane,
} from "lucide-react";

// Navigation Bar
function Navbar() {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Hobbies", href: "#hobbies" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="flex h-20 items-center justify-center px-4">
        <NavigationMenu>
          <NavigationMenuList className="flex flex-wrap justify-center gap-2">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.name}>
                <Link
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-medium transition-all text-foreground hover:bg-muted"
                >
                  {item.name}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}

// Data Sets
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
    description:
      "General Academic Strand student with focus on academics and tech fundamentals.",
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
    icon: Plane,
    description: "Exploring national parks, hiking trails, and new places.",
  },
];

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      <main className="min-h-screen bg-background text-foreground px-4 py-12 md:px-8 lg:px-12 max-w-5xl mx-auto space-y-24 scroll-smooth">
        {/* 1. HOME SECTION (Welcome Only) */}
        <section id="home" className="relative space-y-6 pt-6 pb-4 scroll-mt-28">
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />

          <Badge
            variant="outline"
            className="px-3 py-1 gap-1.5 rounded-full border-primary/30 bg-primary/5 text-primary"
          >
            <Sparkles className="w-3.5 h-3.5" />
            2nd-Year IT Student
          </Badge>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Welcome to My Portfolio!
          </h1>

          <h2 className="text-2xl sm:text-3xl font-bold text-muted-foreground">
            Hi, I'm{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Aaron Bustamante
            </span>{" "}
            👋
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Welcome to my personal portfolio! I am currently studying IT at Naga College Foundation.
            I build practical web applications, study software development, and refine my coding skills to
            become a professional software developer.
          </p>

          <div className="pt-2">
            <Button
              asChild
              size="lg"
              className="rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <Link href="#about">
                About Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* 2. ABOUT SECTION (About Me & Skills Only) */}
        <section id="about" className="space-y-6 scroll-mt-28">
          <div className="space-y-1">
            <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
            <p className="text-sm text-muted-foreground">
              A bit about my background, passion, and technical skills.
            </p>
          </div>

          <div className="space-y-4">
            {/* My Story Card */}
            <Card className="rounded-2xl border bg-card p-6 shadow-sm">
              <CardHeader className="p-0 pb-3">
                <CardTitle className="text-xl font-bold">My Story</CardTitle>
              </CardHeader>
              <CardContent className="p-0 text-muted-foreground leading-relaxed">
                <p>
                  I am an Information Technology student passionate about learning new programming languages,
                  building modern web applications, and developing practical technology solutions.
                  I enjoy solving problems through code and continuously improving my technical literacy.
                </p>
              </CardContent>
            </Card>

            {/* Skills Card */}
            <Card className="rounded-2xl border bg-card p-6 shadow-sm">
              <CardHeader className="p-0 pb-3">
                <div className="flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-primary" />
                  <CardTitle className="text-xl font-bold">Skills & Technologies</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex flex-wrap gap-2.5">
                  {skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="px-3.5 py-1.5 text-sm font-medium rounded-xl hover:bg-primary hover:text-primary-foreground transition-all cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 3. EDUCATION SECTION (Education Only) */}
        <section id="education" className="space-y-6 scroll-mt-28">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold tracking-tight">Education</h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Academic background and formal training.
            </p>
          </div>

          <div className="space-y-4">
            {educationList.map((item, idx) => (
              <Card
                key={idx}
                className="rounded-2xl transition-all duration-200 hover:border-primary/40 hover:shadow-md"
              >
                <CardHeader className="pb-3">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-primary/10 rounded-xl text-primary shrink-0">
                        <GraduationCap className="h-5 w-5" />
                      </div>

                      <div>
                        <CardTitle className="text-xl font-bold">
                          {item.degree}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground font-medium">
                          {item.institution}
                        </CardDescription>
                      </div>
                    </div>

                    <Badge
                      variant="outline"
                      className="w-fit text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {item.period}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 text-sm">
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-2 border-t border-border/50">
                    <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider flex items-center gap-1.5 mb-2">
                      <Award className="h-4 w-4 text-primary" />
                      Key Highlights
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

        {/* 4. HOBBIES SECTION (Hobbies Only) */}
        <section id="hobbies" className="space-y-6 scroll-mt-28">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold tracking-tight">
                Hobbies & Interests
              </h2>
            </div>
            <p className="text-sm text-muted-foreground">
              What I enjoy doing outside of coding.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {hobbies.map((hobby) => {
              const Icon = hobby.icon;

              return (
                <Card
                  key={hobby.title}
                  className="rounded-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-primary/40"
                >
                  <CardHeader className="p-5 pb-2">
                    <div className="p-2.5 bg-primary/10 w-fit rounded-xl text-primary mb-2">
                      <Icon className="h-5 w-5" />
                    </div>

                    <CardTitle className="text-lg font-semibold">
                      {hobby.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="p-5 pt-0">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {hobby.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* 5. CONTACT SECTION (Contact Only) */}
        <section id="contact" className="space-y-6 scroll-mt-28 pb-12">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Mail className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold tracking-tight">
                Contact Me
              </h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Reach out for collaboration, opportunities, or questions!
            </p>
          </div>

          <Card className="rounded-2xl">
            <CardContent className="p-6 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Thank you for visiting my personal portfolio!
                Feel free to contact me for collaboration,
                opportunities, or questions.
              </p>

              <Button asChild className="rounded-full">
                <a href="mailto:your-email@example.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Me an Email
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </>
  );
}