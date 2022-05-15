import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 48,
  },
  title: {
    fontSize: 20,
    fontFamily: theme.fonts.medium,
    marginbottom: 32,
    color: theme.colors.text_primary,
  },
});
