import React, { useState } from 'react';
import { Home, Globe, Compass, Utensils, Sun } from 'lucide-react';

const TravelGenius = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch(activeTab) {
      case 'home': return <HomePage />;
      case 'translate': return <TranslationPage />;
      case 'discover': return <DiscoveryPage />;
      case 'taste': return <TastePage />;
      case 'tips': return <TipsPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen pb-16">
      {renderContent()}
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg">
        <ul className="flex justify-around items-center h-16">
          <NavItem icon={<Home />} label="Home" isActive={activeTab === 'home'} onClick={() => setActiveTab('home')} />
          <NavItem icon={<Globe />} label="Translate" isActive={activeTab === 'translate'} onClick={() => setActiveTab('translate')} />
          <NavItem icon={<Compass />} label="Discover" isActive={activeTab === 'discover'} onClick={() => setActiveTab('discover')} />
          <NavItem icon={<Utensils />} label="Taste" isActive={activeTab === 'taste'} onClick={() => setActiveTab('taste')} />
          <NavItem icon={<Sun />} label="Tips" isActive={activeTab === 'tips'} onClick={() => setActiveTab('tips')} />
        </ul>
      </nav>
    </div>
  );
};

const NavItem = ({ icon, label, isActive, onClick }) => (
  <li className={`flex flex-col items-center ${isActive ? 'text-blue-500' : 'text-gray-500'}`} onClick={onClick}>
    {icon}
    <span className="text-xs mt-1">{label}</span>
  </li>
);

const HomePage = () => (
  <div className="p-4 bg-gradient-to-b from-blue-500 to-blue-700 min-h-screen text-white">
    <h1 className="text-4xl font-bold mb-4 text-center">Travel Genius</h1>
    <p className="text-xl mb-8 text-center">Your AI-powered travel companion</p>
    
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6 text-black">
      <h2 className="text-2xl font-semibold mb-4 text-blue-600">Welcome to Beijing!</h2>
      <div className="flex justify-between items-center mb-4">
        <div className="text-center">
          <span className="text-4xl">🌤️</span>
          <p className="mt-2">25°C | 77°F</p>
          <p className="text-sm">Sunny</p>
        </div>
        <div className="text-center">
          <span className="text-4xl">🕒</span>
          <p className="mt-2">2:30 PM</p>
          <p className="text-sm">Local Time</p>
        </div>
        <div className="text-center">
          <span className="text-4xl">💱</span>
          <p className="mt-2">1 USD = 6.45 CNY</p>
          <p className="text-sm">Exchange Rate</p>
        </div>
      </div>
    </div>
    
    <div className="bg-blue-600 rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-xl font-semibold mb-2">Today's Recommendation</h2>
      <p>Explore the Forbidden City and immerse yourself in China's imperial history.</p>
    </div>
    
    <div className="grid grid-cols-2 gap-4">
      <FeatureCard icon="🗣️" title="Translate" description="Break language barriers" />
      <FeatureCard icon="🧭" title="Discover" description="Explore top attractions" />
      <FeatureCard icon="🍜" title="Taste" description="Experience local cuisine" />
      <FeatureCard icon="💡" title="Tips" description="Get insider advice" />
    </div>
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-lg p-4 text-center text-black">
    <span className="text-3xl mb-2">{icon}</span>
    <h3 className="font-semibold mb-1">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const TranslationPage = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">AI-Powered Translation</h1>
    <textarea 
      className="w-full p-2 rounded border mb-4" 
      placeholder="Enter text to translate..." 
      rows="4"
    ></textarea>
    <select className="w-full p-2 rounded border mb-4">
      <option value="">Select target language</option>
      <option value="zh">Chinese (Simplified)</option>
      <option value="en">English</option>
      <option value="es">Spanish</option>
      <option value="fr">French</option>
    </select>
    <button className="w-full bg-blue-500 text-white py-2 rounded">
      Translate
    </button>
  </div>
);

const DiscoveryPage = () => {
  const attractions = [
    {
      category: "Historical Palaces",
      places: [
        {
          name: "Forbidden City",
          description: "Imperial palace from the Ming to Qing dynasties.",
          comments: "Vast complex, plan for a full day. Audio guides recommended."
        },
        {
          name: "Summer Palace",
          description: "Lakeside resort of emperors, known for its gardens.",
          comments: "Less crowded in mornings. Don't miss the marble boat."
        }
      ]
    },
    {
      category: "Great Wall Sections",
      places: [
        {
          name: "Mutianyu",
          description: "Well-preserved section with toboggan ride.",
          comments: "Less crowded than Badaling. Great for photos."
        },
        {
          name: "Jinshanling",
          description: "Partially restored section for serious hikers.",
          comments: "Challenging hike, but worth it for the views and fewer tourists."
        }
      ]
    }
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Discover Beijing</h1>
      {attractions.map((category, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{category.category}</h2>
          {category.places.map((place, placeIndex) => (
            <div key={placeIndex} className="bg-white rounded-lg shadow p-4 mb-4">
              <h3 className="text-lg font-semibold">{place.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{place.description}</p>
              <p className="text-sm bg-blue-100 p-2 rounded"><strong>Travel Genius Tip:</strong> {place.comments}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const TastePage = () => {
  const cuisines = [
    {
      type: "Peking Duck",
      description: "Beijing's most famous dish, crispy skinned duck served with pancakes.",
      restaurants: [
        { name: "Dadong Roast Duck Restaurant", rating: 4.5 },
        { name: "Siji Minfu Restaurant", rating: 4.3 }
      ]
    },
    {
      type: "Dumplings",
      description: "Various filled dumplings, a staple of Northern Chinese cuisine.",
      restaurants: [
        { name: "Din Tai Fung", rating: 4.6 },
        { name: "Baoyuan Dumplings", rating: 4.2 }
      ]
    }
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Taste Beijing</h1>
      {cuisines.map((cuisine, index) => (
        <div key={index} className="bg-white rounded-lg shadow p-4 mb-4">
          <h2 className="text-xl font-semibold mb-2">{cuisine.type}</h2>
          <p className="text-gray-600 mb-3">{cuisine.description}</p>
          <h3 className="font-semibold mb-2">Where to try:</h3>
          {cuisine.restaurants.map((restaurant, rIndex) => (
            <div key={rIndex} className="flex justify-between items-center mb-1">
              <span>{restaurant.name}</span>
              <span className="text-yellow-500">{'★'.repeat(Math.round(restaurant.rating))}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const TipsPage = () => {
  const tips = [
    {
      category: "Cultural Etiquette",
      tip: "When receiving a business card, accept it with both hands and take a moment to read it."
    },
    {
      category: "Transportation",
      tip: "The Beijing Subway is extensive and efficient. Consider buying a rechargeable IC card for convenient travel."
    },
    {
      category: "Shopping",
      tip: "Bargaining is expected in markets. Start at about 50% of the asking price and negotiate from there."
    },
    {
      category: "Dining",
      tip: "Tipping is not customary in most restaurants in Beijing. Service charge is often included in high-end establishments."
    }
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Travel Tips</h1>
      {tips.map((tip, index) => (
        <div key={index} className="bg-white rounded-lg shadow p-4 mb-4">
          <h2 className="text-lg font-semibold mb-2">{tip.category}</h2>
          <p className="text-gray-600">{tip.tip}</p>
        </div>
      ))}
    </div>
  );
};

export default TravelGenius;
