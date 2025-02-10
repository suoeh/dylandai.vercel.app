import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, FileText, Mail } from "lucide-react"
import type React from "react" // Added import for React
import headshot from '../media/headshot.jpg'  // Add this import at the top

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-6 mb-6">
            <Image 
              src={headshot}
              alt="Dylan Dai" 
              width={120} 
              height={120} 
              className="rounded-full" 
            />
            <div className="flex flex-col">
              <h1 className="text-5xl font-bold mb-4">Dylan Dai</h1>
              <h2 className="text-xl font-medium">Cool Thing Maker</h2>
            </div>
          </div>
          <p className="text-lg max-w-2xl text-center leading-relaxed mb-12 font-medium">
            Computer Science student at the University of Waterloo.<br />
            0 to national competitive programming medallist in 1 year.<br />
            Machine Learning Consultant @ Cohere on top of school.<br /> <br /> <br />
            See below for more.
          </p>
          <div className="flex justify-center space-x-8">
            <SocialLink href="https://linkedin.com/in/dyland06" Icon={Linkedin} title="LinkedIn" />
            <SocialLink href="/resume.pdf" Icon={FileText} title="Resume" />
            <SocialLink href="https://github.com/suoeh"  Icon={Github} title="GitHub" />
            <SocialLink href="mailto:dylanydai@gmail.com" Icon={Mail} title="Email" />
          </div>
        </div>
      </div>
    </section>
  )
}

function SocialLink({ href, Icon, title }: { href: string; Icon: React.ComponentType; title: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="social-link flex items-center group hover:text-blue-600 transition-transform duration-200 hover:scale-110"
    >
      <Icon /> {/* Add space using inline style */}
      <span style={{ marginLeft: '0.5rem' }} className="font-medium">{title}</span>
    </Link>
  )
}

