import { Pressable, Text } from 'react-native';

import styles from './styles';

type ButtonProps = {
  onPress: () => void;
  children: string;
  variant?: 'primary' | 'secondary',
};

export default function Button({children, onPress, variant = 'primary'}: ButtonProps) {
  return (
    <Pressable style={{...styles.button, ...styles[variant]}} onPress={onPress}>
       <Text style={{...styles.text, color: variant === 'primary' ? 'white' : 'grey'}}>
          {children}
        </Text>
    </Pressable>
  );
};