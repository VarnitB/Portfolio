'use client'
import React from 'react'

export default function Internships() {
  const experiences = [
    {
      company: 'TechCorp Inc.',
      role: 'Software Engineering Intern',
      duration: 'Summer 2024',
      description: 'Worked on frontend features with React and integrated APIs.',
    },
    {
      company: 'DataWorks',
      role: 'Data Intern',
      duration: 'Fall 2023',
      description: 'Built data pipelines and dashboards using Python and SQL.',
    },
  ]

  return (
    <section id="internships" className="py-16 text-center">
      <h2 className="text-2xl font-bold mb-6">Internship Experience</h2>
      <div className="space-y-6 max-w-3xl mx-auto">
        {experiences.map((exp, idx) => (
          <div key={idx} className="border rounded-lg p-4 text-left shadow-sm bg-white">
            <h3 className="text-xl font-semibold">{exp.role} @ {exp.company}</h3>
            <p className="text-sm text-gray-500">{exp.duration}</p>
            <p className="mt-2">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
