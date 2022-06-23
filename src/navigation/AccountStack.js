import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AccountView } from "../views/Account/AccountView";
import { view } from "../utils/nombreVista";

const Stack = createNativeStackNavigator();

export function AccountStack(){


    return (
        <Stack.Navigator>
            <Stack.Screen
            name={view.Account.tab}
            component={AccountView}
            options= {{title:"Cuentatitulo"}}/>
        </Stack.Navigator>
    )

}