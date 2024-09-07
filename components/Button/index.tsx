import { Pressable, Text } from 'react-native';
import { Loader } from '@/components';

import styles from './styles';

type ButtonProps = {
  onPress: () => void;
  children: string;
  disabled?: boolean;
  isLoading: boolean;
  variant?: 'primary' | 'secondary',
};

export default function Button({children, disabled, onPress, variant = 'primary', isLoading}: ButtonProps) {
  return (
    <Pressable style={{...styles.button, ...styles[variant], ...(disabled ? styles.disabled : {})}} onPress={onPress} disabled={disabled}>
       {isLoading ? <Loader /> : <Text style={{...styles.text, color: variant === 'primary' ? 'white' : 'grey'}}>
          {children}
        </Text> }
    </Pressable>
  );
};