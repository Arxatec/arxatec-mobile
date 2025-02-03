import {STYLES} from '@/utils';
import {Image, StyleSheet, Text, View} from 'react-native';
import logo from '@/assets/logo.png';

interface Props {
  title: string;
  text: string;
}

export const Header: React.FC<Props> = ({title, text}) => {
  return (
    <View>
      <Image source={logo} style={style.logo} />
      <Text style={style.title}>{title}</Text>
      <Text style={style.text}>{text}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
    objectFit: 'contain',
  },

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
});
