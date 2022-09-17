// Button StyleSheet
import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.purple,
    paddingVertical: 20,
    paddingHorizontal: 8,
    borderRadius: 14,
    flex: 1,
  },
  title: {
    color: colors.pink,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
