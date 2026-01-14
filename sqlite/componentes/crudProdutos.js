import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  FlatList,
} from "react-native";
import { inserir, listar } from "../database/db";

export default function CrudProdutos() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  
  const [produtos, setProdutos] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    carregar();
  }, []);

  async function carregar() {
    const dados = await listar();
    setProdutos(dados);
  }

  async function inserirProduto() {
    try {
      if (!nome || !preco) {
        setMsg("Preencha todos os campos");
        return;
      }

      const precoFormatado = parseFloat(preco.replace(",", "."));

      if (isNaN(precoFormatado)) {
        setMsg("Preço inválido");
        return;
      }
      await inserir(nome, Number(precoFormatado));
      setMsg("Produto inserido com sucesso");
      setNome("");
      setPreco("");
      await carregar();
    } catch (err) {
      setMsg(err.message);
    }
  }
  return (
    <View style={styles.container}>
      <Text>Persistência com SQlite</Text>
      <Text style={{ marginVertical: 10 }}>Produto</Text>

      <TextInput
        style={styles.input}
        placeholder="Ex: milho"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Ex: 15.50"
        keyboardType="numeric"
        value={preco}
        onChangeText={setPreco}
      />

      <Pressable onPress={inserirProduto}>
        <Text>Salvar</Text>
      </Pressable>

      <Text>{msg}</Text>

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.nome} - {item.preco}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#999",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    width: 200,
  },
});
