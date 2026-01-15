import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/homeScreen";
import DetailsScreen from "../screens/detailsScreen";
import ProdutoScreen from "../screens/produtoScreen";

const Stack = createNativeStackNavigator();
export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Tela Inicial" }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: "Detalhes" }}
      />
      <Stack.Screen
        name="Produto"
        component={ProdutoScreen}
        options={{ title: "Produto" }}
      />
    </Stack.Navigator>
  );
}
