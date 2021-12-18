import React, {useContext, useState} from 'react';
import {
  TouchableOpacity,
  Text,
  SafeAreaView,
  View,
  Image,
  ScrollView,
} from 'react-native';
import {CartContext} from '../../Context';
import {useNavigation} from '@react-navigation/core';
import ModalDelete from '../../components/ModalDeleteReceta';

const index = () => {
  const context = useContext(CartContext);
  const {cart, setCart, existe, setExiste} = context;
  const navigation = useNavigation();
  const atras = '<';

  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);
  const [item, setItem] = useState('');
  const [itemId, setItemId] = useState('');

  return (
    <SafeAreaView
      style={{padding: 10, backgroundColor: '#rgba(160, 160, 160, 0.73)'}}>
      <ModalDelete
        modalVisible={modalDeleteOpen}
        setModalVisible={setModalDeleteOpen}
        item={item}
        itemId={itemId}
        cart={cart}
        setCart={setCart}
        existe={existe}
        setExiste={setExiste}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#rgb(36, 170, 135)',
            padding: 10,
            marginVertical: 10,
            marginBottom: 15,
            borderRadius: 10,
            width: '30%',
            marginLeft: 5,
          }}
          onPress={() => navigation.navigate('Recetas')}>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              paddingHorizontal: 5,
              alignSelf: 'center',
            }}>
            {atras}
          </Text>
        </TouchableOpacity>

        <View>
          <Text
            style={{
              color: 'white',
              fontSize: 30,
              fontWeight: 'bold',
              // backgroundColor: '#92BDD4',
              padding: 10,
              textAlign: 'center',
              width: '100%',
            }}>
            Favoritos
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#rgb(255, 83, 13)',
            padding: 10,
            marginVertical: 10,
            marginBottom: 15,
            borderRadius: 10,
            width: '30%',
            marginRight: 5,
          }}
          onPress={() => navigation.navigate('Recetas')}>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              paddingHorizontal: 5,
              alignSelf: 'center',
            }}>
            Home
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginVertical: 10,
            marginBottom: 30,
          }}>
          Tus recetas favoritas:
        </Text>
        <View>
          {cart.map(item => (
            <>
              <ScrollView
                style={{
                  marginBottom: 20,
                  marginHorizontal: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    alignSelf: 'center',
                  }}>
                  <Text
                    style={{
                      width: '20%',
                      alignItems: 'flex-start',
                      alignSelf: 'auto',
                      marginHorizontal: 10,
                    }}>
                    {item.name}
                  </Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: 'white',
                      padding: 10,
                      borderRadius: 10,
                      alignSelf: 'center',
                      marginHorizontal: 10,
                    }}
                    onPress={() =>
                      navigation.push('DetalleRecetas', {id: item.id})
                    }>
                    <Image
                      source={{uri: item.url}}
                      style={{height: 90, width: 90, borderRadius: 10}}></Image>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      // const filtered = cart.filter(function (element) {
                      //   return element != item;
                      // });
                      // setCart(filtered);
                      // const filteredItem = existe.filter(function (element) {
                      //   return element != item.id;
                      // });
                      // setExiste(filteredItem);
                      setModalDeleteOpen(true);
                      setItem(item);
                      setItemId(item.id);
                    }}
                    style={{
                      backgroundColor: 'red',
                      width: '25%',
                      padding: 10,
                      borderRadius: 5,
                      alignContent: 'center',
                      alignItems: 'center',
                      // height: '40%',
                      // marginTop: 20,
                      marginHorizontal: 20,
                    }}>
                    <Text style={{color: 'white', textAlign: 'center'}}>
                      Eliminar
                    </Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
