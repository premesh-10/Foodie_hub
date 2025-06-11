import React from 'react'
import './Header.css'

const Header = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('explore-menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Your top picks,<br /> just a tap away</h2>
        <p>
          Explore a vibrant menu filled with mouth-watering dishes, prepared using top-quality
          ingredients and a passion for great cooking. We're here to delight your taste buds and
          turn every meal into a memorable experience.
        </p>
        <button onClick={scrollToMenu}>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
