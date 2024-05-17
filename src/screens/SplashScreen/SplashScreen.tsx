import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BackgroundComponent} from '../../components';
import {AspireLogo, Logo} from '../../assets';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveDimensions';

type Props = {};

export const SplashScreen = (props: Props) => {
  return (
    <BackgroundComponent>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={AspireLogo}
          style={{
            height: responsiveHeight(50),
            width: responsiveWidth(178),
          }}
        />
      </View>
    </BackgroundComponent>
  );
};

const styles = StyleSheet.create({});
