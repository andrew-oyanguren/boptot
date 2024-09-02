import { Stack } from "expo-router";



export default function RootLayout() {
  return (
    <Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: "#f4511e",
      },
    }}
    >
      <Stack.Screen name="index" options={{title: 'Home'}} />
      {/* <Stack.Screen name="sign-in" options={{title: 'Sign In'}} /> */}
    </Stack>
  );
}
