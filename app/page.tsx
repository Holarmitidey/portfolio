import { Navbar } from "@/components/navbar"
import { SectionHeading } from "@/components/section-heading"
import { TimelineItem } from "@/components/timeline-item"
import { ProjectCard } from "@/components/project-card"
import { SkillBar } from "@/components/skill-bar"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { Github, Linkedin, Mail, Download, Code, Server, Database, PenTool, AppWindow, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/10 via-background to-background"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                <span className="block">Hi, I'm</span>
                <span className="block mt-1 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Olamide Fiyinfoluwa
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                I'm a passionate software engineer with a unique blend of mechatronics engineering and computer science expertise.
                 My journey in tech has led me from automating robotic projects to crafting full-stack web applications. I thrive on challenges and am constantly exploring new technologies to create innovative solutions..
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <a href="#contact">Contact Me</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a
                    href="/docs/CV.pdf"
                    download="Olamide-Fiyin-CV.pdf"
                    className="flex items-center hover:underline"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    <span>Download CV</span>
                  </a>
                </Button>
              </div>
              <div className="flex items-center space-x-4 pt-4">
                <a
                  href="https://github.com/Holarmitidey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="mailto:olamidefiyin18@gmailcom"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-6 w-6" />
                  <span className="sr-only">Email</span>
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary to-primary/30 blur-sm"></div>
                <div className="relative overflow-hidden rounded-full border-2 border-primary/20 w-80 h-80 mx-auto">
                  <img
                    src="/placeholder.svg?height=400&width=400"
                    alt="Holarmitidey"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="About Me" subtitle="Learn more about my background and what drives me" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="md:col-span-2">
              <CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate Software Engineer with a unique blend of Mechatronics Engineering and Computer
                  Science education. My journey in technology began with robotics and automation, which evolved into a
                  deep interest in software development.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  With experience across multiple organizations, I've honed my skills in both frontend and backend
                  development, as well as automation. I thrive in collaborative environments where I can bring
                  innovative solutions to complex problems.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                  or working on personal projects that challenge and expand my technical abilities.
                </p>
              </CardContent>
            </Card>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <Server className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-lg font-medium mb-2">Backend Development</h3>
                    <p className="text-sm text-muted-foreground">
                      Building robust and scalable server-side applications
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <AppWindow className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-lg font-medium mb-2">Frontend Development</h3>
                    <p className="text-sm text-muted-foreground">Creating intuitive and responsive user interfaces</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="col-span-2 md:col-span-1">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <PenTool className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-lg font-medium mb-2">Automation</h3>
                    <p className="text-sm text-muted-foreground">
                      Designing automation solutions for increased efficiency
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="Work Experience" subtitle="My professional journey and contributions" />

          <div className="relative border-l border-primary/30 ml-4">
            <TimelineItem
              title="Full-stack Developer"
              organization="Labs-Insomnia"
              date="2023 - 2024"
              description="Contributed to various projects as a full-stack developer, building robust web applications with modern technologies. Collaborated with cross-functional teams to deliver high-quality software solutions."
              link="https://github.com/Labs-Insomnia"
              tags={["React", "Node.js", "MongoDB", "Express", "AWS"]}
            />

            <TimelineItem
              title="Frontend Developer"
              organization="Xanders Lab"
              date="2025 - 2025"
              description="Focused on creating intuitive and responsive user interfaces. Worked with design teams to implement pixel-perfect designs and ensure optimal user experience across all devices."
              link="https://github.com/xanderslabs"
              tags={["React", "Vue.js", "CSS", "JavaScript", "TypeScript"]}
            />

            <TimelineItem
              title="Automation Assistant Intern"
              organization="Speedvibe Infotech Hub"
              date="2023 - 2023"
              description="Wrote automation code for robotic projects, enhancing efficiency and productivity. Gained hands-on experience with industrial automation systems and programming robotic interfaces."
              tags={["Python", "ROS", "Arduino", "Automation", "Robotics"]}
            />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="Education" subtitle="My academic background and qualifications" />

          <div className="relative border-l border-primary/30 ml-4">
            <TimelineItem
              title="Bachelor of Engineering in Mechatronics Engineering"
              organization="Federal University of Agriculture, Abeokuta"
              date="2021 - 2024"
              description="Studied the integration of mechanical, electronic, and computer systems. Focused on robotics, control systems, and automation technologies."
              tags={["Robotics", "Control Systems", "Electronics", "Mechanical Design"]}
            />

            <TimelineItem
              title="Diploma in Computer Science"
              organization="Kibo School of Technology"
              date="2023 - 2024"
              description="Gained comprehensive knowledge in programming, algorithms, data structures, and software development methodologies."
              tags={["Programming", "Algorithms", "Data Structures", "Software Engineering"]}
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="Skills" subtitle="Technical skills I've developed throughout my career" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Code className="mr-2 h-5 w-5 text-primary" />
                Frontend Development
              </h3>
              <SkillBar name="React.js" level={90} delay={100} />
              <SkillBar name="JavaScript/TypeScript" level={85} delay={200} />
              <SkillBar name="HTML/CSS" level={95} delay={300} />
              <SkillBar name="Vue.js" level={75} delay={400} />
              <SkillBar name="Next.js" level={85} delay={500} />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Server className="mr-2 h-5 w-5 text-primary" />
                Backend Development
              </h3>
              <SkillBar name="Node.js" level={85} delay={100} />
              <SkillBar name="Express" level={80} delay={200} />
              <SkillBar name="Python" level={75} delay={300} />
              <SkillBar name="MongoDB" level={80} delay={400} />
              <SkillBar name="SQL" level={70} delay={500} />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Share2 className="mr-2 h-5 w-5 text-primary" />
                DevOps & Tools
              </h3>
              <SkillBar name="Git" level={90} delay={100} />
              <SkillBar name="Docker" level={75} delay={200} />
              <SkillBar name="AWS" level={70} delay={300} />
              <SkillBar name="CI/CD" level={65} delay={400} />
              <SkillBar name="Linux" level={80} delay={500} />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Database className="mr-2 h-5 w-5 text-primary" />
                Automation & Others
              </h3>
              <SkillBar name="Robotics" level={85} delay={100} />
              <SkillBar name="PLC Programming" level={70} delay={200} />
              <SkillBar name="Arduino/Raspberry Pi" level={80} delay={300} />
              <SkillBar name="ROS (Robot Operating System)" level={75} delay={400} />
              <SkillBar name="Automation Testing" level={70} delay={500} />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Projects" subtitle="Showcasing my recent work and personal projects" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Space Tourism Website"
              description="The Space Tourism Website is a futuristic and interactive website that provides users with information about space travel, destinations, and crew members. The design is sleek and immersive, offering a modern UI/UX experience."
              image="/placeholder.svg?height=300&width=500"
              tags={["React", "Node.js", "CSS"]}
              githubLink="https://github.com/Holarmitidey/space-tourism-app-main"
              demoLink="https://space-tourism-app-main-2zrczdg42-holarmideys-projects.vercel.app/"
            />

            <ProjectCard
              title="Task Management App"
              description="The To-Do App is a simple and intuitive task management application that helps users organize their daily tasks efficiently. It features task creation, editing, deletion, and completion tracking with a clean and responsive UI."
              image="/placeholder.svg?height=300&width=500"
              tags={["Flask", "Sqlite", "Jinja-syntax", "HTML", "CSS"]}
              githubLink="https://github.com/Holarmitidey/To-do-app"
            />

            <ProjectCard
              title="Semi-automatic brick making machine"
              description="A purely Mechanical brick making machine with a little Mechatronics attachment for automatic feeding and retraction of brick."
              image="/placeholder.svg?height=300&width=500"
              tags={["Arduino", "C++"]}
              githubLink="https://github.com/Holarmitidey/Oyelami-sgroup"
            />

            <ProjectCard
              title="Portfolio Website"
              description="A responsive portfolio website built with modern web technologies to showcase projects and skills."
              image="/placeholder.svg?height=300&width=500"
              tags={["Next.js", "TypeScript", "Tailwind CSS",]}
              githubLink="https://github.com/Holarmitidey/portfolio"
              demoLink="https://project4-demo.example.com"
            />

            <ProjectCard
              title="Errandy"
              description="A real-time chat application with private messaging for asking people in the same Area for assistance."
              image="/placeholder.svg?height=300&width=500"
              tags={["Flask", "Socket.io", "Python", "Sql-Alchemy"]}
              githubLink="https://github.com/Holarmitidey/Errandy"
            />

            <ProjectCard
              title="Natours - Adventure Tour Booking Website"
              description="Natours is a visually stunning tour booking website designed for adventure enthusiasts. It features an engaging UI with smooth animations and a well-structured layout for showcasing tour packages."
              image="/placeholder.svg?height=300&width=500"
              tags={["React", "D3.js", "Express", "PostgreSQL"]}
              githubLink="https://github.com/Holarmitidey/Natours-app-main"
              demoLink="https://natours-app-main.vercel.app/"
            />
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <a href="https://github.com/Holarmitidey" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View More on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Contact Me" subtitle="Get in touch for collaborations or opportunities" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Let's Talk</h3>
              <p className="text-muted-foreground mb-8">
                I'm always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out
                through the form or via my social media profiles.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-muted-foreground">olamidefiyin18@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Github className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">GitHub</h4>
                    <a
                      href="https://github.com/Holarmitidey"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary"
                    >
                      github.com/Holarmitidey
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Linkedin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">LinkedIn</h4>
                    <p className="text-muted-foreground">https://www.linkedin.com/in/olamide-ganiyu-0446a723a/</p>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
