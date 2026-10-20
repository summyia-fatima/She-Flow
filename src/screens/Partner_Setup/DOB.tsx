
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  SafeAreaView,
  StatusBar,
  TextInput,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { colors } from '../../theme/colors';
import type { RootStackParamList } from '../../Navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'DOB'>;

function DOBScreen({ navigation }: Props) {
  const [dob, setDob] = useState('');

  const handleContinue = () => {
    if (!dob.trim()) {
      return;
    }

    // Dummy navigation
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
      
      />

      <View style={styles.content}>
        {/* Illustration */}
        <View style={styles.iconCircle}>
          <Text style={styles.icon}>🌸</Text>
        </View>

        {/* Heading */}
        <Text style={styles.title}>
          When were you born?
        </Text>

        <Text style={styles.description}>
          Enter your date of birth so we can personalize
          your She Flow experience for you.
        </Text>

        {/* DOB Input */}
        <Text style={styles.label}>
          Date of Birth
        </Text>

        <TextInput
          value={dob}
          onChangeText={setDob}
          placeholder="DD/MM/YYYY"
          placeholderTextColor="#A6A3AF"
          keyboardType="number-pad"
          maxLength={10}
          style={styles.input}
        />

        <Text style={styles.hint}>
          Example: 15/08/2000
        </Text>
      </View>

      {/* Bottom Buttons */}
      <View style={styles.bottom}>
        <Pressable
          style={[
            styles.button,
            !dob.trim() && styles.disabledButton,
          ]}
          onPress={handleContinue}
        >
          <Text style={styles.buttonText}>
            Continue
          </Text>
        </Pressable>

        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>
            Back
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
  },

  content: {
    flex: 1,
    paddingTop: 65,
  },

  iconCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#FFF0F5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 28,
  },

  icon: {
    fontSize: 34,
  },

  title: {
    fontFamily: 'System',
    fontSize: 26,
    lineHeight: 35,
    fontWeight: '700',
    color: '#17151A',
    marginBottom: 12,
  },

  description: {
    fontFamily: 'System',
    fontSize: 14,
    lineHeight: 22,
    color: '#858394',
    marginBottom: 32,
  },

  label: {
    fontFamily: 'System',
    fontSize: 14,
    fontWeight: '600',
    color: '#17151A',
    marginBottom: 12,
  },

  input: {
    height: 54,
    borderWidth: 1,
    borderColor: '#F0DCE4',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#17151A',
    backgroundColor: '#FFFBFD',
  },

  hint: {
    marginTop: 10,
    fontSize: 12,
    color: '#858394',
  },

  bottom: {
    paddingBottom: 24,
    paddingTop: 16,
  },

  button: {
    height: 50,
    borderRadius: 12,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },

  disabledButton: {
    opacity: 0.55,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },

  backButton: {
    alignItems: 'center',
    paddingVertical: 14,
  },

  backText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '600',
  },
});

export default DOBScreen;

