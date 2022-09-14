import React, { useState } from 'react'; 
import { StyleSheet, Text, View, Button, TextInput, FlatList, InteractionManager,  } from 'react-native';

export default function App() {
  const [result, setResult] = useState('');
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [data, setData] = useState([]);

      
  const calculate = operator => {
    console.log(num1, num2, operator);
    const [number1, number2] = [Number(num1), Number(num2)];

    if (isNaN(number1) || isNaN(number2)) {
      setResult(0);
    } else {
      let result = 0;
    switch (operator) {
      case '+':
        result = number1 + number2;
        break;

      case '-':
        result = number1 - number2;
        break;
    }
    setResult(result);

    const text = `${number1} ${operator} ${number2} = ${result}`;
    setData([...data, text]);
  }
  
  setNum1('');
  setNum2('');
  
}
  
  return (

    <View style={styles.container}>
      
      <Text>Result: {result}</Text>
      <TextInput style={styles.textbox}
      keyboardType= {'number-pad'}
      onChangeText={text => setNum1(text)} 
      value={num1}>
      </TextInput>

      <TextInput style={styles.textbox}
      keyboardType= {'number-pad'}
      onChangeText={text => setNum2(text)} 
      value={num2}>
      </TextInput>

      <View style={styles.operators}>
      <View style={styles.buttons}>
        <Button title = "+" onPress={() => calculate('+')} />
      </View>
      <View style={styles.buttons}>
        <Button title = "-" onPress={() => calculate('-')} />
      </View>
      </View>

      <FlatList
      ListHeaderComponent={() => <Text stlye={styles.headers}>History</Text>}
      data={data}
      keyExtractor={ (item, index) => index}
      renderItem={({item}) => <Text sytle={styles.textinput}>{item}</Text>
  }
  />
      
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  textbox: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
    width: '50%',
    margin: 10,
  },

  operators: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttons: {
    width: '20%',
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
    marginBottom: 40,
      
    
  },
  headers: {
      marginTop: 30,
      marginBottom: 10,
      
  },
  list: {
    flex: 1,
    
  },
  textinput: {
    marginTop: 30,
    alignSelf: 'center',
    
  }

});