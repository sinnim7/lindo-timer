import React from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Button({ startReset, onPress, stopContinue }) {
  return (
    <View>
      <TouchableOpacity onPressOut={onPress}>
        <MaterialCommunityIcons name={startReset} size={80} color="#fc6767" />
        <MaterialCommunityIcons name={stopContinue} size={80} color="#6dd5ed" />
      </TouchableOpacity>
    </View>
  );
}

Button.prototypes = {
  startReset: PropTypes.string.isRequired,
  stopContinue: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

export default Button;
