import React, {useContext, useState} from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import {CartContext} from '../../Context';

const index = ({ modalVisible, setModalVisible, character}) => {
  const context = useContext(CartContext);
  const {cart, setCart, existe, setExiste} = context;
//   console.log(character);

  // const [modalVisible, setModalVisible] = useState(false);

  return (
    <Modal
    // animationType="slide"
    transparent={true}
    visible={modalVisible}
    // onRequestClose={() => {
    // Alert.alert("Modal has been closed.");
    // setModalVisible(!modalVisible);
    // }}
    >
    <View style={{flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22}}>
        <View style={{
            backgroundColor: '#rgba(160, 160, 160, 0.73)',
            width: '85%',
            height: '20%',
            alignSelf: 'center',
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20
            }}>
            <Text style={{marginVertical: 10, color: 'white', fontSize: 20, fontWeight: 'bold'}}>¿Desea agregar receta a favoritos?</Text>
            <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={{
                backgroundColor: 'gold',
                padding: 5,
                marginVertical: 5,
                borderRadius: 5,
                width: '25%',
                alignSelf: 'center',
                margin: 5,
                }}
                onPress={() => {
                  setCart([...cart, character]);
                  setModalVisible(false)
                  setExiste([...existe, character.id])}}>
                    <Text style={{fontSize: 20, paddingHorizontal: 5, justifyContent: 'center', alignSelf: "center"}}>
                        Sí
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                backgroundColor: '#33DCFF',
                padding: 5,
                marginVertical: 5,
                borderRadius: 5,
                width: '25%',
                alignSelf: 'center',
                margin: 5
                }}
                onPress={() => setModalVisible(false)}>
                    <Text style={{fontSize: 20, paddingHorizontal: 5, justifyContent: 'center', alignSelf: "center"}}>
                        No
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
</Modal>
  );
};

export default index;
