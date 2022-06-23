import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignupView } from "../views/Signup/SignupView";
import { view } from "../utils/nombreVista";

const Stack = createNativeStackNavigator();

export function SignupStack(){


    return (
        <Stack.Navigator>
            <Stack.Screen
            name={view.Signup.tab}
            component={SignupView}
            options= {{title:"Menutitulo"}}/>
        </Stack.Navigator>
    )

}