import {View, Text, Image, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {ROUTE} from '../resources/routesName';
import {DebitCardScreen, SplashScreen} from '../screens';
import {COLORS} from '../resources/colors';
import {
  CardLogo,
  CreditLogo,
  HomeLogo,
  PaymentsLogo,
  UserLogo,
} from '../assets';
import {
  responsiveHeight,
  responsiveWidth,
} from '../utilities/responsiveDimensions';

type Props = {};

const RootNavigation = (props: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  });
  return (
    <NavigationContainer>
      {isLoading ? <AuthStack /> : <AppTabNavigation />}
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTE.SPLASH}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTE.SPLASH} component={SplashScreen} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const AppTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={ROUTE.DEBIT_CARD}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.GREEN,

        tabBarStyle: {
          height: responsiveHeight(48),
          paddingBottom: responsiveHeight(4),
        },
      }}>
      <Tab.Screen
        name={ROUTE.HOME}
        component={DebitCardScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={HomeLogo}
              style={[
                styles.tabIcon1,
                {tintColor: focused ? COLORS.GREEN : COLORS.LIGHT_GREY},
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTE.DEBIT_CARD}
        component={DebitCardScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={CardLogo}
              style={{
                width: responsiveWidth(24),
                height: responsiveHeight(18),
                tintColor: focused ? COLORS.GREEN : COLORS.LIGHT_GREY,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTE.PAYMENTS}
        component={DebitCardScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={PaymentsLogo}
              style={[
                styles.tabIcon1,
                {tintColor: focused ? COLORS.GREEN : COLORS.LIGHT_GREY},
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTE.CREDIT}
        component={DebitCardScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={CreditLogo}
              style={[
                styles.tabIcon1,
                {tintColor: focused ? COLORS.GREEN : COLORS.LIGHT_GREY},
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTE.PROFILE}
        component={DebitCardScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={UserLogo}
              style={{
                width: responsiveWidth(18),
                height: responsiveHeight(20),
                tintColor: focused ? COLORS.GREEN : COLORS.LIGHT_GREY,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({
  tabIcon1: {
    width: responsiveWidth(22),
    height: responsiveHeight(22),
  },
});
