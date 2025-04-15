import React from 'react';
import {View, StyleSheet} from 'react-native';
import {STYLES} from '@/utils';
import {PageContainer} from '@/components/layout';
import {useAppNavigation} from '@/hooks';
import {Messages} from '@/navigation/routes';
import {HeaderSection} from '../components/molecules/header_section';
import {ProfileSection} from '../components/organisms/profile_section';
import {ContentSection} from '../components/organisms/content_section';
import {mediaDummy, profileData} from '../utils/mock_data';
import {MediaItem} from '../types';

export default function InfoChat() {
  const {navigateTo} = useAppNavigation();
  const navigateToDashboard = () => navigateTo(Messages.ViewChat);
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(false);

  const handleMediaItemPress = (item: MediaItem) => {
    console.log('Media item pressed:', item);
  };

  const handleViewAllMedia = () => {
    console.log('View all media');
  };

  return (
    <PageContainer
      scrollEnabled={false}
      statusBarBackground={STYLES.colors.white[1]}
      translucent={false}>
      <HeaderSection title="Información" onBackPress={navigateToDashboard} />

      <View style={styles.container}>
        <ProfileSection
          name={profileData.name}
          role={profileData.role}
          avatar={profileData.avatar}
        />

        <ContentSection
          description={profileData.description}
          email={profileData.email}
          phone={profileData.phone}
          media={mediaDummy}
          notificationsEnabled={notificationsEnabled}
          onNotificationsChange={setNotificationsEnabled}
          onViewAllMedia={handleViewAllMedia}
          onMediaItemPress={handleMediaItemPress}
        />
      </View>
    </PageContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
