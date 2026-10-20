
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  SafeAreaView,
  Image,
  StatusBar,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { RootStackParamList } from '../../Navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding3'>;

const PRIMARY_COLOR = '#F9537C';

function Onboarding3Screen({ navigation }: Props) {
  const [selectedOption, setSelectedOption] =
    useState<'yes' | 'no'>('yes');

  const handleNext = () => {
    if (selectedOption === 'yes') {
      navigation.navigate('DOB');
    } else {
      navigation.navigate('Partner_Welcome');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
       
      />

      {/* Heading */}
      <View style={styles.header}>
        <Text style={styles.heading}>
          Are you using{' '}
          <Text style={styles.highlight}>She Flow</Text>
        </Text>

        <Text style={styles.heading}>For Yourself?</Text>
      </View>

      {/* Options */}
      <View style={styles.optionsContainer}>
        {/* Yes: Personal Setup / DOB */}
        <Pressable
          onPress={() => setSelectedOption('yes')}
          accessibilityRole="radio"
          accessibilityState={{ checked: selectedOption === 'yes' }}
          style={[
            styles.optionCard,
            selectedOption === 'yes' && styles.selectedCard,
          ]}
        >
          <View style={styles.cardText}>
            <Text
              style={[
                styles.optionTitle,
                selectedOption === 'yes' && styles.selectedText,
              ]}
            >
              Yes
            </Text>

            <Text style={styles.description}>
              I am using it for myself.
            </Text>
          </View>

          <Image
            source={require('../../assets/images/personal setup1.png')}
            style={styles.illustration}
            resizeMode="contain"
          />
        </Pressable>

        {/* No: Partner Code */}
        <Pressable
          onPress={() => setSelectedOption('no')}
          accessibilityRole="radio"
          accessibilityState={{ checked: selectedOption === 'no' }}
          style={[
            styles.optionCard,
            selectedOption === 'no' && styles.selectedCard,
          ]}
        >
          <View style={styles.cardText}>
            <Text
              style={[
                styles.optionTitle,
                selectedOption === 'no' && styles.selectedText,
              ]}
            >
              No
            </Text>

            <Text style={styles.description}>
              I have a partner code.
            </Text>
          </View>

          <Image
            source={require('../../assets/images/personal setup2.png')}
            style={styles.illustration}
            resizeMode="contain"
          />
        </Pressable>
      </View>

      {/* Next Button */}
      <View style={styles.bottom}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          onPress={handleNext}
          accessibilityRole="button"
        >
          <Text style={styles.buttonText}>Next</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },

  header: {
    alignItems: 'center',
    marginTop: 75,
    marginBottom: 50,
  },

  heading: {
    fontFamily: 'System',
    fontSize: 20,
    lineHeight: 27,
    fontWeight: '700',
    color: '#111111',
    textAlign: 'center',
  },

  highlight: {
    color: PRIMARY_COLOR,
  },

  optionsContainer: {
    width: '100%',
    gap: 18,
  },

  optionCard: {
    width: '100%',
    minHeight: 126,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#F0EDF0',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 12,
    paddingVertical: 12,
    elevation: 3,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
  },

  selectedCard: {
    borderColor: PRIMARY_COLOR,
    borderWidth: 1.5,
  },

  cardText: {
    flex: 1,
    paddingRight: 4,
  },

  optionTitle: {
    fontFamily: 'System',
    fontSize: 14,
    fontWeight: '600',
    color: '#111111',
    marginBottom: 7,
  },

  selectedText: {
    color: PRIMARY_COLOR,
  },

  description: {
    fontFamily: 'System',
    fontSize: 12,
    lineHeight: 18,
    color: '#858394',
  },

  illustration: {
    width: 112,
    height: 105,
  },

  bottom: {
    marginTop: 'auto',
    paddingBottom: 24,
    paddingTop: 20,
  },

  button: {
    width: '100%',
    height: 48,
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonPressed: {
    opacity: 0.8,
  },

  buttonText: {
    fontFamily: 'System',
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default Onboarding3Screen;

