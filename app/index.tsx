import { Redirect } from 'expo-router';

const isAuth = false;

export default function Index() {

  if (!isAuth) {
    return <Redirect href='/sign-in' />;
  }
  
  return <Redirect href='/home' />;
}
