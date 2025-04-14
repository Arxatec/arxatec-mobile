import {
  CustomDropdown,
  CustomInput,
  CustomTextArea,
  PrimaryButton,
} from '@/components/atoms';
import {PageContainer} from '@/components/layout';
import {STYLES} from '@/utils';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ArrowLeftIcon, DocumentPlusIcon} from 'react-native-heroicons/outline';

export default function CreateCase() {
  const {goBack} = useNavigation();
  const [selectedType, setSelectedType] = useState('');
  const types = [
    {label: 'Caso laboral', value: 'caso_laboral'},
    {label: 'Caso familiar', value: 'caso_familiar'},
    {label: 'Caso penal', value: 'caso_penal'},
  ];
  return (
    <PageContainer
      scrollEnabled={false}
      translucent={false}
      statusBarBackground={STYLES.colors.white[1]}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <TouchableOpacity onPress={goBack}>
            <ArrowLeftIcon size={20} color={STYLES.colors.black[700]} />
          </TouchableOpacity>
          <Text style={styles.title}>Crear caso</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: '#FFF',
            borderRadius: 10,
            padding: 16,
            marginBottom: 4,
            gap: 8,
          }}>
          <CustomDropdown
            label="Elige el tipo de caso"
            data={types}
            value={selectedType}
            onChange={setSelectedType}
            placeholder="Seleccionar"
          />
          <CustomInput label="Título" placeholder="Ej. Caso laboral" />
          <CustomTextArea
            label="Descripción"
            placeholder="Escribe una descripción..."
          />
        </View>
        <View
          style={{
            backgroundColor: '#FFF',
            borderRadius: 10,
            padding: 16,
            marginBottom: 4,
            gap: 8,
          }}>
          <CustomInput
            label="Nombre del cliente"
            placeholder="Ej. Juan Pérez"
          />
          <CustomInput label="Email" placeholder="Ej. juan.perez@gmail.com" />
        </View>
        <View
          style={{
            backgroundColor: '#FFF',
            borderRadius: 10,
            padding: 16,
            marginBottom: 4,
            gap: 8,
          }}>
          <View>
            <Text style={styles.label}>Multimedia</Text>
            <View>
              <TouchableOpacity style={styles.uploadButton}>
                <DocumentPlusIcon size={32} color={STYLES.colors.black[400]} />
                <Text style={styles.uploadText}>
                  Pulsa aquí para subir un archivo multimedia
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <PrimaryButton
            title="Crear caso"
            style={{width: 'auto', paddingHorizontal: 24}}
          />
        </View>
      </ScrollView>
    </PageContainer>
  );
}

const styles = StyleSheet.create({
  label: {
    color: STYLES.colors.black[600],
    fontFamily: STYLES.fonts.medium,
    fontSize: 14,
    marginBottom: 8,
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontFamily: STYLES.fonts.bold,
    color: STYLES.colors.black[800],
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingVertical: 10,
    paddingLeft: 10,
    paddingRight: 15,
    overflow: 'hidden',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 8,
  },

  uploadButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 48,
    borderWidth: 1,
    borderColor: STYLES.colors.black[200],
    borderRadius: 10,
    gap: 8,
  },
  uploadText: {
    color: STYLES.colors.black[500],
    fontFamily: STYLES.fonts.medium,
    fontSize: 14,
    textAlign: 'center',
  },
});
