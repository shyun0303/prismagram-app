import {createStackNavigator,createAppContainer} from "react-navigation";
import Home from "../screens/Auth/Home";
import Notification from "../screens/Auth/Notifications";
import Profile from "../screens/Auth/Profile";
import Search from "../screens/Auth/Search";

const AuthNavigation = createStackNavigator({
    Home,
    Notification,
    Profile,
    Search
},
    {
       headerMode:"none"
    }
);

export default createAppContainer(AuthNavigation);