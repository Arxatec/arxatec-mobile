import {PageContainer} from '@/components/layout';
import {STYLES} from '@/utils';
import {Text, View} from 'react-native';

export default function ViewCases() {
  return (
    <PageContainer
      statusBarBackground={STYLES.colors.white[1]}
      translucent={false}>
      <View>
        <Text>Ver todos los casos</Text>
      </View>
    </PageContainer>
  );
}
