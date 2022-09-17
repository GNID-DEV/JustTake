import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.blue,
    marginBottom: 0,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  uploadContainer: {
    width: 100,
    height: 100,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.grey,
    borderStyle: 'dotted',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 25,
    marginBottom: 40,
  },
  uploadCircle: {
    width: 32,
    height: 32,
    borderRadius: 20,
    backgroundColor: colors.lightGrey,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadPlus: {
    color: colors.white,
    fontSize: 28,
    marginTop: -4,
  },
  imageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingBottom: 16,
  },
  imageCont: {
    flexDirection: 'row',
    marginTop: 8,
    marginRight: 8,
  },
  delete: {
    width: 38,
    height: 38,
    marginLeft: -20,
    marginTop: -20,
  },
  textarea: {
    minHeight: 150,
    paddingTop: 16,
  },
  button: {
    marginTop: 8,
    marginBottom: 160,
    backgroundColor: colors.darkPurple,
  },
});
