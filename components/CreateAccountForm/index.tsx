import { View, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';

import { useInput } from '@/hooks';
import { REG_EXP_EMAIL } from '@/constants/validators';
import { Button, FormControl, FormInput } from '@/components';

const validateEmail = (email: string) => {
  return REG_EXP_EMAIL.test(email);
};

export default function CreateAccountForm({ onError }: { onError: () => void }) {
  const [formError, setFormError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    console.log('[STATE] formError: ', formError);
  }, [formError]);

  const { 
    value: firstName, 
    onBlur: onBlurFirstName, 
    onChange: onChangeFirstName, 
    onFocus: onFocusFirstName, 
    hasError: firstNamelHasError,
    isFocused: isFirstNameFocused,
  } = useInput({ initValue: '', validateInput: (value) => value.length > 0});

  const { 
    value: email, 
    onBlur: onBlurEmail, 
    onChange: onChangeEmail, 
    onFocus: onFocusEmail, 
    hasError: emailHasError,
    isFocused: isEmailFocused,
  } = useInput({ initValue: '', validateInput: validateEmail});

  const { 
    value: password, 
    onBlur: onBlurPassword, 
    onChange: onChangePassword, 
    onFocus: onFocusPassword, 
    hasError: passwordHasError,
    isFocused: isPasswordFocused,
  } = useInput({ initValue: '', validateInput: (value) => value.length > 3});

  const inputError = emailHasError || passwordHasError || !email.length || !password.length;

  const onSignIn = () => {
    setIsLoading(true);
    console.log('[onSignIn] onSignIn In fired...')

    if (inputError) {
      console.log('[ERROR] Form has errors...');
      setIsLoading(false);
      return
    }

    const timeout = setTimeout(() => {
      setFormError(true);
      // onError();
      console.log('[SUBMIT] Form submitted...');
      router.navigate('/sign-in');
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  };

  return (
    <>
      <View style={styles.form}>
        <FormControl error={{hasError: firstNamelHasError, message: 'You fucked up A. A. Ron!'}}>
          <FormInput 
            props={{ 
              value: firstName, 
              onBlur: onBlurFirstName, 
              onChangeText: onChangeFirstName, 
              onFocus: onFocusFirstName, 
              placeholder: 'First Name', 
            }} 
            inputHasError={firstNamelHasError} 
            inputFocused={isFirstNameFocused}
          />
        </FormControl>
        
        <FormControl error={{hasError: emailHasError, message: 'You fucked up A. A. Ron!'}}>
          <FormInput 
            props={{ 
              value: email, 
              onBlur: onBlurEmail, 
              onChangeText: onChangeEmail, 
              onFocus: onFocusEmail, 
              placeholder: 'Email', 
              keyboardType: 'email-address' 
            }} 
            inputHasError={emailHasError} 
            inputFocused={isEmailFocused}
          />
        </FormControl>

        <FormControl error={{hasError: passwordHasError, message: 'You fucked up A. A. Ron!'}}>
          <FormInput 
            props={{ 
              value: password, 
              onBlur: onBlurPassword, 
              onChangeText: onChangePassword, 
              onFocus: onFocusPassword, 
              placeholder: 'Password', 
              secureTextEntry: true
            }} 
            inputHasError={passwordHasError} 
            inputFocused={isPasswordFocused}
          />
        </FormControl>
      
        <Button disabled={inputError} onPress={onSignIn} isLoading={isLoading}>Sign In</Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  form: {
    // backgroundColor: 'orange',
    marginTop: 40,
  },
});
