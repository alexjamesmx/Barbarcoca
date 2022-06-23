import React from "react";
import {View, Text} from "react-native"
import { Button } from "react-native-elements";
import { view } from "../../utils/nombreVista";

export function SignupView(props){
    const {navigation} = props;
   
    return(
        <View>
            <Text>Vista Registro</Text>
            <Button title="Crear Registro" />
        </View>
    )
}