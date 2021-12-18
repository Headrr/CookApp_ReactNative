import React from 'react';
import {View, TextInput} from 'react-native';

const index = ({text, setText}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <TextInput
        placeholder="Modelo a Buscar"
        onChangeText={value => setText(value)}
        style={{
          backgroundColor: 'white',
          width: '85%',
          margin: 20,
          borderRadius: 10,
          paddingHorizontal: 10,
          fontSize: 20,
        }}
      />
    </View>
  );
};

export default index;
