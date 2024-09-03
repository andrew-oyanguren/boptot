import { Text, View, StyleSheet, TextInput, Pressable } from 'react-native';
import { router, Link } from 'expo-router';

import { Button } from '../components';


const onSignIn = () => {
  console.log('Sign In fired...')

  router.navigate('/home');
};

export default function SignIn() {
  return (
    <View style={styles.pageContainer}>
      <Text>Bop Tot</Text>

      <TextInput style={styles.input} placeholder='Email'/>

      <TextInput style={styles.input} placeholder='Password'/>

      <Button onPress={onSignIn} variant='secondary'>Sign In</Button>

      <Link href='/home'>Create and account</Link>
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
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderColor: 'black',
  },
  
});