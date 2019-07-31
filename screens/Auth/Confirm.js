import React, { useState } from "react";
import styled from "styled-components";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import AuthButton from "../../components/AuthButton";
import AuthInput from "../../components/AuthInput";
import useInput from "../../hooks/useInput";
import { Alert } from "react-native";
import { useMutation } from "react-apollo-hooks";
import { CONFIRM_SECRET } from "./AuthQueries";
import { useLogIn } from "../../AuthContext";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export default ({ navigation }) => {
  const confirmInput = useInput("");
  const [loading, setLoading] = useState(false);
  const logIn = useLogIn();
  const [confirmSecretMutation] = useMutation(CONFIRM_SECRET,{
    variables:{
      secret:confirmInput.value,
      email:navigation.getParam("email")
    }
  })
  
  const handleConfirm = async () => {
    const { value } = confirmInput;
    if(value ===""||!value.includes(" ")){
      return Alert.alert("Invalid Secret");
    }
   
    try {
      setLoading(true);
      const {data:{confirmSecret}} =await confirmSecretMutation();
      if(confirmSecret!==""||confirmSecret!==false){
        logIn(confirmSecret)
      }else{
        Alert.alert("Wrong Secret");
      }
    } catch (e) {
      console.log(e);
      Alert.alert("Can't confirm secret");
    } finally {
      setLoading(false);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <AuthInput
          {...confirmInput}
          placeholder="Secret"
          returnKeyType="send"
          onSubmitEditing={handleConfirm}
          autoCorrect={false}
        />
        <AuthButton loading={loading} onPress={handleConfirm} text="Confirm" />
      </View>
    </TouchableWithoutFeedback>
  );
};