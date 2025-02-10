import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      id: "Exercise_Assister",
      title: "Exercise Assister (winner)",
      description: "Web game that lets you create and track your own exersizes.",
      tags: ["Hackathon", "Project"],
      bgStyle: 'paper-bg'
    },
    {
      id: "project2",
      title: "Project 2",
      description: "A brief description of project 2",
      tags: ["Python", "ML"],

      bgStyle: 'paper2-bg'
    },
    {
      id: "project3",
      title: "Project 3",
      description: "A brief description of project 3",
      tags: ["TypeScript", "Next.js"],
      bgStyle: 'paper4-bg'
    },
  ]

  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link 
              key={project.id} 
              href={`/projects/${project.id}`} 
              className={`card p-6 flex flex-col ${project.bgStyle}`}
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

