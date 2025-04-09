import {CustomInput} from '@/components/atoms';
import {useAppNavigation} from '@/hooks';
import {Messages} from '@/navigation/routes';
import {STYLES} from '@/utils';
import React, {useState, useEffect} from 'react';
import {pick} from '@react-native-documents/picker';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  ArrowLeftIcon,
  EllipsisVerticalIcon,
} from 'react-native-heroicons/outline';
import {PaperAirplaneIcon, PaperClipIcon} from 'react-native-heroicons/solid';

// Definición de interfaces
interface Message {
  id: string;
  sender: string;
  text: string;
  time: string;
  type: 'sent' | 'received';
}

const mockMessages: Message[] = [
  {
    id: '1',
    sender: 'Juan Pérez',
    text: 'Buenos días, abogado. Tengo una consulta sobre un problema legal con mi arrendador.',
    time: 'Hoy 09:15',
    type: 'received',
  },
  {
    id: '2',
    sender: 'Me',
    text: 'Buenos días, Juan. Claro, ¿qué está sucediendo con el arrendador?',
    time: 'Hoy 09:16',
    type: 'sent',
  },
  {
    id: '3',
    sender: 'Juan Pérez',
    text: 'El contrato dice que tengo derecho a renovar el arrendamiento por un año más, pero el arrendador no está de acuerdo.',
    time: 'Hoy 09:17',
    type: 'received',
  },
  {
    id: '4',
    sender: 'Me',
    text: 'Entiendo. ¿Ya le has notificado por escrito tu intención de renovar el contrato?',
    time: 'Hoy 09:18',
    type: 'sent',
  },
  {
    id: '5',
    sender: 'Juan Pérez',
    text: 'Sí, le envié un correo hace dos semanas, pero no me ha respondido.',
    time: 'Hoy 09:19',
    type: 'received',
  },
  {
    id: '6',
    sender: 'Me',
    text: '¿Tienes una copia del correo que le enviaste? Eso podría ser útil.',
    time: 'Hoy 09:20',
    type: 'sent',
  },
  {
    id: '7',
    sender: 'Juan Pérez',
    text: 'Sí, lo tengo. ¿Debería enviártelo?',
    time: 'Hoy 09:21',
    type: 'received',
  },
  {
    id: '8',
    sender: 'Me',
    text: 'Sí, por favor. Además, ¿hay alguna cláusula específica en el contrato que hable sobre la renovación o los plazos de respuesta?',
    time: 'Hoy 09:22',
    type: 'sent',
  },
  {
    id: '9',
    sender: 'Juan Pérez',
    text: 'Sí, la cláusula 5 menciona que el arrendador debe responder en un plazo de 15 días.',
    time: 'Hoy 09:23',
    type: 'received',
  },
  {
    id: '10',
    sender: 'Me',
    text: 'Eso es importante. ¿El arrendador te ha dado alguna notificación o advertencia sobre el desalojo?',
    time: 'Hoy 09:24',
    type: 'sent',
  },
  {
    id: '11',
    sender: 'Juan Pérez',
    text: 'Sí, me envió una carta ayer donde dice que debo desalojar en 15 días, sin justificación.',
    time: 'Hoy 09:25',
    type: 'received',
  },
  {
    id: '12',
    sender: 'Me',
    text: 'Esto parece una violación de lo estipulado en el contrato. Necesitaré ver la carta. ¿La tienes?',
    time: 'Hoy 09:26',
    type: 'sent',
  },
  {
    id: '13',
    sender: 'Juan Pérez',
    text: 'Sí, te la enviaré ahora mismo.',
    time: 'Hoy 09:27',
    type: 'received',
  },
  {
    id: '14',
    sender: 'Me',
    text: 'Perfecto, la revisaré y te daré un asesoramiento más preciso. ¿Has pagado el alquiler del mes actual?',
    time: 'Hoy 09:28',
    type: 'sent',
  },
  {
    id: '15',
    sender: 'Juan Pérez',
    text: 'Sí, ya lo pagué hace dos días.',
    time: 'Hoy 09:29',
    type: 'received',
  },
  {
    id: '16',
    sender: 'Me',
    text: 'Eso es una buena señal, ya que demuestra que estás cumpliendo con tus obligaciones contractuales.',
    time: 'Hoy 09:30',
    type: 'sent',
  },
  {
    id: '17',
    sender: 'Juan Pérez',
    text: 'Entendido. ¿Cuáles serían los siguientes pasos? ¿Qué opciones tengo?',
    time: 'Hoy 09:31',
    type: 'received',
  },
  {
    id: '18',
    sender: 'Me',
    text: 'Vamos a revisar el contrato y la carta del arrendador. Si la carta no es válida, podemos tomar acciones legales. Si es válida, podemos intentar negociar un acuerdo.',
    time: 'Hoy 09:32',
    type: 'sent',
  },
  {
    id: '19',
    sender: 'Juan Pérez',
    text: 'Gracias, abogado. Enviaré todo ahora mismo para que puedas revisarlo.',
    time: 'Hoy 09:33',
    type: 'received',
  },
  {
    id: '20',
    sender: 'Me',
    text: 'De acuerdo, estaré esperando los documentos. Te responderé tan pronto los revise.',
    time: 'Hoy 09:34',
    type: 'sent',
  },
];

export default function ViewChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const pickDocument = async () => {
    try {
      const res = await pick();
      console.log(res);
    } catch (err) {
      console.log('Error al seleccionar el archivo:', err);
    }
  };

  useEffect(() => {
    setMessages(mockMessages);
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      sender: 'Me',
      text: input,
      time: 'Now',
      type: 'sent',
    };

    setMessages(prev => [...prev, newMessage]);
    setInput('');
  };

  const {navigateTo} = useAppNavigation();
  const navigateToChats = () => navigateTo(Messages.ViewChats);
  const navigateToInfoChat = () => navigateTo(Messages.InfoChat);

  const renderMessage = ({item}: {item: Message}) => {
    const isSent = item.type === 'sent';

    return (
      <View
        style={[
          styles.messageContainer,
          isSent ? styles.sent : styles.received,
        ]}>
        {/* item.type === 'received' && (
          <Text style={styles.sender}>@{item.sender}</Text>
        ) */}
        <View
          style={[
            styles.bubble,
            isSent ? styles.sentBubble : styles.receivedBubble,
          ]}>
          <Text
            style={[
              styles.messageText,
              isSent ? styles.sentText : styles.receivedText,
            ]}>
            {item.text}
          </Text>
          <Text
            style={[
              styles.time,
              isSent ? styles.sentTime : styles.receivedTime,
            ]}>
            {item.time}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <TouchableOpacity onPress={navigateToChats}>
            <ArrowLeftIcon size={20} color={STYLES.colors.black[700]} />
          </TouchableOpacity>
          <Text style={styles.title}>Juan Perez</Text>
        </View>
        <TouchableOpacity onPress={navigateToInfoChat}>
          <EllipsisVerticalIcon size={24} color={STYLES.colors.black[700]} />
        </TouchableOpacity>
      </View>
      <View style={styles.containerMessages}>
        <FlatList
          data={messages}
          keyExtractor={item => item.id}
          renderItem={renderMessage}
          contentContainerStyle={styles.chat}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={styles.inputLayout}>
        <CustomInput
          placeholder="Escribe un mensaje..."
          value={input}
          onChangeText={setInput}
          style={{
            borderWidth: 0,
            borderRadius: 4,
          }}
          endAdornment={
            <TouchableOpacity onPress={pickDocument}>
              <PaperClipIcon size={18} color={STYLES.colors.black[400]} />
            </TouchableOpacity>
          }
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <PaperAirplaneIcon size={16} color="#FFF" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerMessages: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 4,
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: STYLES.fonts.bold,
    color: STYLES.colors.black[800],
  },
  container: {
    flex: 1,
    backgroundColor: STYLES.colors.white[1],
    paddingHorizontal: 16,
  },
  chat: {
    padding: 12,
    paddingBottom: 80,
  },
  messageContainer: {
    flexDirection: 'column',
  },
  sent: {
    alignItems: 'flex-end',
  },
  received: {
    alignItems: 'flex-start',
  },
  sender: {
    fontFamily: STYLES.fonts.bold,
    fontSize: 12,
    color: STYLES.colors.black[900],
  },
  bubble: {
    backgroundColor: STYLES.colors.black[100],
    padding: 12,
    borderRadius: 10,
    maxWidth: '90%',
  },
  messageText: {
    fontFamily: STYLES.fonts.regular,
    fontSize: 14,
    color: STYLES.colors.black[900],
  },
  time: {
    fontFamily: STYLES.fonts.light,
    marginTop: 6,
    fontSize: 10,
    color: STYLES.colors.black[500],
    alignSelf: 'flex-end',
  },
  inputLayout: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 4,
  },

  sendButton: {
    padding: 11,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: STYLES.colors.blue[600],
    borderRadius: 5,
  },
  sentBubble: {
    backgroundColor: STYLES.colors.blue[600],
    marginTop: 8,
  },
  receivedBubble: {
    backgroundColor: STYLES.colors.black[100],
    marginTop: 8,
  },
  sentText: {
    color: STYLES.colors.white[1],
  },
  receivedText: {
    color: STYLES.colors.black[900],
  },
  sentTime: {
    color: STYLES.colors.white[1],
  },
  receivedTime: {
    color: STYLES.colors.black[500],
  },
});
