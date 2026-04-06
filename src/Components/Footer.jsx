function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <h3>
            <span className="logo-e">e</span>Gov Foundation
          </h3>
          <p>
            Building open-source digital infrastructure to transform governance
            and improve citizen services.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#digit">About Us</a></li>
            <li><a href="#approaches">Our Approach</a></li>
            <li><a href="#digit">DIGIT Platform</a></li>
            <li><a href="#products">Products</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Resources</h4>
          <ul>
            <!-- as of now adding / and use prevent default as using # throwing build error -->
            <li><a href="/" onClick={(e) => e.preventDefault()>Documentation</a></li>
            <li><a href="/" onClick={(e) => e.preventDefault()>API Reference</a></li>
            <li><a href="/" onClick={(e) => e.preventDefault()>Community</a></li>
            <li><a href="/" onClick={(e) => e.preventDefault()>Blog</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Contact</h4>
          <ul>
            <li>Bengaluru, India</li>
            <li>info@egov.org.in</li>
            <li>+91‑80‑4040‑XXXX</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>&copy; {new Date().getFullYear()} eGov Foundation. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
