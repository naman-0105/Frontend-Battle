import PageTransition from '../components/PageTransition';

const WhatsSpecial = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-gradient-to-br from-dark to-dark-light">
        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-32 pb-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              What's <span className="text-gradient">Special</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover the unique features and benefits of Inlightn Tech's internship program.
            </p>
          </div>
        </div>
      </section>

      {/* 1. Feedback from Our Interns */}
      <section className="py-20 bg-dark-light">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
            Feedback from Our Interns
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-12">
            {/* First testimonial */}
            <div className="bg-dark rounded-xl p-8">
              <p className="text-gray-300 mb-4">"The opportunity I had during this internship using the Inilglin Tech platforms LMS, which a curriculum including video lectures, notes, handful for the experience and the skills I've forward to applying them in the future."</p>
              <p className="text-gray-400 mb-6">"I really appreciate the hands-on approach, even in the early stages - there are plenty of projects that make the concepts more practical and engaging. The video explorations are clear and easy to follow, which helps a lot, especially when diving into technical topics. One thing I've noticed is that the internship focuses more on videos than on PDF notes. This is great for visual learners like me, though having a few quick-reference guides could make revision even easier."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Niha Anjum</h4>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-gray-700 rounded-full"></div>
            </div>

            {/* Second testimonial */}
            <div className="bg-dark rounded-xl p-8">
              <p className="text-gray-300 mb-4">"I gained valuable hands-on expertise in the enhanced my skills by developing the Jupyter Notebook, SQL, MS Excel and interactive dashboards to provide an platform at Inilglin Tech offers and improve both skills and knowledge."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Garima Pandey S</h4>
                  <p className="text-sm text-gray-400">Data Analyst Intern</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EPIC OPPORTUNITY */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient">EPIC OPPORTUNITY</h2>
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-6">Interns of the Month Challenge</h3>
            <p className="text-lg text-gray-300 mb-8">Inlightn Tech is bringing you an EPIC opportunity with the "Interns of the Month Challenge"! Every single month, we're recognizing 10 OUTSTANDING interns who have shown exceptional dedication, innovation, and top-tier performance!</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Stipend Reward",
                  description: "₹15,000!",
                  icon: "💰"
                },
                {
                  title: "Welcome Kit & Swag",
                  description: "Exclusive Inlightn Tech Pack!",
                  icon: "🎁"
                },
                {
                  title: "Special Recognition",
                  description: "Featured on Our Platform!",
                  icon: "🏆"
                }
              ].map((item, index) => (
                <div key={index} className="bg-dark rounded-xl p-6">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROJECTS */}
      <section className="py-20 bg-dark-light">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
            PROJECTS
          </h2>
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-12 text-center text-gradient">
            OUR INTERNS' PROJECTS
          </h3>
          
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Project 1 */}
            <div className="bg-dark rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-2">Cybersecurity Internship PYTHON PROJECTS (Inlightn Tech)</h3>
              <h4 className="text-lg text-primary mb-4">1) SILBORIAN ENVIRONMENT COOL</h4>
              <div className="space-y-2 text-gray-400">
                <p><span className="font-mono">Code:</span></p>
                <p><span className="font-mono">C:\Users\cryptophan.com</span></p>
                <p><span className="font-mono">https://www.cryptophan.com/</span></p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-dark rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4">PDF PROTECTOR - PROJECT REPORT</h3>
              <div className="space-y-2 text-gray-400">
                <p><span className="font-mono">Note: 1.5 items 3</span></p>
                <p><span className="font-mono">ITD: ITDD134</span></p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-dark rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4">Amazon Sites Database 2024</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-2 px-4">PROJECTS</th>
                      <th className="text-left py-2 px-4">ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-700">
                      <td className="py-2 px-4">Kernel</td>
                      <td className="py-2 px-4">POWER</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">Runtime</td>
                      <td className="py-2 px-4">0.5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-center text-xl mt-12">
              Because here at Inlightn Tech, we believe in REWARDING EXCELLENCE! ❤️ ❤️
            </p>
          </div>
        </div>
      </section>

      {/* 4. How to Participate */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
            How to Participate ?
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-dark-light rounded-xl p-8 mb-8">
              <p className="text-lg mb-2">If you're in your last month of internship, you're eligible!</p>
              <p className="text-gray-400">You'll receive a Google Form to apply for this prestigious title!</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Skill Assessment Test",
                  description: "Take a skill assessment test to prove your expertise!",
                  icon: "📝"
                },
                {
                  title: "Submit Projects",
                  description: "Submit your best projects related to your domain!",
                  icon: "📂"
                },
                {
                  title: "Final Round",
                  description: "Ace the interview round (if shortlisted!)",
                  icon: "🎯"
                }
              ].map((item, index) => (
                <div key={index} className="bg-dark rounded-xl p-6">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. RULES & SELECTION PROCESS */}
      <section className="py-20 bg-dark-light">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center text-gradient">
            RULES & SELECTION PROCESS
          </h2>
          
          <div className="max-w-2xl mx-auto space-y-6">
            {[
              "Each intern can apply only ONCE in their final month.",
              "Winners will be announced on the last day of every month!",
              "Top 10 interns will be celebrated with amazing rewards & recognition!"
            ].map((rule, index) => (
              <div key={index} className="bg-dark rounded-xl p-6 text-center">
                <p className="text-lg">{rule}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Program Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
            Program Benefits
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Experience Letter",
                description: "With QR Code",
                icon: "📜"
              },
              {
                title: "Certificate Verification",
                description: "Easy verification system",
                icon: "🔍"
              },
              {
                title: "Internship Portal Access",
                description: "Within 5 minutes",
                icon: "🚪"
              },
              {
                title: "Exclusive Job Updates",
                description: "Shared on WhatsApp",
                icon: "📱"
              },
              {
                title: "Community Forum",
                description: "Peer & mentor support",
                icon: "👥"
              },
              {
                title: "Virtual Internship",
                description: "Work from home with flexible schedule",
                icon: "🏠"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-dark-light rounded-xl p-6">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to Join Our Internship Program?</h2>
            <p className="text-gray-300 text-lg mb-8">
              Take the first step towards an exceptional learning experience and career growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-md font-medium">
                Apply Now
              </button>
              <button className="bg-dark text-white px-8 py-3 rounded-md font-medium">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default WhatsSpecial;