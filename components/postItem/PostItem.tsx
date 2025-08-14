import { PostItemProps } from "@/types/postTypes";
import React from "react";
import { View, Text, Image } from "react-native";

export default function PostItem({ id, title, description, image }: PostItemProps) {
     console.log("imii", image);
     return (
          <View className="bg-red-500 my-2 mx-4 rounded-xl overflow-hidden shadow-md">
               <Image
                    source={{
                         uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbBONeVJ9JzPf27lZl6I7-K8F_WjhPx8DY43wKmj9IaN2xlF0ocQQ0NTU&s", 
                    }}
                    className="w-full h-44"
                    resizeMode="cover"
               />

               <Text className="text-lg font-bold p-2">{title}</Text>
               <Text className="text-sm text-gray-600 px-2 pb-2" numberOfLines={2} ellipsizeMode="tail">
                    {description}
               </Text>
          </View>
     );
}
