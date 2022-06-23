import React from "react";
import {View, Text} from "react-native"
import { Button } from "react-native-elements";

export function LoginView(props){
    const {navigation} = props;
   
    return(
        <View>
            <Text>Vista Login</Text>
            <Button title="Crear Login" />
        </View>
    )
}