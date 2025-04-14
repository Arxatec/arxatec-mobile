import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {ArrowLeftIcon} from 'react-native-heroicons/outline';
import {STYLES} from '@/utils';
import {useNavigation} from '@react-navigation/native';

interface BackButtonProps {
  onPress?: () => void;
}

export const BackButton: React.FC<BackButtonProps> = ({onPress}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      navigation.goBack();
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <ArrowLeftIcon size={20} color={STYLES.colors.black[700]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 4,
  },
});
