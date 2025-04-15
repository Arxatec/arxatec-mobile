import {MediaItem, ProfileData} from '../types';

export const mediaDummy: MediaItem[] = Array.from({length: 8}, (_, i) => ({
  id: i.toString(),
  uri: 'https://random.imagecdn.app/500/550',
}));

export const profileData: ProfileData = {
  name: 'María López',
  role: 'Abogado',
  avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  description: 'Cliente con caso de despido improcedente',
  email: 'yerik05vh@gmail.com',
  phone: '+57 312 345 6789',
};
