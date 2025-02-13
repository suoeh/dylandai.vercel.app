"use client"

import Image from "@/app/media/background.png"
import { useParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import PageTransition from "@/app/components/PageTransition"

const projectData = {
  Contests: {
    title: "Contests",
    description:
    `Canadian Computing Olympiad 2024:
     - Bronze Medallist
     - One of 24 students invited to write

    Canadian Computing Competition 2024:
     - Honor roll group I
     - Rank 14 of 3497
     - Score 62/75
     
    Euclid 2024:
     - Award of Distinction (one point off honor roll)
     - Rank 1028 of 27650
     - Score 84/100
     
    Hypatia 2023:
     - Honor roll group II
     - Rank 66 of 7816
     - Score 38/40

    CSMC 2023:
     - Honor roll group V
     - Rank 258 of 16805
     - Score 46/60

    AMC 12B 2022:
     - AIME qualifier
     - Score 81/150
     
    COMC 2022:
     - Top decile
     - Two points off honor roll
     - Score 56/80
    `,
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

            <div className="flex mb-12"></div>
          </article>
        </div>
      </div>
    </PageTransition>
  )
}
