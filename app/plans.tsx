import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { plans } from "@/assets/data/meals";
import CustomButton from "@/components/CustomButton";
import { useColorScheme } from "nativewind";

const cart = () => {
  const navigation = useNavigation();
  const [cartQty, setCartQty] = useState(5);
  const { colorScheme } = useColorScheme()

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Shopping Cart",
      headerTitle: () => (
        <View className="flex-row gap-1 items-center">
          <Text className="text-[21px] font-psemibold pt-1 text-primary dark:text-white">Plans</Text>
          <Text className="text-sm font-bold text-primary dark:text-white">({cartQty})</Text>
        </View>
      ),
      headerShadowVisible: false,
      headerStyle: {
        backgroundColor: colorScheme === "dark" ? "#27272a" : "#fff"
      },
      headerLeft: () =>{
        return (
          <TouchableOpacity>
            <Ionicons name="chevron-back-outline" size={24} onPress={navigation.goBack} color={colorScheme === "dark" ? "#fff" : "#000"} />
          </TouchableOpacity>
        )
      },
      headerRight: () => (
        <TouchableOpacity>
          <Ionicons name="ellipsis-vertical-outline" size={24} color={colorScheme === "dark" ? "#fff" : "#000"} />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-zinc-950" edges={["bottom"]}>
      <FlatList
        className="h-full"
        data={plans}
        keyExtractor={(item, index) => `${item}-${index}`}
        ItemSeparatorComponent={() => (
          <View className="h-[1px] bg-muted-foreground dark:bg-dark-muted-foreground"></View>
        )}
        renderItem={({ item, index }) => (
          <View className="p-4 px-6">
            <View className="p-6 rounded-xl" style={{ backgroundColor: item.bgColor }}>
              <Text className="text-lg font-bold text-white">{item.name}</Text>
              <Text className="text-md font-semibold text-white mt-1">{item.price}</Text>
              <View className="mt-2">
                {item.features.map((feature, index) => (
                  <Text key={index} className="text-white text-sm">• {feature}</Text>
                ))}
              </View>
              <TouchableOpacity className="mt-4 bg-white rounded-full py-2 px-4" onPress={() => router.push("/checkout")}>
                <Text className="text-center font-bold text-black">Select Plan</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListFooterComponent={() => (
          <>
            <View className="h-[1px] bg-grey1 mb-8"></View>
          </>
        )}
      />
    </SafeAreaView>
  );
};

export default cart;

const styles = StyleSheet.create({});
