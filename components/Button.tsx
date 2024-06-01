import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  classNames: { [key: string]: string };
}

const Button: React.FC<ButtonProps> = ({ onPress, title, classNames }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`px-4 py-3 rounded shadow-md ${classNames.container}`}
    >
      <Text className={`text-center font-medium ${classNames.text}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
