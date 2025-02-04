import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { musics } from "@/assets/data/meals";
import { useColorScheme } from "nativewind";

const Favorite = () => {
  const navigation = useNavigation();
  const { colorScheme } = useColorScheme()

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Favorites",
      headerTitle: "Favorites",
      headerShadowVisible: false,
      headerStyle: {
        backgroundColor: colorScheme === "dark" ? "#27272a" : "#fff"
      },
      headerTitleStyle: {
        fontFamily: "Poppins-SemiBold",
        color: colorScheme === "dark" ? "#fff" : "#000",
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
        ListFooterComponent={() => (
          <>
            <View className="h-[1px] bg-grey1"></View>
            <View className="pb-16"></View>
          </>
        )}
        renderItem={({ item, index }) => (
          <View className="p-4 px-6">
            <View className="flex-row items-center gap-6 relative">
              <TouchableOpacity className="absolute -top-1 -left-2 bg-red-500 rounded-xl p-2 z-10">
                <Ionicons name="heart-outline" size={16} color={"#fff"} />
              </TouchableOpacity>

              <Image
                source={{ uri: item.image }}
                className="h-[80px] w-[85px] rounded-xl"
              />

              <View className="flex-1">
                <TouchableOpacity onPress={() => router.push('/details')}>
                  <Text className="text-lg font-psemibold text-primary dark:text-white">{item.name}</Text>
                  <View className="gap-2 flex-row items-end">
                    <Text className="font-semibold text-muted-foreground dark:text-dark-muted-foreground text-sm">
                      {item.artist}
                    </Text>
                  </View>
                </TouchableOpacity>

                <View className="flex-row items-center justify-between">
                  <View className="flex-row items-center">
                    <Ionicons name="time" size={14} color="#ea580c" />
                    <Text className="text-[13px] font-pmedium text-app-600 ml-2">
                      {item.duration}
                    </Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity className="p-2 bg-app-600 rounded-full">
                <Ionicons name="play" size={20} color={"#fff"} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Favorite;

const styles = StyleSheet.create({});
