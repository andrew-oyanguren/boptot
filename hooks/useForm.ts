import {useState} from 'react';

const useForm = () => {
  const [isValid, setIsValid] = useState(false);

  return {
    isValid,
  };
};

export default useForm;