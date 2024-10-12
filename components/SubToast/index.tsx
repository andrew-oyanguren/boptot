import { useRef, useEffect } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import {Icon, icons} from 'lucide-react-native';

const subToastVariants = {
  success: {
    message: 'Woohoo! You did it!',
    Icon: icons.CircleCheck,
    color: '#4BB543',
  },
  error: {
    message: 'Oh snap! unable to sign in',
    Icon: icons.CircleAlert,
    color: '#C30010',
  }
};

export default function SubToast({ variant }: {variant: 'error' | 'success'}) {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const {message, Icon, color} = subToastVariants[variant];

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: -80,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={{...styles.subToast, ...styles[variant], transform: [{ translateY: animatedValue }] }}>
      <Text style={{ fontSize: 16, fontWeight: 500, flex: 1, color: color}}>{message}</Text>
      <View>
        <Icon size={48} color={color} strokeWidth={2} />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  subToast: {
    padding: 12,
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
    backgroundColor: '#F69697',
  },
  success: {
    backgroundColor: '#BEE3BE',
  },
});