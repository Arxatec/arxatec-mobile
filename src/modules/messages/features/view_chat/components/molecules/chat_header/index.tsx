import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BackButton, MoreButton} from '../../atoms';
import {STYLES} from '@/utils';

interface ChatHeaderProps {
  title: string;
  onBackPress: () => void;
  onMorePress: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({
  title,
  onBackPress,
  onMorePress,
}) => {
  return (
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <BackButton onPress={onBackPress} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <MoreButton onPress={onMorePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontFamily: STYLES.fonts.bold,
    color: STYLES.colors.black[800],
  },
});

export default ChatHeader;
