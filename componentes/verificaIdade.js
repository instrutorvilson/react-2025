import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from '../styles/estilos_idade';
import { validarDados } from '../services/validacaoService';

export default function Maioridade() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [corMensagem, setCorMensagem] = useState('');

  function verificarIdade() {
    const resultado = validarDados(nome, idade);

    if (!resultado.valido) {
      setMensagem(resultado.mensagem);
      setCorMensagem('orange');
      return;
    }

    if (resultado.idade >= 18) {
      setMensagem(`${nome}, você é maior de idade`);
      setCorMensagem('green');
    } else {
      setMensagem(`${nome}, você é menor de idade`);
      setCorMensagem('red');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Verificação de Idade</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite sua idade"
        keyboardType="numeric"
        value={idade}
        onChangeText={setIdade}
      />

      <Button title="Verificar" onPress={verificarIdade} />

      {mensagem !== '' && (
        <Text style={[styles.resultado, { color: corMensagem }]}>
          {mensagem}
        </Text>
      )}
    </View>
  );
}
