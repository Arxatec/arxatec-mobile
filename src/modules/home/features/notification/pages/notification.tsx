import React from 'react';
import {PageContainer} from '@/components/layout';
import {STYLES} from '@/utils';
import {useAppNavigation} from '@/hooks';
import {Home} from '@/navigation/routes';
import {NotificationHeader} from '../components/molecules';
import {NotificationList} from '../components/organisms';
import {notifications} from '../utils';

export default function Notification() {
  const {navigateTo} = useAppNavigation();
  const handleBackPress = () => navigateTo(Home.Dashboard);

  return (
    <PageContainer
      scrollEnabled={false}
      statusBarBackground={STYLES.colors.white[1]}
      translucent={false}>
      <NotificationHeader onBackPress={handleBackPress} />
      <NotificationList notifications={notifications} />
    </PageContainer>
  );
}
