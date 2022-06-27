import React from 'react';
import img1 from '../images/collection1.png';
import img2 from '../images/collection2.png';
import img3 from '../images/collection3.png';
import img4 from '../images/collection4.png';
import img5 from '../images/collection5.png';
import img6 from '../images/collection6.jpg';
//import img7 from '../images/collection7.png';//

const Collection = () => {
  return (
    <div className='collection-section'>
      <div className="container">
        <h2>Genesis</h2>
        <div className="collection-wrapper">
          <div className="collection-item">
            <img src={img1} alt="collection" />
          </div>
          <div className="collection-item">
            <img src={img2} alt="collection" />
          </div>
          <div className="collection-item">
            <img src={img3} alt="collection" />
          </div>
          <div className="collection-item">
            <img src={img4} alt="collection" />
          </div>
          <div className="collection-item">
            <img src={img5} alt="collection" />
          </div>
          <div className="collection-item">
            <img src={img6} alt="collection" />
          </div>
 {/* to add more collection add the following */}
          {/* <div className="collection-item"> */}
            {/* <img src={img7} alt="collection" /> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default Collection;