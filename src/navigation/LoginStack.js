import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginView } from "../views/Login/LoginView";
import { view } from "../utils/nombreVista";

const Stack = createNativeStackNavigator();

export function LoginStack(){


    return (
        <Stack.Navigator>
            <Stack.Screen
            name={view.Login.tab}
            component={LoginView}
            options= {{title:"Logintitulo"}}/>
        </Stack.Navigator>
    )

}