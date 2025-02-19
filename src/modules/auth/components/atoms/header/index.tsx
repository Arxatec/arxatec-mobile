import {STYLES} from '@/utils';
import {ArrowLeftIcon} from 'react-native-heroicons/outline';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  title: string;
  text: string;
  action: () => void;
}

export const Header: React.FC<Props> = ({title, text, action}) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={action}>
        <ArrowLeftIcon
          size={16}
          color={STYLES.colors.black[900]}
          strokeWidth={2}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: STYLES.fonts.bold,
    fontSize: 18,
    color: STYLES.colors.black[950],
    textAlign: 'left',
    marginTop: 16,
  },
  text: {
    textAlign: 'left',
    marginTop: 4,
    fontFamily: STYLES.fonts.regular,
    fontSize: 14,
    color: STYLES.colors.black[600],
  },
  button: {
    width: 32,
    height: 32,
    backgroundColor: STYLES.colors.black[100],
    borderRadius: 255,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
