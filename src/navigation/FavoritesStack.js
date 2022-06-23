import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FavoritesView } from "../views/Favorites/FavoritesView";
import { view } from "../utils/nombreVista";

const Stack = createNativeStackNavigator();

export function FavoritesStack(){


    return (
        <Stack.Navigator>
            <Stack.Screen
            name={view.Favorites.tab}
            component={FavoritesView}
            options= {{title:"Favoritostitulo"}}/>
        </Stack.Navigator>
    )

}