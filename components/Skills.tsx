'use client'
import React from 'react'

export default function Skills() {
  const skills = ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Python', 'Git', 'SQL']

  return (
    <section id="skills" className="py-16 text-center">
      <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
      <ul className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <li key={index} className="bg-gray-200 px-4 py-2 rounded text-sm">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}
