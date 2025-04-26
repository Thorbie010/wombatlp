import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../components/Layout'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.7,
      ease: 'easeOut',
    },
  }),
}


const focusAreas = [
  {
    title: 'Immigration',
    description:
      'We provide comprehensive legal support for individuals and businesses navigating immigration processes, visa applications, residency, and citizenship matters.',
  },
  {
    title: 'Corporate & Commercial Law',
    description:
      'Our firm guides businesses through regulatory compliance, M&A transactions, governance, and commercial contracts, ensuring sustainable growth and legal assurance.',
  },
  {
    title: 'Human Rights & Social Justice',
    description:
      'We advocate for individuals facing discrimination, injustice, or human rights violations, ensuring their voices are heard and rights protected.',
  },
  {
    title: 'Real Estate & Construction Law',
    description:
      'We provide legal expertise in property transactions, leasing, development, and land disputes, ensuring compliance and protecting your investments.',
  },
];


const About = () => {
  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen py-20 px-6">
        <Head>
          <title>Honoredge Legal Practices | About Us</title>
        </Head>
        <div className="max-w-6xl mx-auto space-y-20">

          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-garamond">About Us</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              At Honoredge Legal Practices, we are more than a law firm — we are a team of passionate advocates driven by excellence and justice.
            </p>
          </motion.div>

          {/* Mission - Vision - Values */}
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'Our Mission',
                text: 'To provide strategic, client-centered legal solutions rooted in integrity, innovation, and professionalism.',
                image: '/mission.jpg',
              },
              {
                title: 'Our Vision',
                text: 'To be a transformative force in the legal industry by delivering legal services that empower individuals, businesses, and communities.',
                image: '/vision.jpg',
              },
              {
                title: 'Our Values',
                text: 'Integrity, Diligence, Excellence, Empathy, and Innovation form the pillars of everything we do.',
                image: '/values.jpg',
              },
            ].map((section, i) => (
              <motion.div
                key={section.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="h-52 relative">
                  <Image src={section.image} alt={section.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">{section.title}</h3>
                  <p className="mt-3 text-sm text-gray-600">{section.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Focus Areas */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={3}
            className="text-center"
          >
            <h2 className="text-3xl font-semibold text-gray-900 font-garamond mb-6">Our Focus Areas</h2>
            <div className="h-64 w-full relative rounded-2xl overflow-hidden shadow-md mb-10">
              <Image src='/focus.jpg' alt="Our Practice" fill className="object-cover" />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {focusAreas.map((area, i) => (
              <motion.div
                key={area.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all"
              >
                <h4 className="text-xl font-bold text-primary-300">{area.title}</h4>
                <p className="mt-2 text-sm text-gray-700">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
