import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements"
import { view } from "../utils/nombreVista"; 
import { MenuStack } from "./MenuStack"
import { LoginStack } from "./LoginStack"
import { SignupStack } from "./SignupStack";
import { FavoritesStack } from "./FavoritesStack";
import { RestaurantsStack } from "./RestaurantsStack"
import { AccountStack } from "./AccountStack"
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
        <Tab.Screen name={view.Login.tab} component={LoginStack}/>
        <Tab.Screen name={view.Signup.tab} component={SignupStack}/>
        <Tab.Screen name={view.Favorites.tab} component={FavoritesStack}/>
        <Tab.Screen name={view.Restaurants.tab} component={RestaurantsStack}/>
        <Tab.Screen name={view.Account.tab} component={AccountStack}/>

        </Tab.Navigator>
    );
}

function screenOptions(route,color,size){
    let iconName;

    if(route.name === view.Menu.tab)
    iconName = "menu-up";
    if(route.name === view.Login.tab)
    iconName = "login";
    if(route.name === view.Signup.tab)
    iconName = "account-plus";
    if(route.name === view.Favorites.tab)
    iconName = "star-shooting";
    if(route.name === view.Restaurants.tab)
    iconName = "silverware-fork-knife";
    if(route.name === view.Account.tab)
    iconName = "account";








    return(
        <Icon type="material-community" name={iconName} color={color}size={size} />     
    )
}