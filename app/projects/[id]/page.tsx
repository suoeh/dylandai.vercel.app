"use client"

import Image from "@/app/media/background.png"
import { useParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import PageTransition from "@/app/components/PageTransition"

const projectData = {
  Exercise_Assister: {
    title: "Exercise Assister",
    description: `A web game that lets you create and track your own exersizes. Does accuracy tracking to help with range of motion. Creates exercizes by saving joycon movements. Lets you track the accuracy of your movements to the exersize you do. Persistently saves heartrate and exercise data using Google Cloud Platform and MongoDB.
    
    Won the DataBricks prize in UTRA Hacks 2025 against 340+ participants.`,
    technologies: ["React", "MongoDB Atlas", "Flask", "Terraform", "AWS", "Arduino", "Python", "HTML", "CSS", "JavaScript", "LangChain", "DataBricks", "Google Cloud Platform"],
    devpostLink: "https://devpost.com/software/the-exercists?ref_content=user-portfolio&ref_feature=in_progress",
    githubLink: "https://github.com/iantang08/UTRAHacks2025",
  },
  Music_Tracking_Game: {
    title: "Music Tracking Game (winner)",
    description: `Developed a musical accuracy tracking game. Implemented cross-correlation to compare two audio waves by extracting vectors of amplitudes. Tracked musical accuracy by adjusting the lag between the two audio waves, providing feedback every 50 milliseconds. Deployed an interactive web platform to retrieve and display game information in real-time. 
    
    Won the Best Use of MATLAB award from over 200 participants.`,
    technologies: ["Hackathon", "MATLAB", "Flask", "HTML", "CSS", "JavaScript"],
    devpostLink: "https://devpost.com/software/the-exercists?ref_content=user-portfolio&ref_feature=in_progress",
    githubLink: "https://github.com/iantang08/UTRAHacks2025",
  },
  Waste_Sorter: {
    title: "Image Detecting Waste Sorter",
    description: " Made an app to use image detection to identify and sort waste. Done in 36 hours.",
    technologies: ["Hackathon", "Google Cloud", "Hugging Face", "Flask", "JavaScript", "Python", "React Native"],
    devpostLink: "https://devpost.com/software/the-exercists?ref_content=user-portfolio&ref_feature=in_progress",
    githubLink: "https://github.com/iantang08/UTRAHacks2025",
  },
  Voice_Assistant: {
    title: "Voice Automated Assistant", 
    description: "Made an AI-driven tool that interprets voice input using Whisper into computer commands",
    technologies: ["Hackathon", "Project", "Whisper", "Cohere", "Python"],
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

            <div className="flex gap-4">
              <a href={project.devpostLink} target="_blank" rel="noopener noreferrer" className="button flex bg-gray-100 hover:text-blue-600 transition-transform duration-200 hover:scale-110">
                View Project
              </a> 
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="button flex bg-gray-100 hover:text-blue-600 transition-transform duration-200 hover:scale-110">
                View Github
              </a> 
            </div>

            <div className="flex mb-12"></div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
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
