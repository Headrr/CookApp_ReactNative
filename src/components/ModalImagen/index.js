import React, {useContext, useState} from 'react';
import {View, Text, Modal, TouchableOpacity, ScrollView, Image} from 'react-native';
import {CartContext} from '../../Context';

const index = ({ modalVisible, setModalVisible, character}) => {
  const context = useContext(CartContext);
  const {cart, setCart} = context;
//   console.log("Caracter:", character);

  return (
    <Modal
    transparent={true}
    visible={modalVisible}
    >
    <View style={{flex: 1,
        justifyContent: "center",
        alignItems: "flex-end",
        marginTop: 22}}>
        {/* <View style={{
            backgroundColor: '#rgba(160, 160, 160, 0.73)',
            width: '80%',
            height: '65%',
            alignSelf: 'auto',
            justifyContent: "center",
            // alignItems: "center",
            borderRadius: 20
            }}> */}
                 {/* <View style={{justifyContent: 'flex-end', marginTop: 10, 
                //  marginBottom: 10
                 }}>
                <TouchableOpacity style={{
                backgroundColor: 'grey',
                padding: 5,
                // marginVertical: 5,
                borderRadius: 5,
                width: '15%',
                alignSelf: 'flex-end',
                alignContent: 'flex-end',
                justifyContent: 'flex-end',
                marginHorizontal: 60
                // margin: 20
                }}
                onPress={() => setModalVisible(false)}>
                    <Text style={{fontSize: 20, color: 'white', paddingHorizontal: 5, textAlign: 'center'}}>
                        X
                    </Text>
                </TouchableOpacity>
            </View> */}

            {/* <View>
                <Text style={{fontSize: 25, fontWeight: 'bold', alignSelf: 'flex-start', margin: 20}}>Preparación: {character?.name}</Text>
            </View> */}
            <TouchableOpacity style={{alignItems: 'center', alignSelf: 'center'}}
            onPress={() => setModalVisible(false)}>
            <Image
                  source={{uri: character}}
                  style={{
                      height: 350,
                      width: 350,
                    //   marginVertical: 15,
                      marginHorizontal: 10,
                      borderRadius: 10,
                      alignSelf: 'center'
                  }}
                   />
                  </TouchableOpacity>
        </View>
    {/* </View> */}
</Modal>
  );
};

export default index;
