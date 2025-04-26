'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-primary-100 text-black py-6 px-8 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and Name */}
        <Link href="/" className="flex items-center space-x-3">
          <img src="/logo.png" alt="Honoredge Legal Practices Logo" className="h-10 w-auto" />
          <h1 className="text-2xl font-bold text-[#230562] ">Honoredge Legal Practices</h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex text-[#230562] space-x-6">
          <Link href="/" className="relative group">Home</Link>
          <Link href="/about" className="relative group">About</Link>
          <Link href="/attorneys" className="relative group">Attorneys</Link>
          <Link href="/#practice-areas" className="relative group">Practice Areas</Link>
          <Link href="/blog" className="relative group">Blog</Link>
          <Link href="/contact" className="relative group">Contact</Link>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Links */}
      {menuOpen && (
        <div className="md:hidden mt-4 px-4 text-[#230562] space-y-4">
          <Link href="/" className="block">Home</Link>
          <Link href="/about" className="block">About</Link>
          <Link href="/attorneys" className="block">Attorneys</Link>
          <Link href="/#practice-areas" className="block">Practice Areas</Link>
          <Link href="/blog" className="block">Blog</Link>
          <Link href="/contact" className="block">Contact</Link>
        </div>
      )}
    </header>
  )
}
