import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Switch,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AvatarImg from "@/assets/images/avatar.png";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import App, { Item, Parent } from "@/components/Accordion";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { useColorScheme } from "nativewind";

const profile = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme()
  const open = useSharedValue(false);
  const onPress = () => {
    open.value = !open.value;
  };

  const animatedChevronStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: withTiming(open.value ? '90deg' : '0deg', { duration: 200 }), // Animación de rotación
        },
      ],
    };
  });

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-zinc-950" edges={["bottom"]}>
      <ScrollView className="h-full px-6 py-3" style={{ paddingBottom: 100 }}>
        <View className="flex-row items-center bg-[#f4f5f5] dark:bg-zinc-800 p-3 rounded-xl overflow-hidden mb-6">
          <Image source={AvatarImg} className="w-16 h-16 mr-3" />
          <View className="flex-1">
            <Text className="font-psemibold text-primary dark:text-white">Brad Moyetones {colorScheme}</Text>
            <Text className="font-pmedium text-primary dark:text-white">brad@legiontech.com</Text>
          </View>
          <TouchableOpacity>
            <Ionicons name="pencil" size={22} color={colorScheme === "dark" ? "#fff" : "#000"} />
          </TouchableOpacity>
        </View>

        <View className="mb-6">
          <Text className="font-psemibold text-[18px] text-primary dark:text-white">General</Text>

          <View className="bg-[#f4f5f5] dark:bg-zinc-800 px-3 py-1 mt-3 rounded-xl">
            <TouchableOpacity
              className="flex-row items-center border-b border-b-muted-foreground dark:border-b-dark-muted-foreground py-3"
              onPress={() => {
                router.replace("/orders");
              }}
            >
              <Ionicons name="bag-handle-outline" size={22} color={colorScheme === "dark" ? "#fff" : "#000"} />
              <View className="flex-1 ml-3">
                <Text className="font-pmedium text-primary dark:text-white">My Orders</Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="chevron-forward" size={22} color={colorScheme === "dark" ? "#fff" : "#000"} />
              </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={onPress}
              className="flex-row items-center border-b border-b-muted-foreground dark:border-b-dark-muted-foreground py-3"
            >
              <Ionicons name="sunny-outline" size={22} color={colorScheme === "dark" ? "#fff" : "#000"} />
              <View className="flex-1 ml-3">
                <Text className="font-pmedium text-primary dark:text-white">Theme</Text>
              </View>
              <Animated.View style={animatedChevronStyle}>
                <Ionicons name="chevron-forward" size={22} color={colorScheme === "dark" ? "#fff" : "#000"} />
              </Animated.View>
            </TouchableOpacity>
            <View>
              <Parent open={open}>
                <Item>
                  <View
                    className="flex-row items-center gap-2"
                  >
                    <Switch
                      value={colorScheme === "dark"}
                      onValueChange={toggleColorScheme}
                    />
                    <Text className="text-primary dark:text-white">{colorScheme === "dark" ? "Oscuro" : "Claro"}</Text>
                  </View>
                </Item>
              </Parent>
            </View>
            <View className="flex-row items-center border-b border-b-muted-foreground dark:border-b-dark-muted-foreground py-3">
              <Ionicons name="map-outline" size={22} color={colorScheme === "dark" ? "#fff" : "#000"} />
              <View className="flex-1 ml-3">
                <Text className="font-pmedium text-primary dark:text-white">Location</Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="chevron-forward" size={22} color={colorScheme === "dark" ? "#fff" : "#000"} />
              </TouchableOpacity>
            </View>
            <View className="flex-row items-center border-b border-b-muted-foreground dark:border-b-dark-muted-foreground py-3">
              <Ionicons name="navigate-circle-outline" size={22} color={colorScheme === "dark" ? "#fff" : "#000"} />
              <View className="flex-1 ml-3">
                <Text className="font-pmedium text-primary dark:text-white">Pickup location</Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="chevron-forward" size={22} color={colorScheme === "dark" ? "#fff" : "#000"} />
              </TouchableOpacity>
            </View>
            <View className="flex-row items-center border-b border-b-muted-foreground dark:border-b-dark-muted-foreground py-3">
              <Ionicons name="qr-code-outline" size={22} color={colorScheme === "dark" ? "#fff" : "#000"} />
              <View className="flex-1 ml-3">
                <Text className="font-pmedium text-primary dark:text-white">Scan QR code</Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="chevron-forward" size={22} color={colorScheme === "dark" ? "#fff" : "#000"} />
              </TouchableOpacity>
            </View>
            <View className="flex-row items-center py-3">
              <Ionicons name="lock-closed-outline" size={22} color={colorScheme === "dark" ? "#fff" : "#000"} />
              <View className="flex-1 ml-3">
                <Text className="font-pmedium text-primary dark:text-white">Change password</Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="chevron-forward" size={22} color={colorScheme === "dark" ? "#fff" : "#000"} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View className="mb-4">
          <Text className="font-psemibold text-[18px] text-primary dark:text-white">Support</Text>

          <View className="bg-[#f4f5f5] dark:bg-zinc-800 px-3 py-1 mt-3 rounded-xl">
            <View className="flex-row items-center border-b border-b-muted-foreground dark:border-b-dark-muted-foreground py-3">
              <Ionicons name="chatbubbles-outline" size={22} color={colorScheme === "dark" ? "#fff" : "#000"} />
              <View className="flex-1 ml-3">
                <Text className="font-pmedium text-primary dark:text-white">Need help? Let's Chat</Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="chevron-forward" size={22} color={colorScheme === "dark" ? "#fff" : "#000"} />
              </TouchableOpacity>
            </View>
            <View className="flex-row items-center border-b border-b-muted-foreground dark:border-b-dark-muted-foreground py-3">
              <Ionicons name="alarm-outline" size={22} color={colorScheme === "dark" ? "#fff" : "#000"} />
              <View className="flex-1 ml-3">
                <Text className="font-pmedium text-primary dark:text-white">Order Protection Quarantee</Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="chevron-forward" size={22} color={colorScheme === "dark" ? "#fff" : "#000"} />
              </TouchableOpacity>
            </View>
            <View className="flex-row items-center py-3">
              <Ionicons name="information-circle-outline" size={22} color={colorScheme === "dark" ? "#fff" : "#000"} />
              <View className="flex-1 ml-3">
                <Text className="font-pmedium text-primary dark:text-white">Privacy Policy</Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="chevron-forward" size={22} color={colorScheme === "dark" ? "#fff" : "#000"} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View className="bg-[#f4f5f5] dark:bg-zinc-800 px-3 py-1 mt-3 rounded-xl">
          <TouchableOpacity
            onPress={() => {
              router.replace("/");
            }}
            className="flex-row items-center py-3"
          >
            <Ionicons
              name="log-out-outline"
              size={22}
              color="#dc2626"
            />
            <View className="flex-1 ml-3">
              <Text className="font-pmedium text-red-600">Log Out</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View className="pb-12"></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default profile;

const styles = StyleSheet.create({});
