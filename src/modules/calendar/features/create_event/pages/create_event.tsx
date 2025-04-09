import {
  CustomDropdown,
  CustomInput,
  CustomTextArea,
  PrimaryButton,
} from '@/components/atoms';
import {PageContainer} from '@/components/layout';
import {useAppNavigation} from '@/hooks';
import {Calendar} from '@/navigation/routes';
import {STYLES} from '@/utils';
import {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import {
  ArrowLeftIcon,
  LinkIcon,
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from 'react-native-heroicons/outline';
import {
  Calendar as RNCalendar,
  DateData,
  LocaleConfig,
} from 'react-native-calendars';

// Configurar el locale en español
LocaleConfig.locales['es'] = {
  monthNames: [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ],
  monthNamesShort: [
    'Ene',
    'Feb',
    'Mar',
    'Abr',
    'May',
    'Jun',
    'Jul',
    'Ago',
    'Sep',
    'Oct',
    'Nov',
    'Dic',
  ],
  dayNames: [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
  ],
  dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
  today: 'Hoy',
};

LocaleConfig.defaultLocale = 'es';

export default function CreateEvent() {
  const [selectedTime, setSelectedTime] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);

  const {navigateTo} = useAppNavigation();
  const navigateToCalendar = () => navigateTo(Calendar.CalendarDay);

  const times = Array.from({length: 48}, (_, i) => {
    const hours = Math.floor(i / 2);
    const minutes = (i % 2) * 30;
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    return {
      label: `${formattedHours}:${formattedMinutes}`,
      value: `${formattedHours}:${formattedMinutes}`,
    };
  });

  const handlePublish = () => {
    console.log({
      date: selectedDate,
      time: selectedTime,
      title,
      description,
      location,
    });
    // Aquí iría la lógica para publicar
  };

  const formatDate = (date: string) => {
    if (!date) return 'Seleccionar fecha';
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  };

  return (
    <PageContainer
      scrollEnabled={false}
      translucent={false}
      statusBarBackground={STYLES.colors.white[1]}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <TouchableOpacity onPress={navigateToCalendar}>
            <ArrowLeftIcon size={20} color={STYLES.colors.black[700]} />
          </TouchableOpacity>
          <Text style={styles.title}>Crear evento</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: '#FFF',
            borderRadius: 10,
            padding: 16,
            gap: 8,
          }}>
          <CustomInput label="Título" placeholder="Ej. Reunión con Efrain" />
          <CustomTextArea
            label="Descripción"
            placeholder="Escribe una pequeña descripción de tu evento aquí..."
          />
          <CustomInput
            label="URL del enlace"
            placeholder="https://meet.google.com/srf-rgbm-uzr"
            startAdornment={
              <LinkIcon size={20} color={STYLES.colors.black[400]} />
            }
          />
          <View>
            <Text style={styles.label}>Fecha del evento</Text>
            <TouchableOpacity
              style={styles.dateButton}
              onPress={() => setShowCalendar(true)}>
              <CalendarIcon size={20} color={STYLES.colors.black[400]} />
              <Text style={styles.dateButtonText}>
                {formatDate(selectedDate)}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', gap: 8}}>
            <View style={{flex: 1}}>
              <CustomDropdown
                search={true}
                label="Hora de inicio"
                data={times}
                value={selectedTime}
                onChange={setSelectedTime}
                placeholder="00:00"
              />
            </View>
            <View style={{flex: 1}}>
              <CustomDropdown
                search={true}
                label="Hora final"
                data={times}
                value={selectedTime}
                onChange={setSelectedTime}
                placeholder="00:00"
              />
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            title="Crear evento"
            style={{width: 'auto', paddingHorizontal: 24}}
            onPress={handlePublish}
          />
        </View>
      </ScrollView>

      <Modal
        visible={showCalendar}
        transparent={true}
        animationType="fade"
        statusBarTranslucent
        onRequestClose={() => setShowCalendar(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <RNCalendar
              onDayPress={(day: DateData) => {
                setSelectedDate(day.dateString);
                setShowCalendar(false);
              }}
              markedDates={{
                [selectedDate]: {
                  selected: true,
                  selectedColor: STYLES.colors.blue[600],
                },
              }}
              renderArrow={(direction: 'left' | 'right') => (
                <View
                  style={[
                    styles.arrowButton,
                    direction === 'left' ? styles.arrowLeft : styles.arrowRight,
                  ]}>
                  {direction === 'left' ? (
                    <ChevronLeftIcon
                      size={20}
                      color={STYLES.colors.black[600]}
                    />
                  ) : (
                    <ChevronRightIcon
                      size={20}
                      color={STYLES.colors.black[600]}
                    />
                  )}
                </View>
              )}
              theme={{
                calendarBackground: '#FFF',
                textSectionTitleColor: STYLES.colors.black[600],
                selectedDayBackgroundColor: STYLES.colors.blue[600],
                selectedDayTextColor: '#FFF',
                todayTextColor: STYLES.colors.blue[600],
                dayTextColor: STYLES.colors.black[800],
                textDisabledColor: STYLES.colors.black[300],
                dotColor: STYLES.colors.blue[600],
                selectedDotColor: '#FFF',
                arrowColor: STYLES.colors.blue[600],
                monthTextColor: STYLES.colors.black[800],
                indicatorColor: STYLES.colors.blue[600],
                textDayFontFamily: STYLES.fonts.regular,
                textMonthFontFamily: STYLES.fonts.bold,
                textDayHeaderFontFamily: STYLES.fonts.medium,
                textDayFontSize: 14,
                textMonthFontSize: 16,
                textDayHeaderFontSize: 14,
              }}
            />
          </View>
        </View>
      </Modal>
    </PageContainer>
  );
}

const styles = StyleSheet.create({
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
  sectionTitle: {
    fontSize: 18,
    fontFamily: STYLES.fonts.bold,
    color: STYLES.colors.black[800],
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 8,
  },
  label: {
    fontSize: 14,
    fontFamily: STYLES.fonts.medium,
    color: STYLES.colors.black[600],
    marginBottom: 8,
  },
  dateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    borderColor: STYLES.colors.black[200],
    borderRadius: 10,
    padding: 12,
    backgroundColor: '#FFF',
  },
  dateButtonText: {
    fontSize: 14,
    fontFamily: STYLES.fonts.regular,
    color: STYLES.colors.black[600],
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 16,
    width: '90%',
    maxWidth: 400,
  },
  arrowButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowLeft: {
    marginRight: 8,
  },
  arrowRight: {
    marginLeft: 8,
  },
});
