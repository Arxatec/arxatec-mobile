import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import {STYLES} from '@/utils/styles-utils';
import {CustomInput} from '../custom_input';

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
  label?: string;
  search?: boolean;
}

export const CustomDropdown = ({
  data,
  value,
  onChange,
  label,
  placeholder = 'Seleccionar',
  labelField = 'label',
  valueField = 'value',
  search = false,
}: CustomDropdownProps) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <Dropdown
        containerStyle={{
          backgroundColor: '#FFF',
          borderRadius: 8,
          shadowColor: '#FFF',
          borderWidth: 1,
          borderColor: STYLES.colors.black[100],
        }}
        itemTextStyle={{
          fontFamily: STYLES.fonts.regular,
          fontSize: 14,
          color: STYLES.colors.black[600],
        }}
        searchPlaceholder="Buscar..."
        searchPlaceholderTextColor={STYLES.colors.black[400]}
        search={search}
        style={styles.dropdown}
        activeColor={STYLES.colors.black[200]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField={labelField}
        valueField={valueField}
        placeholder={placeholder}
        value={value}
        showsVerticalScrollIndicator={false}
        renderInputSearch={onSearch => (
          <View
            style={{
              padding: 8,
            }}>
            <View
              style={{
                height: 45,
              }}>
              <CustomInput
                placeholder="Buscar..."
                onChangeText={onSearch}
                startAdornment={
                  <MagnifyingGlassIcon
                    size={18}
                    color={STYLES.colors.black[400]}
                  />
                }
              />
            </View>
          </View>
        )}
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
    height: 42,
    borderColor: STYLES.colors.black[200],
    borderWidth: 1,
    borderRadius: 10,
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

  label: {
    color: STYLES.colors.black[600],
    fontFamily: STYLES.fonts.medium,
    fontSize: 14,
    marginBottom: 8,
  },
});
