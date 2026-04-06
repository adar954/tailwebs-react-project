const supporters = [
  { name: 'Bill & Melinda Gates Foundation', logo: 'https://placehold.co/160x60/EEEEEE/333333?text=Gates+Fdn' },
  { name: 'Omidyar Network', logo: 'https://placehold.co/160x60/EEEEEE/333333?text=Omidyar' },
  { name: 'USAID', logo: 'https://placehold.co/160x60/EEEEEE/333333?text=USAID' },
  { name: 'World Bank', logo: 'https://placehold.co/160x60/EEEEEE/333333?text=World+Bank' },
  { name: 'NIUA', logo: 'https://placehold.co/160x60/EEEEEE/333333?text=NIUA' },
  { name: 'UNDP', logo: 'https://placehold.co/160x60/EEEEEE/333333?text=UNDP' },
];

function Supporters() {
  return (
    <section className="supporters-section">
      <div className="container">
        <h2 className="section-title">
          Our <span className="text-blue">Supporters</span>
        </h2>
        <div className="supporters-grid">
          {supporters.map((s) => (
            <div key={s.name} className="supporter-logo">
              <img src={s.logo} alt={s.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Supporters;