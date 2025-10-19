import React, { useState } from 'react';
import iphone from '../../assets/iphone.png';
import montblanc from '../../assets/montblanc.png';
import bag from '../../assets/bag.png';
import './lostitem.css';

const dummyItems = [
  {
    id: 1,
    img: iphone,
    name: 'iPhone 13 Pro',
    location: 'Central Station Platform 3',
    status: 'Unclaimed',
    date: '2024-01-20',
    desc: 'Space gray iPhone with clear case, locked screen',
  },
  {
    id: 2,
    img: montblanc,
    name: 'Montblanc Pen',
    location: 'Conference Center Room 204',
    status: 'Pending',
    date: '2024-01-20',
    desc: 'Black fountain pen with gold trim',
  },
  {
    id: 3,
    img: bag,
    name: 'Adidas Gym Bag',
    location: 'Fitness First Locker Room',
    status: 'Unclaimed',
    date: '2024-01-19',
    desc: 'Black Adidas duffel with red stripes',
  }
];

function LostItemManagement() {
  const [search, setSearch] = useState('');
  const filtered = dummyItems.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <><div className="nav-bar">
          <span className="nav-logo">iFind</span>
          <nav className="nav-links">
              <span className="nav-link">Home</span>
              <span className="nav-link">Report Item</span>
              <span className="nav-link">Settings</span>
              <span className="nav-link">Notification</span>
              <span className="nav-profile">
                  <span className="profile-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="12" stroke="#FFF3E2" strokeWidth="1.5" fill="none" />
                          <circle cx="12" cy="10" r="4" fill="none" stroke="#FFF3E2" strokeWidth="1.5" />
                          <path d="M4 20c1.33-3.33 5.33-4 8-4s6.67 0.67 8 4" stroke="#FFF3E2" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                      </svg>
                  </span>
                  <span className="profile-name">Dr. Strange</span>
              </span>
          </nav>
      </div>
      <div className="lost-main">
              <header className="lost-header">
                  <div className="lost-title">Lost Items</div>
                  <div className="lost-row">
                      <input
                          className="lost-search"
                          placeholder="Search found items..."
                          value={search}
                          onChange={e => setSearch(e.target.value)} />
                      <div className="lost-filters">
                          <button className="lost-filter">Your Posts</button>
                          <button className="lost-filter lost-filter-active">Lost</button>
                          <button className="lost-filter">Found</button>
                      </div>
                  </div>
              </header>
              <div className="lost-grid">
                  {filtered.map(item => (
                      <div key={item.id} className="lost-card">
                          <img src={item.img} alt={item.name} className="lost-img" />
                          <div className="lost-card-body">
                              <div className="lost-card-row">
                                  <span className="lost-card-name">{item.name}</span>
                                  <span className="lost-card-date">{item.date}</span>
                              </div>
                              <div className="lost-card-location">{item.location}</div>
                              <div className="lost-card-desc">{item.desc}</div>
                              <div className="lost-card-status-row">
                                  <span className={item.status === 'Pending'
                                      ? 'lost-status-pending'
                                      : 'lost-status-unclaimed'}>
                                      {item.status}
                                  </span>
                              </div>
                              <button className="lost-card-claim">Claim Item</button>
                          </div>
                      </div>
                  ))}
              </div>
          </div></>
  );
}

export default LostItemManagement;
