import React from 'react';
import './Feature.css';

const Feature = () => {
  const features = [
    {
      iconClass: 'fa-solid fa-chart-line',
      title: 'Real-time Market Data',
      description: 'Get live updates on coin prices and market trends from top exchanges.',
    },
    {
      iconClass: 'fa-solid fa-shield-halved',
      title: 'Secure Transactions',
      description: 'Industry-standard encryption and wallet security for safe trading.',
    },
    {
      iconClass: 'fa-solid fa-users',
      title: 'User-Friendly Interface',
      description: 'Designed for both beginners and pros with intuitive UX.',
    },
    {
      iconClass: 'fa-solid fa-right-left',
      title: 'Fast Coin Exchange',
      description: 'Swap cryptocurrencies instantly with minimal fees.',
    },
    {
      iconClass: 'fa-solid fa-wallet',
      title: 'Multi-Currency Wallet',
      description: 'Supports USD, EUR, INR, and more to manage your assets efficiently.',
    },
    {
      iconClass: 'fa-solid fa-bell',
      title: 'Price Alerts',
      description: 'Set custom alerts to stay informed about price movements.',
    },
  ];

  return (
    <div className="feature-page">
      <h1>Platform Features</h1>
      <p>Explore powerful tools and features designed to give you an edge in the crypto market.</p>

      <div className="features-grid">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="icon">
              <i className={item.iconClass}></i>
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
