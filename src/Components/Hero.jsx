function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <h1>
            20 years of digital transformation in public service delivery
          </h1>
          <h2 className="hero-highlight">It's possible.</h2>
          <p className="hero-subtitle">
            Catalysts. Ecosystem enablers. Problem Solvers. At eGov, we're driven by the power of open digital infrastructure and ecosystems to enable governments deliver accessible, inclusive and transparent services to every citizen.
          </p>
          <div className="hero-actions">
            <a href="#approaches" className="btn-primary">
              Our Approach
            </a>
            <a href="#impact" className="btn-outline">
              Our Impact
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop&q=80"
            alt="Diverse professionals collaborating on digital governance"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;