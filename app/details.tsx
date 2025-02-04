import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import StarRating from "react-native-star-rating-widget";
import CustomButton from "@/components/CustomButton";
import { useColorScheme } from "nativewind";

const Details = () => {
  const translationY = useSharedValue(0);
  const HEADER_HEIGHT = 320;
  const navigation = useNavigation();
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const { colorScheme } = useColorScheme()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: "",
      headerTintColor: "#ea580c",
      headerBackground: () => (
        <Animated.View style={[styles.pageHeader, headerAnimatedStyle]} className={"bg-white dark:bg-zinc-800"} />
      ),
      headerLeft: () => (
        <TouchableOpacity
          className=" h-[38px] w-[38px] rounded-full bg-white dark:bg-zinc-800 items-center justify-center"
          onPress={() => navigation.goBack()}
        >
          <Ionicons
            name="arrow-back-outline"
            size={20}
            color={"#ea580c"}
          />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View className="flex-row items-center">
          <TouchableOpacity
            className="h-[38px] w-[38px] rounded-full bg-white dark:bg-zinc-800 items-center justify-center"
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="heart-outline" size={20} color={"#ea580c"} />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    const yOffset = event.contentOffset.y;
    if (translationY.value >= 215) return;
    translationY.value = yOffset;
  });

  const parallaxAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [2, 1, 1]
          ),
        },
      ],
    };
  });

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollOffset.value,
        [0, HEADER_HEIGHT / 1.2],
        [0, 1]
      ),
    };
  });

  return (
    <View style={styles.container} className="bg-white dark:bg-zinc-950">
      <Animated.ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        onScroll={scrollHandler}
      >
        <Animated.View
          style={[
            styles.header,
            { backgroundColor: "transparent" },
            parallaxAnimatedStyle,
          ]}
        >
          <Image
            source={{
              uri: "https://cdn.pixabay.com/photo/2019/12/16/10/49/building-4699096_640.jpg",
            }}
            className="h-[320px] w-full"
            resizeMode="cover"
          />
        </Animated.View>
        <View  className="flex-1 overflow-hidden rounded-t-3xl p-7 -top-5 bg-white dark:bg-zinc-950">
          <Text className="text-[18px] font-psemibold uppercase text-app-600 ">
            Rock
          </Text>
          <Text className="text-[21px] font-pmedium text-primary dark:text-white">Blinding Lights</Text>
          <Text className=" font-bold leading-[22px] text-muted-foreground dark:text-dark-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            commodo vulputate lacus, nec euismod{" "}
          </Text>

          <View className="flex-row items-center my-4">
            <View className="flex-row gap-x-1 items-center">
              <Ionicons name={"heart"} size={24} color={"#dc2626"} />
              <Text className="text-primary dark:text-white">16</Text>
            </View>
            <View className="mx-3 w-[1px] h-[20px] bg-grey3"></View>
            <View className="flex-row gap-x-1 items-center">
              <Ionicons name="time" size={22} color={"#ea580c"} />
              <Text className="pl-2 text-primary dark:text-white font-psemibold uppercase">
                3:30
              </Text>
            </View>
          </View>

          <View className="border border-dashed border-[#cfd8dc] my-5"></View>

          <CustomButton
            label="Play"
            extraBtnClass="bg-app-600 shadow-md shadow-app-600 pt-1"
            extraTxtClass="text-white"
            icon="play"
            iconColor="#fff"
          />
        </View>
      </Animated.ScrollView>

      <StatusBar translucent={true} style="light" />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 320,
    overflow: "hidden",
  },
  pageHeader: {
    height: 100,
  },
});
