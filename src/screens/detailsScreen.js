import { View, Text, Button } from "react-native";
export default function DetailsScreen({ route, navigation }) {
  const {id, descricao} = route.params  
  return (
    <View>
      <Text>Detalhes: {id}-{descricao}</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}
