import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A'
  },
  header: {
    width: '100%',
    height: 173,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0D0D0D'
  },
  imageHeader: {
    width: 110,
    height: 32
  },
  containerContent: {
    flex: 1,
    marginTop: -30,
    paddingHorizontal: 24
  },
  containerAddTask: {
    width: '100%',
    flexDirection: 'row',
    gap: 4
  },
  inputNewTask: {
    flex: 1,
    padding: 16,
    paddingHorizontal: 16,
    backgroundColor: '#262626',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000',
    color: '#F2F2F2'
  },
  buttonAddTask: {
    padding: 18,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E6F9F',
    borderRadius: 6
  },
  containerTaskInfos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 32
  },
  containerTasksInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  textInfoCreated: {
    color: '#4EA8DE',
    fontSize: 14,
    fontWeight: 'bold'
  },
  textInfoNumber: {
    backgroundColor: '#333',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
    color: '#D9D9D9',
    fontSize: 12,
    fontWeight: 'bold'
  },
  textInfoCompleted: {
    color: '#8284FA',
    fontSize: 14,
    fontWeight: 'bold'
  },
  containerEmpty: {
    flex: 1,
    borderTopWidth: 1,
    borderColor: '#333',
    paddingVertical: 48,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16
  },
  textEmptyStrong: {
    color: '#808080',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  textEmpty: {
    color: '#808080',
    fontSize: 14,
    textAlign: 'center'
  }
})
