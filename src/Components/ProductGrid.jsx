import { useState } from 'react';

const TABS = [
  "Articles",
  "Whitepapers",
  "Case studies",
  "Strategy papers",
  "News & media",
];

const latestCards = [
  // Articles cards (medicine/doctor themed)
  {
    id: 1,
    title: 'Advancements in Telemedicine for Rural Healthcare',
    description: 'Exploring how digital tools are bridging gaps in medical access for underserved communities.',
    image: 'https://placehold.co/640x420/E6F7FF/0066CC?text=Doctor+Consultation',
    filters: ['Articles'],
    cta: 'Read more',
  },
  {
    id: 2,
    title: 'AI in Medical Diagnostics: The Future of Patient Care',
    description: 'How artificial intelligence is revolutionizing early disease detection and treatment plans.',
    image: 'https://placehold.co/640x420/F0F9FF/1E40AF?text=Medical+AI',
    filters: ['Articles'],
    cta: 'Read more',
  },
  {
    id: 3,
    title: 'Mental Health Awareness in the Digital Age',
    description: 'Digital platforms supporting mental wellness and connecting patients with specialists.',
    image: 'https://placehold.co/640x420/FEF3C7/92400E?text=Mental+Health',
    filters: ['Articles'],
    cta: 'Read more',
  },
  {
    id: 4,
    title: 'Vaccination Campaigns: Digital Tracking Success',
    description: 'How data-driven approaches ensured widespread immunization coverage.',
    image: 'https://placehold.co/640x420/E0F2FE/0277BD?text=Vaccination',
    filters: ['Articles'],
    cta: 'Read more',
  },
  {
    id: 5,
    title: 'Wearable Tech for Chronic Disease Management',
    description: 'Monitoring health metrics in real-time for better patient outcomes.',
    image: 'https://placehold.co/640x420/F3E8FF/7C3AED?text=Wearable+Health',
    filters: ['Articles'],
    cta: 'Read more',
  },
  {
    id: 6,
    title: 'Healthcare Data Privacy: Balancing Access and Security',
    description: 'Ensuring patient data protection while enabling medical research.',
    image: 'https://placehold.co/640x420/FEF7ED/9A3412?text=Data+Privacy',
    filters: ['Articles'],
    cta: 'Read more',
  },
  // Whitepapers cards
  {
    id: 7,
    title: 'Digital Health Infrastructure: A Comprehensive Guide',
    description: 'Building scalable systems for nationwide healthcare delivery.',
    image: 'https://placehold.co/640x420/E8F5E8/2E7D32?text=Health+Infrastructure',
    filters: ['Whitepapers'],
    cta: 'Learn more',
  },
  {
    id: 8,
    title: 'Blockchain in Medical Records: Secure and Transparent',
    description: 'Implementing decentralized ledgers for patient data management.',
    image: 'https://placehold.co/640x420/FFF3E0/F57C00?text=Blockchain+Health',
    filters: ['Whitepapers'],
    cta: 'Learn more',
  },
  {
    id: 9,
    title: 'IoT Devices in Preventive Healthcare',
    description: 'Connected devices enabling proactive health monitoring.',
    image: 'https://placehold.co/640x420/E3F2FD/1976D2?text=IoT+Healthcare',
    filters: ['Whitepapers'],
    cta: 'Learn more',
  },
  {
    id: 10,
    title: 'AI Ethics in Medical Decision Making',
    description: 'Ensuring fairness and accountability in AI-powered diagnostics.',
    image: 'https://placehold.co/640x420/FCE4EC/AD1457?text=AI+Ethics',
    filters: ['Whitepapers'],
    cta: 'Learn more',
  },
  {
    id: 11,
    title: 'Telehealth Policy Frameworks',
    description: 'Regulatory guidelines for virtual healthcare services.',
    image: 'https://placehold.co/640x420/F1F8E9/388E3C?text=Telehealth+Policy',
    filters: ['Whitepapers'],
    cta: 'Learn more',
  },
  {
    id: 12,
    title: 'Data Analytics for Public Health',
    description: 'Leveraging big data for epidemic prediction and response.',
    image: 'https://placehold.co/640x420/FFF8E1/F9A825?text=Health+Analytics',
    filters: ['Whitepapers'],
    cta: 'Learn more',
  },
  // Case studies cards
  {
    id: 13,
    title: 'Successful EHR Implementation in Urban Hospitals',
    description: 'Transforming patient care through digital record systems.',
    image: 'https://placehold.co/640x420/E8EAF6/3F51B5?text=EHR+Implementation',
    filters: ['Case studies'],
    cta: 'Learn more',
  },
  {
    id: 14,
    title: 'Mobile Health Apps for Diabetes Management',
    description: 'Empowering patients with tools for blood sugar monitoring.',
    image: 'https://placehold.co/640x420/FCE4EC/C2185B?text=Diabetes+App',
    filters: ['Case studies'],
    cta: 'Learn more',
  },
  {
    id: 15,
    title: 'Remote Monitoring for Elderly Care',
    description: 'Ensuring safety and independence through connected devices.',
    image: 'https://placehold.co/640x420/E0F7FA/0097A7?text=Elderly+Care',
    filters: ['Case studies'],
    cta: 'Learn more',
  },
  {
    id: 16,
    title: 'AI-Powered Radiology in Rural Clinics',
    description: 'Bringing expert diagnostics to underserved areas.',
    image: 'https://placehold.co/640x420/F3E5F5/7B1FA2?text=AI+Radiology',
    filters: ['Case studies'],
    cta: 'Learn more',
  },
  {
    id: 17,
    title: 'Digital Vaccination Tracking System',
    description: 'Ensuring complete immunization coverage nationwide.',
    image: 'https://placehold.co/640x420/E8F5E8/4CAF50?text=Vaccination+Tracking',
    filters: ['Case studies'],
    cta: 'Learn more',
  },
  {
    id: 18,
    title: 'Mental Health Support Platform',
    description: 'Connecting users with therapists through secure digital channels.',
    image: 'https://placehold.co/640x420/FFFDE7/FF9800?text=Mental+Health+Platform',
    filters: ['Case studies'],
    cta: 'Learn more',
  },
  // Strategy papers cards
  {
    id: 19,
    title: 'National Digital Health Roadmap',
    description: 'Strategic plan for integrating technology in healthcare systems.',
    image: 'https://placehold.co/640x420/E3F2FD/2196F3?text=Health+Roadmap',
    filters: ['Strategy papers'],
    cta: 'Learn more',
  },
  {
    id: 20,
    title: 'Building Resilient Health Systems',
    description: 'Strategies for pandemic preparedness and response.',
    image: 'https://placehold.co/640x420/FCE4EC/E91E63?text=Resilient+Systems',
    filters: ['Strategy papers'],
    cta: 'Learn more',
  },
  {
    id: 21,
    title: 'Inclusive Healthcare for All',
    description: 'Policies ensuring equitable access to medical services.',
    image: 'https://placehold.co/640x420/E8F5E8/4CAF50?text=Inclusive+Healthcare',
    filters: ['Strategy papers'],
    cta: 'Learn more',
  },
  {
    id: 22,
    title: 'Digital Transformation in Medical Education',
    description: 'Modernizing training for healthcare professionals.',
    image: 'https://placehold.co/640x420/FFF3E0/FF9800?text=Medical+Education',
    filters: ['Strategy papers'],
    cta: 'Learn more',
  },
  {
    id: 23,
    title: 'Sustainable Healthcare Financing',
    description: 'Economic models for long-term health system viability.',
    image: 'https://placehold.co/640x420/E0F2FE/03A9F4?text=Healthcare+Financing',
    filters: ['Strategy papers'],
    cta: 'Learn more',
  },
  {
    id: 24,
    title: 'Innovation in Drug Development',
    description: 'Accelerating research through digital collaboration.',
    image: 'https://placehold.co/640x420/F3E5F5/9C27B0?text=Drug+Development',
    filters: ['Strategy papers'],
    cta: 'Learn more',
  },
  // News & media cards
  {
    id: 25,
    title: 'New AI Tool Approved for Cancer Detection',
    description: 'Revolutionary technology enhances early diagnosis rates.',
    image: 'https://placehold.co/640x420/FFE0B2/FF6F00?text=Cancer+Detection',
    filters: ['News & media'],
    cta: 'Read more',
  },
  {
    id: 26,
    title: "Global Health Summit Highlights Digital Solutions",
    description: "World leaders discuss technology's role in healthcare.",
    image: 'https://placehold.co/640x420/E8EAF6/3F51B5?text=Health+Summit',
    filters: ['News & media'],
    cta: 'Read more',
  },
  {
    id: 27,
    title: 'Breakthrough in Gene Therapy Treatments',
    description: 'Personalized medicine advances with genetic research.',
    image: 'https://placehold.co/640x420/FCE4EC/C2185B?text=Gene+Therapy',
    filters: ['News & media'],
    cta: 'Read more',
  },
  {
    id: 28,
    title: 'Mobile Clinics Reach Remote Areas',
    description: 'Digital coordination improves outreach programs.',
    image: 'https://placehold.co/640x420/E0F7FA/00BCD4?text=Mobile+Clinics',
    filters: ['News & media'],
    cta: 'Read more',
  },
  {
    id: 29,
    title: 'Partnership Announced for Global Vaccine Distribution',
    description: 'International collaboration ensures equitable access.',
    image: 'https://placehold.co/640x420/E8F5E8/4CAF50?text=Vaccine+Distribution',
    filters: ['News & media'],
    cta: 'Read more',
  },
  {
    id: 30,
    title: 'Digital Health Awards Recognize Innovation',
    description: 'Celebrating breakthroughs in medical technology.',
    image: 'https://placehold.co/640x420/FFFDE7/FFC107?text=Health+Awards',
    filters: ['News & media'],
    cta: 'Read more',
  },
];

function ProductGrid() {
  const [activeTab, setActiveTab] = useState('Articles');
  const [showAll, setShowAll] = useState(false);
  const filteredCards = latestCards.filter(card => card.filters.includes(activeTab));
  const featuredCard = filteredCards.find(card => card.featured);
  const cardsToShow = featuredCard
    ? [featuredCard, ...filteredCards.filter(card => !card.featured)]
    : filteredCards;
  const initialCards = cardsToShow.slice(0, 3);
  const extraCards = cardsToShow.slice(3, 6);
  const displayCards = showAll ? cardsToShow : initialCards;

  return (
    <section id="latest" className="latest-section">
      <div className="latest-container">
        <div className="latest-header">
          <p className="section-eyebrow">Latest at eGov</p>
          <h2 className="products-heading">
            Stories, research and updates shaping digital governance
          </h2>
          <p className="products-subtitle">
            Browse the latest insight, publications and impact highlights from the eGov ecosystem.
          </p>
        </div>

        <div className="latest-tabs" role="tablist" aria-label="Latest at eGov tabs">
          {TABS.map(tab => (
            <button
              key={tab}
              type="button"
              className={`latest-tab ${activeTab === tab ? 'active' : ''}`}
              role="tab" aria-selected={activeTab === tab}
              onClick={() => { setActiveTab(tab); setShowAll(false); }}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="latest-cards">
          {displayCards.map(card => (
            <article key={card.id} className={`latest-card ${card.featured ? 'featured' : ''}`}>
              {card.image && (
                <div className="latest-card-image">
                  <img src={card.image} alt={card.title} />
                </div>
              )}

              <div className="latest-card-body">
                <span className={`latest-card-pill ${card.featured ? 'featured-pill' : ''}`}>
                  {card.tag}
                </span>

                <h3 className="latest-card-title">{card.title}</h3>
                <p className="latest-card-text">{card.description}</p>

                {card.featured && (
                  <ul className="featured-list">
                    {card.points.map(point => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}

                <button
                  type="button"
                  className={`latest-card-cta ${card.featured ? 'btn-primary' : 'btn-outline'}`}
                >
                  {card.cta}
                </button>
              </div>
            </article>
          ))}
        </div>

        {!showAll && extraCards.length > 0 && (
          <div className="latest-seeall-wrap">
            <button
              type="button"
              className="latest-seeall-btn"
              onClick={() => setShowAll(true)}
            >
              See All →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductGrid;
