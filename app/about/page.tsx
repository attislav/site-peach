import Image from 'next/image';
import { Sparkles, Award, BookOpen, Palette, Heart, Star } from 'lucide-react';

export default function About() {
  const expertise = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Mature Skin Skincare",
      description: "Specialized knowledge in products and routines that work with aging skin"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Age-Appropriate Fashion Styling",
      description: "Creating sophisticated looks that celebrate your current chapter"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Luxury Beauty Products",
      description: "Curated recommendations for discerning women who value quality"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Wardrobe Consulting",
      description: "Building a timeless closet that reflects your authentic style"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Color Analysis for Mature Women",
      description: "Finding the perfect palette that enhances your natural beauty"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Anti-Aging Treatments",
      description: "Evidence-based approaches to maintaining youthful radiance"
    }
  ];

  const achievements = [
    "Former Senior Stylist at Paris Fashion Week",
    "Certified Color Analysis Specialist",
    "Featured in Vogue Germany's 'Ageless Beauty' Issue",
    "Author of 'Style After 50: A Modern Guide'"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF5F5] to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#FFBCB5] via-[#F8E1E0] to-[#FFBCB5] py-20 px-4">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D68B88] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="text-[#4A3B3B] text-sm font-montserrat tracking-[0.3em] uppercase bg-white/50 px-6 py-2 rounded-full backdrop-blur-sm">
              About Sophia
            </span>
          </div>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-[#4A3B3B] mb-6 leading-tight">
            Where Timeless Elegance
            <br />
            <span className="text-[#D68B88]">Meets Modern Confidence</span>
          </h1>
          <p className="font-montserrat text-xl text-[#4A3B3B]/80 max-w-3xl mx-auto leading-relaxed">
            Fashion & Beauty Consultant dedicated to helping women over 50 embrace their most radiant, confident selves
          </p>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#FFBCB5] to-[#D68B88] rounded-3xl opacity-20 blur-2xl"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/author-portrait.jpg"
                  alt="Sophia Rosenberg"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                <p className="font-playfair text-2xl text-[#D68B88] italic leading-snug">
                  "Style has no expiration date—it only gets better with time."
                </p>
              </div>
            </div>
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#4A3B3B] mb-4">
                Sophia Rosenberg
              </h2>
              <p className="font-montserrat text-xl text-[#D68B88] mb-6">
                Fashion & Beauty Consultant for Timeless Elegance
              </p>
              <p className="font-montserrat text-lg text-[#4A3B3B]/80 leading-relaxed mb-6">
                After 30 years in the fashion industry, I discovered my true calling: helping women over 50 embrace their most radiant, confident selves. Style has no expiration date—it only gets better with time.
              </p>
              <div className="flex flex-wrap gap-3">
                {['30+ Years Experience', 'Age 58', 'Based in Europe'].map((badge, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-[#FFBCB5] to-[#F8E1E0] text-[#4A3B3B] font-montserrat text-sm px-4 py-2 rounded-full"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#FFF5F5] to-[#F8E1E0]/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#4A3B3B] mb-12 text-center">
            My Journey to <span className="text-[#D68B88]">Peach & Chic</span>
          </h2>
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#FFBCB5]">
              <h3 className="font-playfair text-2xl font-bold text-[#4A3B3B] mb-4">The Beginning</h3>
              <p className="font-montserrat text-[#4A3B3B]/80 leading-relaxed">
                My journey into the world of fashion began in my twenties, working behind the scenes at fashion weeks across Europe. I spent decades styling models, celebrities, and executives, always chasing the next trend. But at 52, something shifted.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#D68B88]">
              <h3 className="font-playfair text-2xl font-bold text-[#4A3B3B] mb-4">The Awakening</h3>
              <p className="font-montserrat text-[#4A3B3B]/80 leading-relaxed">
                I looked around and realized the fashion industry was ignoring the most elegant, sophisticated women—those who had lived, learned, and developed their own sense of style. That's when I founded Peach & Chic. After watching my own mother struggle to find fashion advice that spoke to her, I knew there was a gap that needed filling.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#FFBCB5]">
              <h3 className="font-playfair text-2xl font-bold text-[#4A3B3B] mb-4">The Mission</h3>
              <p className="font-montserrat text-[#4A3B3B]/80 leading-relaxed">
                Women over 50 don't want to dress like their daughters, nor do they want to fade into the background. They want to celebrate who they've become—confident, discerning, and unapologetically themselves. Now, at 58, I've never felt more beautiful or more certain of my purpose.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#FFBCB5] to-[#D68B88] rounded-2xl p-8 shadow-xl text-white">
              <h3 className="font-playfair text-2xl font-bold mb-4">The Promise</h3>
              <p className="font-montserrat leading-relaxed">
                I combine my decades of industry expertise with a deep understanding of how our bodies, skin, and style preferences evolve. Every recommendation I make comes from personal experience and extensive research. I test products on my own mature skin, I wear the clothes I recommend, and I understand the balance between timeless elegance and contemporary sophistication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#4A3B3B] mb-4 text-center">
            Areas of Expertise
          </h2>
          <p className="font-montserrat text-lg text-[#4A3B3B]/70 text-center mb-12 max-w-2xl mx-auto">
            Specialized knowledge cultivated through decades of hands-on experience in the fashion and beauty industry
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#F8E1E0] hover:border-[#FFBCB5] group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#FFBCB5] to-[#D68B88] rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="font-playfair text-xl font-bold text-[#4A3B3B] mb-3">
                  {item.title}
                </h3>
                <p className="font-montserrat text-[#4A3B3B]/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#D68B88] via-[#FFBCB5] to-[#D68B88] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="text-white/30 text-8xl font-playfair mb-6">"</div>
          <p className="font-playfair text-3xl md:text-4xl font-bold text-white leading-relaxed mb-8">
            Elegance is not about being noticed, it's about being remembered—and we deserve to be unforgettable.
          </p>
          <div className="w-24 h-1 bg-white/50 mx-auto"></div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#4A3B3B] mb-12 text-center">
            Recognition & Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-[#FFF5F5] rounded-2xl p-6 shadow-lg border border-[#F8E1E0] flex items-start gap-4"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-[#FFBCB5] to-[#D68B88] rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <p className="font-montserrat text-[#4A3B3B] font-medium leading-relaxed pt-1">
                  {achievement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#FFF5F5] to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#4A3B3B] mb-6">
            Welcome to <span className="text-[#D68B88]">Peach & Chic</span>
          </h2>
          <p className="font-montserrat text-xl text-[#4A3B3B]/80 leading-relaxed mb-8">
            Peach & Chic isn't just a blog—it's a celebration of the woman you've become and the exciting style journey that lies ahead. Because true beauty and style? They're ageless.
          </p>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FFBCB5] to-[#D68B88] text-white font-montserrat font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            <Heart className="w-5 h-5" />
            <span>Join Our Community</span>
          </div>
        </div>
      </section>
    </div>
  );
}
