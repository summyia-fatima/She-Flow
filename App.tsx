import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';


import { colors } from './src/theme/colors';
import { Images } from './src/theme/logo';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
          source={Images.logo.white}
          style={styles.logo}
          resizeMode="contain"
        />


      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },

  logo: {
    width: 212,
    height: 180
  },

 

 
});

export default App;
