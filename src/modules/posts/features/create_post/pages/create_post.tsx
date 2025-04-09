// CreatePublicationScreen.tsx
import {
  CustomDropdown,
  CustomInput,
  CustomTextArea,
  PrimaryButton,
} from '@/components/atoms';
import {PageContainer} from '@/components/layout';
import {useAppNavigation} from '@/hooks';
import {Community} from '@/navigation/routes';
import {STYLES} from '@/utils';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {ArrowLeftIcon, LinkIcon} from 'react-native-heroicons/outline';
import {DocumentPlusIcon} from 'react-native-heroicons/solid';

type TabType = 'texto' | 'multimedia' | 'enlace';

interface ContentProps {
  content: string;
  setContent: (value: string) => void;
}

const TextContent = ({content, setContent}: ContentProps) => (
  <CustomTextArea
    label="Contenido de tu publicación"
    value={content}
    onChangeText={setContent}
    placeholder="Escribe el contenido de tu publicación aquí..."
  />
);

const MultimediaContent = ({content, setContent}: ContentProps) => (
  <View style={styles.multimediaContainer}>
    <TouchableOpacity style={styles.uploadButton}>
      <DocumentPlusIcon size={32} color={STYLES.colors.black[400]} />
      <Text style={styles.uploadText}>
        Pulsa aquí para subir un archivo multimedia
      </Text>
    </TouchableOpacity>
    {content && (
      <View style={styles.previewContainer}>
        <Text style={styles.previewText}>Vista previa: {content}</Text>
      </View>
    )}
  </View>
);

const LinkContent = ({content, setContent}: ContentProps) => (
  <CustomInput
    label="URL del enlace"
    value={content}
    onChangeText={setContent}
    placeholder="https://ejemplo.com"
    startAdornment={<LinkIcon size={20} color={STYLES.colors.black[400]} />}
  />
);

export default function CreatePost() {
  const [selectedCommunity, setSelectedCommunity] = useState('');
  const [activeTab, setActiveTab] = useState<TabType>('texto');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const {navigateTo} = useAppNavigation();
  const navigateToViewPosts = () => navigateTo(Community.ViewPosts);

  const communities = [
    {label: 'Conoce tus derechos', value: 'derechos'},
    {label: 'Derecho laboral', value: 'comunidad1'},
    {label: 'Derecho familiar', value: 'comunidad2'},
  ];

  const handleTabPress = (tab: TabType) => {
    setActiveTab(tab);
    setContent(''); // Limpiar el contenido al cambiar de pestaña
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'texto':
        return <TextContent content={content} setContent={setContent} />;
      case 'multimedia':
        return <MultimediaContent content={content} setContent={setContent} />;
      case 'enlace':
        return <LinkContent content={content} setContent={setContent} />;
      default:
        return null;
    }
  };

  const handlePublish = () => {
    console.log({
      community: selectedCommunity,
      title,
      content,
      type: activeTab,
    });
    // Aquí iría la lógica para publicar
  };

  return (
    <PageContainer
      scrollEnabled={false}
      translucent={false}
      statusBarBackground={STYLES.colors.white[1]}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <TouchableOpacity onPress={navigateToViewPosts}>
            <ArrowLeftIcon size={20} color={STYLES.colors.black[700]} />
          </TouchableOpacity>
          <Text style={styles.title}>Crear publicación</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: '#FFF',
            borderRadius: 10,
            padding: 16,
            marginBottom: 4,
          }}>
          <View style={styles.dropdownContainer}>
            <CustomDropdown
              label="Elige tu comunidad"
              data={communities}
              value={selectedCommunity}
              onChange={setSelectedCommunity}
              placeholder="Conoce tus derechos"
            />
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#FFF',
            borderRadius: 10,
            padding: 16,
          }}>
          <View style={styles.tabContainer}>
            <TouchableOpacity
              style={[styles.tab, activeTab === 'texto' && styles.activeTab]}
              onPress={() => handleTabPress('texto')}>
              <Text
                style={[
                  styles.tabText,
                  activeTab === 'texto' && styles.activeTabText,
                ]}>
                Texto
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.tab,
                activeTab === 'multimedia' && styles.activeTab,
              ]}
              onPress={() => handleTabPress('multimedia')}>
              <Text
                style={[
                  styles.tabText,
                  activeTab === 'multimedia' && styles.activeTabText,
                ]}>
                Multimedia
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, activeTab === 'enlace' && styles.activeTab]}
              onPress={() => handleTabPress('enlace')}>
              <Text
                style={[
                  styles.tabText,
                  activeTab === 'enlace' && styles.activeTabText,
                ]}>
                Enlace
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <CustomInput
              label="Título de la publicación"
              placeholder="Ej. Título"
              value={title}
              onChangeText={setTitle}
            />
            <View style={{marginTop: 8}}>{renderContent()}</View>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <PrimaryButton
            title="Publicar"
            style={{width: 'auto', paddingHorizontal: 24}}
            onPress={handlePublish}
          />
        </View>
      </ScrollView>
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
  container: {},

  dropdownContainer: {},
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginRight: 8,
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: STYLES.colors.blue[100],
  },
  tabText: {
    color: STYLES.colors.black[600],
    fontFamily: STYLES.fonts.regular,
  },
  activeTabText: {
    color: STYLES.colors.blue[600],
    fontFamily: STYLES.fonts.semi_bold,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 8,
  },
  multimediaContainer: {
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
  previewContainer: {
    marginTop: 8,
    padding: 8,
    backgroundColor: STYLES.colors.black[100],
    borderRadius: 8,
  },
  previewText: {
    color: STYLES.colors.black[600],
    fontFamily: STYLES.fonts.regular,
    fontSize: 14,
  },
});
