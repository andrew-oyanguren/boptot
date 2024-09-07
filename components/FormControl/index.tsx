import { View, StyleSheet, Text } from 'react-native';
import { ReactNode } from 'react';

type FormControlProps = {
  children: ReactNode;
  error: {
    hasError: boolean;
    message: string;
  },
};

export default function FormControl({ error, children }: FormControlProps) {
  return (
    <View style={styles.control}>
      {children}
      { error?.hasError ? <Text style={styles.message}>{error?.message}</Text> : null }
    </View>
  );
};

const styles = StyleSheet.create({
  control: {
    // backgroundColor: 'lime',
    marginBottom: 20,
  },
  message: {
    // backgroundColor: 'pink',
    paddingVertical: 4,
    color: 'red',
  },
});