import { useRef, useEffect } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import {Icon, icons} from 'lucide-react-native';

const toastVariants = {
  success: {
    message: 'Woohoo! You did it!',
    Icon: icons.CircleCheck,
    color: 'black',
  },
  error: {
    message: 'Oh snap! unable to sign in',
    Icon: icons.CircleAlert,
    color: 'red',
  }
};

export default function ErrorToast({ variant }: {variant: 'error' | 'success'}) {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const {message, Icon, color} = toastVariants[variant];

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: -80,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={{...styles.toast, ...styles[variant], transform: [{ translateY: animatedValue }] }}>
      <Text style={{ fontSize: 16, flex: 1, color: 'black'}}>{message}</Text>
      <View>
        <Icon size={48} color={color} strokeWidth={2} />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  toast: {
    padding: 12,
    borderWidth: 2,
    borderRadius: 16,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    width: '100%',
    position: 'absolute',
    bottom: 100,
    left: 20,

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  error: {
    backgroundColor: 'pink',
    borderColor: 'salmon',
  },
  success: {
    backgroundColor: '#B6DA9F',
  },
});