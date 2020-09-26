import { useState } from 'react';

export const useInput = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (updatedValue: any) => {
    setValue(updatedValue);
  };

  return [value, handleChange];
};
