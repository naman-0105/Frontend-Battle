import React from 'react';
import PageTransition from '../components/PageTransition';

const About = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-dark to-dark-light">
        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24 pb-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              ROADMAP OF INTERNSHIP JOURNEY
            </h1>
          </div>
        </div>
      </section>

      {/* Internship Journey Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="bg-dark-light rounded-xl p-8">
                <h2 className="text-2xl font-display font-bold mb-4">Step 1: Registration Form & Portal Access</h2>
                <ul className="list-disc pl-5 text-gray-400">
                  <li>Register portal as a signature and sign your portal access.</li>
                </ul>
              </div>

              <div className="bg-dark-light rounded-xl p-8">
                <h2 className="text-2xl font-display font-bold mb-4">Step 2: Interview Call - Next Day</h2>
              </div>

              <div className="bg-dark-light rounded-xl p-8">
                <h2 className="text-2xl font-display font-bold mb-4">Step 3: Offer Letter with Batch Group Link</h2>
                <ul className="list-disc pl-5 text-gray-400">
                  <li>Bring a number other letters. You will get accurate including those.</li>
                </ul>
              </div>

              <div className="bg-dark-light rounded-xl p-8">
                <h2 className="text-2xl font-display font-bold mb-4">Step 5: Experience Letter & Letter of Inspection</h2>
                <ul className="list-disc pl-5 text-gray-400">
                  <li>Don't use a letter or request. You get up to contact completion certificates and start of inspection.</li>
                </ul>
              </div>

              <div className="bg-dark-light rounded-xl p-8">
                <h2 className="text-2xl font-display font-bold mb-4">Step 6: Select Your Project and Submit Work</h2>
                <ul className="list-disc pl-5 text-gray-400">
                  <li>Don't use any specific project or selection practices on the project and visibility our work.</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <h2 className="text-2xl font-display font-bold mb-4">Begin your Journey</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction Section */}
      <section className="py-20 bg-dark-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-6 text-center">We Provide Best Industry Services For You.</h2>
            <p className="text-gray-400 mb-8 text-center">
              At INLIGHT TECH, we believe that the future of education lies in bridging the gap between academic learning and industry needs. Founded with a passion for providing meaningful and immersive learning experiences, we offer internship programs that equip students and young professionals with practical skills in Cyber Security, Full Stack Development, Data Science, and Project Management.
            </p>
            <div className="text-center">
              <h3 className="text-2xl font-display font-bold">InLight Tech</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-6 text-center">Save Time and Effort with INLIGHT TECH</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-dark-light rounded-xl p-8">
                <h3 className="text-2xl font-display font-bold mb-4 text-gradient">Our Vision</h3>
                <p className="text-gray-400">
                  To be a leading EoTech platform that bridges the gap between academic knowledge and industry demands, shaping the next generation of tech innovators and leaders through hands-on, practical learning.
                </p>
              </div>

              <div className="bg-dark-light rounded-xl p-8">
                <h3 className="text-2xl font-display font-bold mb-4 text-gradient">Our Mission</h3>
                <p className="text-gray-400">
                  To empower students and young professionals by providing immersive, real-world learning experiences through tailored internship programs. We aim to equip our participants with the practical skills and confidence they need to succeed in the fast-evolving tech industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-dark-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-4xl font-display font-bold mb-2">5000+</h3>
              <p className="text-gray-400">INTERNS ENROLLED</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-display font-bold mb-2">9000+</h3>
              <p className="text-gray-400">PROJECTS COMPLETED</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-display font-bold mb-2">93%</h3>
              <p className="text-gray-400">SATISFACTION RATE</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-display font-bold mb-2">30+</h3>
              <p className="text-gray-400">TOP INSTRUCTORS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-6 text-center">The Best Beneficial Side of INLIGHTECH</h2>
            
            <div className="space-y-8 mt-12">
              <div className="bg-dark-light rounded-xl p-8">
                <h3 className="text-2xl font-display font-bold mb-4 text-gradient">High Quality Resources</h3>
                <p className="text-gray-400">
                  Our expertly designed resources provide hands-on learning and real-world skills. With up-to-date content and personalized mentorship, you'll gain the knowledge needed to succeed in today's tech industry.
                </p>
              </div>

              <div className="bg-dark-light rounded-xl p-8">
                <h3 className="text-2xl font-display font-bold mb-4 text-gradient">Expert Instructors</h3>
                <p className="text-gray-400">
                  Learn from seasoned industry professionals who bring real-world experience and insights to every lesson, guiding you with practical knowledge to help you succeed.
                </p>
              </div>

              <div className="bg-dark-light rounded-xl p-8">
                <h3 className="text-2xl font-display font-bold mb-4 text-gradient">Internship Portal Access</h3>
                <p className="text-gray-400">
                  Get separate portal access to all course materials and updates, allowing you to learn at your own pace and stay up-to-date with industry trends long after you've completed the program.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-dark-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-6 text-center">TESTIMONIALS</h2>
            <h3 className="text-2xl font-display font-bold mb-12 text-center text-gradient">What Our Interns Say</h3>
            
            <div className="space-y-8">
              <div className="bg-dark rounded-xl p-8">
                <p className="text-gray-300 mb-4">
                  "Logo, Flask, Web Scraping, and sts that enhanced my time understand backend tured learning path made a big and abilities. At INLIGHN TECH, I topment internship, where I logoDB, and API development. I catch, which helped me backend development. The real-dance made me industry-ready."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">DIRAC</h4>
                  </div>
                </div>
              </div>

              <div className="bg-dark rounded-xl p-8">
                <p className="text-gray-300 mb-4">
                  "During my Data Analytics internship at INLIGHN TECH, I learned SQL, Power BI, Tableau, and Data Cleaning. The program focused on real-world business intelligence projects, which helped me understand data-driven decision-making. The mentorship and structured learning approach made a significant impact on my skills."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Mirundini R</h4>
                    <p className="text-sm text-gray-400">Data Analyst Intern</p>
                  </div>
                </div>
              </div>

              <div className="bg-dark rounded-xl p-8">
                <p className="text-gray-300 mb-4">
                  "I completed my Data where I gained hands Visualization, and AI helped me apply my structured guidance problem-solving and experience."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Surendra Kumar</h4>
                    <p className="text-sm text-gray-400">Data Science Intern (in</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognitions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-6 text-center">Our Recognitions</h2>
            <h3 className="text-2xl font-display font-bold mb-12 text-center text-gradient">Our Achievements</h3>
            
            <div className="space-y-8">
              <div className="bg-dark-light rounded-xl p-8 text-center">
                <h4 className="text-xl font-display font-bold mb-4">CERTIFICATE OF RECOGNITION</h4>
              </div>

              <div className="bg-dark-light rounded-xl p-8 text-center">
                <h4 className="text-xl font-display font-bold mb-4">Startup India Recognitions</h4>
              </div>

              <div className="bg-dark-light rounded-xl p-8 text-center">
                <h4 className="text-xl font-display font-bold mb-4">Department for Promotion of Industry and Internal Trade Approved</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;