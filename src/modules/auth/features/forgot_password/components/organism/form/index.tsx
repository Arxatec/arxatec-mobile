import {StyleSheet, View} from 'react-native';

interface Props {
  children: React.ReactNode;
}
export const Form: React.FC<Props> = ({children}) => {
  return <View style={styles.containerForm}>{children}</View>;
};

const styles = StyleSheet.create({
  containerForm: {
    marginTop: 24,
  },
});
