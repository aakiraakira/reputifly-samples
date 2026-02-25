import { CheckCircle, Phone, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Packages = () => {
  const renderPackage = (pkg: typeof packages[0]) => (
    <article className="bg-paper rounded-2xl p-6 md:p-8 shadow-gentle hover:shadow-hover transition-calm">
      <div className="flex flex-col lg:flex-row lg:items-start gap-6">
        <div className="flex-1 space-y-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-ink mb-2">
              {pkg.name}
            </h2>
            <p className="text-3xl font-bold text-gold mb-3">
              {pkg.price}
            </p>
            <p className="text-slate-600">{pkg.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 py-4">
            <div>
              <span className="text-sm font-semibold text-slate-900 block mb-1">
                Venue Options:
              </span>
              <span className="text-sm text-slate-600">{pkg.venue}</span>
            </div>
            <div>
              <span className="text-sm font-semibold text-slate-900 block mb-1">
                Duration:
              </span>
              <span className="text-sm text-slate-600">{pkg.duration}</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-ink mb-3">
              What's Included:
            </h3>
            <ul className="grid md:grid-cols-2 gap-2">
              {pkg.inclusions.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {pkg.options && (
            <div className="pt-2">
              <h4 className="text-sm font-semibold text-ink mb-2">
                Optional Upgrades:
              </h4>
              <p className="text-sm text-slate-600">{pkg.options}</p>
            </div>
          )}
        </div>

          <div className="lg:w-64 flex-shrink-0">
          <div className="bg-dove p-6 rounded-xl space-y-3">
            <a
              href="tel:+6581275655"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold text-paper rounded-full font-semibold hover:-translate-y-0.5 transition-calm shadow-gentle"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
            <a
              href="https://wa.me/6581275655"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-ink rounded-full font-semibold hover:-translate-y-0.5 transition-calm shadow-gentle"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <a
              href={pkg.link}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-ink text-ink rounded-full font-semibold hover:-translate-y-0.5 transition-calm"
            >
              <span>View Service</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );

  const packages = [
    {
      name: "Direct Cremation Services",
      price: "From $1,188 nett",
      description: "Simple, dignified cremation with essential services",
      inclusions: [
        "Professional advice & coordination",
        "Collection & transfer to facility",
        "Body preparation per NEA requirements",
        "Half glass polished casket with satin lining or cremation tray",
        "Permit paperwork & NEA coordination",
        "Cremation booking & escort",
        "Ashes collection guidance",
      ],
      link: "/contact",
      venue: "Crematorium",
      duration: "Same day or next day",
    },
    {
      name: "Buddhist Simple Package (3 Days)",
      price: "From $5,000 nett (without tentage) / $5,800 nett (with tentage)",
      description: "Affordable Buddhist funeral with essential rites and setup",
      inclusions: [
        "Collection of deceased (Home/Hospital)",
        "Embalming & Make Up (By Female Embalmer)",
        "Half glass polished casket with satin lining",
        "Buddha Altar & Deceased Altar",
        "Flower & Photo Enlargement (with 6 passport size)",
        "Simple Buddhist Altar Set Up",
        "Condolence Book",
        "Professional Service Crew",
        "Buddhist Monk Prayer (Encoffinment, Final Night, Funeral Day)",
        "Buddha Offering & Vegetarian Offering",
        "Mercedes Vito Funeral Hearse",
        "45-Seater Air-Conditioned Bus",
        "Towel Souvenirs (30 sets)",
        "Car Pack Oranges (8 pack)",
        "Flower Water For Guests",
        "Tentage (with package): Void Deck Enclosure, Tables, Chairs, Fans, Lighting",
      ],
      venue: "Void Deck / Home",
      duration: "3 days (additional days: $300-$450/day)",
      options: "Paper Car (8ft) $250, Red/Black boxes, Mourning garments",
      link: "/services/full-suite",
    },
    {
      name: "Taoist Funeral Package (3 Days)",
      price: "$9,388 nett (with tentage) / $8,888 nett (without tentage)",
      description: "Comprehensive Hokkien/Teochew/Cantonese/Hakka Taoist funeral with traditional rites",
      inclusions: [
        "18ft Enclosure for Casket area (with tentage)",
        "Beige Theme Curtains, Interior Carpet Setup",
        "15 Square Tables, 10 Round Tables, 100 Chairs",
        "1 Phase Lightings, 6 fans, 2 units of Air Coolers",
        "24 Hours Transfer Service",
        "Half Glass Cremation Casket",
        "Embalming & Make-up Service, Pillow, Blanket and Pearl",
        "Booking of Cremation Slot",
        "Mobile Toilet (1 unit)",
        "Taoist Memorial Setup & Chanting Altar",
        "1 Fresh Floral Frame, 2 Fresh Table Flowers",
        "1 Photo Enlargement, 6 Passport Size Photos",
        "Mourning badges, Funeral Notices",
        "6ft Paper Mansion, Gold & Silver Mountains",
        "1 set Guardians, Hexagon Lanterns, Surname Lanterns",
        "1 unit Soul's Lantern, 1 unit paper Sedan",
        "1 Priest for encoffin rites",
        "Dialect based final Rites (5 Priests)",
        "1 Priest for funeral rites",
        "Pallbearers in Full Suit, Lantern Bearers & Music Percussionist",
        "FULL GLASS Mercedes Hearse",
        "Appreciation Gifts (40 units)",
        "45 pax Bus Transportation",
        "Floral Water Setup",
        "House Blessing, Tablet Placement Prayers",
        "Ash Collection Service",
        "49, 100 Days & Yearly Prayer Advice",
      ],
      venue: "HDB / Condo / Landed",
      duration: "3 days (5 days: $9,988 nett with tentage / $9,488 nett without tentage)",
      options: "Extended procession, musicians, additional paper offerings, catering",
      link: "/services/full-suite",
    },
    {
      name: "Christian Simple Package (3 Days)",
      price: "$4,388 nett (without tentage) / $4,888 nett (with tentage)",
      description: "Affordable Christian funeral with essential memorial service",
      inclusions: [
        "Collection of Deceased",
        "Professional Embalming & Make Up",
        "Half glass polished casket with satin lining",
        "Cremation & Ash Collection Fees",
        "Floral Arrangement (with tentage package)",
        "Photo Enlargement (Large photo with wooden frame, 6 passport size)",
        "Altar Setup",
        "Condolence Book",
        "Professional Service Team",
        "Mobile Toilet (with tentage package)",
        "Hearse – 1 Trip",
        "Air-Conditioned Bus for 45 pax – 1 unit",
        "Flower Water",
        "Tentage (with package): Void Deck Enclosure, Round Tables (10), Square Tables (15), Chairs (100), Fans (5), General Lighting",
      ],
      venue: "Void Deck / Church / Hall",
      duration: "3 days (additional days: $300-$450/day)",
      options: "Catering, Drinks & Snacks, Mourning Garments",
      link: "/services/full-suite",
    },
    {
      name: "Catholic Simple Package (3 Days)",
      price: "$5,088 nett (with tentage) - Additional day: $450",
      description: "Traditional Catholic funeral with comprehensive wake setup",
      inclusions: [
        "Collection of Deceased",
        "Professional Embalming & Make Up",
        "Hexagon Diamond Half Glass Casket",
        "Cremation & Ash Collection Fees",
        "Wake: Void Deck Enclosure, Round Table (10), Square Table (15)",
        "Chairs (100), Fans (5), General Lighting",
        "Floral Arrangement: Floral Photo Wreath, Altar Arrangement, Small Table Arrangement",
        "Photo Enlargement: 1 Large Photo with 10'X12' Wooden Frame",
        "6 Passport Size Photos",
        "Altar Setup",
        "Condolence Book",
        "White candles",
        "Professional Service Team",
        "Mobile Toilet",
        "Hearse – 2 Trip (wake area to church, church to Mandai crematorium)",
        "Bus 3 Way (wake area to church, church to Mandai crematorium, crematorium to wake area)",
        "Air-Conditioned Bus For 45 Pax – 1 Unit",
        "Flower Water",
      ],
      venue: "Void Deck / Church / Parlour",
      duration: "3 days",
      options: "Catering, Drinks & Snacks, Mourning Garments",
      link: "/services/full-suite",
    },
    {
      name: "Catholic Simple Package (3 Days) Without Tentage",
      price: "$4,888 nett - Additional day: $300",
      description: "Affordable Catholic funeral without tentage setup",
      inclusions: [
        "Collection of Deceased",
        "Professional Embalming & Make Up",
        "Hexagon Diamond Half Glass Casket / Four-sided White Half Glass Casket",
        "Cremation & Ash Collection Fees",
        "Floral Arrangement: Flora Photo Wreath, Altar Arrangement, Small Table Arrangement",
        "Photo Enlargement: 1 Large Photo with 10'X12 Wooden Frame",
        "6 Passport Size Photos",
        "Altar Setup",
        "Condolence Book",
        "White candles",
        "Professional Service Team",
        "Hearse – 2 Trip (Wake area to church, church to Mandai crematorium, crematorium to wake area)",
        "Bus 3 Way (wake area to church, church to Mandai crematorium, crematorium to wake area)",
        "Air-Conditioned Bus for 45pax – 1 unit",
        "Flower Water",
      ],
      venue: "Church / Hall",
      duration: "3 days",
      options: "Catering, Drinks & Snacks, Mourning Garments",
      link: "/services/full-suite",
    },
    {
      name: "Soka Funeral Services",
      price: "From $4,288 nett",
      description: "SGI-style simple and dignified funeral service",
      inclusions: [
        "Simple dignified setup",
        "Floral arrangements",
        "Memorial table with photo",
        "SGI leader coordination",
        "Half glass polished casket with satin lining",
        "Hearse & pallbearers",
        "Cremation coordination",
      ],
      venue: "Home / Parlour",
      duration: "1-2 days",
      options: "AV for tributes, premium florals",
      link: "/services/full-suite",
    },
    {
      name: "Freethinker Funeral Services",
      price: "From $4,288 nett",
      description: "Non-religious, modern celebration of life",
      inclusions: [
        "Minimalist or nature-themed setup",
        "Celebrant or MC coordination",
        "AV for photo/video tributes",
        "Memorial photo montage",
        "Half glass polished casket with satin lining",
        "Hearse & pallbearers",
        "Cremation coordination",
      ],
      venue: "HDB / Condo / Landed / Parlour",
      duration: "1-3 days",
      options: "Live music, premium AV, themed florals, catering",
      link: "/services/full-suite",
    },
    {
      name: "Little Angels Funeral",
      price: "$1,088 nett",
      description: "Sensitive arrangements for infants and children",
      inclusions: [
        "Compassionate infant/child arrangements",
        "Keepsake memory kit",
        "Small floral cradle arrangement",
        "Private family farewell coordination",
        "Cremation coordination",
        "Grief counselling referral",
      ],
      venue: "Private / Parlour",
      duration: "As needed",
      options: "Additional memorial keepsakes",
      link: "/contact",
    },
    {
      name: "Bespoke Funeral Services",
      price: "From $8,888 nett",
      description: "Fully customized funeral with premium elements",
      inclusions: [
        "Fully customised theme & design",
        "Premium floral arrangements",
        "Special venue coordination",
        "Live music or performers",
        "Extended processions",
        "Professional media & tribute production",
        "Half glass polished casket with satin lining",
        "Premium catering options",
      ],
      venue: "Your choice",
      duration: "Flexible",
      options: "Sky's the limit—we create your vision",
      link: "/services/full-suite",
    },
  ];

  return (
    <>
      <Header />
      
      <main className="pt-20 pb-24 md:pb-32">
        {/* Hero */}
        <section className="py-12 md:py-16 bg-grad-calm">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-ink mb-6">
              Funeral Packages & Transparent Nett Pricing
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              All packages include essential services with transparent 'nett' pricing. No hidden fees.
              Customizations available for every need.
            </p>
          </div>
        </section>

        {/* Packages Tabs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="direct" className="max-w-6xl mx-auto">
              <div className="overflow-x-auto mb-8 -mx-4 px-4">
                <TabsList className="w-max min-w-full md:w-full flex md:flex-wrap h-auto justify-start gap-2 bg-dove p-3">
                  <TabsTrigger value="direct" className="data-[state=active]:bg-gold data-[state=active]:text-paper whitespace-nowrap">Direct Cremation</TabsTrigger>
                  <TabsTrigger value="buddhist" className="data-[state=active]:bg-gold data-[state=active]:text-paper whitespace-nowrap">Buddhist</TabsTrigger>
                  <TabsTrigger value="taoist" className="data-[state=active]:bg-gold data-[state=active]:text-paper whitespace-nowrap">Taoist</TabsTrigger>
                  <TabsTrigger value="christian" className="data-[state=active]:bg-gold data-[state=active]:text-paper whitespace-nowrap">Christian</TabsTrigger>
                  <TabsTrigger value="catholic" className="data-[state=active]:bg-gold data-[state=active]:text-paper whitespace-nowrap">Catholic</TabsTrigger>
                  <TabsTrigger value="soka" className="data-[state=active]:bg-gold data-[state=active]:text-paper whitespace-nowrap">Soka</TabsTrigger>
                  <TabsTrigger value="freethinker" className="data-[state=active]:bg-gold data-[state=active]:text-paper whitespace-nowrap">Freethinker</TabsTrigger>
                  <TabsTrigger value="littleangels" className="data-[state=active]:bg-gold data-[state=active]:text-paper whitespace-nowrap">Little Angels</TabsTrigger>
                  <TabsTrigger value="bespoke" className="data-[state=active]:bg-gold data-[state=active]:text-paper whitespace-nowrap">Bespoke</TabsTrigger>
                </TabsList>
              </div>

              {/* Direct Cremation */}
              <TabsContent value="direct">
                {renderPackage(packages[0])}
              </TabsContent>

              {/* Buddhist */}
              <TabsContent value="buddhist">
                {renderPackage(packages[1])}
              </TabsContent>

              {/* Taoist */}
              <TabsContent value="taoist">
                {renderPackage(packages[2])}
              </TabsContent>

              {/* Christian */}
              <TabsContent value="christian">
                {renderPackage(packages[3])}
              </TabsContent>

              {/* Catholic */}
              <TabsContent value="catholic" className="space-y-8">
                {renderPackage(packages[4])}
                {renderPackage(packages[5])}
              </TabsContent>

              {/* Soka */}
              <TabsContent value="soka">
                {renderPackage(packages[6])}
              </TabsContent>

              {/* Freethinker */}
              <TabsContent value="freethinker">
                {renderPackage(packages[7])}
              </TabsContent>

              {/* Little Angels */}
              <TabsContent value="littleangels">
                {renderPackage(packages[8])}
              </TabsContent>

              {/* Bespoke */}
              <TabsContent value="bespoke">
                {renderPackage(packages[9])}
              </TabsContent>
            </Tabs>

            {/* Notes */}
            <div className="mt-12 max-w-4xl mx-auto bg-dove p-6 rounded-xl">
              <h3 className="text-lg font-heading font-semibold text-ink mb-3">
                Important Notes:
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• All prices are nett. Venue/parlour fees, officiant honorariums, and optional upgrades may vary.</li>
                <li>• Government fees (cremation/burial permits) are additional and will be advised upfront.</li>
                <li>• We adhere to Singapore NEA regulations and PDPA guidelines.</li>
                <li>• Customization available for all packages—speak with our team.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Repatriation Callout */}
        <section className="py-12 bg-deep text-deep-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              International Repatriation Services
            </h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
              Need to send your loved one to their home country or bring them to Singapore? 
              We handle all international arrangements.
            </p>
            <a
              href="/repatriation"
              className="inline-block px-6 py-3 bg-gold text-paper rounded-full font-semibold hover:-translate-y-0.5 transition-calm shadow-gentle"
            >
              Learn About Repatriation
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <MobileBottomBar />
    </>
  );
};

export default Packages;
