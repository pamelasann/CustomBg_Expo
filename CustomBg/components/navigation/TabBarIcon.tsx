// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import Ionicons from '@expo/vector-icons/Ionicons';
import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import Feather from '@expo/vector-icons/Feather';
import { type ComponentProps } from 'react';

export function TabBarIcon({ style, ...rest }: IconProps<ComponentProps<typeof Feather>['name']>) {
  return <Feather size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
}
