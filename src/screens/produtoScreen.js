import { View, Text, Button } from "react-native";
export default function ProdutoScreen({ navigation }) {
  return (
    <View>
      <Text>Produto</Text>
      <Button
        title="Ver detalhes"
        onPress={() => navigation.navigate("Details", {id:1, descricao:'milho'})}
      />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}
