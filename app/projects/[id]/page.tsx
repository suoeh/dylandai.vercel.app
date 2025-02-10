"use client"

import Image from "@/app/media/background.png"
import { useParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import PageTransition from "@/app/components/PageTransition"

const projectData = {
  Exercise_Assister: {
    title: "Exercise Assister",
    description: `A web game that lets you create and track your own exersizes. Does accuracy tracking to help with range of motion. Creates exercizes by saving joycon movements. Lets you track the accuracy of your movements to the exersize you do. Persistently saves heartrate and exercise data.
    
    Won the DataBricks prize in UTRA Hacks 2025 against 340+ participants.`,
    technologies: ["React", "AWS", "MongoDB", "Flask", "Python", "HTML", "CSS", "JavaScript", "LangChain", "DataBricks", "Google Cloud Platform"],
    devpostLink: "https://devpost.com/software/the-exercists?ref_content=user-portfolio&ref_feature=in_progress",
    githubLink: "https://github.com/iantang08/UTRAHacks2025",
  },
  project2: {
    title: "Project 2",
    description: "A web game that lets you create and track your own exersizes. Does accuracy tracking to help with range of motion. Creates exercizes by saving joycon movements. Lets you track the accuracy of your movements to the exersize you do. Persistently saves heartrate and exercise data.",
    technologies: ["React", "AWS", "MongoDB", "Flask", "Python", "HTML", "CSS", "JavaScript", "LangChain", "DataBricks", "Google Cloud Platform"],
    devpostLink: "https://devpost.com/software/the-exercists?ref_content=user-portfolio&ref_feature=in_progress",
    githubLink: "https://github.com/iantang08/UTRAHacks2025",
  },
  project3: {
    title: "Project 3",
    description: "A web game that lets you create and track your own exersizes. Does accuracy tracking to help with range of motion. Creates exercizes by saving joycon movements. Lets you track the accuracy of your movements to the exersize you do. Persistently saves heartrate and exercise data.",
    technologies: ["React", "AWS", "MongoDB", "Flask", "Python", "HTML", "CSS", "JavaScript", "LangChain", "DataBricks", "Google Cloud Platform"],
    devpostLink: "https://devpost.com/software/the-exercists?ref_content=user-portfolio&ref_feature=in_progress",
    githubLink: "https://github.com/iantang08/UTRAHacks2025",
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
      <div
      className="min-w-screen min-h-screen p-8 mx-auto bg-no-repeat"
      style={{
        backgroundImage: `url(${Image.src})`,
        height: '300%'
      }}>
        <div className="max-w-4xl mx-auto flex flex-col">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-12">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span>Back</span>
          </Link>

          <article className="hoverless-card p-8">
            <h1 className="text-4xl font-bold mb-6">{project.title}</h1>

            <p className="text-lg mb-8 leading-relaxed whitespace-pre-line">{project.description}</p>

            <div>
              <a href={project.devpostLink} target="_blank" rel="noopener noreferrer" className="block mb-8 text-blue-500 hover:text-blue-800">
                Project
              </a> 
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="block mb-8 text-blue-500 hover:text-blue-800">
                Github
              </a> 
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-4 py-2 bg-[#FCECE4] rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
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
