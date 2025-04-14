import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
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
  label?: string;
  placeholder?: string;
  labelField?: string;
  valueField?: string;
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
        containerStyle={styles.dropdownContainer}
        itemTextStyle={styles.itemTextStyle}
        searchPlaceholder="Buscar..."
        searchPlaceholderTextColor={STYLES.colors.black[400]}
        search={search}
        style={styles.dropdown}
        activeColor={STYLES.colors.black[100]}
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
          <View style={styles.searchContainer}>
            <View style={styles.searchInputContainer}>
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
  label: {
    color: STYLES.colors.black[600],
    fontFamily: STYLES.fonts.medium,
    fontSize: 14,
    marginBottom: 8,
  },
  dropdown: {
    height: 45,
    borderWidth: 1,
    borderColor: STYLES.colors.black[200],
    borderRadius: 10,
    paddingHorizontal: 16,
    backgroundColor: '#FFF',
  },
  dropdownContainer: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    shadowColor: '#FFF',
    borderWidth: 1,
    borderColor: STYLES.colors.black[100],
  },
  itemTextStyle: {
    fontFamily: STYLES.fonts.regular,
    fontSize: 14,
    color: STYLES.colors.black[600],
  },
  placeholderStyle: {
    fontFamily: STYLES.fonts.regular,
    fontSize: 14,
    color: STYLES.colors.black[400],
  },
  selectedTextStyle: {
    fontFamily: STYLES.fonts.regular,
    fontSize: 14,
    color: STYLES.colors.black[950],
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  searchContainer: {
    padding: 8,
  },
  searchInputContainer: {
    height: 45,
  },
});
