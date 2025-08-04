'use client'
import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center justify-center text-center py-16">
      <Image
        src="/me.jpg" // <- Replace with your actual image path in the public/ folder
        alt="Profile picture"
        width={150}
        height={150}
        className="rounded-full mb-4"
      />
      <h1 className="text-4xl font-bold mb-2">Your Name</h1>
      <p className="text-lg max-w-xl">
        I'm a software engineer with a passion for building scalable web applications, solving
        problems, and learning new technologies.
      </p>
    </section>
  )
}
