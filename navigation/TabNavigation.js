import {createBottomTabNavigator,createAppContainer} from "react-navigation";
import Home from "../screens/Auth/Home";
import Notification from "../screens/Auth/Notifications";
import Profile from "../screens/Auth/Profile";
import Search from "../screens/Auth/Search";
import {View} from "react-native";

export default createBottomTabNavigator({
    Home,
    Search,
    Add:{
        screen : View,
        navigationOptions:{
            tabBarOnPress :({navigation})=>navigation.navigate("PhotoNavigation")
        }
    },
    Notification,
    Profile,
});
