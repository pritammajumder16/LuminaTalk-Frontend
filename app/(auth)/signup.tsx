import Button from "@/components/Button";
import FormField from "@/components/FormField";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import RNPickerSelect from "react-native-picker-select";
const countryCodes = [
  { label: "+91", value: "+91" },
  { label: "+1", value: "+1" },
  { label: "+44", value: "+44" },
  // Add more country codes as needed
];

const Signup: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [dob, setDob] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [countryCode, setCountryCode] = useState<string>("+91");

  const handleSignup = () => {
    if (!name.trim() || !phoneNumber.trim() || !dob) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    if (!/^\d{10}$/.test(phoneNumber.trim())) {
      Alert.alert("Error", "Please enter a valid 10-digit phone number.");
      return;
    }

    // Handle signup action
  };

  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView
        className="p-4"
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      >
        <View className="items-center">
          <Text className="text-4xl font-bold text-white mb-8">Signup</Text>
          <FormField
            label="Name"
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
            newClasses="mb-4 w-full"
          />
          <View className="mb-4 w-full flex-row justify-center items-center">
            <RNPickerSelect
              onValueChange={(value) => setCountryCode(value)}
              items={countryCodes}
              value={countryCode}
              style={{
                inputIOS: {
                  color: "white",
                  padding: 10,
                  backgroundColor: "#1F2937",
                  borderRadius: 4,
                  marginTop: 20,
                },
                inputAndroid: {
                  color: "white",
                  padding: 10,
                  backgroundColor: "#1F2937",
                  borderRadius: 4,
                  marginTop: 20,
                },
                iconContainer: {
                  display: "none",
                },
              }}
              useNativeAndroidPickerStyle={false}
            />
            <FormField
              label="Phone Number"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              placeholder="Enter your phone number"
              keyboardType="phone-pad"
              newClasses=" w-[86%]"
            />
          </View>
          <View className="mb-4 w-full px-4">
            <Text className="text-lg font-medium text-white mb-2">
              Date of Birth
            </Text>
            <TouchableOpacity
              onPress={() => setShowDatePicker(true)}
              className="bg-gray-800 p-4 rounded"
            >
              <Text className="text-white">
                {dob ? dob.toDateString() : "Select Date"}
              </Text>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={dob || new Date()}
                mode="date"
                display="spinner"
                onChange={(event, date) => {
                  setShowDatePicker(false);
                  if (date) {
                    setDob(date);
                  }
                }}
                className="mt-4"
              />
            )}
          </View>
          <Button
            onPress={handleSignup}
            title="Signup"
            classNames={{
              container: "bg-amber-600 mx-4 w-[90%]",
              text: "text-white",
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
