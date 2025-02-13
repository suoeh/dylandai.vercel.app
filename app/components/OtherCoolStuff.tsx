import Link from "next/link"

export default function OtherCoolStuff() {
  const projects = [
    {
      id: "Contests",
      title: "Math and Programming Contests",
      description: "",
      tags: [],
      bgStyle: 'paper3-bg'
    },
  ]

  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Awards/Cool Stuff</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link 
              key={project.id} 
              href={`/cool_stuff/${project.id}`} 
              className={`card p-6 flex flex-col aspect-[7/5] ${project.bgStyle}`}
            >
              <h3 className="text-xl font-semibold mb-3 text-center">{project.title}</h3>
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
  )
}

