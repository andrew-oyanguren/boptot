import {useState, useEffect} from 'react';

type InputConfig = {
  initValue: string;
  validateInput?: (value: string) => boolean;
}

const useInput = ({initValue, validateInput}: InputConfig) => {
  const [value, setValue] = useState(initValue);
  const [isValid, setIsValid] = useState<null | boolean>(null);

  useEffect(() => {
    if (value === initValue || !validateInput) {
      console.log('[aborted] validation returned early...');
      return;
    }

    console.log('[executed] validating input fired...');
    setIsValid(validateInput(value));
  }, [value]);

  return {
    isValid,
    onChangeText: setValue,
    value,
  };
};

export default useInput;