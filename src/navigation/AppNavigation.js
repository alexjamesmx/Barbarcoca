import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements"
import { view } from "../utils/nombreVista"; 
import { MenuStack } from "./MenuStack"


const Tab = createBottomTabNavigator();

export function AppNavigation(){
    return(
        <Tab.Navigator
        screenOptions={({route}) => ({
            headerShown:false,
            tabBarActiveTintColor:"#224e79",
            tabBarInactiveTintColor:"#7c7c7c",
            showIcon:true,
            tabBarIcon:({color,size})=>screenOptions(route,color,size),
        })}>

        <Tab.Screen name={view.Menu.tab} component={MenuStack}/>

        </Tab.Navigator>
    );
}

function screenOptions(route,color,size){
    let iconName;

    if(route.name === view.Menu.tab)
    iconName = "compass-outline";

    return(
        <Icon type="material-community" name={iconName} color={color}size={size} />     
    )
}