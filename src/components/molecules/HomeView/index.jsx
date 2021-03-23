import React from 'react';
import { Button } from '../../atoms/index';
import useAppData from '../../../state/appContext';
import { ActionChangeBgColor } from '../../../state/actions';

const HomeView = ({ className = 'home-view' }) => {
  const [{ bgColor }, dispatch] = useAppData();

  const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    ActionChangeBgColor(dispatch, randomColor);
    console.log(bgColor);
  };

  return (
    <div className={className} style={{ backgroundColor: `#${bgColor}` }}>
      <Button onClick={generateColor} label={'Change background'} />
    </div>
  );
};

export default HomeView;
