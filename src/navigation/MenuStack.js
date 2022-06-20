import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MenuView } from "../views/Menu/MenuView";
import { view } from "../utils/nombreVista";

const Stack = createNativeStackNavigator();

export function MenuStack(){


    return (
        <Stack.Navigator>
            <Stack.Screen
            name={view.Menu.tab}
            component={MenuView}
            options= {{title:"Menutitulo"}}/>
        </Stack.Navigator>
    )

}