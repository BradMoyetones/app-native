import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { Music } from "@/assets/data/meals";

interface ProductProps {
  item: Music;
  itemClass: string;
  itemPos: number;
}

const MusicCard = ({ item, itemClass, itemPos }: ProductProps) => {
  return (
    <View className={itemClass}>
      <TouchableOpacity activeOpacity={1} onPress={() => {router.push('/details')}}>
        <Image
          className="w-full h-[120px] rounded-xl mb-3"
          source={{
            uri: item.image,
          }}
          resizeMode="cover"
        />
        <View className="w-full h-1 border-muted-foreground dark:border-dark-muted-foreground border-b" />
        <View className="flex-row justify-between items-center py-3 gap-1">
          <View className="flex-1">
            <Text 
              className="font-psemibold text-primary dark:text-secondary text-left text-[15px]"
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item.name}
            </Text>
            <Text 
              className="text-muted-foreground dark:text-dark-muted-foreground font-semibold text-[14px]"
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item.artist}
            </Text>
          </View>
          <TouchableOpacity className="p-2 bg-app-600 rounded-full">
            <Ionicons name="play" size={20} color={"#fff"} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MusicCard;

const styles = StyleSheet.create({});
