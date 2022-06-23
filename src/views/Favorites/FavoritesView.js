import React from "react";
import {View, Text} from "react-native"
import { Button } from "react-native-elements";

export function FavoritesView(props){
    const {navigation} = props;
   
    return(
        <View>
            <Text>Vista Login</Text>
            <Button title="Crear Favoritos" />
        </View>
    )
}