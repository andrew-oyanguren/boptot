import { Text, View, StyleSheet, TextInput } from 'react-native';
import { Link } from 'expo-router';

import { Button } from '@/components';
import { commonStyles } from '@/styles';


const onSignIn = () => {
  console.log('Sign In fired...')
};

const SignInForm = () => (
  <View style={{marginTop: 40}}>
    <TextInput style={styles.input} placeholder='Email'/>

    <TextInput style={styles.input} placeholder='Password'/>

    <Button onPress={onSignIn}>Sign In</Button>
  </View>
);

export default function SignIn() {
  return (
    <View style={styles.pageContainer}>
      <Text style={commonStyles.title}>Bop Tot</Text>

      <SignInForm />

      <View style={styles.aside}>
        <Text>Don't have an account?</Text>
        <Link style={{ marginLeft: 6, color: '#5EAEF6', fontWeight: 600 }} href='/create-account'>Create an account</Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    display: 'flex',
    justifyContent: 'center',
    // backgroundColor: 'pink',
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
  aside: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 16,
  },
});