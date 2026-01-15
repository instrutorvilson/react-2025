import { View, Text, Button } from "react-native";
export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Produto"
        onPress={() => navigation.navigate("Produto")}
      />
    </View>
  );
}
