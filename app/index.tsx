import { Images } from "@/constants/images";
import { useRouter } from "expo-router";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";

const App = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-black">
      <StatusBar barStyle="light-content" />
      <ScrollView className="h-[99vh]">
        <View className="h-[100vh] flex-1 items-center justify-between">
          <View className="items-center justify-center py-4 mt-10">
            <Text className="text-7xl font-medium text-white text-center">
              Connect friends easily & quickly
            </Text>
          </View>
          <View className="items-center w-full flex-grow">
            <View className="items-center flex-row w-full justify-center mb-4">
              <Image
                className="h-20 w-20"
                resizeMode="contain"
                source={Images.Logo}
              />
              <Text className="text-white text-4xl font-medium ml-2">
                LuminaTalk
              </Text>
            </View>
            <Text className="px-4 text-white text-center">
              Our chat app is the perfect way to stay connected with friends and
              family.
            </Text>
          </View>
          <View className="w-full items-center py-6">
            <TouchableOpacity
              onPress={() => router.push("/signin")}
              className="px-4 py-3 bg-amber-600 rounded shadow-md"
            >
              <Text className="font-medium text-white text-center">
                Login with phone number
              </Text>
            </TouchableOpacity>
            <View className="flex-row items-center mt-4">
              <Text className="font-medium text-white">
                Do not have an account?{" "}
              </Text>
              <TouchableOpacity onPress={() => router.push("/signup")}>
                <Text className="text-blue-600 ml-1">Signup now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
