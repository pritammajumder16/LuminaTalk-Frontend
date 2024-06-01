import React, { useState } from "react";
import { SafeAreaView, ScrollView, View, Text, TextInput } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import FormField from "@/components/FormField";
import Button from "@/components/Button";

const countryCodes = [
  { label: "+91", value: "+91" },
  { label: "+1", value: "+1" },
  { label: "+44", value: "+44" },
  // Add more country codes as needed
];

const Login: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const [countryCode, setCountryCode] = useState<string>("+91");

  const handleNext = () => {
    if (!/^\d{10}$/.test(phoneNumber)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }
    setStep(2);
  };

  const handleLogin = () => {
    if (!/^\d{6}$/.test(otp)) {
      alert("Please enter a valid 6-digit OTP.");
      return;
    }
    // Handle login action
  };

  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      >
        <View className="items-center w-full px-4">
          <Text className="text-4xl font-medium text-white mb-8">Login</Text>
          {step === 1 && (
            <>
              <View className="w-full flex-row items-center mb-4">
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
                  newClasses="w-[90%]"
                  onChangeText={setPhoneNumber}
                  placeholder="Enter your phone number"
                  keyboardType="phone-pad"
                />
              </View>
              <Button
                onPress={handleNext}
                title="Next"
                classNames={{
                  container: "bg-amber-600 w-[90%]",
                  text: "text-white",
                }}
              />
            </>
          )}
          {step === 2 && (
            <>
              <FormField
                label="OTP"
                value={otp}
                newClasses="w-full"
                onChangeText={setOtp}
                placeholder="Enter the OTP"
                keyboardType="number-pad"
              />
              <Button
                onPress={handleLogin}
                title="Login"
                classNames={{
                  container: "bg-amber-600 w-[90%]",
                  text: "text-white",
                }}
              />
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
