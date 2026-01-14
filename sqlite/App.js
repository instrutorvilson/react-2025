import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { criarTabela } from './database/db'
import  CrudProdutos  from './componentes/crudProdutos';

export default function App() {
  useEffect(() => {
    async function init() {
      await criarTabela(); 
    }
    init();
  }, []);
  
  return <CrudProdutos />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
   input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    width: 200
  }
});
