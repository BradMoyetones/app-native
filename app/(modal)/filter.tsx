import { StyleSheet, Text, View, Modal, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "@/components/CustomInput";
import { router } from "expo-router";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import StarRating from "react-native-star-rating-widget";
import { Ionicons } from "@expo/vector-icons";
import { musicCategories } from "@/assets/data/meals";
import CustomButton from "@/components/CustomButton";

const filter = () => {
  const [rating, setRating] = useState(3.5);
  const checkoptions = [
    {
      label: "Discount",
      checked: true,
    },
    {
      label: "Voucher",
      checked: false,
    },
    {
      label: "Free Shipping",
      checked: false,
    },
    {
      label: "Same Day Deliv.",
      checked: true,
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-zinc-950" edges={["bottom"]}>
      <ScrollView className="h-full px-6">
        <View className="border-b border-b-grey1">
          <Text className="my-4 font-bold text-[15px] text-primary dark:text-white">Search Artist</Text>
          <View className="flex-row" style={{ gap: 12 }}>
            <CustomInput containerClass="flex-1 dark:bg-zinc-800" placeholder="The Weekend" iconLeft="search" />
          </View>
        </View>

        <View className="border-b border-b-grey1">
          <Text className="my-4 font-bold text-[15px] text-primary dark:text-white">Star Ratings</Text>
          <View className="pb-5">
            <StarRating rating={rating} color="#fea903" onChange={setRating} />
          </View>
        </View>

        <View className="border-b border-b-grey1">
          <Text className="my-4 font-bold text-[15px] text-primary dark:text-white">Others</Text>
          <View className="flex-row flex-wrap" style={{ gap: 10 }}>
            {checkoptions.map((item, index) => (
              <View className="w-[48%] mb-5" key={index}>
                <BouncyCheckbox
                  style={{ alignItems: "flex-start" }}
                  size={20}
                  fillColor={"#ea580c"}
                  unFillColor="#FFFFFF"
                  textComponent={
                    <Text className="text-md font-semibold pl-3 text-primary dark:text-white">
                      {item.label}
                    </Text>
                  }
                  iconStyle={{ borderColor: "#ea580c", borderRadius: 4 }}
                  innerIconStyle={{ borderWidth: 2, borderRadius: 4 }}
                  isChecked={item.checked}
                  onPress={(isChecked: boolean) => {
                    console.log(isChecked);
                  }}
                />
              </View>
            ))}
          </View>
        </View>

        <View className="pb-32">
          <Text className="my-4 font-bold text-[15px] text-primary dark:text-white">Categories</Text>
          {musicCategories.map((category, index) => (
            <View className="py-3" key={index}>
              <View
                className="flex-row items-center justify-center"
                style={{ gap: 5 }}
              >
                <View className="flex-row flex-1 gap-4">
                  <Ionicons
                    name={category.icon}
                    size={20}
                    color={"#ea580c"}
                  />
                  <Text className="font-bold text-[14px] text-primary dark:text-white">{category.name}</Text>
                </View>
                <View className="flex-row gap-1">
                  <Text className="font-bold text-[14px] text-muted-foreground dark:text-dark-muted-foreground">
                    45 Items
                  </Text>
                  <Ionicons
                    name="chevron-forward"
                    size={20}
                    color={""}
                  />
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <View className="absolute bottom-0 right-0 left-0 px-6 bg-white dark:bg-zinc-800 py-2 border-t pb-6">
        <CustomButton
          extraBtnClass="bg-app-600 shadow-md shadow-app-600"
          extraTxtClass="text-white"
          label="Apply filters"
          handlePress={() => router.push("/categories")}
        />
      </View>
    </SafeAreaView>
  );
};

export default filter;

const styles = StyleSheet.create({});
