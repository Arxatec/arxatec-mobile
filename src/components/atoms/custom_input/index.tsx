import {STYLES} from '@/utils';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import {EyeIcon, EyeSlashIcon} from 'react-native-heroicons/solid';

interface Props extends TextInputProps {
  label: string;
  isPassword?: boolean;
}

export const CustomInput: React.FC<Props> = ({
  label,
  isPassword = false,
  style,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View>
      {label && <Text style={styles.labelInput}>{label}</Text>}
      <View style={{position: 'relative'}}>
        <TextInput
          style={[styles.input, style]}
          secureTextEntry={isPassword && !showPassword}
          placeholderTextColor={STYLES.colors.black[400]}
          cursorColor={STYLES.colors.blue[500]}
          selectionColor={STYLES.colors.blue[500]}
          {...props}
        />
        {isPassword && (
          <TouchableOpacity
            style={styles.showPassword}
            onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <EyeIcon size={14} color={STYLES.colors.black[400]} />
            ) : (
              <EyeSlashIcon size={14} color={STYLES.colors.black[400]} />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  labelInput: {
    color: STYLES.colors.black[600],
    fontFamily: STYLES.fonts.medium,
    fontSize: 14,
  },
  input: {
    zIndex: 5,
    fontFamily: STYLES.fonts.regular,
    borderWidth: 1,
    borderColor: STYLES.colors.black[200],
    borderRadius: 5,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginTop: 8,
    color: STYLES.colors.black[950],
    backgroundColor: STYLES.colors.white[1],
    fontSize: 14,
  },
  showPassword: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    position: 'absolute',
    right: 16,
    top: 6,
    bottom: 0,
    marginVertical: 'auto',
    zIndex: 10,
  },
});
