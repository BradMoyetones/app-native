import { View, Text, FlatList, TouchableOpacity, RefreshControl } from "react-native";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MusicCard from "@/components/Music";
import { musics } from "@/assets/data/meals";
import { useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import CustomInput from "@/components/CustomInput";
import { useColorScheme } from "nativewind";

const shop = () => {
  const [Data, setData] = useState([...musics, ...musics, ...musics]);
  const navigation = useNavigation();
  const { colorScheme } = useColorScheme()

  useEffect(() => {
    if (Data.length % 2 == 1) {
      setData([...Data]);
    }
  }, []);
  
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Library",
      headerTitle: "Library",
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
      <View className="mt-6">
        <View className="pl-6 pr-5">
          <CustomInput
            iconLeft="search-outline"
            placeholder="Search playlist"
            containerClass="dark:bg-zinc-800"
          />
        </View>
      </View>
      <FlatList
        className="ml-4"
        data={Data}
        extraData={Data}
        keyExtractor={(item, index) => `${item}-${index}`}
        numColumns={2}
        ListFooterComponent={() => <View className="pb-10"></View>}
        renderItem={({ item, index }) => {
          return (
            <MusicCard
              item={item}
              itemClass="flex-1 mr-4 border-2 border-muted dark:border-muted-foreground/40 mb-4 rounded-lg p-2"
              itemPos={index}
            />
          );
        }}
        style={{ gap: 10 }}
        refreshControl={<RefreshControl refreshing={false} onRefresh={() => {}} />}
      />
    </SafeAreaView>
  );
};

export default shop;
