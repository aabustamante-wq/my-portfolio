
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  "JavaScript / TypeScript",
  "React & Next.js",
  "Tailwind CSS",
  "Node.js & Express",
  "MySQL / Oracle",
  "Git & GitHub",
  "REST APIs & GraphQL",
  "ShadCN UI",
  "Web Development",
  "Programming Fundamentals",
  "Python Programming",
  "HTML & CSS",
];

export default function About() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          About Me
        </h1>
        <p className="text-muted-foreground mt-1">
          Welcome to my personal portfolio! I am a 2nd-year
          Bachelor of Science in Information Technology student
          at Naga College Foundation. I enjoy learning about
          technology, programming, database management, and
          creating websites and applications. I am passionate
          about improving my coding skills and becoming a
          professional software developer.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>My Story</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Currently, I am focused on improving my programming
            skills, learning new technologies, and developing
            websites and applications. My career goal is to
            become a professional software developer and build
            useful, innovative systems. My passion for technology
            comes from my curiosity about how things work and my
            desire to create solutions that make people's lives
            easier.
          </p>

          <p>
            I am currently focused on learning programming and
            improving my skills in web development. My goal is
            to become a successful software developer.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Skills & Technologies</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge
                className="text-sm px-3 py-1"
                key={skill}
                variant="secondary"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
