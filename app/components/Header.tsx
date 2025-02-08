import Link from "next/link"
import React from "react"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link href="#about" className="text-gray-800 hover:text-blue-600 transition-colors duration-300">
              About
            </Link>
          </li>
          <li>
            <Link href="#skills" className="text-gray-800 hover:text-blue-600 transition-colors duration-300">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#projects" className="text-gray-800 hover:text-blue-600 transition-colors duration-300">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-gray-800 hover:text-blue-600 transition-colors duration-300">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

