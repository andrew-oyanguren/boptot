import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Link } from 'expo-router';

import { SignInForm, SubToast } from '@/components';
import { commonStyles } from '@/styles';

type SubToastVariant = 'error' | 'success';

export default function SignIn() {
  const [subToast, setSubToast] = useState<SubToastVariant | ''>('');

  useEffect(() => {
    console.log('[STATE] subToast: ', subToast);
  }, [setSubToast]);

  const onAlert = (variant: SubToastVariant) => {
    setSubToast(variant);
  };

  return (
    <TouchableWithoutFeedback onPress={() => setSubToast('')} >
      <View style={styles.pageContainer}>
        <Text style={commonStyles.title}>Bop Tot</Text>

        <SignInForm onAlert={onAlert}/>

        <View style={styles.aside}>
          <Text>Don't have an account?</Text>
          <Link style={{ marginLeft: 6, color: '#5EAEF6', fontWeight: 600 }} href='/create-account'>Create an account</Link>
        </View>

        { !!subToast.length ? <SubToast variant={subToast as SubToastVariant}/> : null }
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