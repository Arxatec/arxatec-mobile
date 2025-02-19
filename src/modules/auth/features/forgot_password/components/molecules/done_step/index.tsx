import {PrimaryButton} from '@/components/atoms';
import {useAppNavigation} from '@/hooks';
import {Routes} from '@/navigation/routes';

interface Props {
  handleStep: () => void;
}
export const DoneStep: React.FC<Props> = ({handleStep}) => {
  const {navigateTo} = useAppNavigation();
  const navigateToLogin = () => {
    handleStep();
    navigateTo(Routes.Login);
  };
  return <PrimaryButton title="Iniciar sesión" onPress={navigateToLogin} />;
};
