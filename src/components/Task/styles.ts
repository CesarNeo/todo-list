import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626',
    paddingVertical: 12,
    paddingLeft: 12,
    paddingRight: 8,
    marginBottom: 8,
    flexDirection: 'row',
    minHeight: 40,
    alignItems: 'center',
    gap: 8,
    borderRadius: 8
  },
  textTask: {
    color: '#F2F2F2',
    fontSize: 14,
    flex: 1
  },
  textTaskCompleted: {
    color: '#808080',
    fontSize: 14,
    flex: 1,
    textDecorationLine: 'line-through'
  },
  buttonRemoveTask: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  }
})
