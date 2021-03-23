import React from 'react';

const Label = ({ text, className = 'label' }) => {
  return (
    <div className={className}>
      <span>{text}</span>
    </div>
  );
};

export default Label;
