export function Portfolio() {
  const projects = [
    {
      title: 'Fitness Studio Website',
      category: 'Health & Fitness',
      description: 'Modern booking system and class schedule for a premium fitness studio'
    },
    {
      title: 'Travel Agency Website',
      category: 'Travel & Tourism',
      description: 'Beautiful showcase of destinations with integrated inquiry forms'
    },
    {
      title: 'Local Service Business',
      category: 'Service',
      description: 'Complete brand presence with service showcase and client testimonials'
    }
  ]

  return (
    <section id="work" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-4">
            Our Work
          </h2>
          <p className="text-[#6b7280]">
            Websites that deliver results
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group">
              <div className="bg-[#fafafa] rounded-lg p-8 mb-4 h-48 flex items-center justify-center border border-[#e5e7eb] group-hover:border-[#d1d5db] transition">
                <div className="text-center">
                  <svg className="w-12 h-12 text-[#d1d5db] mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <p className="text-[#9ca3af] text-sm">Portfolio image</p>
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#0a0a0a] mb-1">{project.title}</h3>
              <p className="text-sm text-[#6b7280] mb-2">{project.category}</p>
              <p className="text-[#6b7280] text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
