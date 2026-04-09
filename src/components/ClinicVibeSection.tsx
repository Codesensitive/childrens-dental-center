import React from 'react';

export default function ClinicVibeSection() {
  return (
    <section id="amenities" style={{ padding: '6rem 0', background: 'var(--bg-color)', position: 'relative' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        <div style={{ position: 'relative' }}>
          <div style={{
            width: '100%',
            height: '500px',
            background: 'url("https://lh3.googleusercontent.com/p/AF1QipO3aI8V28Iu3kNKfTrN8qTV13tuuwTO0mQjA5Mu=s1600") center/cover no-repeat',
            borderRadius: '40px',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
          }}>
          </div>
          <div className="glass" style={{
            position: 'absolute',
            bottom: '-10%',
            right: '-10%',
            padding: '2rem',
            background: 'rgba(255, 255, 255, 0.8)'
          }}>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--neon-pink)' }}>Zero Dental Anxiety</h4>
            <p className="text-muted" style={{ margin: 0, maxWidth: '200px' }}>Fun games, books, and toys everywhere!</p>
          </div>
        </div>

        <div>
          <h2 className="section-title" style={{ textAlign: 'left' }}>Designed for Kids.<br />Trusted by Parents.</h2>
          <p className="text-muted" style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
            A trip to the dentist shouldn't be scary. We've built an environment that feels more like a playground than a clinic. With vibrant orange and yellow walls, neon rainbow lights, and engaging activities, your child will love their visit.
          </p>
          
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              "Immersive Toys & Games in waiting area",
              "Bright, Colorful & Festive Decorations",
              "Child-friendly terminology and gentle approaches",
              "Rewards and Prizes after every successful visit!"
            ].map((feature, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', fontWeight: 600 }}>
                <span style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(76, 217, 100, 0.2)',
                  color: 'var(--lime-green)',
                  fontSize: '1.2rem'
                }}>✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
