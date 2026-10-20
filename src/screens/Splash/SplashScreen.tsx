import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { colors } from '../../theme/colors';
import { Images } from '../../theme/logo';
import type { RootStackParamList } from '../../Navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

function SplashScreen({ navigation }: Props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Onboarding1');
    }, 6000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={Images.logo.white}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 212,
    height: 180,
  },
});

export default SplashScreen;
