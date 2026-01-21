import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  PanResponder,
  Pressable,
} from "react-native";

const LIMITE = 120;
const LARGURA_BOTAO = 80;

export default function SwipeItem({ texto, onDelete }) {
  const translateX = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,

      onPanResponderMove: (evt, gesture) => {
        // trava vertical (FlatList + Expo)
        if (Math.abs(gesture.dx) > Math.abs(gesture.dy)) {
          if (gesture.dx < 0) {
            translateX.setValue(gesture.dx);
          }
        }
      },

      onPanResponderRelease: (evt, gesture) => {
        if (gesture.dx < -LIMITE) {
          // desliza até mostrar o botão
          Animated.spring(translateX, {
            toValue: -LARGURA_BOTAO,
            useNativeDriver: false
          }).start();
        } else {
          // volta
          Animated.spring(translateX, {
            toValue: 0,
            useNativeDriver: false
          }).start();
        }        
      },
    }),
  ).current;

  return (
    <View style={styles.wrapper}>
      {/* Fundo vermelho */}
      <View style={styles.deleteContainer}>
        <Pressable onPress={onDelete}>
          <Text style={styles.deleteText}>Excluir</Text>
        </Pressable>
      </View>

      {/* Item arrastável */}
      <Animated.View
        {...panResponder.panHandlers}
        style={[styles.item, { transform: [{ translateX }] }]}
      >
        <Text style={styles.text}>{texto}</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 6,
    marginHorizontal: 10,
  },

  deleteContainer: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: 60,
    backgroundColor: "#e74c3c",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    margin: 0,
  },

  deleteText: {
    color: "#fff",
    fontWeight: "bold",
  },

  item: {
    backgroundColor: "#aaa",
    padding: 5,
    borderRadius: 6,
    elevation: 2,
    width: 200,
  },

  text: {
    fontSize: 16,
  },
});
