import React, { useState } from 'react';
import './Card.css';

const Card = ({ description, header, footer, body }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription((prevShow) => !prevShow);
  };

  return (
    <div className={`card${showDescription ? ' show-description' : ''}`}>
      {header && <div className="card-header">{header}</div>}
      {body && <div className="card-body">{body}</div>}
      {footer && (
        <div className="card-footer" onClick={toggleDescription}>
          {footer}
        </div>
      )}
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;
