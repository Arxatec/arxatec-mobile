import React, {useState, ReactNode} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import {EyeIcon, EyeSlashIcon} from 'react-native-heroicons/solid';
import {STYLES} from '@/utils';

interface Props extends React.ComponentProps<typeof TextInput> {
  label?: string;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  style?: object;
  isPassword?: boolean;
}

export const CustomInput: React.FC<Props> = ({
  label,
  startAdornment,
  endAdornment,
  isPassword = false,
  style,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => setShowPassword(!showPassword);

  return (
    <View style={styles.wrapper}>
      {label && <Text style={styles.labelInput}>{label}</Text>}
      <View style={[styles.container, style]}>
        {startAdornment && (
          <View style={styles.startAdornment}>{startAdornment}</View>
        )}

        <TextInput
          style={[
            styles.input,
            startAdornment ? styles.inputWithAdornment : styles.inputNormal,
          ]}
          secureTextEntry={isPassword && !showPassword}
          placeholderTextColor={STYLES.colors.black[400]}
          cursorColor={STYLES.colors.blue[500]}
          selectionColor={STYLES.colors.blue[100]}
          {...props}
        />

        {isPassword && (
          <TouchableOpacity
            style={styles.showPassword}
            onPress={handleTogglePassword}>
            {showPassword ? (
              <EyeIcon size={14} color={STYLES.colors.black[400]} />
            ) : (
              <EyeSlashIcon size={14} color={STYLES.colors.black[400]} />
            )}
          </TouchableOpacity>
        )}

        {endAdornment && (
          <View style={styles.endAdornment}>{endAdornment}</View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  labelInput: {
    color: STYLES.colors.black[600],
    fontFamily: STYLES.fonts.medium,
    fontSize: 14,
    marginBottom: 8,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: STYLES.colors.black[200],
    borderRadius: 10,
    backgroundColor: '#FFF',
  },
  input: {
    fontFamily: STYLES.fonts.regular,
    fontSize: 14,
    color: STYLES.colors.black[950],
    flex: 1,
  },
  inputWithAdornment: {
    paddingHorizontal: 8,
  },
  inputNormal: {
    paddingHorizontal: 16,
  },
  startAdornment: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 0,
    paddingLeft: 16,
  },
  endAdornment: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 16,
    paddingLeft: 0,
  },
  showPassword: {
    position: 'absolute',
    right: 16,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});
