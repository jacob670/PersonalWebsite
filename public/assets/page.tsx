'use client'

import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import './globals.css';
import Navbar from './components/Navbar';

const Home = () => {
  const handleScrollToNextSection = () => {
    const nextSection = document.getElementById('next-section')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <Navbar />

      <main className="pt-20 font-gravity">
        <div
          id="top"
          className="h-screen bg-cover bg-center relative"
          style={{ backgroundImage: "url('/home-background.jpg')" }}
        >
          <div className="flex flex-col justify-center items-center h-full relative pl-4">
            <TypeAnimation
              sequence={['CS & Cybersecurity', 1000]}
              wrapper="span"
              speed={3}
              className="text-[40px] mt-[-175px] font-mono"
              repeat={Infinity}
            />

            <div className="absolute bottom-10 flex flex-col items-center w-full">
              <button
                onClick={handleScrollToNextSection}
                className="cursor-pointer"
                aria-label="Scroll down"
              >
                <Image
                  src="/down-arrow-white.png"
                  alt="Arrow Down"
                  width={24}
                  height={24}
                  className="hover:opacity-80 transition-opacity duration-300"
                />
              </button>
            </div>
          </div>
        </div>

        <section
          id="next-section"
          className="scroll-mt-20 h-screen bg-white text-black flex flex-col items-center justify-center px-8 relative"
        >
          <div className="flex items-center space-x-8 max-w-4xl w-full">
            <div
              className="relative rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0"
              style={{ width: '260px', height: '300px' }}
            >
              <img
                src="/headshot.png"
                alt="Your description"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <div className="text-lg">
              <p className="text-center text-[20px]">
                Hi! I am currently a 3rd year student studying both computer
                science and cybersecurity. Studying both fields thoroughly has
                helped me gain both theoretical knowledge and practical skills,
                which I’ve applied in various projects. A long term goal is to
                ultimately develop scalable and secure applications utilizing
                cloud computing and leveraging cybersecurity skills to produce
                safe solutions.
              </p>
            </div>
          </div>

          <div className="absolute bottom-10 flex flex-col items-center w-full">
            <button
              onClick={() => {
                const langSection = document.getElementById(
                  'languages-tools-section'
                )
                if (langSection) {
                  langSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="cursor-pointer"
              aria-label="Scroll down"
            >
              <Image
                src="/down-arrow-black.png"
                alt="Arrow Down"
                width={24}
                height={24}
                className="hover:opacity-80 transition-opacity duration-300"
              />
            </button>
          </div>
        </section>

        <section
          id="languages-tools-section"
          className="scroll-mt-20 min-h-screen bg-gray-100 text-black px-6 py-16 font-gravity"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-semibold mb-12 text-center">
              Languages & Tools
            </h2>

            <div className="flex justify-center gap-x-16 overflow-x-auto mb-16 px-4">
              {[
                { src: '/java-logo.png', alt: 'Java' },
                { src: '/csharp-logo.png', alt: 'C#' },
                { src: '/js-logo.webp', alt: 'Javascript' },
                { src: '/sql-logo.png', alt: 'SQL' },
                { src: '/python-logo.png', alt: 'Python' },
                { src: '/c-logo.png', alt: 'C' },
                { src: '/assembly-logo.png', alt: 'Assembly' },
              ].map(({ src, alt }) => (
                <div
                  key={alt}
                  className="text-center flex-shrink-0 overflow-visible"
                >
                  <img
                    src={src}
                    alt={alt}
                    className="w-24 h-24 object-contain transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4 px-4">
              {[
                'Amazon Web Services',
                'Git & Github',
                'Postman',
                'Azure DevOps',
                'Powershell',
                'SQL Server Management Studio',
                'SQL Server Reporting Services',
                'Kinetic ERP (Epicor)',
                'Wireshark',
                //'Visual Studio',
                //'Visual Studio Code',
                //'IntelliJ IDEA'
              ].map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-gray-300 rounded-full text-gray-800 font-medium cursor-default select-none"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact-section"
          className="scroll-mt-20 min-h-screen bg-white text-black px-6 py-16 font-gravity"
        >
          <h2 className="text-3xl font-semibold mb-8 text-center">Contact Me</h2>
          {/* Add your contact form or info here */}
        </section>
      </main>
    </>
  )
}

export default Home;