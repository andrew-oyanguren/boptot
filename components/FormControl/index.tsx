import { View, TextInput, StyleSheet, Text } from 'react-native';

type FormControlProps = {
  errorConfig: {
    error: boolean;
    message: string;
  },
  inputConfig: {
    defaultValue?: string;
    keyboardType?: 'email-address' | 'default';
    onChangeText: (text: string) => void;
    onBlur?: () => void;
    onFocus?: () => void;
    placeholder?: string;
    secureTextEntry?: boolean;
    value: string;
  },
};

export default function FormControl({ inputConfig, errorConfig }: FormControlProps) {

  const inputStyles = {...styles.input, ...(errorConfig?.error ? styles.error : {})};
  
  return (
    <View style={styles.control}>
      <TextInput style={inputStyles} {...inputConfig} />
      { errorConfig?.error ? <Text style={styles.message}>{errorConfig.message}</Text> : null }
    </View>
  );
};

const styles = StyleSheet.create({
  control: {
    // backgroundColor: 'lime',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderWidth: 2,
    padding: 10,
    borderColor: '#DDD',
    borderRadius: 6,
    color: '#000',
  },
  error: {
    borderColor: 'red',
  },
  message: {
    backgroundColor: 'pink',
    paddingVertical: 4,
  }
});