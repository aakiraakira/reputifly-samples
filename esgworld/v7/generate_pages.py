import re
import os

base_dir = r"c:\Users\anony\Downloads\esgworld-sample"
index_file = os.path.join(base_dir, "index.html")

with open(index_file, "r", encoding="utf-8") as f:
    content = f.read()

# Split the content into top, main, and bottom
top_match = re.search(r'(.*?<main>)', content, re.DOTALL)
bottom_match = re.search(r'(</main>.*)', content, re.DOTALL)

top_template = top_match.group(1)
bottom_template = bottom_match.group(1)

# Additional CSS for sub-pages
additional_css = """
        /* ==========================================================================
           SUB-PAGE SPECIFIC STYLES
           ========================================================================== */
        .page-hero {
            padding: 12rem 0 6rem;
            text-align: center;
            color: var(--text-light);
            background-color: var(--primary);
            background-blend-mode: multiply;
            background-size: cover;
            background-position: center;
            min-height: 50vh;
            display: flex;
            align-items: center;
        }
        .page-hero h1 { color: var(--accent); font-size: 3.5rem; margin-bottom: 1rem; }
        .page-hero p { font-size: 1.25rem; max-width: 800px; margin: 0 auto; color: var(--bg-white); }
        
        .values-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; margin-top: 3rem; }
        .value-card { background: var(--bg-light); padding: 3rem 2rem; border-radius: var(--radius-main); text-align: center; border: 1px solid rgba(199, 158, 88, 0.2); }
        .value-icon { font-size: 3rem; color: var(--accent); margin-bottom: 1.5rem; }
        
        .team-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2.5rem; margin-top: 3rem; }
        .team-card { text-align: center; }
        .team-card img { width: 100%; height: 350px; object-fit: cover; border-radius: var(--radius-main); margin-bottom: 1.5rem; box-shadow: var(--shadow-main); border: 2px solid transparent; transition: var(--transition); }
        .team-card:hover img { border-color: var(--accent); transform: translateY(-5px); }
        .team-card h3 { margin-bottom: 0.5rem; }
        .team-card p { color: var(--accent); font-weight: 500; font-size: 1.1rem; margin-bottom: 0.5rem;}
        
        .service-detail { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; padding: 4rem 0; border-bottom: 1px solid rgba(199, 158, 88, 0.2); }
        .service-detail:last-child { border-bottom: none; }
        .service-detail:nth-child(even) { direction: rtl; }
        .service-detail:nth-child(even) > * { direction: ltr; }
        .service-detail img { border-radius: var(--radius-main); box-shadow: var(--shadow-main); border: 4px solid var(--accent); width: 100%; }
        .service-content h3 { font-size: 2rem; margin-bottom: 1.5rem; }
        .service-list { list-style: none; margin-top: 1.5rem; }
        .service-list li { margin-bottom: 1rem; padding-left: 1.5rem; position: relative; }
        .service-list li::before { content: '\\f00c'; font-family: 'Font Awesome 6 Free'; font-weight: 900; color: var(--accent); position: absolute; left: 0; top: 2px; }
        
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; margin-top: 2rem; }
        .contact-form { background: var(--bg-light); padding: 3rem; border-radius: var(--radius-main); box-shadow: var(--shadow-main); border: 1px solid rgba(199, 158, 88, 0.2); }
        .form-group { margin-bottom: 1.5rem; }
        .form-group label { display: block; margin-bottom: 0.5rem; font-weight: 600; color: var(--text-dark); }
        .form-control { width: 100%; padding: 1rem; border: 1px solid #ddd; border-radius: 8px; font-family: 'Inter', sans-serif; transition: var(--transition); background: var(--bg-white); }
        .form-control:focus { outline: none; border-color: var(--accent); box-shadow: 0 0 0 3px rgba(199, 158, 88, 0.2); }
        textarea.form-control { resize: vertical; min-height: 150px; }
        
        .contact-sidebar { display: flex; flex-direction: column; gap: 2rem; }
        .contact-info-card { background: var(--primary); color: var(--bg-white); padding: 3rem; border-radius: var(--radius-main); box-shadow: var(--shadow-main); border-bottom: 5px solid var(--accent); }
        .contact-info-card h3 { color: var(--accent); margin-bottom: 2rem; }
        .contact-info-item { display: flex; gap: 1.5rem; margin-bottom: 2rem; align-items: flex-start; }
        .contact-info-item:last-child { margin-bottom: 0; }
        .contact-info-item i { color: var(--accent); font-size: 2rem; background: rgba(199, 158, 88, 0.1); padding: 1rem; border-radius: 50%; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; }
        .contact-info-text h4 { color: var(--bg-white); margin-bottom: 0.5rem; font-family: 'Inter', sans-serif; font-size: 1.1rem; }
        .contact-info-text p { color: rgba(255,255,255,0.8); margin: 0; }
        
        .map-container { border-radius: var(--radius-main); overflow: hidden; height: 350px; box-shadow: var(--shadow-main); border: 1px solid rgba(199, 158, 88, 0.2); }
        .map-container iframe { width: 100%; height: 100%; border: none; }
        
        .story-section { padding: 6rem 0; }
        .story-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
        .story-img { border-radius: var(--radius-main); border: 4px solid var(--accent); box-shadow: var(--shadow-main); }
        
        @media (max-width: 992px) {
            .story-grid, .service-detail, .contact-grid { grid-template-columns: 1fr; }
            .service-detail:nth-child(even) { direction: ltr; }
            .service-detail:nth-child(even) > * { direction: ltr; }
            .page-hero h1 { font-size: 2.8rem; }
        }
    </style>
"""

# Inject CSS into head
top_template = top_template.replace('</style>', additional_css + '\n</head>')

# Define pages content
pages = {
    "about.html": {
        "title": "About Us | ESG World",
        "content": r'''
        <section class="page-hero" style="background-image: url('https://images.unsplash.com/photo-1497436072909-60f360e1d4b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');">
            <div class="container">
                <h1>About ESG World</h1>
                <p>Learn about our mission, our values, and the passionate team driving sustainable change across the globe.</p>
            </div>
        </section>

        <section class="story-section bg-white">
            <div class="container story-grid">
                <div>
                    <h2>Our Story & Mission</h2>
                    <p>ESG World was founded with a singular, resolute vision: to empower organizations worldwide to seamlessly integrate Environmental, Social, and Governance (ESG) practices into their core operations.</p>
                    <p>Our journey began when a team of sustainability experts recognized the growing gap between corporate ambition and actionable outcomes. Today, we stand as a dedicated partner to businesses, providing tailored solutions that not only achieve compliance but generate measurable, positive impact on our planet and its communities.</p>
                    <p><strong>Our Mission:</strong> To be the leading catalyst for sustainable corporate transformation globally, delivering innovative frameworks, specialized training, and practical solutions that shape a better tomorrow.</p>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Sustainable Future" class="story-img">
                </div>
            </div>
        </section>

        <section class="section-padding" style="background-color: var(--bg-light);">
            <div class="container">
                <div class="section-header">
                    <h2>Our Values & Approach</h2>
                    <p>The guiding principles that shape how we deliver exceptional solutions.</p>
                </div>
                <div class="values-grid">
                    <div class="value-card">
                        <i class="fa-solid fa-leaf value-icon"></i>
                        <h3>Sustainability First</h3>
                        <p>We prioritize ecological balance and long-term vitality in every strategy we create or recommend.</p>
                    </div>
                    <div class="value-card">
                        <i class="fa-solid fa-handshake-angle value-icon"></i>
                        <h3>Collaborative Partnership</h3>
                        <p>We work alongside your team, embedding ourselves in your culture to enact meaningful, lasting change.</p>
                    </div>
                    <div class="value-card">
                        <i class="fa-solid fa-chart-line value-icon"></i>
                        <h3>Measurable Impact</h3>
                        <p>We focus on data-driven frameworks that translate subjective goals into quantifiable, reportable progress.</p>
                    </div>
                    <div class="value-card">
                        <i class="fa-solid fa-scale-balanced value-icon"></i>
                        <h3>Ethical Integrity</h3>
                        <p>Transparency, accountability, and ethical governance stand at the core of our daily operations and client advice.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="section-padding">
            <div class="container">
                <div class="section-header">
                    <h2>Meet Our Team</h2>
                    <p>The specialists and visionaries behind ESG World.</p>
                </div>
                <div class="team-grid">
                    <div class="team-card">
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Jane Doe">
                        <h3>Jane Doe</h3>
                        <p>Chief Sustainability Officer</p>
                        <span>Former environmental scientist with 15+ years guiding corporate sustainability initiatives.</span>
                    </div>
                    <div class="team-card">
                        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="John Smith">
                        <h3>John Smith</h3>
                        <p>Head of ESG Strategy</p>
                        <span>Governance expert specializing in framework compliance and ethical corporate restructuring.</span>
                    </div>
                    <div class="team-card">
                        <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Elena Gomez">
                        <h3>Elena Gomez</h3>
                        <p>Lead Environmental Consultant</p>
                        <span>Spearheads our waste management, circular economy, and transport infrastructure projects.</span>
                    </div>
                </div>
            </div>
        </section>

        <section class="section-padding" style="background-color: var(--primary); color: var(--bg-white);">
            <div class="container" style="text-align: center;">
                <h2 style="color: var(--accent);">Why Choose Us?</h2>
                <p style="max-width: 800px; margin: 1rem auto 3rem;">We do not just provide generic advice; we deliver specialized, actionable solutions tailored to the distinct operational realities of your industry.</p>
                <div class="values-grid" style="margin-top: 0;">
                    <div class="value-card" style="background: transparent; border-color: var(--accent);">
                        <h3 style="color: var(--accent);">Tailored Solutions</h3>
                        <p style="color: var(--bg-white);">Customized roadmaps designed explicitly for your unique business goals.</p>
                    </div>
                    <div class="value-card" style="background: transparent; border-color: var(--accent);">
                        <h3 style="color: var(--accent);">Deep Expertise</h3>
                        <p style="color: var(--bg-white);">A diverse team of specialists covering all pillars of the ESG framework.</p>
                    </div>
                    <div class="value-card" style="background: transparent; border-color: var(--accent);">
                        <h3 style="color: var(--accent);">Proven Track Record</h3>
                        <p style="color: var(--bg-white);">A portfolio of success stories demonstrating significant ROI on sustainability.</p>
                    </div>
                </div>
            </div>
        </section>
        '''
    },
    "services.html": {
        "title": "Services | ESG World",
        "content": r'''
        <section class="page-hero" style="background-image: url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');">
            <div class="container">
                <h1>Our Expert Services</h1>
                <p>Comprehensive environmental, social, and governance solutions specifically tailored to elevate your business's impact and compliance.</p>
            </div>
        </section>

        <section class="section-padding bg-white">
            <div class="container">
                <div class="section-header">
                    <h2>Methodology & Presentation</h2>
                    <p>How we approach and solve complex sustainability challenges.</p>
                </div>
                <div style="text-align: center; max-width: 900px; margin: 0 auto 4rem;">
                    <p>We utilize engaging infographics, detailed analytics, and powerful storytelling to clearly present our services and their ultimate impact. We ensure stakeholders at all levels understand the 'why' and the 'how' behind every sustainability initiative.</p>
                </div>

                <div class="service-detail" id="training">
                    <div class="service-content">
                        <h3>ESG Training</h3>
                        <p>We provide comprehensive ESG awareness and sustainability training programs designed to empower your workforce. Building an internal culture of sustainability is key to lasting transformation.</p>
                        <ul class="service-list">
                            <li>Executive ESG overview and compliance training</li>
                            <li>Department-level operational sustainability workshops</li>
                            <li>Annual ESG reporting training</li>
                        </ul>
                    </div>
                    <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="ESG Training">
                </div>

                <div class="service-detail" id="education">
                    <div class="service-content">
                        <h3>Education Initiatives</h3>
                        <p>We believe in shaping the future by educating the younger generations. Our specialized educational programs cater to childcare centres, schools, and educational institutions, instilling environmental responsibility early on.</p>
                        <ul class="service-list">
                            <li>Interactive curriculum development</li>
                            <li>School-wide recycling and energy programs</li>
                            <li>Interactive eco-workshops for students</li>
                        </ul>
                    </div>
                    <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Education Initiatives">
                </div>

                <div class="service-detail" id="waste">
                    <div class="service-content">
                        <h3>Packaging Waste Management</h3>
                        <p>Tackle your supply chain's physical footprint with our advanced packaging strategies. We outline solutions for waste reduction, effective recycling, and responsible disposal methodologies.</p>
                        <ul class="service-list">
                            <li>Circular economy packaging redesign</li>
                            <li>Waste audit and footprint analysis</li>
                            <li>Zero-to-landfill operational planning</li>
                        </ul>
                    </div>
                    <img src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Waste Management">
                </div>

                <div class="service-detail" id="transport">
                    <div class="service-content">
                        <h3>Transport & Logistics</h3>
                        <p>Logistics often form the bulk of a company's carbon emissions. We deliver offerings related to sustainable transportation solutions, fleet optimization, and low-impact distribution.</p>
                        <ul class="service-list">
                            <li>Fleet electrification strategies</li>
                            <li>Supply chain route optimization</li>
                            <li>Carbon offset program integration</li>
                        </ul>
                    </div>
                    <img src="https://images.unsplash.com/photo-1586528116311-ad8ed7c508b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Transport and Logistics">
                </div>

                <div class="service-detail" id="building">
                    <div class="service-content">
                        <h3>Building & Maintenance</h3>
                        <p>Infrastructure defines your long-term environmental commitment. We specialize in sustainable building practices, eco-friendly design, development, and ongoing green maintenance services.</p>
                        <ul class="service-list">
                            <li>LEED & Green Mark certification consulting</li>
                            <li>Energy-efficient retrofitting</li>
                            <li>Sustainable facility management and maintenance</li>
                        </ul>
                    </div>
                    <img src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Building and Maintenance">
                </div>

            </div>
        </section>
        '''
    },
    "contact.html": {
        "title": "Contact Us | ESG World",
        "content": r'''
        <section class="page-hero" style="background-image: url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');">
            <div class="container">
                <h1>Contact Us</h1>
                <p>Ready to integrate sustainable practices into your business model? Get in touch with our experts today.</p>
            </div>
        </section>

        <section class="section-padding bg-white">
            <div class="container">
                <div class="contact-grid">
                    
                    <!-- Contact Form -->
                    <div class="contact-form-wrapper">
                        <div class="section-header" style="text-align: left; margin-bottom: 2rem;">
                            <h2>Send Us a Message</h2>
                            <p>Fill out the form below and an ESG specialist will respond promptly.</p>
                        </div>
                        <form class="contact-form" onsubmit="event.preventDefault(); alert('Thank you for reaching out! We will contact you soon.');">
                            <div class="form-group">
                                <label for="name">Full Name</label>
                                <input type="text" id="name" class="form-control" placeholder="John Doe" required>
                            </div>
                            <div class="form-group">
                                <label for="email">Email Address</label>
                                <input type="email" id="email" class="form-control" placeholder="john@example.com" required>
                            </div>
                            <div class="form-group">
                                <label for="phone">Phone Number</label>
                                <input type="tel" id="phone" class="form-control" placeholder="+1 (555) 000-0000">
                            </div>
                            <div class="form-group">
                                <label for="subject">Subject / Inquiry Type</label>
                                <select id="subject" class="form-control" required style="appearance: none; background: var(--bg-white) url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M7 10l5 5 5-5z\"/></svg>') no-repeat right 10px center;">
                                    <option value="" disabled selected>Select an option...</option>
                                    <option value="Assessment">Free ESG Assessment</option>
                                    <option value="Services">Service Inquiry</option>
                                    <option value="Partnership">Partnership</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="message">Message</label>
                                <textarea id="message" class="form-control" placeholder="How can we help you achieve your sustainability goals?" required></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary" style="width: 100%;">Submit Inquiry</button>
                        </form>
                    </div>

                    <!-- Contact Info Sidebar -->
                    <div class="contact-sidebar">
                        <div class="contact-info-card">
                            <h3>Contact Information</h3>
                            
                            <div class="contact-info-item">
                                <i class="fa-solid fa-location-dot"></i>
                                <div class="contact-info-text">
                                    <h4>Corporate Office</h4>
                                    <p>123 Eco Plaza, Green District<br>Innovation City, IN 40001</p>
                                </div>
                            </div>
                            
                            <div class="contact-info-item">
                                <i class="fa-solid fa-phone"></i>
                                <div class="contact-info-text">
                                    <h4>Phone Numbers</h4>
                                    <p>Main: +1 (800) 123-4567<br>Support: +1 (800) 123-4568</p>
                                </div>
                            </div>
                            
                            <div class="contact-info-item">
                                <i class="fa-solid fa-envelope"></i>
                                <div class="contact-info-text">
                                    <h4>Email Address</h4>
                                    <p>info@esgworlds.com<br>consults@esgworlds.com</p>
                                </div>
                            </div>

                            <div class="contact-info-item">
                                <i class="fa-solid fa-clock"></i>
                                <div class="contact-info-text">
                                    <h4>Business Hours</h4>
                                    <p>Monday - Friday: 9:00 AM - 6:00 PM<br>Saturday & Sunday: Closed</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="map-container">
                            <!-- Placeholder Map for ESG World using Google Maps embed -->
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        '''
    }
}

for filename, data in pages.items():
    # Replace title
    page_top = re.sub(r'<title>.*?</title>', f'<title>{data["title"]}</title>', top_template)
    
    # Optional active link styling - although the original didn't have explicit active classes,
    # it's nice to have, but for safety to match the original, we will leave as is,
    # or just use the generated top.

    full_html = page_top + data["content"] + bottom_template
    
    out_path = os.path.join(base_dir, filename)
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(full_html)
        
print("Pages generated successfully.")
