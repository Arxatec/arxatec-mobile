import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  DocumentTextIcon,
  InformationCircleIcon,
} from 'react-native-heroicons/solid';
import {STYLES} from '@/utils';
import {SectionTitle} from '../../atoms/section_title';

interface InfoSectionProps {
  description: string;
  email: string;
  phone: string;
}

export const InfoSection: React.FC<InfoSectionProps> = ({
  description,
  email,
  phone,
}) => {
  return (
    <>
      <View style={styles.section}>
        <SectionTitle
          icon={<DocumentTextIcon color={STYLES.colors.black[700]} size={18} />}
          title="Descripción"
        />
        <Text style={styles.sectionContent}>{description}</Text>
      </View>

      <View style={styles.section}>
        <SectionTitle
          icon={
            <InformationCircleIcon color={STYLES.colors.black[700]} size={18} />
          }
          title="Información"
        />
        <Text style={styles.infoText}>
          <Text style={styles.infoLabel}>Email:</Text> {email}
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.infoLabel}>Celular:</Text> {phone}
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 4,
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 9,
  },
  sectionContent: {
    fontSize: 14,
    color: STYLES.colors.black[600],
    fontFamily: STYLES.fonts.regular,
  },
  infoText: {
    fontSize: 14,
    color: STYLES.colors.black[600],
    marginBottom: 4,
    fontFamily: STYLES.fonts.regular,
  },
  infoLabel: {
    fontFamily: STYLES.fonts.medium,
    color: STYLES.colors.black[700],
  },
});
