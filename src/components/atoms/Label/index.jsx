import React from 'react';

const Label = ({ text, className }) => {
  return (
    <div className={className}>
      <span>{text}</span>
    </div>
  );
};

export default Label;
