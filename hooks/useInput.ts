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
  }, 475), []);
  
  const onBlur = () => {
    setIsFocused(false);
    
    console.log('[onBlur] onBlur fired...');

    if (value === initValue) {
      console.log('[aborted] onBlur returning early...');
      return;
    }

    if (validateInput && !isTouched) {
      setIsValid(validateInput(value));
    }
    
    setIsTouched(true);
  };

  const onChange = (value: string) => {
    setValue(value);
  };
  
  const onFocus = () => {
    setIsFocused(true);
    console.log('[onBlur] onFocus fired...');

    if (hasError) {
      console.log('[onFocus] resetting isValid...');
      setIsValid(true);
      // setIsTouched(false);
    }
  };

  useEffect(() => {
    if (!validateInput || !isTouched) {
      console.log('[aborted] validation returned early...');
      return;
    }
    setIsValid(true);
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