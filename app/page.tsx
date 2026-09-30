import Link from "next/link";

const services = [
  ["01", "Video production", "A placeholder for the studio’s future film and video services."],
  ["02", "Photography", "A placeholder for permission-cleared photography and visual stories."],
  ["03", "Drone cinematography", "A placeholder for future aerial production information."],
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="container header">
        <Link className="brand" href="/" aria-label="Spotlight HD Media home">
          <svg viewBox="0 0 32 32" width="32" height="32" aria-hidden="true">
            <path d="M6 6h20v20H6zM11 11h10v10H11z" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
          Spotlight <span>HD Media</span>
        </Link>
        <nav aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main id="main" className="container">
        <section className="hero" aria-labelledby="hero-title">
          <p className="eyebrow">Melbourne creative studio / Development starter</p>
          <h1 id="hero-title">Stories worth<br /><span>putting in the spotlight.</span></h1>
          <p className="intro">Video, photography and aerial storytelling. This is a minimal working foundation, not the finished Spotlight HD Media website.</p>
          <a className="button" href="#services">Explore the starter <span aria-hidden="true">↗</span></a>
          <p className="note">Placeholder copy only. No client media or results are represented here.</p>
        </section>
        <section id="services" className="section" aria-labelledby="services-title">
          <div className="section-heading"><p className="eyebrow">The starting point</p><h2 id="services-title">A foundation for the work ahead.</h2></div>
          <div className="services">
            {services.map(([number, title, description]) => (
              <article key={number}>
                <p className="eyebrow">{number}</p>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>
        <section id="work" className="section split" aria-labelledby="work-title">
          <div><p className="eyebrow">Portfolio / Coming later</p><h2 id="work-title">Room for real stories.</h2></div>
          <p>Approved portfolio projects, case studies and public-safe assets can be added here later. This starter contains no project imagery, testimonials or performance claims.</p>
        </section>
        <section id="contact" className="section split" aria-labelledby="contact-title">
          <div><p className="eyebrow">Contact / Not connected</p><h2 id="contact-title">The next conversation starts here.</h2></div>
          <p>An approved enquiry channel will be added during implementation. This starter does not collect, store or send personal information.</p>
        </section>
      </main>
      <footer className="container footer"><span>Spotlight HD Media</span><span>Development only · Not deployed</span></footer>
    </>
  );
}
