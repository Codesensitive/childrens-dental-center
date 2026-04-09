import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--text-dark)', color: 'white', padding: '4rem 0 2rem 0', marginTop: 'auto' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: '3rem' }}>
        
        <div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'white' }}>CDC McAllen</h3>
          <p style={{ color: '#94a3b8', lineHeight: 1.6, marginBottom: '1.5rem' }}>
            Providing a fun, safe, and comfortable dental experience for the youth of McAllen, TX.
          </p>
          <div style={{ display: 'flex', gap: '1rem', fontSize: '1.5rem', opacity: 0.5 }}>
             <span title="No official Facebook available" style={{ cursor: 'not-allowed' }}>FB</span>
             <span title="No official Instagram available" style={{ cursor: 'not-allowed' }}>IG</span>
          </div>
        </div>

        <div>
          <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Contact Us</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', color: '#94a3b8' }}>
            <li>📍 1801 S 5th St Ste 112<br/>McAllen, TX 78503</li>
            <li>📞 (956) 682-1284</li>
            <li>✉️ hello@cdcmcallen.com</li>
          </ul>
        </div>

        <div>
          <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Business Hours</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', color: '#94a3b8' }}>
            <li style={{ display: 'flex', justifyContent: 'space-between' }}><span>Monday - Thursday</span> <span>8:00 AM - 5:00 PM</span></li>
            <li style={{ display: 'flex', justifyContent: 'space-between' }}><span>Friday</span> <span>8:00 AM - 2:00 PM</span></li>
            <li style={{ display: 'flex', justifyContent: 'space-between' }}><span>Saturday - Sunday</span> <span>Closed</span></li>
          </ul>
        </div>

      </div>
      <div className="container" style={{ textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid #334155', color: '#64748b', fontSize: '0.9rem' }}>
        &copy; {new Date().getFullYear()} Children's Dental Center McAllen. All rights reserved.
      </div>
    </footer>
  );
}
