import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../../resources/colors';

type Props = {
  children: React.ReactNode;
  notTranslucent?: boolean;
};

export const BackgroundComponent = ({children, notTranslucent}: Props) => {
  return (
    <SafeAreaView style={styles.backgroundComponent}>
      <StatusBar
        backgroundColor={!notTranslucent ? 'rgba(0, 0, 0 ,0)' : '#1B1A1C'}
        translucent={!notTranslucent}
      />
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundComponent: {
    backgroundColor: COLORS.BACKGROUND_COLOR,
    flex: 1,
  },
});
