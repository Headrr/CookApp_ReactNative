import React, {useContext, useState} from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import {CartContext} from '../../Context';

const index = ({modalVisible, setModalVisible, item}) => {
  const context = useContext(CartContext);
  const {cart, setCart, existe, setExiste} = context;

  return (
    <Modal animationType="none" transparent={true} visible={modalVisible}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 22,
        }}>
        <View
          style={{
            backgroundColor: '#rgba(160, 160, 160, 0.73)',
            width: '86%',
            height: '20%',
            alignSelf: 'center',
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20
          }}>
          <Text style={{marginVertical: 10, color: 'white', fontSize: 20, fontWeight: 'bold'}}>
            ¿Desea eliminar receta de favoritos?
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{
                backgroundColor: 'gold',
                padding: 5,
                marginVertical: 5,
                borderRadius: 5,
                width: '40%',
                alignSelf: 'center',
                margin: 5,
              }}
              onPress={() => {
                const filtered = cart.filter(function (element) {
                  return element != item;
                });
                setCart(filtered);
                const filteredItem = existe.filter(function (element) {
                  return element != item.id;
                });
                setExiste(filteredItem);
                setModalVisible(false);
              }}>
              <Text
                style={{fontSize: 20, paddingHorizontal: 5, justifyContent: 'center', alignSelf: "center"}}>
                Sí, eliminar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: '#33DCFF',
                padding: 5,
                marginVertical: 5,
                borderRadius: 5,
                width: '40%',
                alignSelf: 'center',
                margin: 5,
              }}
              onPress={() => setModalVisible(false)}>
              <Text
                style={{fontSize: 20, paddingHorizontal: 5, justifyContent: 'center', alignSelf: "center"}}>
                No, mantener
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default index;
