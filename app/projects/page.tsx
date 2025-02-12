import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import PageTransition from "../components/PageTransition"
import ParallaxBackground from "../components/ParallaxBackground"

export default function Projects() {
  const projects = [
    {
      id: "Exercise_Assister",
      title: "Exercise Assister (winner)",
      description: "Web game that lets you create and track your own exercizes. Done in 24 hours.",
      tags: ["Hackathon", "React", "MongoDB Atlas", "Python", "JavaScript", "LangChain", "Google Cloud Platform"],
      bgStyle: 'paper-bg'
    },
    {
      id: "Music_Tracking_Game",
      title: "Music Tracking Game (winner)",
      description: "Game that tracks how accurate your piano skills are using cross correlation. Done in 36 hours.",
      tags: ["Hackathon", "MATLAB", "Flask", "HTML", "CSS", "JavaScript"],
      bgStyle: 'paper2-bg'
    },
    {
      id: "Waste_Sorter",
      title: "Image Detecting Waste Sorter",
      description: " Made an app to use image detection to identify and sort waste. Done in 36 hours.",
      tags: ["Hackathon", "Google Cloud", "Hugging Face", "Flask", "JavaScript", "Python", "React Native"],
      bgStyle: 'paper4-bg'
    },
    {
      id: "Voice_Assistant",
      title: "Voice Automated Assistant",
      description: "Made an AI-driven tool that interprets voice input using Whisper into computer commands",
      tags: ["Hackathon", "Project", "Whisper", "Cohere", "Python"],
      bgStyle: 'paper3-bg'
    },
  ]

  return (
    <PageTransition>
      <div className="min-w-screen min-h-screen p-8 mx-auto bg-no-repeat relative">
        <ParallaxBackground />
        <div className="max-w-6xl mx-auto flex flex-col relative z-10">
            <section id="projects" className="min-h-screen py-20">
            <div className="max-w-6xl mx-auto px-6">
                <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-12">
                <ArrowLeft className="w-5 h-5 mr-2" />
                <span>Back</span>
                </Link>
                <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <Link 
                    key={project.id} 
                    href={`/projects/${project.id}`} 
                    className={`card p-6 flex flex-col aspect-[7/5] ${project.bgStyle}`}
                  >
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            {tag}
                        </span>
                        ))}
                    </div>
                    </Link>
                ))}
                </div>
            </div>
        </section>
        </div>
      </div>
    </PageTransition>
  )
}

