import { StyleSheet, Text, View, Image, Platform } from "react-native";
import React from "react";
import { Tabs, Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { BlurView } from "expo-blur"
import { useColorScheme } from "nativewind";

const TabIcon = ({ icon, color, name, focused, type }: any) => {
  return (
    <View className="items-center justify-center gap-2 pt-2">
      {type == "ant" ? (
        <AntDesign name={icon} size={26} color={color} />
      ) : (
        <Ionicons name={icon} size={26} color={color} />
      )}
      <Text
        className={`-top-2 relative text-[13px] ${
          focused ? "text-app-600 font-medium" : " text-grey4"
        }`}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  const { colorScheme } = useColorScheme()
  
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#ea580c",
          tabBarInactiveTintColor: colorScheme === "dark" ? "#9CA3AF" : "#6B7280",
          tabBarStyle: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderTopWidth: 0,
            position: "absolute",
            height: Platform.OS === "ios" ? 80 : 57,
          },
          tabBarBackground: () => (
            <BlurView 
              intensity={colorScheme === "dark" ? 20 : 90}
              style={{
                ...StyleSheet.absoluteFillObject,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                overflow: "hidden",
                backgroundColor: colorScheme === "light" ? "FFFFFF" : "rgba(0, 0, 0, 0.7)",
                
              }}
            />
          )
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={focused ? "home" : "home-outline"}
                name="Home"
                focused={focused}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="library"
          options={{
            title: "Library",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={focused ? "albums" : "albums-outline"}
                name="Library"
                focused={focused}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="plansold"
          options={{
            href: "/plans",
            title: "",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <View className="items-center justify-center h-[52px] w-[52px] bg-app-600 rounded-full mb-8">
                <View className="pt-4">
                  <Ionicons name="cash" size={26} color="#fff" />
                  <Text
                    className={`-top-2 relative text-[13px] font-rbmedium ${
                      focused ? "text-primary " : " text-grey4"
                    }`}
                  ></Text>
                </View>
              </View>
            ),
          }}
          listeners={() => ({
            tabPress: (e) => {
              e.preventDefault();
              router.push("/plans"); // <-- Here you put the name where the chat component is declared
            },
          })}
        />

        <Tabs.Screen
          name="favorite"
          options={{
            title: "Favorite",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={focused ? "heart" : "heart-outline"}
                name="Favorite"
                focused={focused}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="profileold"
          options={{
            href: "/profile",
            headerTitle: "My Profile",
            headerShadowVisible: false,
            headerTitleStyle: {
              fontFamily: "Poppins-SemiBold",
            },
            headerLeft: () => (
              <View className="ml-3 pb-2">
                <Ionicons name="person-outline" size={25} />
              </View>
            ),
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon="people-circle-outline"
                name="Profile"
                focused={focused}
                color={color}
              />
            ),
            
          }}
          listeners={() => {
            return {
              tabPress: (e) => {
                e.preventDefault(); // Evita la navegación normal
                router.push("/profile"); // Navega a la ruta deseada
              },
            };
          }}
          redirect={false}
        />
      </Tabs>

      <StatusBar style={colorScheme == "dark" ? "light" : "dark"} />
    </>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
