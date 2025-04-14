import {PageContainer} from '@/components/layout';
import {useAppNavigation} from '@/hooks';
import {Home} from '@/navigation/routes';
import {STYLES} from '@/utils';
import {PasswordContent} from '../components/organisms';
import {PasswordFormValues} from '../types';

export default function ChangePassword() {
  const {navigateTo} = useAppNavigation();
  const navigateToDashboard = () => navigateTo(Home.Settings);

  const handleSubmit = (values: PasswordFormValues) => {
    console.log('Password change values:', values);
    // Aquí iría la lógica para el cambio de contraseña
    // Una vez completado, redirigir a Settings
    navigateToDashboard();
  };

  return (
    <PageContainer
      scrollEnabled={false}
      statusBarBackground={STYLES.colors.white[1]}
      translucent={false}>
      <PasswordContent
        onBackPress={navigateToDashboard}
        onSubmit={handleSubmit}
      />
    </PageContainer>
  );
}
