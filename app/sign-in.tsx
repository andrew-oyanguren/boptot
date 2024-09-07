import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Link } from 'expo-router';

import { SignInForm, Toast as ErrorToast } from '@/components';
import { commonStyles } from '@/styles';

export default function SignIn() {
  const [isToastVisible, setIsToastVisible] = useState(false);

  useEffect(() => {
    console.log('[STATE] isToastVisible: ', isToastVisible);
  }, [isToastVisible]);

  const onError = () => {
    setIsToastVisible(true);
  };

  return (
    <TouchableWithoutFeedback onPress={() => setIsToastVisible(false)} >
      <View style={styles.pageContainer}>
        <Text style={commonStyles.title}>Bop Tot</Text>

        <SignInForm onError={onError}/>

        <View style={styles.aside}>
          <Text>Don't have an account?</Text>
          <Link style={{ marginLeft: 6, color: '#5EAEF6', fontWeight: 600 }} href='/create-account'>Create an account</Link>
        </View>

        { isToastVisible ? <ErrorToast variant='success'/> : null }
      </View>
    </TouchableWithoutFeedback>
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
  aside: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 16,
  },
});