import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  TouchableOpacity,
} from 'react-native';
import ViewShot from 'react-native-view-shot';
import React from 'react';
import {BackgroundComponent, DebitCardDrawerComponent} from '../../components';
import {COLORS} from '../../resources/colors';
import {
  respFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveDimensions';
import {Logo} from '../../assets';
import {useAppDispatch} from '../../redux/hooks';
import {sendScreenshotRequested} from '../../redux/slices/ScreenShotSlice';

type Props = {};

const DebitCardScreen = (props: Props) => {
  const dispatch = useAppDispatch();
  const viewShot = React.useRef();
  const captureAndShareScreenshot = () => {
    viewShot.current.capture().then(uri => {
      console.log('do something with ', uri);
      dispatch(sendScreenshotRequested({image: uri}));
    }),
      error => console.error('Oops, snapshot failed', error);
  };
  return (
    <BackgroundComponent>
      <ViewShot ref={viewShot} options={{format: 'jpg', quality: 0.9}}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={captureAndShareScreenshot}>
              <Image source={Logo} style={styles.logoStyle} />
            </TouchableOpacity>
          </View>
          <View style={{marginTop: responsiveHeight(-24)}}>
            <Text style={styles.headingText}>Debit Card</Text>
            <Text style={styles.subHeadingText}>Available balance</Text>
            <View style={styles.rowContainer}>
              <Text style={styles.currencyText}>S$</Text>
              <Text style={styles.headingText}>3,000</Text>
            </View>
          </View>
        </View>
      </ViewShot>
      <DebitCardDrawerComponent />
    </BackgroundComponent>
  );
};

export default DebitCardScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: responsiveWidth(24),
    marginTop: responsiveHeight(24),
  },
  imageContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: responsiveHeight(44),
    marginTop: responsiveHeight(8),
  },
  headingText: {
    color: COLORS.WHITE,
    fontSize: respFontSize(20),
    fontWeight: '600',
  },
  subHeadingText: {
    color: COLORS.WHITE,
    marginVertical: responsiveHeight(4),
    marginTop: responsiveHeight(24),
  },
  logoStyle: {
    width: responsiveWidth(24),
    height: responsiveHeight(24),
  },
  currencyText: {
    fontWeight: '600',
    color: COLORS.WHITE,
    backgroundColor: COLORS.GREEN,
    paddingHorizontal: responsiveWidth(12),
    paddingVertical: responsiveHeight(2),
    borderRadius: respFontSize(4),
    marginRight: responsiveWidth(8),
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
