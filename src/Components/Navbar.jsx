import { useState } from 'react';

const MENU_ITEMS = [
  {
    label: 'About Us',
    submenu: ['Overview', 'Leadership', 'Careers'],
  },
  {
    label: 'Areas of work',
    submenu: ['Governance', 'Finance', 'Urban Services'],
  },
  {
    label: 'Products & Solutions',
    submenu: ['DIGIT Urban', 'mCollect', 'Tax Tools'],
  },
  {
    label: 'Our Platform',
    submenu: ['Open APIs', 'Data Hub', 'Ecosystem'],
  },
  {
    label: 'Ecosystem',
    submenu: ['Partners', 'Collaborations', 'Community'],
  },
  {
    label: 'Resources',
    submenu: ['Insights', 'Reports', 'Events'],
  },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
    setSearchOpen(false);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    setActiveDropdown(null);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <a href="#home" className="navbar-logo">
          <span className="logo-e">e</span>Gov Foundation
        </a>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
        </button>

        <ul className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
          {MENU_ITEMS.map((item, index) => (
            <li key={item.label} className="nav-item">
              <button
                type="button"
                className={`nav-link-toggle ${activeDropdown === index ? 'active' : ''}`}
                onClick={() => toggleDropdown(index)}
                aria-haspopup="true"
                aria-expanded={activeDropdown === index}
              >
                {item.label}
                <span className="nav-icon" aria-hidden="true">
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </span>
              </button>

              {activeDropdown === index && (
                <div className="nav-dropdown" role="menu">
                  {item.submenu.map((entry) => (
                    <a
                      key={entry}
                      href={`#${entry.toLowerCase().replace(/\s+/g, '-')}`}
                      className="nav-dropdown-link"
                    >
                      {entry}
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}

          <li className={`nav-search ${searchOpen ? 'search-active' : ''}`}>
            <button
              type="button"
              className="nav-search-btn"
              onClick={toggleSearch}
              aria-label="Open search"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#0F172A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20.9998 20.9999L16.6498 16.6499" stroke="#0F172A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {searchOpen && (
              <div className="nav-search-panel">
                <input
                  type="text"
                  className="nav-search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search eGov..."
                  aria-label="Search eGov"
                />
                <button type="button" className="nav-search-submit">
                  Search
                </button>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
