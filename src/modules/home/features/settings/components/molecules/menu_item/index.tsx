import React from 'react';
import {View, StyleSheet, TouchableOpacity, Switch} from 'react-native';
import {ChevronRightIcon} from 'react-native-heroicons/outline';
import {STYLES} from '@/utils';
import {SettingsIcon} from '../../atoms/settings_icon';
import {SettingsText} from '../../atoms/settings_text';

interface MenuItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  showArrow?: boolean;
  showSwitch?: boolean;
  switchValue?: boolean;
  onSwitchChange?: (value: boolean) => void;
  onPress?: () => void;
  color?: string;
  textColor?: string;
  hasSubtitle?: boolean;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  title,
  subtitle,
  showArrow = true,
  showSwitch = false,
  switchValue = false,
  onSwitchChange,
  onPress,
  color,
  textColor,
  hasSubtitle = true,
}) => {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={styles.menuItemLeft}>
        <SettingsIcon icon={icon} color={color} />
        <View style={styles.menuItemTextContainer}>
          <SettingsText variant="menuTitle" color={textColor}>
            {title}
          </SettingsText>
          {hasSubtitle && (
            <SettingsText variant="menuSubtitle">{subtitle}</SettingsText>
          )}
        </View>
      </View>
      {showArrow && !showSwitch && (
        <ChevronRightIcon size={18} color={STYLES.colors.black[500]} />
      )}
      {showSwitch && (
        <Switch
          value={switchValue}
          onValueChange={onSwitchChange}
          trackColor={{
            false: STYLES.colors.black[200],
            true: STYLES.colors.blue[600],
          }}
          thumbColor="#FFFFFF"
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: STYLES.colors.black[50],
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  menuItemTextContainer: {
    marginLeft: 16,
  },
});
