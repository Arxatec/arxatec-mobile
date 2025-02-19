import {STYLES} from '@/utils';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  text: string;
  buttonText: string;
  action: () => void;
}
export const AccountInquiry: React.FC<Props> = ({action, buttonText, text}) => (
  <View style={style.container}>
    <Text style={style.text}>{text}</Text>
    <TouchableOpacity onPress={action}>
      <Text style={style.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  </View>
);

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  text: {
    fontSize: 14,
    fontFamily: STYLES.fonts.regular,
    color: STYLES.colors.black[600],
    marginRight: 5,
  },
  buttonText: {
    color: STYLES.colors.blue[600],
    fontFamily: STYLES.fonts.semi_bold,
    fontSize: 14,
  },
});
