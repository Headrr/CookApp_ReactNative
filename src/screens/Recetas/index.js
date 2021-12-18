import React, {useEffect, useStatem, useContext, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CartContext} from '../../Context';
import {RECETAS_DATA} from '../../dataRecetas/recetas.data';

const index = ({navigation, route}) => {
  const atras = '<';

  const listaApi = RECETAS_DATA;

  const [recetas, setRecetas] = useState([]);
  const [dataCargada, setDataCargada] = useState(false);

  const peticionRecetas = async () => {
    const response = await axios
      .get('https://pacific-savannah-47698.herokuapp.com/recetas')
      // .get('http://192.168.1.9:3200/recetas')
      .then(e => setRecetas(e.data))
      .then(e => setDataCargada(true))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    peticionRecetas();
  }, [dataCargada]);

  return (
    <SafeAreaView
      style={{padding: 10, backgroundColor: '#rgba(160, 160, 160, 0.73)'}}>
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
          onPress={() => navigation.navigate('Home')}>
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
            Recetas
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
          onPress={() => navigation.navigate('Favoritos')}>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              paddingHorizontal: 5,
              alignSelf: 'center',
            }}>
            Favoritos
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} style={{flexDirection: 'row'}}></ScrollView>
      <ScrollView style={{marginBottom: '20%', borderRadius: 10}}>
        {dataCargada == [] ? (
          <ActivityIndicator style={{padding: 20}} size={40} color="white" />
        ) : (
          listaApi.map(e => (
            <View
              key={e.id}
              style={{alignSelf: 'center', padding: 5, marginVertical: 10}}>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: 'bold',
                  alignSelf: 'flex-start',
                  borderRadius: 5,
                }}>
                {e.name}
              </Text>

              {/* <Text style={{color: 'white', fontSize: 20, alignSelf: 'flex-start', borderRadius: 5}}>{e.name}</Text> */}
              <TouchableOpacity
                style={{
                  backgroundColor: 'white',
                  padding: 10,
                  marginVertical: 10,
                  marginBottom: 15,
                  borderRadius: 10,
                  width: '30%',
                  alignSelf: 'flex-end',
                }}
                onPress={() => navigation.push('DetalleRecetas', {id: e.id})}>
                {/* <Image source={{uri: e.image}} style={{height: 300, width: 300, borderRadius: 10}}></Image> */}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{fontSize: 15}}>Tiempo: {e.tiempo} minutos</Text>
                  <Text style={{fontSize: 15}}>Porciones: {e.porciones}</Text>
                </View>
                <Image
                  source={{uri: e.url}}
                  style={{height: 300, width: 350, borderRadius: 10}}></Image>

                <View
                  style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                  {e.etiquetas.map(etiqueta => (
                    <Text style={{marginHorizontal: 5}} key={etiqueta}>
                      {etiqueta}
                    </Text>
                  ))}
                </View>
                <View>
                  {/* {etiquetas?.map(e => {
                            <Text>{e[0]}</Text>
                        })} */}
                </View>
                {/* <Image source={{uri: e.flickr_images[0]}} style={{height: 300, width: 300, borderRadius: 10}}></Image> */}
              </TouchableOpacity>
              {/* <View style={{flexDirection: 'row', marginBottom: 15, justifyContent: 'center', }}>
                            <TouchableOpacity
                             onPress={() => {
                                // const add = characters.push(1)
                                // console.log(add);
                                // setCharacters(filtered)
                                const parseId = parseInt(e.id, 10);
                                // setCart([...cart, parseId]);
                                setCart([...cart, parseId]);
                            }}
                                style={{backgroundColor: 'gold', width: 150, padding: 10, borderRadius: 5}}>
                                <Text style={{color: 'white', fontSize: 16, alignSelf: 'center'}}>Favoritos</Text>
                            </TouchableOpacity>
                            {cart.includes(parseInt(e.id)) ? (
                                <TouchableOpacity
                                onPress={() => {
                                    // const add = characters.push(1)
                                    // console.log(add);
                                    // setCharacters(filtered)
                                    const parseId = parseInt(e.id, 10);
                                    console.log("es E", e.id)
                                    setCart([...cart, parseId]);
                                }}
                                    style={{backgroundColor: 'red', width: 10, padding: 10, borderRadius: 5}}>
                                    <Text style={{color: 'white', fontSize: 16, alignSelf: 'center'}}>Eliminar</Text>
                                </TouchableOpacity>
                            ) : null}
                        </View> */}
            </View>
          ))
        )}
        {/* <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginBottom: '10%'}}>
            <TouchableOpacity
                onPress={() => {
                    if (page > 0) {
                        setPage(page - 1);
                    }
                }}
                style={{backgroundColor: 'blue', width: 150, padding: 10, borderRadius: 5}}>
                <Text style={{color: 'white'}}>Página anterior</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    setPage(page + 1);
                }}
                style={{backgroundColor: 'blue', width: 150, padding: 10, borderRadius: 5}}>
                <Text style={{color: 'white'}}>Siguiente página</Text>
            </TouchableOpacity>
            </View>
             */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
