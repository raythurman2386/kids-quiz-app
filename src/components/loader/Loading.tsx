import React from 'react';
import Loader from 'react-loader-spinner';
import { LoaderProps } from '../../types';

const Loading: React.FC<LoaderProps> = ({ height, width, color = '#fff' }) => {
  return (
    <Loader
      type='TailSpin'
      color={color}
      height={height}
      width={width}
      timeout={3000} //3 secs
    />
  );
};

export default Loading;
