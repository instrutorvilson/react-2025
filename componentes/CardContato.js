import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CardContato({ nome, onEditar, onExcluir }) {
  return (
    <View style={styles.card}>
      <Text style={styles.nome}>{nome}</Text>

      <View style={styles.botoes}>
        <TouchableOpacity style={styles.btnEditar} onPress={onEditar}>
          <Text style={styles.textoBtn}>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnExcluir} onPress={onExcluir}>
          <Text style={styles.textoBtn}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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

