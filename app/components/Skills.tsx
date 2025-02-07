export default function Skills() {
  const skills = ["JavaScript", "Python", "React", "Node.js", "SQL", "Git"]

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center">
      <div className="w-full">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center
                                        transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <p className="text-xl font-semibold">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

