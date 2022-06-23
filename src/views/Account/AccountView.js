import React from "react";
import {View, Text} from "react-native"
import { Button } from "react-native-elements";

export function AccountView(props){
    const {navigation} = props;
   
    return(
        <View>
            <Text>Vista Cuenta</Text>
            <Button title="Crear Cuenta" />
        </View>
    )
}