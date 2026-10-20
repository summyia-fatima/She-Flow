import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  SafeAreaView,
  Image,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { colors } from '../../theme/colors';
import type { RootStackParamList } from '../../Navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding2'>;

const FONT = {
  regular: 'System',
  bold: 'System',
};

function Onboarding2Screen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flowerLeft}>
        <Text style={styles.flower}>✿</Text>
      </View>

      <View style={styles.flowerRight}>
        <Text style={styles.flower}>❀</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.headingArea}>
          <Text style={styles.title}>#1 Female OB-GYN</Text>

          <Text style={styles.title}>Recommended App</Text>

          <Text style={styles.description}>
            Based on a survey of 225 US OB-GYNs
            {'\n'}who recommended apps for period
            {'\n'}and cycle tracking.
            {'\n'}(DRG, 2021)
          </Text>
        </View>

        <View style={styles.illustration}>
          <Image
            source={require('../../assets/images/intro.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        <View style={styles.bottom}>
          <View style={styles.dots}>
            <View style={styles.dot} />
            <View style={styles.activeDot} />
            <View style={styles.dot} />
          </View>

          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('Onboarding3')}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </Pressable>

          <Pressable
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backText}>Back</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  flowerLeft: {
    position: 'absolute',
    left: -15,
    top: 110,
  },
  flowerRight: {
    position: 'absolute',
    right: -10,
    bottom: 160,
  },
  flower: {
    fontSize: 65,
    color: '#FFF0F5',
  },

  title: {
    fontFamily: FONT.bold,
    fontSize: 23,
    lineHeight: 29,
    fontWeight: '700',
    color: '#17151A',
    textAlign: 'center',
  },
  description: {
    fontFamily: FONT.regular,
    fontSize: 12,
    lineHeight: 17,
    color: '#858394',
    textAlign: 'center',
    marginTop: 12,
  },

  content: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 25,
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 12,
  },
  bottom: {
    width: '100%',
    marginTop: 'auto',
    paddingTop: 12,
    paddingBottom: 8,
  },
  headingArea: {
    width: '100%',
    alignItems: 'center',
    marginTop: 65,
  },
  illustration: {
    width: '100%',
    height: 260,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: '100%',
    height: '100%',
  },

  dots: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    marginBottom: 15,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 5,
    backgroundColor: '#FFE0EA',
  },
  activeDot: {
    width: 18,
    height: 6,
    borderRadius: 5,
    backgroundColor: colors.primary,
  },
  button: {
    width: '100%',
    height: 49,
    backgroundColor: colors.primary,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: FONT.bold,
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  backButton: {
    alignItems: 'center',
    paddingVertical: 7,
  },
  backText: {
    fontFamily: FONT.regular,
    fontSize: 13,
    fontWeight: '600',
    color: colors.primary,
  },
});

export default Onboarding2Screen;
