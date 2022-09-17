import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 8,
    color: colors.blue,
    fontSize: 14,
    fontWeight: '500',
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    flex: 1,
  },
  eye: {
    width: 24,
    height: 24,
    marginHorizontal: 16,
  },
  arrow: {
    width: 24,
    height: 24,
    marginHorizontal: 16,
    transform: [{rotate: '90deg'}],
  },
  placeholder: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    flex: 1,
    color: colors.lightGrey,
  },
  modalWrapper: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  modalContent: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 30,
    width: '60%',
    opacity: 0.9,
  },
  headerTitle: {
    marginBottom: 16,
    color: colors.black,
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  optionText: {
    color: colors.darkGrey,
    paddingVertical: 18,
    fontSize: 16,
    alignSelf: 'center',
  },
  selectedOption: {
    color: colors.purple,
    fontWeight: 'bold',
  },
});
