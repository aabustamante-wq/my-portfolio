"use client";

import React, { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  GraduationCap,
  Camera,
  Music,
  Plane,
  BookOpen,
  Mail,
  Phone,
  MapPin,
  Send,
  Code2,
  CheckCircle2,
  Menu,
  X,
  Copy,
  Check,
  Bookmark,
  LucideIcon,
} from "lucide-react";

// Types & Interfaces
interface NavItem {
  name: string;
  href: string;
  id: string;
}

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
  achievements: string[];
}

interface HobbyItem {
  title: string;
  icon: LucideIcon;
  description: string;
}

interface SubmitStatus {
  type: "success" | "error";
  msg: string;
}

// Navigation Items
const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Education", href: "#education", id: "education" },
  { name: "Hobbies", href: "#hobbies", id: "hobbies" },
  { name: "Contact", href: "#contact", id: "contact" },
];

// Technical & Soft Skills
const SKILLS: string[] = [
  "Networking Fundamentals",
  "Hardware Troubleshooting",
  "Python Programming",
  "Web Development",
  "Communication Skills",
  "Continuous Learning & Adaptability",
  "SQL / Databases",
  "Shadcn UI & Tailwind CSS",
];

// Education Background
const EDUCATION_LIST: EducationItem[] = [
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

// Hobbies & Interests
const HOBBIES: HobbyItem[] = [
  {
    title: "Photography",
    icon: Camera,
    description:
      "I am an active member of SOCCOM in our parish. I enjoy participating in church activities, helping with events, serving the community, taking photos, and spending time with friends. I also love learning new things, exploring technology, and improving my skills.",
  },
  {
    title: "Music & Guitar",
    icon: Music,
    description:
      "I enjoy playing the acoustic guitar and singing as a member of the church choir.",
  },
  {
    title: "Travel & Hiking",
    icon: Plane,
    description: "Exploring parks, hiking trails, and new places.",
  },
  {
    title: "Reading",
    icon: BookOpen,
    description:
      "Sometimes I enjoy reading a book to refresh my mind through reading.",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "Aaron A. Bustamante",
    email: "aabustamante@gbox.ncf.edu.ph",
    subject: "Project Inquiry / Hello",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({
        type: "error",
        msg: "Please fill out all required fields.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({
        type: "success",
        msg: "Thank you! Your message has been sent successfully. I will get back to you soon.",
      });
      setFormData((prev) => ({ ...prev, message: "" }));
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans antialiased selection:bg-neutral-900 selection:text-white flex flex-col justify-between">
      {/* Sticky Header / Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-neutral-200/80 bg-white/90 backdrop-blur-md transition-all">
        <div className="flex h-16 items-center justify-between px-4 md:px-8 max-w-5xl mx-auto">
          {/* Brand Logo / Name */}
          <button
            type="button"
            onClick={() => setActiveTab("home")}
            className="text-lg font-extrabold tracking-tight text-neutral-900 flex items-center gap-2 hover:opacity-80 transition-opacity focus:outline-none cursor-pointer"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-900 inline-block animate-pulse" />
            Aaron Bustamante
          </button>

          {/* Desktop Navigation Menu Bar */}
          <nav className="hidden md:flex items-center gap-1 bg-neutral-100/70 p-1 rounded-full border border-neutral-200/60">
            {NAV_ITEMS.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  type="button"
                  key={item.name}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 focus:outline-none cursor-pointer ${
                    isActive
                      ? "bg-neutral-900 text-white shadow-xs scale-105"
                      : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/60"
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-neutral-700 hover:bg-neutral-100 focus:outline-none cursor-pointer"
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-neutral-200 bg-white px-4 py-3 space-y-1 shadow-lg animate-in slide-in-from-top-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  type="button"
                  key={item.name}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 text-sm font-medium rounded-xl transition-colors cursor-pointer ${
                    isActive
                      ? "bg-neutral-900 text-white font-semibold"
                      : "text-neutral-700 hover:bg-neutral-100"
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 md:px-8 py-8 md:py-12">
        <div
          key={activeTab}
          className="animate-in fade-in zoom-in-95 duration-300 ease-out"
        >
          {/* TAB 1: HOME */}
          {activeTab === "home" && (
            <section className="space-y-6 pt-4 md:pt-12 min-h-[55vh] flex flex-col justify-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 text-neutral-800 border border-neutral-200">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>2nd-Year IT Student</span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 leading-tight">
                  Welcome to My Portfolio!
                </h1>

                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-800 flex items-center gap-2">
                  Hello I&apos;m Aaron A. Bustamante.{" "}
                  <span className="inline-block animate-bounce">👋</span>
                </h2>

                <p className="text-base sm:text-lg text-neutral-600 max-w-2xl leading-relaxed">
                  An aspiring Cybersecurity Analyst who is continuously
                  learning, improving my skills, and adapting to the
                  fast-changing digital world.
                </p>
              </div>

              <div className="pt-4 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveTab("about")}
                  className="inline-flex items-center justify-center bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-3 rounded-xl text-sm font-medium transition-all shadow-xs hover:shadow-md group focus:outline-none cursor-pointer"
                >
                  <span>About Me</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("contact")}
                  className="inline-flex items-center justify-center border border-neutral-300 hover:bg-neutral-100 text-neutral-800 px-6 py-3 rounded-xl text-sm font-medium transition-all focus:outline-none cursor-pointer"
                >
                  <span>Get in Touch</span>
                </button>
              </div>
            </section>
          )}

          {/* TAB 2: ABOUT ME */}
          {activeTab === "about" && (
            <section className="space-y-6">
              <div className="space-y-1 border-b border-neutral-100 pb-4">
                <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900">
                  About Me
                </h2>
                <p className="text-sm text-neutral-500">
                  A bit about my background, passion, and technical skills.
                </p>
              </div>

              <div className="space-y-4 max-w-3xl">
                {/* My Story Card */}
                <div className="rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-xs hover:border-neutral-300 transition-colors">
                  <h3 className="text-lg font-bold text-neutral-900 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-neutral-900" />
                    My Story
                  </h3>
                  <div className="text-sm text-neutral-600 leading-relaxed space-y-4">
                    <p>
                      Currently, I am focused on improving my programming
                      skills, learning new technologies, and developing websites
                      and applications. My career goal is to become a
                      professional software developer and build useful, innovative
                      systems.
                    </p>
                    <p>
                      Aside from my studies, I am currently focused on learning
                      programming and improving my skills in web development. My
                      goal is to become a successful software developer.
                    </p>
                  </div>
                </div>

                {/* Skills & Technologies Card */}
                <div className="rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-xs hover:border-neutral-300 transition-colors space-y-3">
                  <div className="flex items-center gap-2">
                    <Code2 className="h-5 w-5 text-neutral-900" />
                    <h3 className="text-lg font-bold text-neutral-900">
                      Skills &amp; Technologies
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {SKILLS.map((skill, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-medium px-3.5 py-1.5 rounded-xl transition-colors cursor-default border border-neutral-200/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* TAB 3: EDUCATION */}
          {activeTab === "education" && (
            <section className="space-y-6">
              <div className="space-y-1 border-b border-neutral-100 pb-4">
                <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900">
                  Education
                </h2>
                <p className="text-sm text-neutral-500">
                  Academic background and formal training.
                </p>
              </div>

              <div className="space-y-4 max-w-3xl">
                {EDUCATION_LIST.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-xs hover:border-neutral-300 transition-colors space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-start gap-3.5">
                        <div className="p-2.5 bg-neutral-100 rounded-xl text-neutral-900 shrink-0 border border-neutral-200/60">
                          <GraduationCap className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-neutral-900">
                            {item.degree}
                          </h3>
                          <p className="text-xs text-neutral-500 font-medium">
                            {item.institution}
                          </p>
                        </div>
                      </div>
                      <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200 self-start sm:self-auto">
                        {item.period}
                      </span>
                    </div>

                    {item.description && (
                      <p className="text-sm text-neutral-600 leading-relaxed pt-1 sm:pl-[48px]">
                        {item.description}
                      </p>
                    )}

                    {item.achievements && item.achievements.length > 0 && (
                      <div className="pt-2 sm:pl-[48px] border-t border-neutral-100">
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-900 mb-1.5">
                          <Bookmark className="h-3.5 w-3.5 text-neutral-700" />
                          <span>Key Highlights</span>
                        </div>
                        <ul className="flex flex-wrap gap-2 text-xs text-neutral-600">
                          {item.achievements.map((h, i) => (
                            <li
                              key={i}
                              className="flex items-center gap-1 bg-neutral-50 border border-neutral-200 px-2.5 py-1 rounded-lg text-neutral-700"
                            >
                              <CheckCircle2 className="h-3 w-3 text-emerald-600 shrink-0" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* TAB 4: HOBBIES */}
          {activeTab === "hobbies" && (
            <section className="space-y-6">
              <div className="space-y-1 border-b border-neutral-100 pb-4">
                <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900">
                  Hobbies &amp; Interests
                </h2>
                <p className="text-sm text-neutral-500">
                  What I enjoy doing outside of coding.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {HOBBIES.map((hobby) => {
                  const Icon = hobby.icon;
                  return (
                    <div
                      key={hobby.title}
                      className="rounded-2xl border border-neutral-200/80 bg-white p-5 space-y-3 hover:border-neutral-300 hover:shadow-xs transition-all duration-200 flex flex-col justify-between"
                    >
                      <div className="p-2.5 bg-neutral-100 w-fit rounded-xl text-neutral-900 border border-neutral-200/60">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-base font-bold text-neutral-900">
                          {hobby.title}
                        </h3>
                        <p className="text-xs text-neutral-500 leading-relaxed">
                          {hobby.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* TAB 5: CONTACT */}
          {activeTab === "contact" && (
            <section className="space-y-6">
              <div className="space-y-1 border-b border-neutral-100 pb-4">
                <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900">
                  Contact Me
                </h2>
                <p className="text-sm text-neutral-500">
                  Have a question, collaboration idea, or project in mind?
                  Reach out below!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                {/* Left Column - Contact Details */}
                <div className="space-y-3 md:col-span-1">
                  <div className="rounded-2xl border border-neutral-200/80 bg-white p-4 flex items-center justify-between hover:border-neutral-300 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-neutral-100 rounded-xl text-neutral-900 border border-neutral-200/60">
                        <Mail className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-[10px] text-neutral-400 font-semibold uppercase tracking-wider">
                          Email
                        </p>
                        <p className="text-xs font-bold text-neutral-900 truncate max-w-[170px]">
                          aabustamante@gbox.ncf.edu.ph
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        handleCopy("aabustamante@gbox.ncf.edu.ph", "email")
                      }
                      className="p-1.5 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer"
                      title="Copy email"
                    >
                      {copiedField === "email" ? (
                        <Check className="h-3.5 w-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                    </button>
                  </div>

                  <div className="rounded-2xl border border-neutral-200/80 bg-white p-4 flex items-center justify-between hover:border-neutral-300 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-neutral-100 rounded-xl text-neutral-900 border border-neutral-200/60">
                        <Phone className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-[10px] text-neutral-400 font-semibold uppercase tracking-wider">
                          Phone
                        </p>
                        <p className="text-xs font-bold text-neutral-900">
                          +639 (810) 441-731
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy("+639 (810) 441-731", "phone")}
                      className="p-1.5 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer"
                      title="Copy phone"
                    >
                      {copiedField === "phone" ? (
                        <Check className="h-3.5 w-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                    </button>
                  </div>

                  <div className="rounded-2xl border border-neutral-200/80 bg-white p-4 flex items-center gap-3 hover:border-neutral-300 transition-colors">
                    <div className="p-2 bg-neutral-100 rounded-xl text-neutral-900 border border-neutral-200/60">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-neutral-400 font-semibold uppercase tracking-wider">
                        Location
                      </p>
                      <p className="text-xs font-bold text-neutral-900 leading-snug">
                        Cagliliog, Tinambac, Camarines Sur, Philippines
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column - Interactive Form Card */}
                <div className="md:col-span-2 rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-xs">
                  <div className="pb-4 mb-4 border-b border-neutral-100">
                    <h3 className="text-base font-bold text-neutral-900">
                      Send a Message
                    </h3>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      Fill out the form below and I&apos;ll get back to you
                      soon.
                    </p>
                  </div>

                  {submitStatus && (
                    <div
                      className={`p-3 mb-4 rounded-xl text-xs flex items-center gap-2 ${
                        submitStatus.type === "success"
                          ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                          : "bg-rose-50 text-rose-800 border border-rose-200"
                      }`}
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0" />
                      <span>{submitStatus.msg}</span>
                    </div>
                  )}

                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-neutral-900">
                          Name
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="Your full name"
                          className="w-full px-3.5 py-2 text-xs rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all"
                          required
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-neutral-900">
                          Email
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="aabustamante@gbox.ncf.edu.ph"
                          className="w-full px-3.5 py-2 text-xs rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-neutral-900">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        placeholder="Project Inquiry / Hello"
                        className="w-full px-3.5 py-2 text-xs rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-neutral-900">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Your message here..."
                        className="w-full px-3.5 py-2 text-xs rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all resize-none"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-xs font-semibold px-5 py-2.5 flex items-center gap-2 transition-all disabled:opacity-50 cursor-pointer"
                    >
                      <Send className="h-3.5 w-3.5" />
                      <span>
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </section>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-neutral-50 py-6 text-center text-xs text-neutral-500">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Aaron Bustamante. All rights reserved.</p>
          <p className="text-neutral-400">
            Built with Next.js, Tailwind CSS &amp; Shadcn UI design.
          </p>
        </div>
      </footer>
    </div>
  );
}