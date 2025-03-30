import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import LeftSection from './components/LeftSection.jsx'
import RightSection from './components/RightSection.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="mainpage">  {/* Use className directly */}

      <div className="leftOut">  {/* No need for styles.leftOut */}
        <LeftSection />
      </div>

      <div className="rightOut">
        <RightSection />
      </div>

    </div>
  </StrictMode>
)
