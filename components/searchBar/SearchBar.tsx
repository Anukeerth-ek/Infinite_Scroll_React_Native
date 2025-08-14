import React from "react";
import { View, TextInput } from "react-native";

type SearchBarProps = {
     value: string;
     searchPost: (text: string) => void;
};

export default function SearchBar({ value, searchPost }: SearchBarProps) {
     return (
          <View className="bg-white p-3 mx-4 my-2 rounded-full shadow">
               <TextInput placeholder="Search posts..." value={value} onChangeText={searchPost} className="text-base" />
          </View>
     );
}
