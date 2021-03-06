import React from 'react';

const Button = ({ label, className = "button", onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <span>{label}</span>
    </div>
  );
};

export default Button;
