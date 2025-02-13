"use client"

import Image from "@/app/media/background.png"
import { useParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import PageTransition from "@/app/components/PageTransition"

const projectData = {
  Exercise_Assister: {
    title: "Exercise Assister",
    description: `Created a web game that lets you create and track your own exersizes. Does accuracy tracking to help with range of motion. Creates exercizes by saving joycon movements. Lets you track the accuracy of your movements to the exersize you do. Persistently saves heartrate and exercise data using Google Cloud Platform and MongoDB.
    
    Done in 24 hours.
    
    Won the DataBricks prize in UTRA Hacks 2025 against 340+ participants.`,
    technologies: ["React", "MongoDB Atlas", "Flask", "Terraform", "AWS", "Arduino", "Python", "HTML", "CSS", "JavaScript", "LangChain", "DataBricks", "Google Cloud Platform"],
    devpostLink: "https://devpost.com/software/the-exercists",
    githubLink: "https://github.com/iantang08/UTRAHacks2025",
  },
  Music_Tracking_Game: {
    title: "Music Tracking Game (winner)",
    description: `Developed a musical accuracy tracking game. Implemented cross-correlation to compare two audio waves by extracting vectors of amplitudes. Tracked musical accuracy by adjusting the lag between the two audio waves, providing feedback every 50 milliseconds. Deployed an interactive web platform to retrieve and display game information in real-time. 
    
    Done in 36 hours.
    
    Won the Best Use of MATLAB award from over 200 participants.`,
    technologies: ["Hackathon", "MATLAB", "Flask", "HTML", "CSS", "JavaScript"],
    devpostLink: "https://dorahacks.io/buidl/13351",
    githubLink: "https://github.com/m3di0cre3/Any-Jam",
  },
  Waste_Sorter: {
    title: "Image Detecting Waste Sorter",
    description: `Created an application using React Native to identify and sort waste with a camera, achieving 90% accuracy in object detection. Utilized Google Cloud’s Vision AI for object detection and classification, sending the data to a manually parsed waste database using JavaScript. Combined embeddings with a 384-dimensional dense vector space using the AI model all-MiniLM-L6-v2, and employed semantic search techniques to classify image input. Response data and associated weights were sent to the REST API of the Flask backend to identify optimal disposal strategies.
    
    Done in 36 hours.`,
    technologies: ["Hackathon", "Google Cloud", "Hugging Face", "Flask", "JavaScript", "Python", "React Native"],
    devpostLink: "https://devpost.com/software/sorting-the-6ix",
    githubLink: "https://github.com/suoeh/sortingThe6ix",
  },
  Voice_Assistant: {
    title: "Voice Automated Assistant", 
    description: `Developed an AI-driven tool that interprets voice input using Whisper, into tangible computer commands. Implemented voice-to-text transcription to send information to Cohere’s API for semantic search and command categorization. Utilized Google Cloud's search API for web searches and implemented Python keyboard and mouse macros to execute commands.
    
    Done in 36 hours.`,
    technologies: ["Hackathon", "Project", "Whisper", "Cohere", "Python", "Google Cloud Platform"],
    devpostLink: "https://devpost.com/software/dylan-dai",
    githubLink: "https://github.com/suoeh/DylanAI",
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
