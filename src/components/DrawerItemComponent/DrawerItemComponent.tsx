import {Image, StyleSheet, Switch, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {InsightLogo} from '../../assets';
import {
  respFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveDimensions';
import {COLORS} from '../../resources/colors';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {setSpendingLimit} from '../../redux/slices/DebitCardSlice';

type Props = {
  leftIcon: number;
  text1: string;
  text2: string;
  isRightButton: boolean;
  rightButton?: string;
  onRightPress?: () => void;
};

export const DrawerItemComponent = ({
  leftIcon,
  text1,
  text2,
  isRightButton,
  rightButton,
  onRightPress,
}: Props) => {
  const [buttonActive, setButtonActive] = useState<boolean>();
  const {spendingLimit, isSpendingLimit} = useAppSelector(
    state => state.debitCard,
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (rightButton) {
      if (rightButton === 'spendingLimit') {
        setButtonActive(isSpendingLimit);
      }
    }
  }, []);
  return (
    <View style={styles.rowContainer}>
      <Image source={leftIcon} style={styles.logoStyle} />
      <View style={{flex: 1, marginLeft: responsiveWidth(8)}}>
        <Text style={{fontWeight: '500', color: COLORS.BLACK}}>{text1}</Text>
        <Text style={{fontSize: respFontSize(9)}}>
          {text2 + (rightButton == 'spendingLimit' ? spendingLimit : '')}
        </Text>
      </View>
      {isRightButton ? (
        <Switch
          trackColor={{false: COLORS.LIGHT_GREY, true: COLORS.GREEN}}
          thumbColor={COLORS.WHITE}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => {
            onRightPress && !buttonActive && onRightPress();
            rightButton == 'spendingLimit' &&
              buttonActive &&
              dispatch(
                setSpendingLimit({spendingLimit: 0, isSpendingLimit: false}),
              );
            setButtonActive(!buttonActive);
          }}
          value={buttonActive}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: responsiveHeight(16),
  },

  logoStyle: {
    width: responsiveWidth(32),
    height: responsiveHeight(32),
    backgroundColor: '#325BAF',
    borderRadius: respFontSize(20),
  },
});
