import {PageContainer} from '@/components/layout';
import {Header} from '@/modules/auth/components/atoms';
import {Form} from '../components/organism';

export default function Register() {
  return (
    <PageContainer>
      <Header
        title="Registrarse"
        text="Hazte una cuenta y accede a todo lo que necesitas, directamente desde tu móvil."
      />
      <Form />
    </PageContainer>
  );
}
