import {PageContainer} from '@/components/layout';
import {Header} from '@/modules/auth/components/atoms';
import {Form} from '../components/organism';
import {useAppNavigation} from '@/hooks';
import {Routes} from '@/navigation/routes';

export default function Register() {
  const {navigateTo} = useAppNavigation();
  const navigateToAuthOptions = () => navigateTo(Routes.AuthOptions);
  return (
    <PageContainer>
      <Header
        action={navigateToAuthOptions}
        title="Registrarse"
        text="Hazte una cuenta y accede a todo lo que necesitas, directamente desde tu móvil."
      />
      <Form />
    </PageContainer>
  );
}
