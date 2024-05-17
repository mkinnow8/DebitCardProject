import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  respFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveDimensions';
import {COLORS} from '../../resources/colors';
import {AspireLogo, EyeLogo, VisaLogo} from '../../assets';

type Props = {};

export const DebitCardComponent = (props: Props) => {
  const [shouldDisplay, setShouldDisplay] = useState<boolean>();
  const toggleDisplay = () => {
    setShouldDisplay(isDisplay => !isDisplay);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.rowContainer, styles.showCardContainer]}
        onPress={toggleDisplay}>
        <Image source={EyeLogo} style={styles.logoStyle} />
        <Text style={styles.showCardText}>Show card number</Text>
      </TouchableOpacity>
      {/* Debit Card */}
      <View style={styles.debitCardContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={AspireLogo}
            resizeMode="contain"
            style={{height: responsiveHeight(20), width: responsiveWidth(70)}}
          />
        </View>
        <View style={{marginVertical: responsiveHeight(8)}}>
          <Text style={styles.cardHeadingText}>Mark Henry</Text>
          <View style={styles.rowContainer}>
            <Text style={styles.cardNumberText}>
              {shouldDisplay ? '5647' : '●●●●'}
            </Text>
            <Text style={styles.cardNumberText}>
              {shouldDisplay ? '3411' : '●●●●'}
            </Text>
            <Text style={styles.cardNumberText}>
              {shouldDisplay ? '2413' : '●●●●'}
            </Text>
            <Text style={styles.cardNumberText}>2020</Text>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.cardText}> Thru: 12/20</Text>
            <Text style={styles.cardText}>
              CVV: {shouldDisplay ? '456' : '✱✱✱'}
            </Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={VisaLogo}
            resizeMode="contain"
            style={{height: responsiveHeight(20), width: responsiveWidth(70)}}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: responsiveWidth(24),
    marginTop: responsiveHeight(-84),
  },
  debitCardContainer: {
    backgroundColor: COLORS.GREEN,
    height: responsiveHeight(200),
    width: '100%',
    borderRadius: respFontSize(8),
    padding: 24,
  },
  showCardContainer: {
    backgroundColor: COLORS.WHITE,
    width: responsiveWidth(144),
    borderRadius: responsiveWidth(6),
    padding: 8,
    paddingBottom: responsiveHeight(24),
    marginBottom: responsiveHeight(-18),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  imageContainer: {
    alignItems: 'flex-end',
    height: responsiveHeight(36),
  },
  cardHeadingText: {
    color: COLORS.WHITE,
    marginBottom: responsiveHeight(8),
    fontSize: respFontSize(16),
    fontWeight: '800',
  },
  cardNumberText: {
    color: COLORS.WHITE,
    letterSpacing: respFontSize(3),
    fontWeight: '500',
    marginRight: responsiveWidth(24),
  },
  cardText: {
    color: COLORS.WHITE,
    fontWeight: '500',
    marginRight: responsiveWidth(24),
  },
  showCardText: {
    color: COLORS.GREEN,
    fontWeight: '600',
    fontSize: respFontSize(10),
    marginLeft: responsiveWidth(8),
  },
  logoStyle: {
    width: responsiveWidth(16),
    height: responsiveHeight(16),
  },
  rowContainer: {
    marginTop: responsiveHeight(8),
    flexDirection: 'row',
    alignItems: 'center',
  },
});
