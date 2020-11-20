import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings176411Navigator from '../features/Settings176411/navigator';
import UserProfile176404Navigator from '../features/UserProfile176404/navigator';
import Settings176403Navigator from '../features/Settings176403/navigator';
import Settings176401Navigator from '../features/Settings176401/navigator';
import SignIn2176399Navigator from '../features/SignIn2176399/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings176411: { screen: Settings176411Navigator },
UserProfile176404: { screen: UserProfile176404Navigator },
Settings176403: { screen: Settings176403Navigator },
Settings176401: { screen: Settings176401Navigator },
SignIn2176399: { screen: SignIn2176399Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
