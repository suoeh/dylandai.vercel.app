"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import PageTransition from "@/app/components/PageTransition"

const projectData = {
  project1: {
    title: "Project 1",
    description: "Detailed description of project 1",
    technologies: ["React", "Node.js", "MongoDB"],
    images: ["/placeholder.svg"],
    challenges: "Description of challenges faced...",
    solutions: "How the challenges were overcome...",
    outcome: "The final results and lessons learned...",
  },
  project2: {
    title: "Project 2",
    description: "Detailed description of project 2",
    technologies: ["Python", "Django", "PostgreSQL"],
    images: ["/placeholder.svg"],
    challenges: "Description of challenges faced...",
    solutions: "How the challenges were overcome...",
    outcome: "The final results and lessons learned...",
  },
  project3: {
    title: "Project 3",
    description: "Detailed description of project 3",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    images: ["/placeholder.svg"],
    challenges: "Description of challenges faced...",
    solutions: "How the challenges were overcome...",
    outcome: "The final results and lessons learned...",
  },
}

export default function ProjectPage() {
  const params = useParams()
  const id = params.id as string
  const project = projectData[id as keyof typeof projectData]

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <PageTransition>
      <div className="min-h-screen p-8 max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-12">
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span>Back</span>
        </Link>

        <article className="hoverless-card p-8">
          <h1 className="text-4xl font-bold mb-6">{project.title}</h1>

          <p className="text-lg mb-12 leading-relaxed">{project.description}</p>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <Section title="Challenges" content={project.challenges} />
            <Section title="Solutions" content={project.solutions} />
            <Section title="Outcome" content={project.outcome} />
          </div>
        </article>
      </div>
    </PageTransition>
  )
}

function Section({ title, content }: { title: string; content: string }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="leading-relaxed">{content}</p>
    </div>
  )
}

