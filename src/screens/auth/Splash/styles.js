// Splash Page StyleSheet
import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    height: '100%',
  },
  image: {
    width: '90%',
    height: '70%',
    marginBottom: 50,
  },
  titleContainer: {
    marginVertical: 54,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  innerTitle: {
    color: colors.pink,
    textDecorationLine: 'underline',
  },
  footerText: {
    color: colors.purple,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 30,
  },
  buttonCont: {width: '100%', flexDirection: 'row'},
});
