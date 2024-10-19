import  {useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

export default function TabLayout() {
  const [sliderValueR, setSliderValueR] = useState(0);
  const [sliderValueG, setSliderValueG] = useState(0);
  const [sliderValueB, setSliderValueB] = useState(0);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.content}>
        <Text style={styles.title}>Slide to change {'\n'} the background color</Text>
        <View style={styles.slider}>
          <Text style={styles.text}>R</Text>
          <Text style={styles.sliderValue}>{sliderValueR}</Text>
          <Slider
              style={{width: 200, height: 40}}
              minimumValue={0}
              maximumValue={255}
              thumbTintColor='red'
              minimumTrackTintColor="red"
              maximumTrackTintColor="black"
              step={1}
              value={sliderValueR}
              onValueChange={setSliderValueR}
            />
        </View>
       
        <View style={styles.slider}>
          <Text style={styles.text}>G</Text>
          <Text style={styles.sliderValue}>{sliderValueG}</Text>
          <Slider
              style={{width: 200, height: 40}}
              minimumValue={0}
              maximumValue={255}
              thumbTintColor='green'
              minimumTrackTintColor="green"
              maximumTrackTintColor="black"
              step={1}
              value={sliderValueG}
              onValueChange={setSliderValueG}
            />
        </View>

        <View style={styles.slider}>
          <Text style={styles.text}>B</Text>
          <Text style={styles.sliderValue}>{sliderValueB}</Text>
          <Slider
              style={{width: 200, height: 40}}
              minimumValue={0}
              maximumValue={255}
              thumbTintColor='blue'
              minimumTrackTintColor="blue"
              maximumTrackTintColor="black"
              step={1}
              value={sliderValueB}
              onValueChange={setSliderValueB}
            />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 25,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  slider: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  title: {
    fontSize: 16,
    fontFamily: 'monospace',
    textAlign: 'center',
    padding: 10,
    paddingEnd: 20,
  },
  sliderValue: {
    fontSize: 16,
    fontFamily: 'monospace',
    textAlign: 'right',
    width: 35,
    paddingTop: 8,
  },
  text: {
    fontSize: 16,
    fontFamily: 'monospace',
    textAlign: 'left',
    paddingTop: 8,
    paddingLeft: 5,
  }
})
