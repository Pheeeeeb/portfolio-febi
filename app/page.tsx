"use client";

import { motion } from "framer-motion";
import {
  Menu,
  ArrowUpRight,
  Download,
  GraduationCap,
  CodeXml,
  Zap,
  Brain,
  BookOpen,
  Target,
  Award,
  Code,
  Globe,
  Database,
  Terminal,
  MessageCircle,
  Users,
  Layers,
  GitBranch,
  Cpu,
  Puzzle,
  FolderGit,
  ExternalLink,
  Send,
  Phone,
  MapPin,
  ArrowUp,
  Mail,
  X,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50" : "bg-transparent"
        }`}
      >
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 xl:px-32 h-[72px] flex items-center justify-between">
          <Link href="#home" className="font-heading text-2xl font-semibold text-gold tracking-wide">
            FS
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-text-secondary hover:text-white transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
          </div>
          <Link
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 border border-gold text-gold text-sm font-medium rounded-lg hover:bg-gold hover:text-background transition-all duration-200"
          >
            Let&apos;s Connect <ArrowUpRight className="w-4 h-4" />
          </Link>
          <button 
            className="md:hidden p-2 text-text-secondary hover:text-white transition-colors" 
            aria-label="Toggle menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-[72px] left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50 py-4 px-6 flex flex-col gap-4 shadow-xl">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-text-secondary hover:text-gold transition-colors duration-200 py-2 border-b border-white/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex justify-center items-center gap-2 px-5 py-2.5 mt-2 border border-gold text-gold text-sm font-medium rounded-lg hover:bg-gold hover:text-background transition-all duration-200"
            >
              Let&apos;s Connect <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        style={{ background: "radial-gradient(ellipse at 50% 50%, #14151A 0%, #0B0C10 70%)" }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute w-1 h-1 bg-gold/30 rounded-full" style={{ left: "15%", top: "20%" }}></div>
          <div className="absolute w-1 h-1 bg-gold/30 rounded-full" style={{ left: "30%", top: "45%" }}></div>
          <div className="absolute w-1 h-1 bg-gold/30 rounded-full" style={{ left: "45%", top: "70%" }}></div>
          <div className="absolute w-1 h-1 bg-gold/30 rounded-full" style={{ left: "60%", top: "20%" }}></div>
          <div className="absolute w-1 h-1 bg-gold/30 rounded-full" style={{ left: "75%", top: "45%" }}></div>
          <div className="absolute w-1 h-1 bg-gold/30 rounded-full" style={{ left: "90%", top: "70%" }}></div>
        </div>

        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 xl:px-32 pt-[72px] pb-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8 min-h-[calc(100vh-72px-120px)]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex-1 lg:max-w-[55%] text-center lg:text-left z-10"
            >
              <motion.div variants={fadeUpVariant} className="flex items-center gap-4 justify-center lg:justify-start mb-4">
                <span className="text-lg text-text-secondary font-body">Hello, I&apos;m</span>
                <span className="w-16 h-px bg-gold"></span>
              </motion.div>
              <motion.h1
                variants={fadeUpVariant}
                className="font-heading text-6xl sm:text-7xl lg:text-8xl xl:text-[8rem] font-semibold leading-[1.1] tracking-tight mb-8"
              >
                <span className="text-white block">Febi Susan</span>
                <span className="gold-shimmer block">Sajan</span>
              </motion.h1>
              <motion.p variants={fadeUpVariant} className="text-lg md:text-xl font-medium text-text-secondary mb-6">
                BCA Student <span className="text-text-muted mx-3">|</span> Marian College
              </motion.p>
              <motion.p variants={fadeUpVariant} className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
                Passionate about technology and problem solving. Exploring the world of IT and building solutions for a better tomorrow.
              </motion.p>
              <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-4 justify-center lg:justify-start mb-6">
                <Link
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-background text-sm font-semibold rounded-lg hover:bg-gold-light hover:scale-[1.02] transition-all duration-200"
                >
                  View My Work <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-text-muted text-white text-sm font-medium rounded-lg hover:border-gold hover:text-gold transition-all duration-200"
                >
                  Download CV <Download className="w-4 h-4" />
                </Link>
              </motion.div>
              <motion.div variants={fadeUpVariant} className="flex gap-3 justify-center lg:justify-start">
                <SocialLinks />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative flex-1 flex items-center justify-center min-h-[450px] md:min-h-[550px] lg:min-h-[600px] xl:min-h-[750px] 2xl:min-h-[850px]"
            >
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="absolute w-[440px] h-[560px] md:w-[500px] md:h-[640px] xl:w-[640px] xl:h-[800px] 2xl:w-[760px] 2xl:h-[960px]" style={{ transform: "rotate(-15deg)" }}>
                  <div className="absolute inset-0 border border-gold/20 rounded-[50%] orbit-glow"></div>
                  <div className="absolute w-1.5 h-1.5 bg-gold rounded-full" style={{ top: "50%", left: "0%", transform: "translate(-50%, -50%)", boxShadow: "0 0 8px rgba(201, 169, 110, 0.6)" }}></div>
                  <div className="absolute w-1 h-1 bg-gold-light/60 rounded-full" style={{ top: "10%", left: "75%", boxShadow: "0 0 6px rgba(201, 169, 110, 0.4)" }}></div>
                  <div className="absolute w-1.5 h-1.5 bg-gold rounded-full" style={{ top: "85%", left: "60%", transform: "translate(-50%, -50%)", boxShadow: "0 0 8px rgba(201, 169, 110, 0.6)" }}></div>
                </div>
                <div className="absolute w-[360px] h-[480px] md:w-[420px] md:h-[540px] xl:w-[540px] xl:h-[680px] 2xl:w-[640px] 2xl:h-[820px]" style={{ transform: "rotate(10deg)" }}>
                  <div className="absolute inset-0 border border-gold/15 rounded-[50%]"></div>
                  <div className="absolute w-1 h-1 bg-gold-light/50 rounded-full" style={{ top: "25%", left: "15%", boxShadow: "0 0 5px rgba(201, 169, 110, 0.4)" }}></div>
                  <div className="absolute w-1 h-1 bg-gold rounded-full" style={{ top: "70%", left: "85%", boxShadow: "0 0 6px rgba(201, 169, 110, 0.5)" }}></div>
                </div>
                <div className="absolute w-[300px] h-[400px] md:w-[350px] md:h-[460px] xl:w-[450px] xl:h-[600px] 2xl:w-[550px] 2xl:h-[700px] rounded-full bg-gradient-radial from-gold/10 via-transparent to-transparent blur-3xl"></div>
              </div>
              <Image
                src="/assets/febe-transparent.png"
                alt="Febi Susan Sajan"
                width={800}
                height={1120}
                className="relative z-10 object-contain drop-shadow-2xl max-h-[450px] md:max-h-[520px] lg:max-h-[560px] xl:max-h-[700px] 2xl:max-h-[850px] w-auto"
                priority
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 glass rounded-2xl p-6 md:p-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
              <FeatureCard icon={GraduationCap} title="BCA Student" subtitle="Marian College" border />
              <FeatureCard icon={CodeXml} title="Interested In" subtitle="IT & Software Development" border />
              <FeatureCard icon={Zap} title="Problem Solver" subtitle="Analytical Thinker" border />
              <FeatureCard icon={Brain} title="Always Learning" subtitle="New Technologies" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 relative">
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.span variants={fadeUpVariant} className="text-xs font-medium uppercase tracking-[0.15em] text-gold mb-4 block">
                About Me
              </motion.span>
              <motion.h2 variants={fadeUpVariant} className="font-heading text-4xl md:text-5xl font-semibold text-white leading-tight mb-6">
                Driven by curiosity,<br />
                <span className="gold-shimmer">powered by passion</span>
              </motion.h2>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-6">
              <motion.p variants={fadeUpVariant} className="text-text-secondary leading-relaxed">
                I&apos;m Febi Susan Sajan, a dedicated BCA student at Marian College with a deep fascination for technology and its power to transform lives. My journey into the world of IT began with a simple curiosity about how things work, which has evolved into a passionate pursuit of building innovative solutions.
              </motion.p>
              <motion.p variants={fadeUpVariant} className="text-text-secondary leading-relaxed">
                I believe in the power of continuous learning and enjoy exploring new technologies, frameworks, and methodologies. My goal is to leverage my skills and knowledge to create meaningful applications that solve real-world problems and make a positive impact on society.
              </motion.p>
              <motion.div variants={fadeUpVariant} className="glass rounded-xl p-5 mt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full border border-gold/30 flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Marian College</p>
                    <p className="text-text-secondary text-sm">Bachelor of Computer Applications (BCA)</p>
                    <span className="inline-flex items-center mt-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gold/10 text-gold border border-gold/20">
                      Currently Pursuing
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          >
            <AboutCard icon={BookOpen} title="Education" desc="Pursuing BCA at Marian College with focus on software development" />
            <AboutCard icon={Target} title="Goals" desc="Becoming a skilled software developer creating impactful solutions" />
            <AboutCard icon={Award} title="Achievements" desc="Consistently excelling in academic and technical pursuits" />
            <AboutCard icon={GraduationCap} title="Learning" desc="Always exploring new technologies and frameworks" />
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 md:py-32 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-gold mb-4 block">My Skills</span>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white">
              What I Bring to the <span className="gold-shimmer">Table</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 xl:gap-8">
            <SkillCard icon={Code} title="Programming" desc="Python, Java, C, JavaScript" percent={80} />
            <SkillCard icon={Globe} title="Web Development" desc="HTML, CSS, React, Node.js" percent={75} />
            <SkillCard icon={Database} title="Database Management" desc="MySQL, MongoDB" percent={70} />
            <SkillCard icon={Terminal} title="Problem Solving" desc="Analytical thinking & debugging" percent={85} />
            <SkillCard icon={MessageCircle} title="Communication" desc="Technical writing & presentations" percent={80} />
            <SkillCard icon={Users} title="Teamwork" desc="Collaboration & leadership" percent={85} />
            <SkillCard icon={Layers} title="UI/UX Design" desc="Figma, responsive design" percent={65} />
            <SkillCard icon={GitBranch} title="Version Control" desc="Git, GitHub" percent={75} />
            <SkillCard icon={Cpu} title="Data Structures" desc="Algorithms & optimization" percent={70} />
            <SkillCard icon={Puzzle} title="Adaptability" desc="Quick learner & flexible" percent={90} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 md:py-32 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-gold mb-4 block">Portfolio</span>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white">
              Featured <span className="gold-shimmer">Projects</span>
            </h2>
            <p className="text-text-secondary mt-4 max-w-lg mx-auto">
              Here are some of the projects I&apos;ve worked on. Each one represents a learning experience and a step forward in my development journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 xl:gap-8">
            <ProjectCard
              title="Personal Portfolio Website"
              desc="A modern, responsive portfolio website built with React and Next.js. Features smooth animations, dark theme with gold accents, and mobile-first design."
              tags={["HTML", "CSS", "React", "Next.js"]}
            />
            <ProjectCard
              title="Student Management System"
              desc="A full-stack application for managing student records, attendance, and grades. Built with Python Flask backend and MySQL database."
              tags={["Python", "MySQL", "Flask"]}
            />
            <ProjectCard
              title="Weather Dashboard"
              desc="An interactive weather application that fetches real-time data from APIs and displays forecasts with beautiful visualizations."
              tags={["JavaScript", "API", "CSS"]}
            />
            <ProjectCard
              title="Task Manager App"
              desc="A productivity application for organizing tasks with categories, priorities, and deadlines. Features local storage persistence."
              tags={["React", "LocalStorage", "CSS"]}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>
        <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-gold mb-4 block">Get in Touch</span>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white mb-4">
              Let&apos;s <span className="gold-shimmer">Connect</span>
            </h2>
            <p className="text-text-secondary max-w-md mx-auto">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <form className="glass rounded-xl p-6 md:p-8" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">Your Name</label>
                    <input type="text" id="name" required className="w-full px-4 py-3 bg-background border border-border rounded-lg text-white placeholder-text-muted focus:outline-none focus:border-gold transition-colors duration-200" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">Email Address</label>
                    <input type="email" id="email" required className="w-full px-4 py-3 bg-background border border-border rounded-lg text-white placeholder-text-muted focus:outline-none focus:border-gold transition-colors duration-200" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">Message</label>
                    <textarea id="message" required rows={4} className="w-full px-4 py-3 bg-background border border-border rounded-lg text-white placeholder-text-muted focus:outline-none focus:border-gold transition-colors duration-200 resize-none" placeholder="Tell me about your project or just say hi!"></textarea>
                  </div>
                  <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold text-background text-sm font-semibold rounded-lg hover:bg-gold-light transition-all duration-200">
                    Send Message <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
            <div className="lg:col-span-2 space-y-6">
              <div className="glass rounded-xl p-6">
                <h3 className="text-white font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gold/30 flex-shrink-0">
                      <Mail className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <p className="text-xs text-text-muted">Email</p>
                      <a href="mailto:febi.susan@email.com" className="text-sm text-text-secondary hover:text-gold transition-colors">febi.susan@email.com</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gold/30 flex-shrink-0">
                      <Phone className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <p className="text-xs text-text-muted">Phone</p>
                      <p className="text-sm text-text-secondary">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gold/30 flex-shrink-0">
                      <MapPin className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <p className="text-xs text-text-muted">Location</p>
                      <p className="text-sm text-text-secondary">Kerala, India</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="glass rounded-xl p-6">
                <h3 className="text-white font-semibold mb-4">Follow Me</h3>
                <div className="flex gap-3">
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <Link href="#home" className="font-heading text-xl font-semibold text-gold tracking-wide">
                FS
              </Link>
              <span className="text-text-muted text-sm">© 2026 Febi Susan Sajan. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-3">
              <SocialLinks sm />
              <button onClick={scrollToTop} className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-text-muted hover:border-gold hover:text-gold transition-all duration-200" aria-label="Back to top">
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function SocialLinks({ sm = false }: { sm?: boolean }) {
  const sizeClass = sm ? "w-9 h-9" : "w-11 h-11";
  const iconClass = sm ? "w-4 h-4" : "w-5 h-5";
  return (
    <>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={`${sizeClass} flex items-center justify-center rounded-full border border-border text-text-secondary hover:border-gold hover:text-gold transition-all duration-200`}>
        <FaLinkedin className={iconClass} />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={`${sizeClass} flex items-center justify-center rounded-full border border-border text-text-secondary hover:border-gold hover:text-gold transition-all duration-200`}>
        <FaGithub className={iconClass} />
      </a>
      <a href="mailto:febi.susan@email.com" className={`${sizeClass} flex items-center justify-center rounded-full border border-border text-text-secondary hover:border-gold hover:text-gold transition-all duration-200`}>
        <Mail className={iconClass} />
      </a>
    </>
  );
}

function FeatureCard({ icon: Icon, title, subtitle, border = false }: any) {
  return (
    <div className={`flex items-center gap-4 ${border ? "lg:border-r lg:border-gold/20 lg:pr-6" : ""}`}>
      <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full border border-gold/30">
        <Icon className="w-6 h-6 text-gold" />
      </div>
      <div>
        <p className="text-sm font-semibold text-white">{title}</p>
        <p className="text-xs text-text-secondary">{subtitle}</p>
      </div>
    </div>
  );
}

function AboutCard({ icon: Icon, title, desc }: any) {
  return (
    <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
      <div className="glass rounded-xl p-6 h-full hover:-translate-y-1 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300">
        <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gold/30 mb-4">
          <Icon className="w-5 h-5 text-gold" />
        </div>
        <h3 className="text-white font-semibold mb-2">{title}</h3>
        <p className="text-text-secondary text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

function SkillCard({ icon: Icon, title, desc, percent }: any) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <div className="glass rounded-xl p-6 h-full group hover:-translate-y-1 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gold/30 flex-shrink-0 group-hover:bg-gold/10 transition-colors duration-200">
            <Icon className="w-5 h-5 text-gold" />
          </div>
          <div className="flex-1">
            <h3 className="text-white font-semibold text-lg mb-1">{title}</h3>
            <p className="text-text-secondary text-sm">{desc}</p>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-text-muted">Proficiency</span>
            <span className="text-xs font-medium text-gold">{percent}%</span>
          </div>
          <div className="h-1.5 bg-border rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${percent}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full"
            ></motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ title, desc, tags }: any) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <div className="glass rounded-xl overflow-hidden group hover:-translate-y-1 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300 h-full flex flex-col">
        <div className="relative h-64 bg-gradient-to-br from-card to-background flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent"></div>
          <FolderGit className="w-16 h-16 text-gold/20 group-hover:text-gold/30 group-hover:scale-110 transition-all duration-300" />
          <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <a href="#" className="inline-flex items-center gap-2 px-4 py-2 bg-gold text-background text-sm font-semibold rounded-lg hover:bg-gold-light transition-colors duration-200">
              View Project <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-white font-semibold text-xl mb-2 group-hover:text-gold transition-colors duration-200">{title}</h3>
          <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">{desc}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag: string) => (
              <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full border border-gold/30 text-gold bg-gold/5">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
