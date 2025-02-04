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
import { musics } from "@/assets/data/meals";
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
        data={musics}
        keyExtractor={(item, index) => `${item}-${index}`}
        ItemSeparatorComponent={() => (
          <View className="h-[1px] bg-muted-foreground dark:bg-dark-muted-foreground"></View>
        )}
        renderItem={({ item, index }) => (
          <View className="p-4 px-6">
            <View className="flex-row items-start gap-4 bg-zinc-200 dark:bg-zinc-800">
              <Image
                source={{ uri: item.image }}
                className="h-[60px] w-[60px] rounded-xl"
              />
            </View>
          </View>
        )}
        ListFooterComponent={() => (
          <>
            <View className="h-[1px] bg-grey1 mb-8"></View>
          </>
        )}
      />

      <View className="absolute bottom-0 right-0 left-0 px-6 bg-white dark:bg-zinc-950 py-2 pb-6">
        <CustomButton
          extraBtnClass="bg-app-600 shadow-xl shadow-app-600"
          extraTxtClass="text-white"
          label="Checkout"
          handlePress={() => router.push("/checkout")}
        />
      </View>
    </SafeAreaView>
  );
};

export default cart;

const styles = StyleSheet.create({});
