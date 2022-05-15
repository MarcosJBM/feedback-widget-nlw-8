import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    widht: 36,
    height: 36,
    marginTop: 42,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: theme.fonts.medium,
    marginbottom: 24,
    color: theme.colors.text_primary,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    marginBottom: 56,
    paddingHorizontal: 24,
    borderRadius: 4,
    backgroundColor: theme.colors.surface_secondary,
  },
  buttonTitle: {
    fontSize: 14,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_primary,
  },
});
