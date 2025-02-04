import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";

interface CustomInputProps {
  iconLeft?: keyof typeof Ionicons.glyphMap;
  iconRight?: keyof typeof Ionicons.glyphMap;
  placeholder?: string;
  containerClass?: string;
  handleTextChange?: (text: string) => void;
  label?: string;
}

const CustomInput = ({
  iconLeft,
  iconRight,
  placeholder,
  containerClass,
  handleTextChange,
  label,
}: CustomInputProps) => {
  const { colorScheme } = useColorScheme()
  return (
    <>
      {label && <Text className="font-pmedium pb-2">{label}</Text>}
      <View
        className={`flex-row items-center p-4 py-4 rounded-xl bg-grey1 mb-5 ${containerClass}`}
      >
        {iconLeft && (
          <Ionicons name={iconLeft} size={22} color={"#a1a1aa"} />
        )}
        <TextInput
          className="flex-1 mx-5 text-[16px]"
          placeholder={placeholder}
          onChangeText={handleTextChange}
          placeholderTextColor={"#a1a1aa"}
        />
        {iconRight && (
          <Ionicons name={iconRight} size={22} />
        )}
      </View>
    </>
  );
};

export default CustomInput;

const styles = StyleSheet.create({});
