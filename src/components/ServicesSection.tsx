'use client';
import React from 'react';

const services = [
  {
    title: 'Preventative Care',
    description: 'Routine check-ups, cleanings, and fluoride treatments to keep cavities away.',
    icon: '🛡️',
    color: 'var(--sky-blue)'
  },
  {
    title: 'Restorative Dentistry',
    description: 'Gentle treatments for cavities including child-safe fillings and crowns.',
    icon: '✨',
    color: 'var(--sunshine-yellow)'
  },
  {
    title: 'Special Needs Care',
    description: 'Accommodating and patient-focused environments for children with special needs.',
    icon: '🤝',
    color: 'var(--lime-green)'
  },
  {
    title: 'Emergency Services',
    description: 'Fast and compassionate care for toothaches, accidents, and dental injuries.',
    icon: '🚑',
    color: 'var(--neon-pink)'
  }
];

export default function ServicesSection() {
  return (
    <section id="services" style={{ padding: '6rem 0', background: 'white' }}>
      <div className="container">
        <h2 className="section-title">Comprehensive Pediatric Care</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          marginTop: '4rem'
        }}>
          {services.map((srv, idx) => (
            <div key={idx} className="glass" style={{
              padding: '3rem 2rem',
              textAlign: 'center',
              background: 'rgba(255,255,255,0.9)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.08)`;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--glass-shadow)';
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                margin: '0 auto 1.5rem',
                borderRadius: '50%',
                background: `${srv.color}20`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2.5rem'
              }}>
                {srv.icon}
              </div>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>{srv.title}</h3>
              <p className="text-muted">{srv.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
