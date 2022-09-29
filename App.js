import { useState } from 'react';
import { ScrollView, Alert, Switch, Text, TextInput, View } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import RadioForm from 'react-native-simple-radio-button';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { BasicTheme, FancyTheme } from './MyStyle';
import { useFonts } from 'expo-font';

export default function App() {

  const [weight, setWeight] = useState(0);
  const [gender, setGender] = useState('female');
  const [bottles, setBottles] = useState(0);
  const [hours, setHours] = useState(0);
  const [alcolevel, setAlcolevel] = useState(0);

  const [isOn, setIsOn] = useState(false);

  const [loaded] = useFonts({
    'LatoRegular' : require('./assets/fonts/Lato-Regular.ttf')
  });
  
   if (!loaded) {
    return null;
  }  

  const theme = isOn ? BasicTheme : FancyTheme;

  const showAlert = () => {
    alert('Error! Set weight.');
  };

  const genders = [
    {label: 'Female', value: 'female'},
    {label: 'Male', value: 'male'}
  ];

  function calculate() {
    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;

    let burning = weight / 10;
      if (weight === 0 || weight === ' ' ) {
        showAlert(alert);
        return;
      }

    let grams_l = grams - (burning * hours);

    let result = 0;

    //let color;

    if (gender === 'female') {
      result = grams_l / (weight * 0.6)
    } 
    else {
      result = grams_l / (weight * 0.7)
    }

    if (result < 0.00 ) {
      /* color = '#134d00'; */
      setAlcolevel(0);
    }
    else if (result > 0.00 && result < 0.15 ) {
      /* color = 'yellow'; */
      setAlcolevel(result);
    }
    else {
      /* color = 'red'; */
      setAlcolevel(result);
    }
  }

  return (
    <ScrollView>
    <View style={theme.container}>
      <View style={theme.switch}>
        <Switch 
          onChange={ () => setIsOn( prev => !prev) }
          value={isOn}
          thumbColor={theme.myThumbColor}
          trackColor={{false: 'gray', true: '#ffe6ff'}}>
        </Switch>
      </View>
      <View>
        <Text style={theme.title}>Alcometer</Text>
      </View>
      <View style={theme.field}>
        <Text style={theme.text}>Weight</Text>
        <TextInput
          style={theme.input}
          onChangeText={text => setWeight(text)}
          placeholder="   in kilograms"
          keyboardType={'number-pad'}></TextInput>
      </View>
      <View>
        <Text style={theme.text}>Bottles</Text>
        <NumericInput 
        onChange={b => setBottles(b)}
        value = {bottles}
        style={theme.myInputStyle}
        rounded={theme.myInputStyleRounded}
        borderColor={theme.myInputColor}
        iconStyle={theme.myInputColor2}
        rightButtonBackgroundColor={theme.myInputColor}
        leftButtonBackgroundColor={theme.myInputColor}
        ></NumericInput>
      </View>
      <View>
        <Text style={theme.text}>Hours</Text>
        <NumericInput 
        onChange={h => setHours(h)}
        value = {hours}
        rounded={theme.myInputStyleRounded}
        borderColor={theme.myInputColor}
        iconStyle={theme.myInputColor2}
        rightButtonBackgroundColor={theme.myInputColor}
        leftButtonBackgroundColor={theme.myInputColor}
        ></NumericInput>
      </View>
      <View>
      <Text style={theme.text}>Gender</Text>  
      <RadioForm
        style={theme.radio}
        radio_props={genders}
        initial={0}
        onPress={(value) =>{setGender(value)}}
        buttonColor={theme.myRadioColor}
        labelStyle={theme.myLabelStyle}
        ></RadioForm>
      <Text style={theme.result} >
        {alcolevel.toFixed(2)}</Text>  
      </View>
      <Pressable style={theme.button}
        onPress={ () => calculate()} >
        <Text style={theme.buttonText}>Calculate</Text>  
      </Pressable>
    </View>
    </ScrollView>
  );
}


