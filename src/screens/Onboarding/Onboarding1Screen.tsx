import React from 'react';
import { View, Text, StyleSheet, Pressable, SafeAreaView } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { colors } from '../../theme/colors';
import type { RootStackParamList } from '../../Navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding1'>;

const FONT = {
  regular: 'System',
  bold: 'System',
};

function Onboarding1Screen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Decorative flowers */}
      <View style={styles.flowerTop}>
        <Text style={styles.flower}>✿</Text>
      </View>

      <View style={styles.flowerBottom}>
        <Text style={styles.flower}>❀</Text>
      </View>

      {/* Main content */}
      <View style={styles.content}>
        {/* Center text content */}
        <View style={styles.textContent}>
          <Text style={styles.title}>Hello</Text>

          <Text style={styles.heading}>
            Welcome to <Text style={styles.highlight}>She Flow</Text>
          </Text>

          <Text style={styles.description}>
            Your Personal Companion for period,
            {'\n'}
            fertility, & well being
          </Text>
        </View>

        {/* Bottom pagination and button */}
        <View style={styles.bottom}>
          <View style={styles.dots}>
            <View style={styles.activeDot} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>

          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('Onboarding2')}
          >
            <Text style={styles.buttonText}>Let's Begin</Text>
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

  // Decorative flowers
  flowerTop: {
    position: 'absolute',
    top: 100,
    left: -10,
  },

  flowerBottom: {
    position: 'absolute',
    bottom: 150,
    right: 15,
  },

  flower: {
    fontSize: 65,
    color: '#FFF0F5',
  },

  // Main screen layout
  content: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  // Centered text group
  textContent: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontFamily: FONT.bold,
    fontSize: 27,
    fontWeight: '700',
    color: '#17151A',
    textAlign: 'center',
  },

  heading: {
    fontFamily: FONT.bold,
    fontSize: 25,
    fontWeight: '700',
    color: '#17151A',
    textAlign: 'center',
    marginTop: 2,
  },

  highlight: {
    color: colors.primary,
  },

  description: {
    fontFamily: FONT.regular,
    fontSize: 13,
    lineHeight: 20,
    color: '#858394',
    textAlign: 'center',
    marginTop: 12,
  },

  // Fixed bottom area inside the screen
  bottom: {
    position: 'absolute',
    bottom: 20,
    left: 25,
    right: 25,
  },

  // Pagination dots
  dots: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    marginBottom: 15,
  },

  activeDot: {
    width: 18,
    height: 6,
    borderRadius: 5,
    backgroundColor: colors.primary,
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 5,
    backgroundColor: '#FFE0EA',
  },

  // Bottom button
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
});

export default Onboarding1Screen;
