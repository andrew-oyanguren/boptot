import { View, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';

import { useInput } from '@/hooks';
import { Button, FormControl } from '@/components';



export default function SignInForm({onError}: {onError: () => void}) {
  const [formError, setFormError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log('[STATE] formError: ', formError);
  }, [formError]);

  const { value: email, onBlur: onBlurEmail, onChange: onChangeEmail, onFocus: onFocusEmail, hasError: emailHasError } = useInput({ initValue: '', validateInput: (value) => value.length > 3});

  const { value: password, onBlur: onBlurPassword, onChange: onChangePassword, onFocus: onFocusPassword, hasError: passwordHasError } = useInput({ initValue: '', validateInput: (value) => value.length > 3});

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
     onError();
     console.log('[SUBMIT] Form submitted...');
     setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  };

  return (
    <>
      <View style={styles.form}>
        <FormControl inputConfig={{ value: email, onBlur: onBlurEmail, onChangeText: onChangeEmail, onFocus: onFocusEmail, placeholder: 'Email', keyboardType: 'email-address' }} errorConfig={{ error: emailHasError, message: 'You fucked up A. A. Ron!' }} />

        <FormControl inputConfig={{ value: password, onBlur: onBlurPassword, onChangeText: onChangePassword, onFocus: onFocusPassword, placeholder: 'Password', secureTextEntry: true }} errorConfig={{ error: passwordHasError, message: 'You fucked up again A. A. Ron!' }} />
      
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
