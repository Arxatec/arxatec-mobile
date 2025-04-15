export interface Message {
  id: string;
  sender: string;
  text: string;
  time: string;
  type: 'sent' | 'received';
}

export const mockMessages: Message[] = [
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
