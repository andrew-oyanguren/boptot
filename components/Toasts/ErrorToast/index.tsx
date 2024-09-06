import { useRef, useEffect } from 'react';
import { Animated, StyleSheet, Text } from 'react-native';

export default function ErrorToast({ variant }: {variant: 'error' | 'success'}) {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: -100,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={{...styles.toast, ...styles[variant], transform: [{ translateY: animatedValue }] }}>
      <Text>Oops, unable to sign in</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  toast: {
    padding: 16,
    borderRadius: 6,
    width: '100%',
    color: 'white',
    position: 'absolute',
    bottom: 100,
    left: 20,
  },
  error: {
    backgroundColor: 'red',
  },
  success: {
    backgroundColor: 'green',
  },
});