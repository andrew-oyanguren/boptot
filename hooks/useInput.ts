import {useState, useEffect, useCallback} from 'react';
import debounce from 'lodash.debounce';

type InputConfig = {
  initValue: string;
  validateInput?: (value: string) => boolean;
}

const useInput = ({ initValue, validateInput }: InputConfig) => {
  const [value, setValue] = useState(initValue);
  const [isTouched, setIsTouched] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(true);

   const hasError = isTouched && !isValid;

  const debouncedValidation = useCallback(debounce((value: string) => {
    if (validateInput) {
      console.log('[executed] debouncedValidation fired...');
      setIsValid(validateInput(value));
    }
  }, 400), []);
  
  const onBlur = () => {
    setIsFocused(false);

    if (value === initValue) {
      console.log('[aborted] onBlur returning early...');
      return;
    }

    setIsTouched(true);
  };

  const onChange = (value: string) => {
    setValue(value);
  };
  
  const onFocus = () => {
    setIsFocused(true);

    if (hasError) {
      console.log('[onFocus] resetting isValid...');
      // setIsValid(true);
      setIsTouched(false);
    }
  };

  useEffect(() => {
    if (value === initValue || validateInput === undefined) {
      console.log('[aborted] validation returned early...');
      return;
    }

    debouncedValidation(value);
  }, [value]);

// TODO: REMOVE EFFECTS FOR DEVELOPMENT ONLY
useEffect(() => {
    console.log('[STATE] input value: ', value);
  }, [value]);

  useEffect(() => {
    console.log('[STATE] input isTouched: ', isTouched);
  }, [isTouched]);

  useEffect(() => {
    console.log('[STATE] input isValid: ', isValid);
  }, [isValid]);

  useEffect(() => {
    console.log('[Inferred] hasError: ', hasError);
  }, [hasError]);

  return {
    hasError,
    isFocused,
    onBlur,
    onChange,
    onFocus,
    value,
  };
};

export default useInput;