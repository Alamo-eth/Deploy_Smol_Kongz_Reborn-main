import React from 'react';
import roadmap1 from '../images/roadmap1.png';
import roadmap2 from '../images/roadmap2.png';
import roadmap3 from '../images/roadmap3.png';
import roadmap4 from '../images/roadmap4.png';
import roadmap5 from '../images/roadmap5.png';
import roadmap6 from '../images/roadmap6.png';

const Roadmap = () => {
  return (
    <div className='roadmap'>
      <div className="container">
        <h2>Roadmap</h2>
        <div className="roadmap-wrapper">
          <div className="roadmap-box">
            <img src={roadmap1} alt="roadmap" />
            <h4>Rebirth - 9999 Kongz</h4>
            <p>1111 Genesis<br /> 8888 Factions</p>
          </div>
          <div className="roadmap-box">
            <img src={roadmap2} alt="roadmap" />
            <h4>Uniforms - Merch</h4>
            <p>Rare Uniforms,<br />Modest Uniforms,<br />Limited Edition Uniforms</p>
          </div>
          <div className="roadmap-box">
            <img src={roadmap3} alt="roadmap" />
            <h4>Propaganda - Mixed Media</h4>
            <p>Music, Animations,<br />Comics, Literature,<br />Painting, Sculptures</p>
          </div>
          <div className="roadmap-box">
            <img src={roadmap4} alt="roadmap" />
            <h4>Reinforcements - Giveaways</h4>
            <p>Rewards distributed to our holders and community.</p>
          </div>
          <div className="roadmap-box">
            <img src={roadmap5} alt="roadmap" />
            <h4>SmolTank - Community Wallet and Projects</h4>
            <p>50eth set to invest back into the community and ideas created by our holders</p>
          </div>
          <div className="roadmap-box">
            <img src={roadmap6} alt="roadmap" />
            <h4>Expand Kongonia</h4>
            <p>We may be SMOL, but, our dreams are BIG. We will build together!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roadmap;