import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  BellIcon,
  CalendarDaysIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  ExclamationTriangleIcon,
  DocumentIcon,
  ChatBubbleLeftIcon,
} from 'react-native-heroicons/solid';
import {STYLES} from '@/utils';
import {Notification} from '../../../types';

interface NotificationIconProps {
  type: Notification['type'];
}

export const NotificationIcon = ({type}: NotificationIconProps) => {
  switch (type) {
    case 'success':
      return (
        <View style={[styles.iconContainer, styles.successContainer]}>
          <CheckCircleIcon size={20} color={STYLES.colors.teal[600]} />
        </View>
      );
    case 'error':
      return (
        <View style={[styles.iconContainer, styles.errorContainer]}>
          <ExclamationCircleIcon size={20} color={STYLES.colors.rose[500]} />
        </View>
      );
    case 'info':
      return (
        <View style={[styles.iconContainer, styles.infoContainer]}>
          <InformationCircleIcon size={20} color={STYLES.colors.blue[600]} />
        </View>
      );
    case 'warning':
      return (
        <View style={[styles.iconContainer, styles.warningContainer]}>
          <ExclamationTriangleIcon size={20} color={STYLES.colors.sky[600]} />
        </View>
      );
    case 'document':
      return (
        <View style={[styles.iconContainer, styles.documentContainer]}>
          <DocumentIcon size={20} color={STYLES.colors.black[500]} />
        </View>
      );
    case 'comment':
      return (
        <View style={[styles.iconContainer, styles.commentContainer]}>
          <ChatBubbleLeftIcon size={20} color={STYLES.colors.blue[400]} />
        </View>
      );
    case 'meeting':
      return (
        <View style={[styles.iconContainer, styles.meetingContainer]}>
          <CalendarDaysIcon size={20} color={STYLES.colors.purple[600]} />
        </View>
      );
    default:
      return (
        <View style={[styles.iconContainer, styles.defaultContainer]}>
          <BellIcon size={20} color={STYLES.colors.black[400]} />
        </View>
      );
  }
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  successContainer: {
    backgroundColor: STYLES.colors.teal[100],
  },
  errorContainer: {
    backgroundColor: STYLES.colors.rose[100],
  },
  infoContainer: {
    backgroundColor: STYLES.colors.blue[100],
  },
  warningContainer: {
    backgroundColor: STYLES.colors.sky[100],
  },
  documentContainer: {
    backgroundColor: STYLES.colors.black[100],
  },
  commentContainer: {
    backgroundColor: STYLES.colors.blue[100],
  },
  meetingContainer: {
    backgroundColor: STYLES.colors.purple[100],
  },
  defaultContainer: {
    backgroundColor: STYLES.colors.black[100],
  },
});
