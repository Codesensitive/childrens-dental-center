'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`glass-nav ${scrolled ? 'scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        padding: scrolled ? '1rem 0' : '1.5rem 0',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'var(--primary-orange)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1.2rem'
          }}>
            CDC
          </div>
          <span style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-dark)' }}>
            Children's Dental Center
          </span>
        </Link>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', fontWeight: 600 }}>
          <Link href="#services">Services</Link>
          <Link href="#amenities">Amenities</Link>
          <Link href="#reviews">Reviews</Link>
          <a href="tel:+19566821284" className="btn-primary" style={{ textDecoration: 'none' }}>
            Call Us
          </a>
        </div>
      </div>
    </nav>
  );
}
