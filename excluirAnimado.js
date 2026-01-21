import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import SwipeItem from './swipeItem';

export default function Excluir() {
  const [dados, setDados] = useState([
    { id: '1', texto: 'Item 1' },
    { id: '2', texto: 'Item 2' },
    { id: '3', texto: 'Item 3' }
  ]);

  function excluirItem(id) {
    setDados(lista => lista.filter(item => item.id !== id));
  }

  return (
    <View>
      <FlatList
        data={dados}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SwipeItem
            texto={item.texto}
            onDelete={() => excluirItem(item.id)}
          />
        )}
      />
    </View>
  );
}
