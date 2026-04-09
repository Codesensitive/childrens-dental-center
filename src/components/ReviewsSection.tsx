import React from 'react';

const reviews = [
  { name: 'Sarah T.', text: 'Dr. Park was absolutely incredible. My 4-year-old usually cries at the dentist, but here she didn\'t want to leave because of all the toys!', stars: 5 },
  { name: 'Michael R.', text: 'The neon lights and bright colors instantly put my son at ease. Best pediatric dentist in McAllen hands down.', stars: 5 },
  { name: 'Elena V.', text: 'Staff is extremely friendly and professional. They explained everything clearly and made sure my child was comfortable the whole time.', stars: 5 }
];

export default function ReviewsSection() {
  return (
    <section id="reviews" style={{ padding: '6rem 0', background: 'linear-gradient(to bottom, white, #f7f9fc)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'inline-flex', gap: '5px', fontSize: '2rem', marginBottom: '1rem' }}>
            ⭐⭐⭐⭐⭐
          </div>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>5.0 Stars on Google Reviews</h2>
          <p className="text-muted" style={{ fontSize: '1.2rem' }}>See why McAllen parents trust us with their children's smiles.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {reviews.map((rev, idx) => (
            <div key={idx} className="glass" style={{ padding: '2.5rem', background: 'white' }}>
              <div style={{ display: 'flex', gap: '5px', color: 'var(--sunshine-yellow)', marginBottom: '1rem' }}>
                {Array(rev.stars).fill(0).map((_, i) => <span key={i}>★</span>)}
              </div>
              <p style={{ fontStyle: 'italic', color: 'var(--text-dark)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
                "{rev.text}"
              </p>
              <h4 style={{ fontWeight: 700 }}>{rev.name}</h4>
              <span style={{ fontSize: '0.9rem' }} className="text-muted">Verified Patient</span>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <a href="https://www.google.com/maps/place/Children's+Dental+Center/@26.185536,-98.2290373,17z/" target="_blank" rel="noreferrer" style={{
            display: 'inline-block',
            padding: '12px 24px',
            background: '#ededed',
            borderRadius: '9999px',
            fontWeight: 600,
            textDecoration: 'none'
          }}>
            Read More on Google
          </a>
        </div>
      </div>
    </section>
  );
}
