import {Form} from '../components/organism';
import {PageContainer} from '@/components/layout';
import {Header} from '@/modules/auth/components/atoms';

export default function Login() {
  return (
    <PageContainer>
      <Header
        title="Iniciar sesión"
        text="Inicia sesión en tu cuenta para acceder a toda la información que
            has guardado."
      />
      <Form />
    </PageContainer>
  );
}
