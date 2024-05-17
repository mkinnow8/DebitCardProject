import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  respFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveDimensions';
import {COLORS} from '../../resources/colors';
import {ArrowBack, Logo, PickupLogo} from '../../assets';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {setSpendingLimit} from '../../redux/slices/DebitCardSlice';

type Props = {
  setSpendingLimitModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SpendingLimitComponent = ({setSpendingLimitModal}: Props) => {
  const spendingLimit = useAppSelector(state => state.debitCard.spendingLimit);
  const dispatch = useAppDispatch();
  return (
    <>
      <View style={styles.container}>
        <View style={[styles.imageContainer, styles.rowContainer]}>
          <TouchableOpacity onPress={() => setSpendingLimitModal(false)}>
            <Image source={ArrowBack} style={styles.backArrowStyle} />
          </TouchableOpacity>
          <Image source={Logo} style={styles.logoStyle} />
        </View>
        <Text style={styles.headingText}>Spending Limit</Text>
      </View>
      <View style={styles.debitCardDrawerContainer}>
        <View style={styles.rowContainer}>
          <Image source={PickupLogo} style={styles.pickupLogoStyle} />
          <Text
            style={{
              color: 'black',
              marginLeft: responsiveWidth(8),
              fontWeight: '500',
            }}>
            Set a weekly debit card spending limit.
          </Text>
        </View>
        <View
          style={[
            styles.rowContainer,
            {
              borderBottomWidth: 0.5,
              borderBottomColor: COLORS.LIGHT_GREY,
              marginTop: responsiveHeight(8),
            },
          ]}>
          <Text style={styles.currencyText}>S$</Text>
          <TextInput
            value={spendingLimit.toString()}
            inputMode={'numeric'}
            style={[
              styles.headingText,
              {color: COLORS.BLACK, fontWeight: '800'},
            ]}
          />
        </View>
        <Text
          style={{
            fontSize: respFontSize(9),
            marginVertical: responsiveHeight(8),
          }}>
          Here weekly means the last 7 days - not the calendar week.
        </Text>
        <View
          style={[
            styles.rowContainer,
            {
              marginVertical: responsiveHeight(16),
              justifyContent: 'space-between',
            },
          ]}>
          <TouchableOpacity
            style={styles.lightGreenButton}
            onPress={() =>
              dispatch(
                setSpendingLimit({spendingLimit: 5000, isSpendingLimit: true}),
              )
            }>
            <Text style={styles.lightGreenButtonText}>S$ 5,000</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.lightGreenButton}
            onPress={() =>
              dispatch(
                setSpendingLimit({spendingLimit: 10000, isSpendingLimit: true}),
              )
            }>
            <Text style={styles.lightGreenButtonText}>S$ 10,000</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.lightGreenButton}
            onPress={() =>
              dispatch(
                setSpendingLimit({spendingLimit: 20000, isSpendingLimit: true}),
              )
            }>
            <Text style={styles.lightGreenButtonText}>S$ 20,000</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <TouchableOpacity
            disabled={spendingLimit === 0 ? true : false}
            style={[
              styles.greenButton,
              {
                backgroundColor: !spendingLimit
                  ? COLORS.LIGHT_GREY
                  : COLORS.GREEN,
              },
            ]}
            onPress={() => setSpendingLimitModal(false)}>
            <Text style={styles.greenButtonText}> Save </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: responsiveWidth(24),
    marginTop: responsiveHeight(24),
  },
  imageContainer: {
    justifyContent: 'space-between',
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
  pickupLogoStyle: {
    width: responsiveWidth(18),
    height: responsiveHeight(14),
  },
  backArrowStyle: {
    tintColor: COLORS.WHITE,
    width: responsiveWidth(24),
    height: responsiveHeight(18),
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  debitCardDrawerContainer: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    borderTopLeftRadius: respFontSize(20),
    borderTopRightRadius: respFontSize(20),
    marginTop: responsiveHeight(48),
    paddingHorizontal: responsiveWidth(24),
    paddingVertical: responsiveHeight(24),
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
  lightGreenButton: {
    backgroundColor: 'rgba(32, 209, 103, .1)',
    height: responsiveHeight(36),
    width: responsiveWidth(100),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: respFontSize(3),
  },
  lightGreenButtonText: {
    color: COLORS.GREEN,
    fontWeight: '600',
    fontSize: respFontSize(10),
  },
  greenButton: {
    backgroundColor: COLORS.GREEN,
    height: responsiveHeight(48),
    width: responsiveWidth(260),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: respFontSize(20),
    alignSelf: 'center',
  },
  greenButtonText: {
    color: COLORS.WHITE,
    fontWeight: '600',
    fontSize: respFontSize(12),
  },
});
