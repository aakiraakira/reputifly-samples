import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    text: "During the most difficult time of our lives, Funeral Singapore SG handled everything with such care and professionalism. They truly understood our needs and made the process so much easier.",
    author: "Mrs. Lim",
    location: "Ang Mo Kio",
  },
  {
    text: "The team was incredibly compassionate and patient with us. They explained everything clearly and their transparent pricing gave us peace of mind. Highly recommend their services.",
    author: "David Tan",
    location: "Tampines",
  },
  {
    text: "We needed an urgent Buddhist funeral arrangement and they responded immediately. The setup was beautiful and dignified. Thank you for your exceptional service.",
    author: "Chen Family",
    location: "Hougang",
  },
  {
    text: "Professional, respectful, and genuinely caring. They handled my father's Christian funeral with such grace. The entire process was seamless and stress-free.",
    author: "Sarah Wong",
    location: "Jurong",
  },
  {
    text: "Award-winning service indeed. From the initial call to the final farewell, every detail was perfect. Their landed property setup was elegant and dignified.",
    author: "Kumar Family",
    location: "Serangoon",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (!isPaused && !prefersReducedMotion) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="py-16 bg-paper">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading text-center mb-12 text-ink">
          What Families Say
        </h2>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          role="region"
          aria-label="Testimonials carousel"
          aria-live="polite"
        >
          <div className="bg-dove rounded-2xl p-8 md:p-12 shadow-gentle min-h-[280px] flex flex-col justify-center">
            <Quote className="w-12 h-12 text-gold mb-6" aria-hidden="true" />
            
            <blockquote className="mb-6">
              <p className="text-lg md:text-xl text-ink leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>
            </blockquote>

            <footer className="mt-auto">
              <cite className="not-italic">
                <p className="font-semibold text-ink">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-sm text-slate-600">
                  {testimonials[currentIndex].location}
                </p>
              </cite>
            </footer>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goToPrevious}
              className="inline-flex items-center justify-center w-11 h-11 bg-paper rounded-full shadow-gentle hover:shadow-hover hover:-translate-y-0.5 transition-calm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-ink" />
            </button>

            <div className="flex gap-2" role="tablist" aria-label="Testimonial indicators">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-calm ${
                    idx === currentIndex ? "bg-gold w-8" : "bg-slate-600/30"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  aria-current={idx === currentIndex ? "true" : undefined}
                  role="tab"
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="inline-flex items-center justify-center w-11 h-11 bg-paper rounded-full shadow-gentle hover:shadow-hover hover:-translate-y-0.5 transition-calm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-ink" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
