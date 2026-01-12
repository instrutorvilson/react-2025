import { StatusBar } from 'expo-status-bar';
import { Text, View,TextInput, Button, TouchableOpacity } from 'react-native';
import Cat from './componentes/cat';
import { useState } from 'react';
import styles from './styles/estilos';

function ola(){
  alert('olá')
}

export default function App() {
    const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Hello world</Text>
      <Cat nome='Thunder cats'/>
      <Cat nome='Baguera'/>

      <TextInput
        placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
        style={{
          marginTop: 30,
          height: 40,
          padding: 5,
          marginHorizontal: 8,
          borderWidth: 1,
        }}        
      />
      <Button title='gravar' onPress={ola}/>
      <TouchableOpacity 
        onPress={ola}
        style={
          { marginTop:20,
            backgroundColor:'red'
          }
        }>
        <Text>Gravar</Text>
      </TouchableOpacity>
      <StatusBar style="inverted" />
    </View>
  );
}


