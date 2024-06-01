import React from "react";
import { View, Text, TextInput, TextInputProps } from "react-native";

interface FormFieldProps extends TextInputProps {
  label: string;
  newClasses: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
  newClasses,
}) => {
  return (
    <View className={`mb-4 px-4 ${newClasses}`}>
      <Text className="text-white text-lg mb-2">{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        placeholderTextColor="gray"
        className="bg-gray-800 text-white px-4 py-2 rounded"
      />
    </View>
  );
};

export default FormField;
