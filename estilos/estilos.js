import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 6,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  nome: {
    fontSize: 18,
    marginBottom: 10,
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  btnEditar: {
    backgroundColor: '#1e90ff',
    padding: 8,
    borderRadius: 5,
    marginRight: 8,
  },
  btnExcluir: {
    backgroundColor: '#dc3545',
    padding: 8,
    borderRadius: 5,
  },
  textoBtn: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
export default styles