import { Tabs } from "expo-router";
import Ionicons from "react-native-vector-icons/Ionicons";
export default function TabsLayout() {
     return (
          <Tabs screenOptions={{ headerShown: false }}>
               <Tabs.Screen
                    name="feed"
                    options={{
                         title: "Feed",
                         tabBarIcon: ({ color, size }) => <Ionicons name="list" color={color} size={size} />,
                    }}
               />
          </Tabs>
     );
}
