import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Link } from 'expo-router';
import { CreateAccountForm } from '@/components';
import { commonStyles } from '@/styles';

const onCreateAccount = () => {
    console.log('Create account fired...')
  };

export default function CreateAccount() {
  return (
    <View style={styles.pageContainer}>
      <Text style={commonStyles.title}>Create account</Text>

      <CreateAccountForm onError={() => console.log('error')}/>
      
      <View style={styles.aside}>
        <Text>Already have an account?</Text>
        <Link style={{ marginLeft: 6, color: '#5EAEF6', fontWeight: 600 }} href='/sign-in'>Sign in</Link>
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
  }
});