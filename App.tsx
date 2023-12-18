/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import {Text,View,Button} from 'react-native';

const App=()=>{

const [data,setData]=useState(0);
const [count,setCount]=useState(100);

useEffect(()=>{
  console.warn('Data has been updated:', data);
  return ()=>{
  };
},[data,count]);


const incrementData=()=>{
setData(data+1)
}

const incrementCount=()=>{
setCount(count+1)
}

return ( <View>
  <Text >Data: {data}</Text>
  <Text>Count: {count}</Text>

  <Button title="Increment Data" onPress={incrementData} />
  <Button title="Increment Count" onPress={incrementCount} />

</View>)
}
export default App;
