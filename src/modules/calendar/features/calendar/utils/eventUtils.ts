import moment from 'moment';
import {Event, CategoryTitles, CategoryDescriptions} from '../types';

// Función para generar eventos de abogado
export const generateEvents = (): Event[] => {
  const events: Event[] = [];
  const today = moment();

  // Categorías específicas para abogados
  const categories = [
    'cliente',
    'tribunal',
    'capacitación',
    'administrativo',
    'investigación',
  ];

  const titles: CategoryTitles = {
    cliente: [
      'Reunión inicial con cliente',
      'Asesoría jurídica',
      'Revisión de caso con cliente',
      'Preparación de testigo',
      'Negociación con cliente',
      'Entrevista a testigos',
      'Firma de documentos',
      'Reunión de seguimiento',
    ],
    tribunal: [
      'Audiencia preliminar',
      'Juicio oral',
      'Mediación',
      'Arbitraje',
      'Preparación previa a audiencia',
      'Comparecencia judicial',
      'Alegatos orales',
      'Lectura de sentencia',
    ],
    capacitación: [
      'Curso de actualización legal',
      'Conferencia jurídica',
      'Taller de reformas',
      'Seminario especializado',
      'Certificación profesional',
      'Webinar legal',
      'Congreso de derecho',
      'Capacitación interna',
    ],
    administrativo: [
      'Reunión de socios',
      'Planificación estratégica',
      'Revisión de presupuesto',
      'Evaluación de personal',
      'Comité ejecutivo',
      'Reunión departamental',
      'Gestión de recursos',
      'Reunión con contabilidad',
    ],
    investigación: [
      'Investigación de jurisprudencia',
      'Análisis de precedentes',
      'Revisión documental',
      'Estudio de caso',
      'Recopilación de pruebas',
      'Preparación de informe',
      'Consulta con peritos',
      'Redacción de demanda',
    ],
  };

  const descriptions: CategoryDescriptions = {
    cliente: [
      'Caso de divorcio contencioso',
      'Asesoría en derecho mercantil',
      'Caso de lesiones personales',
      'Litigio de propiedad intelectual',
      'Defensa penal',
      'Reclamación de seguros',
      'Disputa contractual',
      'Caso de responsabilidad médica',
    ],
    tribunal: [
      'Juzgado Civil',
      'Tribunal Fiscal',
      'Corte de Apelaciones',
      'Juzgado Familiar',
      'Tribunal Laboral',
      'Corte Penal',
      'Tribunal Administrativo',
      'Juzgado Mercantil',
    ],
    capacitación: [
      'Reformas fiscales recientes',
      'Protección de datos personales',
      'Derecho ambiental',
      'Actualización en derecho laboral',
      'Derecho corporativo',
      'Propiedad intelectual',
      'Litigación estratégica',
      'Compliance legal',
    ],
    administrativo: [
      'Revisión de objetivos trimestrales',
      'Planificación de recursos',
      'Evaluación de rendimiento',
      'Presupuesto anual',
      'Estrategias de crecimiento',
      'Políticas internas',
      'Contratación de personal',
      'Optimización de procesos',
    ],
    investigación: [
      'Caso de precedente importante',
      'Análisis de legislación reciente',
      'Investigación para demanda colectiva',
      'Estudio de doctrina legal',
      'Revisión de expediente extenso',
      'Búsqueda de inconsistencias',
      'Desarrollo de teoría del caso',
      'Fundamentos jurídicos',
    ],
  };

  // Solo generamos eventos para algunos días específicos, no para todos los días
  // Para simular un calendario realista de abogado

  // Definimos cuántos días con eventos queremos en un período de 30 días
  const numDaysWithEvents = 10; // Aproximadamente un tercio de los días

  // Generamos un array con índices aleatorios únicos para los días que tendrán eventos
  const daysWithEvents = new Set<number>();
  while (daysWithEvents.size < numDaysWithEvents) {
    // Rango de días entre -15 y 14 (30 días en total)
    const randomDay = Math.floor(Math.random() * 30) - 15;
    daysWithEvents.add(randomDay);
  }

  // Convertimos el Set a Array para facilitar la iteración
  const daysWithEventsArray = Array.from(daysWithEvents);

  // Para cada día seleccionado, generamos entre 2-4 eventos
  daysWithEventsArray.forEach(i => {
    const day = today.clone().add(i, 'days');

    // Generar entre 2-4 eventos por día seleccionado (más realista para un abogado)
    const numEvents = Math.floor(Math.random() * 3) + 2;

    for (let j = 0; j < numEvents; j++) {
      const categoryIndex = Math.floor(Math.random() * categories.length);
      const category = categories[categoryIndex];

      const titlesList = titles[category] || [];
      const descriptionsList = descriptions[category] || [];

      const titleIndex = Math.floor(Math.random() * titlesList.length);
      const descIndex = Math.floor(Math.random() * descriptionsList.length);

      // Generar hora de trabajo: entre 8:00 y 19:00 (con saltos de 30 min)
      const hour = Math.floor(Math.random() * 11) + 8;
      const minute = Math.floor(Math.random() * 2) * 30; // 00 o 30
      const timeStr = `${hour.toString().padStart(2, '0')}:${minute
        .toString()
        .padStart(2, '0')}`;

      events.push({
        id: `${i}-${j}-${Date.now() + Math.floor(Math.random() * 1000)}`,
        title: titlesList[titleIndex],
        description: descriptionsList[descIndex],
        date: day.toDate(),
        time: timeStr,
        category: category,
      });
    }
  });

  // Ordenar eventos por fecha y hora
  return events.sort((a, b) => {
    const dateA = moment(a.date).format('YYYY-MM-DD');
    const dateB = moment(b.date).format('YYYY-MM-DD');

    if (dateA !== dateB) {
      return dateA.localeCompare(dateB);
    }
    // @ts-ignore
    return a.time.localeCompare(b.time);
  });
};
