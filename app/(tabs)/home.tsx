import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { musics, musicCategories, promos } from "@/assets/data/meals";
import MusicCard from "@/components/Music";
import { useColorScheme } from "nativewind";

const Home = () => {
  const [Data, setData] = useState(musics);
  const {colorScheme} = useColorScheme()

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-zinc-950">
      <View>
        <FlatList
          className="ml-6"
          data={Data}
          extraData={Data}
          keyExtractor={(item, index) => `${item}-${index}`}
          numColumns={2}
          ListHeaderComponent={() => (
            <>
              <View className="flex-row flex-1 items-center justify-between pt-6 pb-3 pr-6">
                <View>
                  <Text className="text-[15px] font-rbmedium text-muted-foreground dark:text-dark-muted-foreground">
                    Good morning
                  </Text>
                  <Text className="font-pbold text-[35px] text-primary dark:text-primary-foreground">Brad M.</Text>
                </View>

                <TouchableOpacity
                  className="flex-row items-center"
                  onPress={() => router.push("/profile")}
                >
                  <View className="h-[45px] w-[45px] rounded-full bg-white p-1">
                    <View className="h-full w-full bg-app-600 items-center justify-center rounded-full">
                      <Ionicons name="person-circle" color="#fff" size={30} />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>

              <View className="flex-row items-center space-x-3 border border-muted-foreground dark:border-dark-muted-foreground/40 mb-5 px-4 py-3 mr-6 rounded-xl">
                <Ionicons
                  name="search-outline"
                  size={24}
                  color={colorScheme === "dark" ? "#9CA3AF" : "#6B7280"}
                />
                <TextInput
                  placeholder="Search"
                  placeholderTextColor={colorScheme === "dark" ? "#9CA3AF" : "#6B7280"}
                />
              </View>

              <ScrollView horizontal className="mb-8">
                {promos.map((uri, index) => (
                  <View
                    className="w-[280px] h-[160px] mr-5 rounded-xl overflow-hidden"
                    key={index}
                  >
                    <Image
                      source={{ uri }}
                      className="w-full h-full"
                      resizeMode="cover"
                    />
                  </View>
                ))}
              </ScrollView>

              <View className="mb-4 flex-row justify-between items-center pr-4">
                <Text className="font-rbbold text-xl text-primary dark:text-dark-foreground">
                  Categories
                </Text>

                <Link href={"/categories"} asChild>
                  <Ionicons
                    name="chevron-forward"
                    size={24}
                    color={colorScheme === "dark" ? "#9CA3AF" : "#6B7280"}
                  />
                </Link>
              </View>
              <ScrollView horizontal className="mb-10">
                {musicCategories.map((category, i) => (
                  <Link href={"/products"} key={i} asChild>
                    <TouchableOpacity className="w-[90px] h-[95px] mr-3 rounded-xl overflow-hidden relative">
                      <Image
                        source={{ uri: category.img }}
                        className="w-full h-full"
                        resizeMode="cover"
                      />
                      <View
                        className={`absolute z-10 top-0 left-0 bottom-0 right-0 justify-center items-center`}
                        style={{ backgroundColor: category.bgColor }}
                      >
                        <View className="items-center">
                          <Ionicons
                            name={category.icon}
                            size={26}
                            color={"#fff"}
                            className="mx-auto"
                          />
                          <Text className="text-white font-psemibold text-[16px]">
                            {category.name}
                          </Text>
                          <Text className="text-white -top-1 text-xs">
                            45 items
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </Link>
                ))}
              </ScrollView>
            </>
          )}
          ListFooterComponent={() => <View className="pb-10"></View>}
          renderItem={({ item, index }) => {
            return (
              <MusicCard
                item={item}
                itemClass="flex-1 mr-4 border-2 border-muted dark:border-muted-foreground/40 mb-4 rounded-lg p-2"
                itemPos={index}
              />
            )
          }}
          style={{ gap: 10 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
