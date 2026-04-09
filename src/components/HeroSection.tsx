'use client';
import React from 'react';

export default function HeroSection() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '80px', // Navbar offset
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative background blobs */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, var(--sunshine-yellow) 0%, transparent 70%)',
        opacity: 0.15,
        borderRadius: '50%',
        zIndex: 0
      }} className="animate-float" />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '-10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, var(--sky-blue) 0%, transparent 70%)',
        opacity: 0.15,
        borderRadius: '50%',
        zIndex: 0,
        animationDelay: '2s'
      }} className="animate-float" />

      <div className="container" style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        <div>
          <div style={{
            display: 'inline-block',
            padding: '8px 16px',
            borderRadius: '20px',
            background: 'rgba(255,122,0,0.1)',
            color: 'var(--primary-orange)',
            fontWeight: 700,
            marginBottom: '1.5rem'
          }}>
            🌟 Welcoming New Patients
          </div>
          <h1 style={{ fontSize: '4.5rem', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Healthy Smiles, <br />
            <span style={{ color: 'var(--primary-orange)' }}>Happy Kids.</span>
          </h1>
          <p className="text-muted" style={{ fontSize: '1.25rem', marginBottom: '2.5rem', maxWidth: '500px' }}>
            McAllen's premier pediatric dental center led by Dr. Chan Min Park. We provide a fun, safe, and comfortable environment full of vibrant energy.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="tel:+19566821284" className="btn-primary">Book Appointment</a>
            <a href="#amenities" style={{
              padding: '14px 28px',
              borderRadius: '9999px',
              border: '2px solid var(--text-dark)',
              color: 'var(--text-dark)',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none'
            }}>Explore Clinic</a>
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <div className="glass" style={{
            padding: '2rem',
            position: 'absolute',
            bottom: '-2rem',
            left: '-2rem',
            zIndex: 2,
            animation: 'float 5s ease-in-out infinite'
          }}>
             <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ fontSize: '2rem' }}>⭐</span>
                <div>
                   <h4 style={{ margin: 0, fontSize: '1.2rem' }}>5.0 Google Rating</h4>
                   <p style={{ margin: 0, fontSize: '0.9rem' }} className="text-muted">Over 500+ happy parents</p>
                </div>
             </div>
          </div>
          <div style={{
            width: '100%',
            height: '600px',
            background: 'url("https://lh3.googleusercontent.com/p/AF1QipNHGWGpyVX4KezueyqepBooZ3q3zfBBpWN3wuAH=s1600") center/cover no-repeat',
            borderRadius: '40px',
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
          }}>
          </div>
        </div>
      </div>
    </section>
  );
}
