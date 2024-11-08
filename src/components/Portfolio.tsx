'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Github, Mail, MapPin, ArrowRight, Sun, Moon, Twitter, Facebook, Instagram, Menu } from 'lucide-react'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home')
  const [isDarkMode, setIsDarkMode] = useState(false)
  const contactRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const savedMode = localStorage.getItem('portfolioTheme')
    if (savedMode) {
      setIsDarkMode(savedMode === 'dark')
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('portfolioTheme', isDarkMode ? 'dark' : 'light')
    document.body.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  const sections = ['Home', 'About', 'Skills', 'Works', 'Contact']

  const skills = [
    "Machine Learning", "Deep Learning", "Python", "R", "Data Analysis", "Natural Language Processing",
    "Java", "AWS", "Google Cloud", "Azure", "Hadoop", "Spark", "HTML/CSS", "JavaScript", "React",
    "Vue.js", "Angular", "Git", "RESTful API", "GraphQL", "Jest", "Mocha", "Cypress"
  ]

  const projects = [
    {
      title: "E-Commerce Customer Segmentation and Recommendation System",
      description: "Developed a machine learning-based system to segment customers and provide personalized recommendations using Python.",
      link: "#"
    },
    {
      title: "Image Classification using Deep Learning",
      description: "Developed an image classification model using CNNs with TensorFlow and Keras, achieving 95% accuracy on a dataset of 10,000 images.",
      link: "#"
    },
    {
      title: "AI-Powered Customer Segmentation and Recommendation System",
      description: "Developed an AI solution using Python and TensorFlow, boosting customer retention by 20% and cross-selling by 15% through personalized recommendations, deployed on AWS for scalability and efficiency.",
      link: "#"
    }
  ]

  const scrollToContact = () => {
    setActiveSection('contact')
    contactRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-black text-white' : 'bg-gray-100'}`}>
      <header className={`sticky top-0 z-10 shadow-sm ${isDarkMode ? 'bg-black border-b border-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className={`text-xl font-semibold ${isDarkMode ? 'text-red-600' : 'text-gray-800'}`}>Rahul Gour</h1>
          <nav className="flex items-center">
            <ul className="flex space-x-6 mr-6">
              {sections.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => setActiveSection(item.toLowerCase())}
                    className={`text-sm ${
                      activeSection === item.toLowerCase()
                        ? isDarkMode
                          ? 'text-red-600 border-b-2 border-red-600'
                          : 'text-blue-600 border-b-2 border-blue-600'
                        : isDarkMode
                        ? 'text-white hover:text-red-600'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
            <Button
              size="icon"
              variant="ghost"
              onClick={toggleTheme}
              className={isDarkMode ? 'text-white' : 'text-gray-600'}
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-12">
        {activeSection === 'home' && (
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                Hi,<br />
                I'm <span className={isDarkMode ? 'text-red-600' : 'text-blue-600'}>Rahul Gour</span><br />
                AI Engineer & Business Development
              </h2>
              <Button 
                size="lg" 
                className={`mt-4 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center ${
                  isDarkMode ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
                onClick={scrollToContact}
              >
                Contact Me
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 overflow-hidden rounded-full shadow-xl transform transition-all duration-300 hover:scale-105 hover:rotate-3 perspective-1000">
                <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-br from-red-600 to-red-800' : 'bg-gradient-to-br from-blue-400 to-purple-500'} opacity-75`}></div>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2488-ElMvPSdr51mhEjzxWMd64eeKSWjKdR.jpg"
                  alt="Rahul Gour's portrait"
                  className="absolute w-auto h-[200%] max-w-none left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 transform transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>
          </div>
        )}

        {activeSection === 'about' && (
          <div className={`bg-white p-8 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-900' : ''}`}>
            <div className="flex justify-between items-start mb-6">
              <h2 className={`text-6xl font-bold ${isDarkMode ? 'text-red-600' : 'text-gray-500'}`}>01</h2>
              <div className="flex space-x-4">
                <Twitter className={`w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                <Facebook className={`w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                <Instagram className={`w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                <Menu className={`w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
              </div>
            </div>
            <h3 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Hello</h3>
            <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              AI Engineer specializing in machine learning, automation, and business growth through data-driven strategies, driving innovation and operational efficiency.
            </p>
            <h4 className={`text-2xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Education</h4>
            <p className={`mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Babu Banarsi Das University, Lucknow, India - B.Tech in Artificial Intelligence</p>
            <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Specialization in AI-driven solutions, focusing on developing cutting-edge algorithms and applications to solve complex business problems.</p>
          </div>
        )}

        {activeSection === 'skills' && (
          <div>
            <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className={`px-3 py-1 rounded-full text-sm ${
                    isDarkMode ? 'bg-red-900 text-red-100' : 'bg-blue-100 text-blue-800'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'works' && (
          <div>
            <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className={isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white'}>
                  <CardContent className="p-6">
                    <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-red-600' : 'text-blue-600'}`}>{project.title}</h3>
                    <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
                    <a href={project.link} className={`hover:underline ${isDarkMode ? 'text-red-600' : 'text-blue-600'}`}>Learn more</a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'contact' && (
          <div ref={contactRef}>
            <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Contact</h2>
            <div className={`space-y-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <p className="flex items-center"><Mail className={`w-5 h-5 mr-2 ${isDarkMode ? 'text-red-600' : 'text-blue-600'}`} /> gaurr210@gmail.com</p>
              <p className="flex items-center"><MapPin className={`w-5 h-5 mr-2 ${isDarkMode ? 'text-red-600' : 'text-blue-600'}`} /> HSR LAYOUT, Bengaluru, Karnataka, 560103, India</p>
            </div>
          </div>
        )}
      </main>

      <footer className={`shadow-sm mt-12 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-center space-x-4">
            <a href="https://www.linkedin.com/in/rahul-gaur-9570812a3" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
              <Linkedin className={`w-6 h-6 ${isDarkMode ? 'text-gray-400 hover:text-red-600' : 'text-gray-600 hover:text-blue-600'}`} />
            </a>
            <a href="#github" aria-label="GitHub profile">
              <Github className={`w-6 h-6 ${isDarkMode ? 'text-gray-400 hover:text-red-600' : 'text-gray-600 hover:text-blue-600'}`} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}