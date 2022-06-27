import React, {useRef} from 'react';
import { slideToggle } from '../slideToggle';

const Accordion = ({ title, content }) => {
  const ref = useRef();

  const handleClick = (e) => {
    slideToggle(ref.current);
    e.target.parentNode.classList.toggle('active');
  }
  return (
    <div className='accordion'>
      <div onClick={handleClick} className="accordion-title">
        {title}
      </div>
      <div ref={ref} className="accordion-content">
        <p>{content}</p>
      </div>
    </div>
  )
}

export default Accordion;