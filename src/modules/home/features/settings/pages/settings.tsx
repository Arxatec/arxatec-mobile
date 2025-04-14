import React, {useState} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {STYLES} from '@/utils';
import {PageContainer} from '@/components/layout';
import {useAppNavigation} from '@/hooks';
import {Home} from '@/navigation/routes';
import {
  PencilIcon,
  LockClosedIcon,
  DocumentTextIcon,
  CreditCardIcon,
  BellIcon,
  QuestionMarkCircleIcon,
  ArrowRightOnRectangleIcon,
} from 'react-native-heroicons/solid';
import {
  SettingsHeader,
  SettingsSection,
  ProfileHeader,
  MenuItem,
} from '../components';

export default function Settings() {
  const {navigateTo} = useAppNavigation();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const navigateToDashboard = () => navigateTo(Home.Dashboard);
  const navigateToChangePassword = () => navigateTo(Home.ChangePassword);
  const navigateToEditProfile = () => navigateTo(Home.EditProfile);

  const handleToggleNotifications = (value: boolean) => {
    setNotificationsEnabled(value);
  };

  return (
    <PageContainer
      scrollEnabled={false}
      statusBarBackground={STYLES.colors.white[1]}
      translucent={false}>
      <SettingsHeader onBackPress={navigateToDashboard} />

      <ScrollView style={styles.scrollView}>
        <View style={styles.card}>
          <ProfileHeader />
        </View>

        <SettingsSection>
          <MenuItem
            icon={<PencilIcon size={18} color={STYLES.colors.blue[600]} />}
            title="Editar perfil"
            subtitle="Cambia tu foto de perfil, número, ubicación"
            onPress={navigateToEditProfile}
          />
          <MenuItem
            icon={<LockClosedIcon size={18} color={STYLES.colors.blue[600]} />}
            title="Cambiar contraseña"
            subtitle="Para una cuenta más segura"
            onPress={navigateToChangePassword}
          />
          <MenuItem
            icon={<CreditCardIcon size={18} color={STYLES.colors.blue[600]} />}
            title="Añadir cuenta"
            subtitle="Añade tu metodo de pago favorito"
            onPress={() => {}}
          />
        </SettingsSection>

        <SettingsSection>
          <MenuItem
            icon={<BellIcon size={18} color={STYLES.colors.blue[600]} />}
            title="Notificaciones"
            subtitle="Personaliza tus preferencias"
            showArrow={false}
            showSwitch={true}
            switchValue={notificationsEnabled}
            onSwitchChange={handleToggleNotifications}
          />
          <MenuItem
            icon={
              <DocumentTextIcon size={18} color={STYLES.colors.blue[600]} />
            }
            title="Terminos y condiciones"
            subtitle="Protegemos tu cuenta ahora"
            onPress={() => {}}
          />
          <MenuItem
            icon={
              <QuestionMarkCircleIcon
                size={18}
                color={STYLES.colors.blue[600]}
              />
            }
            title="Preguntas frecuentes"
            subtitle="Quieres saber más sobre nosotros"
            onPress={() => {}}
          />
          <MenuItem
            icon={<ArrowRightOnRectangleIcon size={20} color="#ef4444" />}
            title="Cerrar sessión"
            hasSubtitle={false}
            onPress={() => {}}
            color="#fee2e2"
            textColor="#ef4444"
            showArrow={false}
          />
        </SettingsSection>
      </ScrollView>
    </PageContainer>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    marginBottom: 4,
    padding: 16,
  },
});
