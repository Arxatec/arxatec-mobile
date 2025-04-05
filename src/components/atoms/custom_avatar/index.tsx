import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ActivityIndicator,
  ImageErrorEventData,
  NativeSyntheticEvent,
} from 'react-native';
import {STYLES} from '@/utils';

interface Props {
  avatar: string;
  size: number;
  altText?: string;
  username?: string;
}

export const CustomAvatar: React.FC<Props> = ({
  avatar,
  size,
  altText = 'Avatar',
  username = 'Anonymous',
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleImageLoad = () => setIsLoading(false);
  const handleImageError = (e: NativeSyntheticEvent<ImageErrorEventData>) => {
    setIsLoading(false);
    setHasError(true);
  };

  const getColorFromUsername = (username: string) => {
    const colors = [
      STYLES.colors.blue[500],
      STYLES.colors.black[500],
      STYLES.colors.blue[700],
      STYLES.colors.blue[800],
      STYLES.colors.blue[600],
      STYLES.colors.black[700],
    ];
    let sum = 0;
    for (let i = 0; i < username.length; i++) {
      sum += username.charCodeAt(i);
    }
    return colors[sum % colors.length];
  };

  const avatarColor = getColorFromUsername(username);
  const initials = username.charAt(0).toUpperCase();

  return (
    <View style={{width: size, height: size, position: 'relative'}}>
      {isLoading && (
        <View
          style={[
            styles.loadingContainer,
            {
              width: size,
              height: size,
              borderRadius: size / 2,
            },
          ]}>
          <ActivityIndicator size="small" color={STYLES.colors.blue[500]} />
        </View>
      )}

      {hasError ? (
        <View
          style={[
            styles.initialsContainer,
            {
              width: size,
              height: size,
              borderRadius: size / 2,
              backgroundColor: avatarColor,
            },
          ]}>
          <Text style={styles.initialsText}>{initials}</Text>
        </View>
      ) : (
        <Image
          source={{uri: avatar}}
          accessibilityLabel={altText}
          onLoad={handleImageLoad}
          onError={handleImageError}
          style={[
            styles.avatar,
            {
              width: size,
              height: size,
              borderRadius: size / 2,
              opacity: isLoading ? 0 : 1,
            },
          ]}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    resizeMode: 'cover',
  },
  loadingContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: STYLES.colors.black[200],
  },
  initialsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  initialsText: {
    color: STYLES.colors.white[1],
    fontFamily: STYLES.fonts.semi_bold,
    fontSize: 14,
  },
});
