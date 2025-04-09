import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {ChevronDownIcon} from 'react-native-heroicons/outline';
import {STYLES} from '@/utils/styles-utils';

interface DropdownItem {
  label: string;
  value: string;
}

interface CustomDropdownProps {
  data: DropdownItem[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  labelField?: string;
  valueField?: string;
}

export const CustomDropdown = ({
  data,
  value,
  onChange,
  placeholder = 'Seleccionar',
  labelField = 'label',
  valueField = 'value',
}: CustomDropdownProps) => {
  return (
    <View style={styles.container}>
      <Dropdown
        containerStyle={{
          backgroundColor: '#FFF',
          borderRadius: 8,
          shadowColor: '#FFF',
          borderWidth: 1,
          borderColor: STYLES.colors.black[100],
        }}
        itemContainerStyle={{}}
        itemTextStyle={{
          fontFamily: STYLES.fonts.regular,
          fontSize: 14,
          color: STYLES.colors.black[600],
        }}
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField={labelField}
        valueField={valueField}
        placeholder={placeholder}
        value={value}
        onChange={item => {
          onChange(item[valueField]);
        }}
        renderRightIcon={() => (
          <ChevronDownIcon size={20} color={STYLES.colors.black[500]} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  dropdown: {
    height: 45,
    borderColor: STYLES.colors.black[300],
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#FFF',
  },
  placeholderStyle: {
    fontSize: 14,
    color: STYLES.colors.black[400],
    fontFamily: STYLES.fonts.regular,
  },
  selectedTextStyle: {
    fontSize: 14,
    color: STYLES.colors.black[800],
    fontFamily: STYLES.fonts.medium,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    borderColor: STYLES.colors.black[300],
    fontFamily: STYLES.fonts.regular,
  },
});
