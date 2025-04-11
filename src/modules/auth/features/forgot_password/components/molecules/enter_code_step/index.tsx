import {STYLES} from '@/utils';
import React, {useRef, useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {PrimaryButton} from '@/components/atoms';

interface Props {
  handleStep: () => void;
}

export const EnterCodeStep: React.FC<Props> = ({handleStep}) => {
  const [code, setCode] = useState(['', '', '', '']);
  const inputRefs = Array(4)
    .fill(null)
    .map(() => useRef<TextInput>(null));

  const handleChange = (text: string, index: number) => {
    if (text.length > 1) return;
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < inputRefs.length - 1) {
      inputRefs[index + 1].current?.focus();
    }
    if (!text && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {inputRefs.map((ref, index) => (
          <TextInput
            key={index}
            ref={ref}
            style={[styles.input, code[index] ? styles.inputFilled : null]}
            cursorColor={STYLES.colors.blue[500]}
            selectionColor={STYLES.colors.blue[100]}
            maxLength={1}
            value={code[index]}
            onChangeText={text => handleChange(text, index)}
            onKeyPress={({nativeEvent}) => {
              if (
                nativeEvent.key === 'Backspace' &&
                index > 0 &&
                !code[index]
              ) {
                inputRefs[index - 1].current?.focus();
              }
            }}
          />
        ))}
      </View>
      <PrimaryButton
        title="Continuar"
        style={styles.button}
        onPress={handleStep}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FFF',
    borderRadius: 8,
  },
  button: {
    marginTop: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    columnGap: 12,
  },
  input: {
    flex: 1,
    zIndex: 5,
    fontFamily: STYLES.fonts.semi_bold,
    borderWidth: 1,
    borderColor: STYLES.colors.black[200],
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginTop: 8,
    color: STYLES.colors.black[950],
    backgroundColor: '#FFF',
    fontSize: 32,
    textAlign: 'center',
  },
  inputFilled: {
    borderColor: STYLES.colors.blue[600],
    borderWidth: 1,
  },
});
