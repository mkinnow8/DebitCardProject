import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../resources/colors';
import {
  respFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveDimensions';
import {useAppSelector} from '../../redux/hooks';

type Props = {
  percentage: string;
};

export const ProgressBarComponent = ({percentage}: Props) => {
  const spendingLimit = useAppSelector(state => state.debitCard.spendingLimit);
  return (
    <View>
      <View style={[styles.rowContainer, {justifyContent: 'space-between'}]}>
        <Text style={{color: COLORS.BLACK, fontWeight: '600'}}>
          Debit card spending limit
        </Text>
        <View style={styles.rowContainer}>
          <Text style={styles.showCardText}>$3150</Text>
          <Text> | ${spendingLimit}</Text>
        </View>
      </View>
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, {width: percentage}]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  showCardText: {
    color: COLORS.GREEN,
    fontWeight: '600',
    fontSize: respFontSize(10),
    marginLeft: responsiveWidth(8),
  },
  progressBarContainer: {
    marginVertical: responsiveHeight(8),
    height: responsiveHeight(14),
    width: '100%',
    backgroundColor: 'rgba(32, 209, 103, .1)',
    borderRadius: responsiveWidth(8),
    overflow: 'hidden',
  },
  progressBar: {
    height: responsiveHeight(14),
    width: '0%',
    backgroundColor: COLORS.GREEN,
  },
});
