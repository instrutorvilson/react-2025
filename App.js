import { useState } from 'react';
import { 
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  Alert } from 'react-native'
import CardContato from './componentes/CardContato';

export default function App() {
  const [nome, setNome] = useState('');
  const [contatos, setContatos] = useState([]);
  const [editandoId, setEditandoId] = useState(null);
  
  function salvarContato() {
    if (!nome.trim()) return;

    if (editandoId) {
      setContatos(
        contatos.map(c =>
          c.id === editandoId ? { ...c, nome } : c
        )
      );
      setEditandoId(null);
    } else {
      setContatos([
        ...contatos,
        { id: Date.now().toString(), nome },
      ]);
    }
    setNome('');
  }

  function editarContato(contato) {
    setNome(contato.nome);
    setEditandoId(contato.id);
  }

  function excluirContato(id) {
    Alert.alert(
      'Confirmar exclusão',
      'Deseja realmente excluir este contato?',
      [
        { text: 'Cancelar' },
        {
          text: 'Excluir',
          onPress: () =>
            setContatos(contatos.filter(c => c.id !== id)),
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro de Contatos</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o nome"
        value={nome}
        onChangeText={setNome}
      />

      <Button
        title={editandoId ? 'Salvar alteração' : 'Cadastrar'}
        onPress={salvarContato}
      />
      
      <FlatList
        style={{marginLeft:10,marginRight:10}}
        data={contatos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <CardContato
            nome={item.nome}
            onEditar={() => editarContato(item)}
            onExcluir={() => excluirContato(item.id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: '#fff',
    alignItems: 'stretch'
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5
  },
  titulo:{
    marginTop: 10,
    padding: 5,
    fontSize: 18,
    backgroundColor: '#999',
    marginBottom: 10
  }
});

