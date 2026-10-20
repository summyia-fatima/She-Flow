
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  SafeAreaView,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { colors } from '../../theme/colors';
import type { RootStackParamList } from '../../Navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Partner_welcome'>;

function Partner_welcome_Screen({ navigation }: Props) {
  const [partnerCode, setPartnerCode] = useState('');

  const handleContinue = () => {
    if (!partnerCode.trim()) {
      return;
    }

    // Dummy action: continue to Login
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
       
      />

      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Header Icon */}
          <View style={styles.iconCircle}>
            <Text style={styles.icon}>♡</Text>
          </View>

          {/* Heading */}
          <Text style={styles.title}>
            Have a Partner Code?
          </Text>

          <Text style={styles.description}>
            Connect with your partner and share your
            journey with She Flow.
          </Text>

          {/* Partner Code Input */}
          <Text style={styles.label}>
            Partner Code
          </Text>

          <TextInput
            value={partnerCode}
            onChangeText={setPartnerCode}
            placeholder="Enter your partner code"
            placeholderTextColor="#A6A3AF"
            autoCapitalize="characters"
            autoCorrect={false}
            style={styles.input}
            returnKeyType="done"
            onSubmitEditing={handleContinue}
          />

          <Text style={styles.hint}>
            You can get your partner code from your partner.
          </Text>

          {/* Continue Button */}
          <Pressable
            style={[
              styles.button,
              !partnerCode.trim() && styles.disabledButton,
            ]}
            onPress={handleContinue}
            disabled={!partnerCode.trim()}
          >
            <Text style={styles.buttonText}>
              Continue
            </Text>
          </Pressable>

          {/* Back Button */}
          <Pressable
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backText}>
              Back
            </Text>
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
  },

  keyboardView: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
    paddingTop: 65,
    paddingBottom: 24,
  },

  iconCircle: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: '#FFF0F5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 28,
  },

  icon: {
    fontSize: 48,
    lineHeight: 55,
    color: '#F9537C',
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
    fontSize: 15,
    color: '#17151A',
    backgroundColor: '#FFFBFD',
  },

  hint: {
    marginTop: 10,
    marginBottom: 28,
    fontFamily: 'System',
    fontSize: 12,
    lineHeight: 18,
    color: '#858394',
  },

  button: {
    width: '100%',
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
    fontFamily: 'System',
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF',
  },

  backButton: {
    alignItems: 'center',
    paddingVertical: 16,
  },

  backText: {
    fontFamily: 'System',
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
  },
});

export default Partner_welcome_Screen;

