import { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { router } from 'expo-router';

import { Button } from '../components';


const onSignIn = () => {
  console.log('Sign In fired...')

  router.navigate('/home');
};

const SignInForm = () => (
  <View style={{marginTop: 40}}>
    <TextInput style={styles.input} placeholder='Email'/>

    <TextInput style={styles.input} placeholder='Password'/>

    <Button onPress={onSignIn}>Sign In</Button>
  </View>
);

function CreateAccountForm({ onPress }: { onPress: () => void }) {

  return (
    <View style={{marginTop: 40}}>
      <TextInput style={styles.input} placeholder='Name'/>

      <TextInput style={styles.input} placeholder='Email'/>

      <TextInput style={styles.input} placeholder='Create a password'/>

      <Button onPress={onPress}>Create account</Button>
    </View>
  );
  
};

export default function SignIn() {
  const [formVariant, setFormVariant] = useState<'sign-in' | 'create-account'>('sign-in');

  const onCreateAccount = () => {
    console.log('Create account fired...')

    setFormVariant('sign-in');
  };

  return (
    <View style={styles.pageContainer}>
      <Text style={styles.pageTitle}>Bop Tot</Text>

      {formVariant === 'sign-in' ? <SignInForm /> : <CreateAccountForm onPress={onCreateAccount}/>}
      
      {formVariant === 'sign-in' ? <Text onPress={() => setFormVariant('create-account')} style={{backgroundColor: 'lime', textAlign: 'right', marginTop: 16}}>Create and account</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'pink',
    flex: 1,
    paddingHorizontal: 20,
  },
  pageTitle: {
    color: '#5EAEF6',
    fontSize: 36,
    fontWeight: '600',
    backgroundColor: 'lime',
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderColor: 'black',
    marginBottom: 20,
  },
});