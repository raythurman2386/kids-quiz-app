import React from 'react';
import Loader from 'react-loader-spinner';

const Loading = ({ height, width, color = '#fff' }: any) => {
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
