import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ImageErrorEventData,
  NativeSyntheticEvent,
  Animated,
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
  const shimmerValue = useState(new Animated.Value(0))[0];

  const handleImageLoad = () => setIsLoading(false);
  const handleImageError = (e: NativeSyntheticEvent<ImageErrorEventData>) => {
    setIsLoading(false);
    setHasError(true);
  };

  useEffect(() => {
    if (isLoading) {
      startShimmerAnimation();
    }
  }, [isLoading]);

  const startShimmerAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(shimmerValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(shimmerValue, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
      ]),
    ).start();
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

  const interpolatedBackground = shimmerValue.interpolate({
    inputRange: [0, 1],
    outputRange: [STYLES.colors.black[200], STYLES.colors.black[100]],
  });

  return (
    <View style={{width: size, height: size, position: 'relative'}}>
      {isLoading && (
        <Animated.View
          style={[
            styles.loadingContainer,
            {
              width: size,
              height: size,
              borderRadius: size / 2,
              backgroundColor: interpolatedBackground,
            },
          ]}
        />
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
