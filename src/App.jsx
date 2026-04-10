import { useEffect, useState, useRef } from "react";
import "./styles.css";

const highlights = [
  "Mega Inter-School Fest",
  "Competitions & cultural performances",
  "10 October 2026",
  "Events: film, music, design, art & more",
];

const events = [
  {
    title: "Quantum Quest",
    category: "Innovation",
    blurb: "Rapid-fire science, strategy, and pressure-tested answers on a glowing central stage.",
    format: "Science quiz showdown",
    duration: "45 mins",
    audience: "Teams of 3",
  },
  {
    title: "Trigger Tactics",
    category: "Gaming",
    blurb: "Fast-paced tactical gameplay where team coordination dictates the victor.",
    format: "Esports Tournament",
    duration: "120 mins",
    audience: "Teams of 4",
  },
  {
    title: "Cineaura",
    category: "Film",
    blurb: "Concept, camera, pacing, and emotion come together in a cinematic sprint challenge.",
    format: "Short film challenge",
    duration: "180 mins",
    audience: "Teams of 5",
  },
  {
    title: "Sinfonia",
    category: "Performance",
    blurb: "Solo, ensemble, and instrumental acts staged with theatrical lighting and layered sound.",
    format: "Music performance finals",
    duration: "60 mins",
    audience: "Solo and group entries",
  },
  {
    title: "The Final Clue",
    category: "Mystery",
    blurb: "A live clue trail with puzzles, movement, tension, and a campus-wide reveal.",
    format: "Mystery hunt",
    duration: "75 mins",
    audience: "Teams of 4",
  },
  {
    title: "App in a Snap",
    category: "Design",
    blurb: "A UX sprint where teams translate ideas into interfaces, flows, and product logic.",
    format: "Design sprint",
    duration: "90 mins",
    audience: "Teams of 2",
  },
  {
    title: "Ad-E-Motion",
    category: "Marketing",
    blurb: "Pitch, market, and sell quirky concepts with high emotional appeal.",
    format: "Ad creation & pitch",
    duration: "60 mins",
    audience: "Teams of 3",
  },
  {
    title: "Blind Strokes",
    category: "Art",
    blurb: "A tactile art format driven by instinct, constraints, and imaginative execution.",
    format: "Expressive arts challenge",
    duration: "60 mins",
    audience: "Individual entries",
  },
  {
    title: "Humour Tales",
    category: "Performance",
    blurb: "Stand-up poetry and humor narratives that captivate and spark joy.",
    format: "Stand-up / Poetry",
    duration: "45 mins",
    audience: "Individual entries",
  },
  {
    title: "New Reckoning",
    category: "Community",
    blurb: "A fresh debate format focusing on futuristic societal topics.",
    format: "Debate & Discourse",
    duration: "90 mins",
    audience: "Teams of 2",
  },
];

const timelineMoments = [
  {
    label: "Phase 01",
    time: "08:30",
    title: "Arrival and ambient build-up",
    text: "Guest check-in, ambient visuals, moving lights, and a slow reveal of activity zones.",
  },
  {
    label: "Phase 02",
    time: "10:00",
    title: "Opening sequence",
    text: "A signature opening setting tone, scale, and excitement for the day.",
  },
  {
    label: "Phase 03",
    time: "12:15",
    title: "Competitive peak",
    text: "Innovation, film, gaming, art, and music move in parallel across zones.",
  },
  {
    label: "Phase 04",
    time: "16:30",
    title: "Live showcase window",
    text: "Selected acts, finalist presentations, and spotlight moments turn contest into festival mode.",
  },
  {
    label: "Phase 05",
    time: "18:30",
    title: "Awards and afterglow",
    text: "Celebrating winners, honoring participation, and landing the edition with emotion.",
  },
];

const voices = [
  {
    quote: "Let your hard work and creativity shine at Talentia Mega Event 2025! Wishing all students a fun, inspiring, and memorable 1st November 2025. Let's create moments that shine forever!",
    name: "Mr. Preetam Singh",
    role: "Event Coordinator",
    image: "https://i.pravatar.cc/300?u=preetam",
  },
  {
    quote: "Excited to see our students' talent shine at Talentia Mega Event 2025! Wishing everyone a day full of creativity, energy, and joy on 1st November 2025. Make it a celebration to remember!",
    name: "Ms. Raji Andrews",
    role: "Event Coordinator",
    image: "https://i.pravatar.cc/300?u=raji",
  },
  {
    quote: "Wishing every participant of Talentia Mega 2025 great success! May your talent, dedication, and hard work make 1st November 2025 a day filled with pride, joy, and unforgettable memories.",
    name: "Mr. Manoj Singh",
    role: "Teacher",
    image: "https://i.pravatar.cc/300?u=manoj",
  },
];

const principalData = {
  quote: "It is with great pleasure and gratitude that I address you from the Principal's Desk. As we begin a new academic year, I reflect on St. Joseph's School, Greater Noida's remarkable journey of nearly 24 years serving the community.",
  name: "Fr. Jipson Palatty",
  role: "Principal, St. Joseph's School",
  image: "https://i.pravatar.cc/300?u=principal",
};

const galleryData = [
  { title: "School Tour", image: "https://picsum.photos/seed/schooltour/800/600" },
  { title: "Past Events", image: "https://picsum.photos/seed/pastevents/800/600" },
];

const sponsorsData = [
  {
    name: "Shri Bala Ji Uniform",
    tagline: "Uniform and Stationers",
    address: "Shop No. 17, Gulmohar Plaza, Beta 1",
    logo: "https://placehold.co/120x60/1a1a28/6600ff?text=SBJ+Uniform&font=outfit",
    image: "https://picsum.photos/seed/sbjuniform/600/300",
    accent: "#6600ff",
    featured: true,
  },
  {
    name: "Shri Bala Ji Cyber Cafe",
    tagline: "Tour & Travels",
    address: "S. No. 17, Gulmohar Plaza, Beta 1",
    logo: "https://placehold.co/120x60/1a1a28/ff007f?text=SBJ+Cyber&font=outfit",
    image: "https://picsum.photos/seed/sbjcyber/600/300",
    accent: "#ff007f",
    featured: true,
  },
  {
    name: "Ekaya",
    tagline: "Unique Butterfly",
    address: "Shop No. F-9, Beta Plaza, Beta 1",
    logo: "https://placehold.co/120x60/1a1a28/00e5ff?text=Ekaya&font=outfit",
    image: "https://picsum.photos/seed/ekaya/600/300",
    accent: "#00e5ff",
    featured: false,
  },
  {
    name: "Joy Uniforms",
    tagline: "Your One Stop Uniform Store",
    address: "F-1,2,3 1st Floor, CM Market, Rampur",
    logo: "https://placehold.co/120x60/1a1a28/ffc900?text=Joy+Uni&font=outfit",
    image: "https://picsum.photos/seed/joyuni/600/300",
    accent: "#ffc900",
    featured: false,
  },
  {
    name: "Gourmet Spice",
    tagline: "Fine Boutique Catering",
    address: "New Delhi",
    logo: "https://placehold.co/120x60/1a1a28/ff8c00?text=G+Spice&font=outfit",
    image: "https://picsum.photos/seed/gourmetspice/600/300",
    accent: "#ff8c00",
    featured: false,
  },
];

const teamMembers = [
  { name: "Lakshya", role: "Web Designer", image: "https://i.pravatar.cc/400?u=lakshya", instagram: "#" },
  { name: "Lakshya", role: "Web Developer", image: "https://i.pravatar.cc/400?u=lakshya2", instagram: "#" },
  { name: "Lakshya", role: "Web Developer", image: "https://i.pravatar.cc/400?u=lakshya3", instagram: "#" },
  { name: "Lakshya", role: "Web Developer", image: "https://i.pravatar.cc/400?u=lakshya4", instagram: "#" },
];

const splineBackgroundSceneUrl = "https://prod.spline.design/J4Vsx8Y92cbaiito/scene.splinecode";



function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.05,
      rootMargin: "0px 0px -50px 0px" // Start revealing slightly before they enter the viewport
    });

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function Countdown({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="countdown-grid" data-reveal>
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div className="countdown-card" key={unit}>
          <div className="countdown-ring">
            <strong>{String(value).padStart(2, '0')}</strong>
          </div>
          <span className="hero-ticket-status">{unit}</span>
        </div>
      ))}
    </div>
  );
}

function useTimelineScroll() {
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const timeline = document.querySelector('.visual-timeline');
          if (!timeline) {
            ticking = false;
            return;
          }

          const rect = timeline.getBoundingClientRect();
          let pixelsFilled = (window.innerHeight / 2) - rect.top;
          let fillPercentage = Math.max(0, Math.min(1, pixelsFilled / rect.height));

          timeline.style.setProperty('--scroll-fill', `${fillPercentage * 100}%`);

          const nodes = timeline.querySelectorAll('.timeline-node');
          nodes.forEach(node => {
            const triggerPoint = node.offsetTop + 40;
            if (pixelsFilled >= triggerPoint) {
              node.classList.add('active');
            } else {
              node.classList.remove('active');
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}

function useTilt() {
  useEffect(() => {
    const cards = document.querySelectorAll('.tilt-card');

    const handleMouseMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Tilt away from the mouse
      const rotateX = ((y - centerY) / centerY) * -3;
      const rotateY = ((x - centerX) / centerX) * 3;

      card.style.transform = `perspective(1200px) scale3d(1.03, 1.03, 1.03) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      card.style.transition = 'none';
    };

    const handleMouseLeave = (e) => {
      const card = e.currentTarget;
      card.style.transform = `perspective(1200px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg)`;
      card.style.transition = 'transform 0.5s ease';
    };

    cards.forEach(card => {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
      card.style.transition = 'transform 0.5s ease';
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useReveal();
  useTilt();
  useTimelineScroll();


  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          document.documentElement.style.setProperty("--scroll-progress", `${Math.min(scrolled / 1200, 1)}`);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app-shell">
      <div className="scroll-indicator" />
      <div className="ambient-orb ambient-orb-a" />
      <div className="ambient-orb ambient-orb-b" />

      <header className="site-header">
        <div className={`header-shell ${menuOpen ? "menu-open" : ""}`}>
          <a className="brand" href="#top">
            <span className="brand-mark">T</span>
            <div>
              <strong>Talentia 2.0</strong>
              <span>Annual edition</span>
            </div>
          </a>

          <button className={`hamburger ${menuOpen ? "is-active" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span /><span /><span />
          </button>

          <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#events" onClick={() => setMenuOpen(false)}>Events</a>
            <a href="#timeline" onClick={() => setMenuOpen(false)}>Time Line</a>
            <a href="#mentors" onClick={() => setMenuOpen(false)}>Mentors</a>
          </nav>

          <div className="header-actions">
            <a className="nav-cta" href="#contact">Register Now</a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-spotlight" />

          <div className="hero-copy" data-reveal>
            <p className="eyebrow">Mega Inter-School Fest</p>
            <h1>
              <span>Talentia 2.0</span>
              <span>10 October 2026</span>
              <span>St. Joseph School</span>
            </h1>
            <p className="hero-text">
              The Mega Inter-School Fest brings together students from across schools to celebrate talent, creativity, and excellence. With a mix of competitions, cultural performances, and interactive workshops, it is a platform for young minds to showcase their skills, collaborate, and shine.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#events">Explore Events</a>
              <a className="button button-secondary" href="#timeline">View Time Line</a>
            </div>

            <div className="hero-highlights">
              {highlights.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="hero-type-ribbon">
              <Countdown targetDate="2026-10-10T00:00:00" />
            </div>
          </div>

          {window.innerWidth > 768 && (
            <div className="hero-visual" data-reveal>
              <spline-viewer
                className="hero-spline-viewer"
                url={splineBackgroundSceneUrl}
                events-target="global"
                loading-anim="true"
              />
            </div>
          )}
        </section>

        <section className="marquee-band">
          <div className="marquee-track">
            {Array.from({ length: 2 }).map((_, index) => (
              <div className="marquee-group" key={index}>
                <span>Performance</span>
                <span>Film</span>
                <span>Innovation</span>
                <span>Visual Arts</span>
                <span>Design</span>
                <span>Gaming</span>
                <span>Community</span>
              </div>
            ))}
          </div>
        </section>

        <section className="about-section full-page-about" id="about">
          <div className="about-split">

            <div className="about-image-wrapper" data-reveal>
              <img src="https://picsum.photos/800/1000" alt="SJS Talentia Random Stage Demo" className="about-photo" />
            </div>

            <div className="about-text-content">
              <div className="section-heading about-heading" data-reveal style={{ transitionDelay: '100ms' }}>
                <p className="eyebrow">The Mega Inter-School Fest</p>
                <h2>About SJS Talentia 2025</h2>
              </div>

              <div className="about-body">
                <p data-reveal style={{ transitionDelay: '200ms' }}>
                  <strong>SJS TALENTIA 2025</strong> brings together students from across schools to celebrate talent, creativity, and excellence. With a mix of competitions, cultural performances, and interactive workshops, it is a platform for young minds to showcase their skills, collaborate, and shine in a spirit of healthy competition and camaraderie.
                </p>

                <ul className="about-list" data-reveal style={{ transitionDelay: '300ms' }}>
                  <li><strong>Planning & Organization:</strong> We handle every little detail so everything runs smooth and participants get a seamless experience.</li>
                  <li><strong>Support & Care:</strong> We ensure every participant feels welcomed, guided, and cared for throughout the fest.</li>
                  <li><strong>Fun Experience:</strong> We design fun, creative experiences to keep students excited and immersed.</li>
                  <li><strong>Creating Competitions:</strong> We host 10 diverse events where students can showcase their talents, compete, and be celebrated.</li>
                </ul>

                <a className="button button-primary" data-reveal href="#events" style={{ marginTop: '2.5rem', transitionDelay: '400ms' }}>
                  Explore Events
                </a>
              </div>
            </div>

          </div>
        </section>

        <section className="teaser-section" id="teaser" style={{ paddingTop: '5.5rem' }}>
          <div className="section-heading teaser-heading" data-reveal>
            <p className="eyebrow">Sneak Peek</p>
            <h2>Event Teaser</h2>
          </div>

          <div className="teaser-container" data-reveal style={{ transitionDelay: '100ms' }}>
            <div className="teaser-rgb-border">
              <div className="teaser-content">
                <h3>Coming Soon</h3>
                <p>The official cinematic teaser is currently in post-production. Stay tuned for the ultimate reveal and get ready for SJS Talentia 2025.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="events-section" id="events" style={{ paddingTop: '5.5rem' }}>
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Signature events</p>
            <h2>Selectable event capsules with a premium event hierarchy.</h2>
          </div>

          <div className="event-grid">
            {events.map((event, index) => (
              <div className="event-card glass-card tilt-card" key={event.title} data-reveal style={{ transitionDelay: `${index * 50}ms` }}>
                <div className="event-card-image">
                  <img src={`https://picsum.photos/seed/${event.title.replace(/\s+/g, '')}/600/400`} alt={event.title} loading="lazy" />
                </div>
                <div className="event-card-content">
                  <div className="event-card-header">
                    <span>{event.category}</span>
                  </div>
                  <h3>{event.title}</h3>
                  <p>{event.blurb}</p>
                  <div className="event-card-facts">
                    <div>
                      <strong>{event.format}</strong>
                      <span>{event.duration} • {event.audience}</span>
                    </div>
                    <a href={`https://talentia.live/events/${event.title.toLowerCase().replace(/[^a-z0-9]/g, '')}.html`} target="_blank" rel="noreferrer" className="know-more-link">
                      Know more <span>→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="gallery-section" id="gallery">
          <div className="section-heading" data-reveal>
            <h2>Gallery</h2>
          </div>
          <div className="gallery-grid">
            {galleryData.map((item, index) => (
              <a href="#" className="gallery-card glass-card tilt-card" key={item.title} data-reveal style={{ transitionDelay: `${index * 150}ms` }}>
                <img src={item.image} alt={item.title} className="gallery-img" loading="lazy" />
                <div className="gallery-content">
                  <h3>{item.title}</h3>
                  <span className="gallery-link-icon">↗</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="timeline-section" id="timeline">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Festival Time Line</p>
            <h2>A fluid day-flow animated experience.</h2>
          </div>

          <div className="visual-timeline" data-reveal>
            {timelineMoments.map((moment, index) => (
              <div className="timeline-node" key={moment.label}>
                <div className="timeline-marker">
                  <div className="timeline-dot"></div>
                </div>
                <div className="timeline-content glass-card tilt-card">
                  <div className="timeline-header">
                    <span className="timeline-time">{moment.time}</span>
                    <span className="timeline-phase">{moment.label}</span>
                  </div>
                  <h3>{moment.title}</h3>
                  <p>{moment.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="principal-section" id="principal">
          <div className="section-heading" data-reveal>
            <h2>Principal's Desk</h2>
          </div>

          <div className="principal-card-container" data-reveal>
            <div className="principal-card glass-card tilt-card">
              <div className="mentor-quote-icon principal-quote-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 11L8.5 14H10V18H6V14L8 9H10V11ZM18 11L16.5 14H18V18H14V14L16 9H18V11Z" fill="#8a8a99" />
                </svg>
              </div>
              <p className="principal-quote">{principalData.quote}</p>
              <div className="principal-info">
                <div className="mentor-meta">
                  <strong>{principalData.name}</strong>
                  <span>{principalData.role}</span>
                </div>
                <div className="principal-photo-wrapper">
                  <img src={principalData.image} alt={principalData.name} className="principal-photo" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="voices-section" id="mentors">
          <div className="section-heading" data-reveal>
            <h2>Words from our Mentors</h2>
          </div>

          <div className="mentor-grid">
            {voices.map((voice, index) => (
              <div className="mentor-card glass-card tilt-card" key={voice.name} data-reveal style={{ transitionDelay: `${index * 150}ms` }}>
                <div className="mentor-quote-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 11L8.5 14H10V18H6V14L8 9H10V11ZM18 11L16.5 14H18V18H14V14L16 9H18V11Z" fill="#8a8a99" />
                  </svg>
                </div>
                <p className="mentor-quote">{voice.quote}</p>
                <div className="mentor-info">
                  <div className="mentor-meta">
                    <strong>{voice.name}</strong>
                    <span>{voice.role}</span>
                  </div>
                  <div className="mentor-photo-wrapper">
                    <img src={voice.image} alt={voice.name} className="mentor-photo" loading="lazy" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="sponsors-section" id="sponsors">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Powered by our Partners</p>
            <h2>Sponsors</h2>
          </div>
          <div className="sponsors-grid">
            {sponsorsData.filter(s => s.featured).map((sponsor, index) => (
              <div
                className="sponsor-card sponsor-card--featured"
                key={sponsor.name}
                data-reveal
                style={{ transitionDelay: `${index * 100}ms`, '--sponsor-accent': sponsor.accent }}
              >
                <div className="sponsor-image-area">
                  <img src={sponsor.image} alt={sponsor.name} className="sponsor-image" />
                </div>
                <div className="sponsor-logo-area">
                  <img src={sponsor.logo} alt={sponsor.name} className="sponsor-logo" />
                </div>
                <div className="sponsor-info">
                  <h3>{sponsor.name}</h3>
                  <span className="sponsor-tag">{sponsor.tagline}</span>
                  {sponsor.address && <p className="sponsor-addr">📍 {sponsor.address}</p>}
                </div>
                <div className="sponsor-accent-line" />
              </div>
            ))}
          </div>

          <div className="sponsors-grid sponsors-grid--secondary">
            {sponsorsData.filter(s => !s.featured).map((sponsor, index) => (
              <div
                className="sponsor-card sponsor-card--standard"
                key={sponsor.name}
                data-reveal
                style={{ transitionDelay: `${(index + 2) * 100}ms`, '--sponsor-accent': sponsor.accent }}
              >
                <div className="sponsor-image-area">
                  <img src={sponsor.image} alt={sponsor.name} className="sponsor-image" />
                </div>
                <div className="sponsor-logo-area">
                  <img src={sponsor.logo} alt={sponsor.name} className="sponsor-logo" />
                </div>
                <div className="sponsor-info">
                  <h3>{sponsor.name}</h3>
                  <span className="sponsor-tag">{sponsor.tagline}</span>
                  {sponsor.address && <p className="sponsor-addr">📍 {sponsor.address}</p>}
                </div>
                <div className="sponsor-accent-line" />
              </div>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-split">

            <div className="contact-left" data-reveal>
              <div className="contact-copy">
                <p className="eyebrow">Host Institution</p>
                <h2><span>St. Joseph's</span> School</h2>
                <p className="contact-description">
                  Presenting Talentia 2.0 – more than just an event, it's a movement. We are bringing together the brightest minds, artists, and creators from across the region to celebrate raw talent. Register your school's delegates to compete in our core events.
                </p>
                <div className="contact-actions">
                  <a href="https://talentia.live/Contact/" className="perk" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: '#fff' }}>
                    <span className="perk-icon">🚀</span>
                    <span>Register Your School</span>
                  </a>
                  <a href="/brochure.pdf" className="perk" target="_blank" style={{ textDecoration: 'none', color: '#fff' }}>
                    <span className="perk-icon">📄</span>
                    <span>Download Official Brochure</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-right" data-reveal>
              <div className="map-container glass-card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.068715174413!2d77.50822367640727!3d28.477477175749826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea7ca17c5bc5%3A0xa0cea24bd9ee3712!2sSt%20Joseph's%20School!5e0!3m2!1sen!2sin!4v1775657643518!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '16px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="St Joseph's School Location"
                />
                <a
                  href="https://maps.app.goo.gl/Y9VCo6t7XPfJm5XK7"
                  target="_blank"
                  rel="noreferrer"
                  className="navigate-btn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="3 11 22 2 13 21 11 13 3 11" />
                  </svg>
                  Navigate to Venue
                </a>
              </div>
            </div>

          </div>
        </section>
      </main>

      <section className="team-section" id="team">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">The Overall Management Team</p>
          <h2>Talented Stars</h2>
        </div>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={`${member.name}-${index}`} data-reveal style={{ transitionDelay: `${index * 120}ms` }}>
              <div className="team-photo-wrapper">
                <img src={member.image} alt={member.name} className="team-photo" loading="lazy" />
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <span>{member.role}</span>
              </div>
              <a href={member.instagram} target="_blank" rel="noreferrer" className="team-social">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                <span>Instagram</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-grid footer-grid--top">
          <div className="footer-col">
            <h3>Venue</h3>
            <a href="https://share.google/dHYA46NZNEmpfomge" className="footer-link">
              St. Joseph's School,<br />Greater Noida.
            </a>
          </div>
          <div className="footer-col">
            <h3>Quick Links</h3>
            <nav className="footer-nav">
              <a href="#top">Home</a>
              <a href="#about">About</a>
              <a href="#events">Events</a>
              <a href="#contact">Contact Us</a>
            </nav>
          </div>
          <div className="footer-col">
            <h3>Contact Us</h3>
            <p>Feel free to reach out to us if you're unable to register manually, or have any doubts.</p>
            <div className="footer-contacts">
              <a href="tel:+919773822923">+91 977-382-2923</a>
              <a href="tel:+919319062478">+91 931-906-2478</a>
              <a href="tel:+919717716810">+91 971-771-6810</a>
            </div>
          </div>
        </div>

        <div className="footer-grid footer-grid--bottom">
          <div className="footer-col footer-col--events">
            <h3>All Events</h3>
            <div className="footer-events-cols">
              <nav className="footer-nav">
                <a href="https://talentia.live/events/quantumquest.html">Quantum Quest</a>
                <a href="https://talentia.live/events/triggertactics.html">Trigger Tactics</a>
                <a href="https://talentia.live/events/cineaura.html">Cineaura</a>
                <a href="https://talentia.live/events/sinfonia.html">Sinfonia</a>
                <a href="https://talentia.live/events/thefinalclue.html">The Final Clue</a>
              </nav>
              <nav className="footer-nav">
                <a href="https://talentia.live/events/appinasnap.html">App in a Snap</a>
                <a href="https://talentia.live/events/ademotion.html">Ad-E-Motion</a>
                <a href="https://talentia.live/events/blindstrokes.html">Blind Strokes</a>
                <a href="https://talentia.live/events/humourtales.html">Humour Tales</a>
                <a href="https://talentia.live/events/newreckoning.html">New Reckoning</a>
              </nav>
            </div>
          </div>
          <div className="footer-col">
            <h3>Follow Us</h3>
            <a href="https://instagram.com/talentia.sjs" target="_blank" rel="noreferrer" className="footer-social-link">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} St. Joseph's School, Greater Noida. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
