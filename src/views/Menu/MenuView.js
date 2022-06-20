import React from "react";
import {View, Text} from "react-native"
import { Button } from "react-native-elements";
import { view } from "../../utils/nombreVista";

export function MenuView(props){
    const {navigation} = props;
    // const irARestaurante = () =>{
    //     console.log(props);
    //     navigation.navigate(vista.Restaurante.AgregaRestaurante,{screen:vista.Restaurante.Restaurante})
    //     }
    return(
        <View>
            <Text>Vista Restaurantes</Text>
            <Button title="Crear Restaurante" />
        </View>
    )
}