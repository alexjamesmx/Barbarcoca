import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RestaurantsView } from "../views/Restaurants/RestaurantsView";
import { view } from "../utils/nombreVista";

const Stack = createNativeStackNavigator();

export function RestaurantsStack(){


    return (
        <Stack.Navigator>
            <Stack.Screen
            name={view.Restaurants.tab}
            component={RestaurantsView}
            options= {{title:"Restaurantestitulo"}}/>
        </Stack.Navigator>
    )

}