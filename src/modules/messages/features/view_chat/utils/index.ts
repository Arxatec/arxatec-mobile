import {pick} from '@react-native-documents/picker';

export const pickDocument = async () => {
  try {
    const res = await pick();
    console.log(res);
    return res;
  } catch (err) {
    console.log('Error al seleccionar el archivo:', err);
    return null;
  }
};
