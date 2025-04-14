import {STYLES} from '@/utils';
import {
  CheckCircleIcon,
  XCircleIcon,
  InformationCircleIcon,
  ExclamationTriangleIcon,
} from 'react-native-heroicons/solid';
import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Text, Animated} from 'react-native';

interface Props {
  text1: string;
  text2?: string;
  visibilityTime?: number;
}

const ProgressBar = ({color, duration}: {color: string; duration: number}) => {
  const width = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    Animated.timing(width, {
      toValue: 0,
      duration: duration,
      useNativeDriver: false,
    }).start();
  }, [duration]);

  return (
    <View style={styles.progressBarContainer}>
      <Animated.View
        style={[
          styles.progressBar,
          {
            backgroundColor: color,
            width: width.interpolate({
              inputRange: [0, 100],
              outputRange: ['0%', '100%'],
            }),
          },
        ]}
      />
    </View>
  );
};

const ToastContent = ({
  props,
  icon: Icon,
  color,
}: {
  props: Props;
  icon: any;
  color: string;
}) => (
  <View style={styles.toastContainer}>
    <View style={styles.contentContainer}>
      <Icon size={24} color={color} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{props.text1}</Text>
        {props.text2 && <Text style={styles.message}>{props.text2}</Text>}
      </View>
    </View>
    <ProgressBar color={color} duration={props.visibilityTime || 3000} />
  </View>
);

const styles = StyleSheet.create({
  toastContainer: {
    width: '90%',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: STYLES.colors.black[100],
    borderRadius: 12,
    position: 'relative',
    overflow: 'hidden',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 16,
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    color: STYLES.colors.black[900],
    fontSize: 14,
    fontFamily: STYLES.fonts.semi_bold,
  },
  message: {
    color: STYLES.colors.black[500],
    fontSize: 14,
    fontFamily: STYLES.fonts.regular,
    marginTop: 2,
  },
  progressBarContainer: {
    height: 2,
    backgroundColor: STYLES.colors.black[100],
    borderRadius: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  progressBar: {
    height: '100%',
  },
});

export const toastConfig = {
  success: (props: Props) => (
    <ToastContent props={props} icon={CheckCircleIcon} color="#22C55E" />
  ),
  error: (props: Props) => (
    <ToastContent props={props} icon={XCircleIcon} color="#EF4444" />
  ),
  info: (props: Props) => (
    <ToastContent props={props} icon={InformationCircleIcon} color="#3B82F6" />
  ),
  warn: (props: Props) => (
    <ToastContent
      props={props}
      icon={ExclamationTriangleIcon}
      color="#F59E0B"
    />
  ),
};
