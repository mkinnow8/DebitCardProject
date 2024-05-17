import {Modal, ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../resources/colors';
import {
  respFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveDimensions';
import {
  BackgroundComponent,
  DebitCardComponent,
  ProgressBarComponent,
  SpendingLimitComponent,
} from '..';
import {
  InsightLogo,
  NatureLogo,
  NoTransferLogo,
  TransferLogo1,
  TransferLogo2,
} from '../../assets';
import {DrawerItemComponent} from '../DrawerItemComponent/DrawerItemComponent';
import {useAppSelector} from '../../redux/hooks';

type Props = {};

export const DebitCardDrawerComponent = (props: Props) => {
  const [spendingLimitModal, setSpendingLimitModal] = useState<boolean>(false);
  const spendingLimit = useAppSelector(state => state.debitCard.spendingLimit);
  // const [spendingLimitValue, setspendingLimitValue] = useState<number>(0);
  const calculateProgressPercentage = () => {
    const percentage = (3150 / spendingLimit) * 100;
    return percentage + '%';
  };
  const listItems = [
    {
      leftIcon: InsightLogo,
      text1: 'Top-up Account',
      text2: 'Deposite money to your account to use with card',
      isRightButton: false,
    },
    {
      leftIcon: TransferLogo2,
      text1: 'Weekly spending limit',
      text2: 'Your weekly spending limit is S$ ',
      isRightButton: true,
      rightButton: 'spendingLimit',
      onRightPress: () => {
        setSpendingLimitModal(true);
      },
    },
    {
      leftIcon: NatureLogo,
      text1: 'Freeze card',
      text2: 'Your debit card is currently active',
      isRightButton: true,
    },
    {
      leftIcon: TransferLogo1,
      text1: 'Get a new card',
      text2: 'This deactivates your current debit card',
      isRightButton: false,
    },
    {
      leftIcon: NoTransferLogo,
      text1: 'Deactivated cards',
      text2: 'Your previously deactivated cards',
      isRightButton: false,
    },
  ];
  return (
    <>
      <ScrollView
        style={{marginTop: responsiveHeight(-90)}}
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        bounces={false}
        overScrollMode="never">
        <View style={{height: responsiveHeight(120)}}></View>
        <View style={[styles.debitCardDrawerContainer]}>
          <DebitCardComponent />
          {/* Options list */}
          <View
            style={{
              marginVertical: responsiveHeight(24),
              marginHorizontal: responsiveWidth(24),
            }}>
            {/* Progress Bar */}
            {spendingLimit ? (
              <ProgressBarComponent
                percentage={calculateProgressPercentage()}
              />
            ) : null}
            {/* Drawer Options */}
            {listItems.map((item, index) => {
              return (
                <DrawerItemComponent
                  key={index}
                  leftIcon={item.leftIcon}
                  text1={item.text1}
                  text2={item.text2}
                  rightButton={item.rightButton}
                  isRightButton={item.isRightButton}
                  onRightPress={item.onRightPress}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        visible={spendingLimitModal}
        statusBarTranslucent={true}
        onRequestClose={() => {
          setSpendingLimitModal(!spendingLimitModal);
        }}>
        <BackgroundComponent>
          <SpendingLimitComponent
            setSpendingLimitModal={setSpendingLimitModal}
          />
        </BackgroundComponent>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  debitCardDrawerContainer: {
    backgroundColor: COLORS.WHITE,
    borderTopLeftRadius: respFontSize(20),
    borderTopRightRadius: respFontSize(20),
    marginTop: responsiveHeight(84),
  },
});
