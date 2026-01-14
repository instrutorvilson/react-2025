import { StyleSheet, Text, View, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { TextInput } from 'react-native-web';

export default function App() {
  const [nome, setNome] = useState('')

  useEffect(() => {
    carregarNome();
  }, []);

  async function salvarNome() {
    await AsyncStorage.setItem('nome', nome);
  }

  async function carregarNome() {
    const nomeSalvo = await AsyncStorage.getItem('nome');
    nomeSalvo ? setNome(nomeSalvo) : setNome('');
  }

  return (
    <View style={styles.container}>
      <Text style={{marginVertical: 10}}>Nome salvo: {nome}</Text>

      <TextInput 
        placeholder="EX: ana"
        onChangeText={setNome}
        value={nome}
        style={styles.input}              
      />
      <Button title="Salvar nome" onPress={salvarNome} />
      
      <Button title="limpar nome" onPress={async() => await AsyncStorage.removeItem('nome')} />

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 20  
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5
  }
});
