import { Award } from "lucide-react";

const TrustBadges = () => {
  const awards = [
    {
      name: "Best of Best Review Award 2025",
      url: "https://bestofbestreview.com/awards/cherish-memorials-funeral-services-best-funeral-services-company-in-singapore-of-2025",
    },
    {
      name: "ThreeBestRated",
      url: "https://threebestrated.sg/funeral-services/cherish-memorials-fs-pte-ltd-ang-mo-kio-219520863",
    },
    {
      name: "Wanderlog",
      url: "https://wanderlog.com/place/details/11497011/cherish-memorials-fs-pte-ltd",
    },
  ];

  const mediaLogos = [
    "Straits Times",
    "Mothership",
    "The New Paper",
    "CEO Times",
  ];

  return (
    <div className="py-12 bg-dove">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 text-gold rounded-full mb-4">
            <Award className="w-5 h-5" aria-hidden="true" />
            <span className="text-sm font-semibold">Award-Winning Funeral Company in Singapore</span>
          </div>
          <p className="text-slate-600 text-sm">Featured on:</p>
        </div>

        {/* Media Logos - Simple text grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 max-w-4xl mx-auto">
          {mediaLogos.map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center p-4 bg-paper rounded-lg shadow-gentle"
            >
              <span className="text-slate-600 font-medium text-sm text-center">{logo}</span>
            </div>
          ))}
        </div>

        {/* Award Links */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {awards.map((award, idx) => (
            <a
              key={idx}
              href={award.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-paper rounded-lg shadow-gentle hover:shadow-hover hover:-translate-y-0.5 transition-calm text-sm font-medium text-ink"
            >
              <Award className="w-4 h-4 text-gold" />
              <span>{award.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;
