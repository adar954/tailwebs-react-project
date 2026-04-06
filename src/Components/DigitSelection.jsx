function DigitSection() {
  return (
    <>
      <section className="sustaining-section">
        <div className="container sustaining-inner">
          <div className="sustaining-copy">
            <p className="section-eyebrow">20 years of reimagining for citizens and</p>
            <h2 className="section-heading">
              sustaining <span>change</span>
            </h2>
            <p className="sustaining-text">
              Technology is powerful, but is only one piece of the puzzle when it comes to enhancing the quality of life for every citizen. To have sustainable impact at scale, the collective energy of local networks to solve local problems needs to be tapped into. Our partners & networks bring this collective energy to life. The ecosystem already exists; our task is to facilitate and amplify their efforts. For 20 years, we’ve been turning small steps into lasting, meaningful change, so that no citizen is left behind.
            </p>
          </div>

          <div className="sustaining-cards">
            <div className="sustaining-card">
              <span className="card-tag">Leveraging technology for sustainable development</span>
              <p className="card-quote">
                “We are helping communities solve challenges with intuitive digital services that meet citizens where they are.”
              </p>
              <div className="card-author">
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80" alt="Person testimonial" />
                <div className="card-author-details">
                  <span className="card-author-name">Asha R.</span>
                  <span className="card-author-role">Program Lead</span>
                </div>
              </div>
            </div>

            <div className="sustaining-card">
              <span className="card-tag">Digitising civic services for better life</span>
              <p className="card-quote">
                “Our digital platform has enabled faster response, better transparency, and more inclusive access for millions.”
              </p>
              <div className="card-author">
                <img src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=120&q=80" alt="Person testimonial" />
                <div className="card-author-details">
                  <span className="card-author-name">Raj P.</span>
                  <span className="card-author-role">City Partner</span>
                </div>
              </div>
            </div>
          </div>

          <div className="sustaining-action">
            <a href="#digit" className="btn-outline">About Us</a>
          </div>
        </div>
      </section>

      <section id="digit" className="digit-section">
        <div className="digit-inner">
          <div className="digit-info">
            <h2 className="section-title">
              <span className="text-blue">DIGIT</span> technology-for-good platform
            </h2>
            <p>
              DIGIT is an open source digital infrastructure platform designed to help governments streamline service delivery, make data interoperable, and join forces with communities for meaningful impact.
            </p>
            <a href="#digit" className="btn-primary">Explore the platform</a>
          </div>

          <div className="digit-visual">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=650&q=80"
              alt="Person using mobile governance services"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default DigitSection;
