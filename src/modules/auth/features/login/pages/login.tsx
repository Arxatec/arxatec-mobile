import {Form} from '../components/organism';
import {PageContainer} from '@/components/layout';
import {useAppNavigation} from '@/hooks';
import {Header} from '@/modules/auth/components/atoms';
import {Routes} from '@/navigation/routes';

export default function Login() {
  const {navigateTo} = useAppNavigation();
  const navigateToAuthOptions = () => navigateTo(Routes.AuthOptions);
  return (
    <PageContainer>
      <Header
        action={navigateToAuthOptions}
        title="Iniciar sesión"
        text="Inicia sesión en tu cuenta para acceder a toda la información que
            has guardado."
      />
      <Form />
    </PageContainer>
  );
}
