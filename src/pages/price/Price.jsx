import React, { useState } from 'react';
import './Price.css';

const PricingComponent = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Basic',
      description: 'Perfect for crypto enthusiasts getting started',
      monthlyPrice: 9,
      annualPrice: 7,
      features: [
        { text: 'Track up to 100 cryptocurrencies', stars: 1 },
        { text: 'Basic price charts & analytics', stars: 1 },
        { text: 'Real-time price updates', stars: 0 },
        { text: 'Portfolio tracking (3 portfolios)', stars: 0 },
        { text: '7-day price history', stars: 0 },
        { text: 'Email support', stars: 1 }
      ]
    },
    {
      name: 'Pro',
      description: 'Best for active traders and investors',
      monthlyPrice: 29,
      annualPrice: 23,
      isRecommended: true,
      features: [
        { text: 'Track unlimited cryptocurrencies', stars: 1 },
        { text: 'Advanced charts & technical indicators', stars: 1 },
        { text: 'Real-time market data', stars: 0 },
        { text: 'Unlimited portfolio tracking', stars: 0 },
        { text: '1-year historical data', stars: 0 },
        { text: 'Price alerts & notifications', stars: 1 },
        { text: 'Market news & insights', stars: 1 }
      ]
    },
    {
      name: 'Premium',
      description: 'For professional traders and analysts',
      monthlyPrice: 79,
      annualPrice: 63,
      features: [
        { text: 'All Pro features included', stars: 2 },
        { text: 'Advanced portfolio analytics', stars: 2 },
        { text: 'API access (10,000 calls/month)', stars: 2 },
        { text: 'Custom watchlists & alerts', stars: 0 },
        { text: '5-year historical data', stars: 0 },
        { text: 'Priority customer support', stars: 1 },
        { text: 'DeFi protocols tracking', stars: 2 }
      ]
    },
    {
      name: 'Enterprise',
      description: 'Custom solution for institutions and large organizations',
      isEnterprise: true,
      features: [
        { text: 'Unlimited API access', stars: 3 },
        { text: 'Custom integrations & webhooks', stars: 3 },
        { text: 'White-label solutions', stars: 3 },
        { text: 'Dedicated account manager', stars: 0 },
        { text: 'Complete historical data access', stars: 0 },
        { text: 'Custom analytics & reports', stars: 3 },
        { text: '99.9% uptime SLA', stars: 3 },
        { text: '24/7 priority support', stars: 3 }
      ]
    }
  ];

  const StarRating = ({ count }) => {
    if (count === 0) return null;
    return (
      <div className="star-rating">
        {[...Array(count)].map((_, i) => (
          <span key={i} className="star">⭐</span>
        ))}
      </div>
    );
  };

  return (
    <div className="pricing-container">
      <div className="pricing-toggle">
        <span className={!isAnnual ? 'active' : ''}>Monthly</span>
        <div className="toggle-switch" onClick={() => setIsAnnual(!isAnnual)}>
          <div className={`toggle-slider ${isAnnual ? 'annual' : 'monthly'}`}></div>
        </div>
        <span className={isAnnual ? 'active' : ''}>
          Annually - <span className="save-badge">Save 20%</span>
        </span>
      </div>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div key={index} className={`pricing-card ${plan.isRecommended ? 'recommended' : ''}`}>
            {plan.isRecommended && <div className="recommended-badge">Recommended</div>}
            
            <div className="card-header">
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>
            </div>

            <div className="pricing-section">
              {plan.isEnterprise ? (
                <div className="enterprise-pricing">
                  <h2>Inquire for pricing</h2>
                </div>
              ) : (
                <div className="price-display">
                  <h2 className="price">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    <span className="period">/mo</span>
                  </h2>
                  <p className="billing-info">
                    Or billed yearly ${isAnnual ? plan.annualPrice : plan.monthlyPrice}/mo
                  </p>
                </div>
              )}
            </div>

            <button className={`subscribe-btn ${plan.isRecommended ? 'recommended-btn' : ''} ${plan.isEnterprise ? 'enterprise-btn' : ''}`}>
              {plan.isEnterprise ? 'Learn More' : 'Subscribe Now'}
            </button>

            <div className="features-list">
              {plan.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="feature-item">
                  <span className="feature-text">{feature.text}</span>
                  <StarRating count={feature.stars} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="tax-disclaimer">
        Price are exclusives of taxes. The applicable tax amounts will be shown on the checkout page
      </p>
    </div>
  );
};

export default PricingComponent;