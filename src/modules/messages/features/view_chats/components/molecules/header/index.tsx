import React from 'react';
import {Text, View} from 'react-native';
import {STYLES} from '@/utils';

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({title}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 10,
      }}>
      <Text
        style={{
          fontSize: 18,
          fontFamily: STYLES.fonts.bold,
          color: STYLES.colors.black[800],
        }}>
        {title}
      </Text>
    </View>
  );
};
