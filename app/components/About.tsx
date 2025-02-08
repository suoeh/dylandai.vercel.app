import Image from "next/image"
import Link from "next/link"
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
            First year Computer Science student at the University of Waterloo.<br />
            National medalist in competitive programming.<br />
            Machine Learning Consultant @ Cohere on top of school.<br />
            Undying love for problem solving and growth.<br /> <br /> <br />
            If you're seeing this, I am still editing this page.
          </p>
          <div className="flex justify-center space-x-8">
            <SocialLink href="https://linkedin.com/in/dyland06" title="LinkedIn" />
            <SocialLink href="https://drive.google.com/file/d/1EMA_ukAUA4FnAy09m1yumCqn0i0bbk9t/view?usp=sharing" title="Resume" />
            <SocialLink href="https://github.com/suoeh" title="GitHub" />
            <SocialLink href="mailto:dylanydai@gmail.com" title="Email" />
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
      
      <span className="font-medium">{title}</span>
    </Link>
  )
}

