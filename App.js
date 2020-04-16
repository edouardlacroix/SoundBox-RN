import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SquareBlock from './src/app/components/SquareBlock'
import sound from './src/app/assets/sounds/testSound.mp3'

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.squareContainer}>
        <SquareBlock title={'Test sound'} file={sound} />
        <SquareBlock title={''} />
        <SquareBlock title={''} />
        <SquareBlock title={''} />
        <SquareBlock title={''} />
        <SquareBlock title={''} />
        <SquareBlock title={''} />


      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  squareContainer: {
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',

  }
});
