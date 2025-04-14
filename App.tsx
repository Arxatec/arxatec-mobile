import React from 'react';
import {toastConfig} from '@/components/atoms';
import {AppNavigator} from '@/navigation';
import {View} from 'react-native';
import ToastManager from 'toastify-react-native';

function App(): React.JSX.Element {
  return (
    <View style={{flex: 1}}>
      <AppNavigator />
      <ToastManager config={toastConfig} />
    </View>
  );
}

export default App;
