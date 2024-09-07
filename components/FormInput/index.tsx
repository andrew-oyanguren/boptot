import { StyleSheet, TextInput } from 'react-native';

type FormInputProps = {
  props: {
    defaultValue?: string;
    keyboardType?: 'email-address' | 'default';
    onChangeText: (text: string) => void;
    onBlur?: () => void;
    onFocus?: () => void;
    placeholder?: string;
    secureTextEntry?: boolean;
    value: string;
  },
  inputHasError: boolean;
}

// TODO: add isFocused styles

export default function FormInput({ props, inputHasError }: FormInputProps) {
  const inputStyles = {...styles.input, ...(inputHasError ? styles.error : {})};

  return (
    <TextInput style={inputStyles} {...props} />
  );
};

const styles = StyleSheet.create({
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
});
