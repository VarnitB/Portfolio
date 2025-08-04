'use client'
import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="py-16 text-center">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <div className="flex flex-col gap-2 items-center">
        <a href="mailto:your.email@example.com" className="text-blue-600 hover:underline">
          Email
        </a>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          LinkedIn
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          GitHub
        </a>
      </div>
    </section>
  )
}
