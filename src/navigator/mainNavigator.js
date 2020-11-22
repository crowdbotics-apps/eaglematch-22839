import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen15177636Navigator from '../features/BlankScreen15177636/navigator';
import BlankScreen14177635Navigator from '../features/BlankScreen14177635/navigator';
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
BlankScreen15177636: { screen: BlankScreen15177636Navigator },
BlankScreen14177635: { screen: BlankScreen14177635Navigator },
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
