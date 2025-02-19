import {PageContainer} from '@/components/layout';
import {useAppNavigation} from '@/hooks';
import {Header} from '@/modules/auth/components/atoms';
import {Routes} from '@/navigation/routes';
import {Form} from '../components/organism';
import {useState} from 'react';
import {
  DoneStep,
  EnterCodeStep,
  EnterEmailStep,
  EnterSetPassword,
} from '../components/molecules';

export default function ForgotPassword() {
  const [step, setStep] = useState(0);
  const {navigateTo} = useAppNavigation();
  const navigateToLogin = () => navigateTo(Routes.Login);

  const handleStep = () => {
    if (step == steps.length - 1) {
      setStep(0);
      return;
    }
    setStep(step + 1);
  };
  const steps = [
    {
      title: '¿Olvidaste tu contraseña?',
      text: 'No te preocupes, a todos nos pasa. Te ayudaremos a restablecer tu contraseña.',
      component: <EnterEmailStep handleStep={handleStep} />,
    },
    {
      title: 'Restablecer contraseña',
      text: 'Enviamos un código al correo electrónico que ingresaste.',
      component: <EnterCodeStep handleStep={handleStep} />,
    },
    {
      title: 'Establecer nueva contraseña',
      text: 'Le enviaremos instrucciones de reinicio.',
      component: <EnterSetPassword handleStep={handleStep} />,
    },
    {
      title: '¡Todo hecho!',
      text: 'Su contraseña ha sido restablecida exitosamente.',
      component: <DoneStep handleStep={handleStep} />,
    },
  ];
  return (
    <PageContainer>
      <Header
        action={navigateToLogin}
        title={steps[step].title}
        text={steps[step].text}
      />
      <Form children={steps[step].component} />
    </PageContainer>
  );
}
