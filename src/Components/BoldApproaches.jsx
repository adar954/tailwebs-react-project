function BoldApproaches() {
  return (
    <section id="approaches" className="approaches-section">
      <div className="container approaches-grid">
        <div className="approach-copy">
          <p className="approach-eyebrow">Big problems need</p>
          <h2 className="approach-heading">
            bold <span>approaches</span>
          </h2>

          <div className="approach-pill-list">
            <button className="approach-pill active">Public Health</button>
            <button className="approach-pill">Public Finance</button>
            <button className="approach-pill">Local Governance</button>
            <button className="approach-pill">Water & Sewerage</button>
          </div>
        </div>

        <div className="approach-feature-grid">
          <div className="approach-feature-card feature-a">
            <div>
              <div className="feature-label">210+</div>
              <div className="feature-headline">cities LIVE with IOBDCloud across India</div>
              <p className="feature-text">Connected cities using real-time digital infrastructure for more efficient governance.</p>
            </div>
            <button className="feature-btn">Read More</button>
            <div className="feature-graphic feature-graphic-a"></div>
          </div>

          <div className="approach-feature-card feature-b">
            <div>
              <div className="feature-label">2 Bn</div>
              <div className="feature-headline">COVID-19 vaccination certificates issued</div>
              <p className="feature-text">Secure digital issuance at scale to support national immunization efforts.</p>
            </div>
            <button className="feature-btn outline">Read More</button>
            <div className="feature-graphic feature-graphic-b"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BoldApproaches;
