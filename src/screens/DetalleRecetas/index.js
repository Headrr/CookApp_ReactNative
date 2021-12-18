import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {CartContext} from '../../Context';
import ModalADD from '../../components/ModalAddFavoritos';
import ModalReceta from '../../components/ModalReceta';
import ModalIngredientes from '../../components/ModalIngredientes';
import ModalGaleria from '../../components/ModalGaleria';
import axios from 'axios';
import {RECETAS_DATA} from '../../dataRecetas/recetas.data';

const index = ({navigation, route}) => {
  const context = useContext(CartContext);
  const {cart, setCart, existe, setExiste} = context;
  const [modalVisible, setModalVisible] = useState(false);
  const [modalRecetaOpen, setModalRecetaOpen] = useState(false);
  const [modalIngredientesOpen, setModalIngredientesOpen] = useState(false);
  const [modalGaleriaOpen, setModalGaleriaOpen] = useState(false);

  const {id} = route.params;

  const [recetas, setRecetas] = useState([]);
  const [dataCargada, setDataCargada] = useState(false);

  const peticionRecetas = async () => {
    const response = await axios
      .get(`https://pacific-savannah-47698.herokuapp.com/recetas/${id}`)
      // .get(`http://192.168.1.9:3200/recetas/${id}`)
      .then(e => setRecetas(e.data))
      .then(e => setDataCargada(true))
      .catch(err => console.log(err));
  };

  useEffect(
    () => {
      peticionRecetas();
    }, []);

  const atras = '<';

  const [idReceta, setIdReceta] = useState('');
  const [listaGaleria, setListaGaleria] = useState([]);

  return (
    <SafeAreaView
      style={{
        padding: 10,
        flexDirection: 'column',
        alignContent: 'center',
        backgroundColor: '#rgba(160, 160, 160, 0.73)',
        height: '100%'
      }}>
      {/* backgroundColor: '#2d2e32' */}

      <ModalADD
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        character={recetas}
      />

      <ModalReceta
        modalVisible={modalRecetaOpen}
        setModalVisible={setModalRecetaOpen}
        character={recetas}
      />

      <ModalIngredientes
        modalVisible={modalIngredientesOpen}
        setModalVisible={setModalIngredientesOpen}
        character={recetas}
      />

      <ModalGaleria
        modalVisible={modalGaleriaOpen}
        setModalVisible={setModalGaleriaOpen}
        character={recetas}
        idReceta={idReceta}
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
          onPress={() => navigation.goBack()}>
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
            Detalles
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

      {dataCargada == [] ? (
        <ActivityIndicator style={{padding: 20}} size={40} color="white" />
      ) : (
        <>
          <View key={recetas?.id}>
            <Text
              style={{fontSize: 25, fontWeight: 'bold', marginHorizontal: 10}}>
              Receta: {recetas?.name}
            </Text>
            <ScrollView>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 10,
                }}>
                <Text style={{fontSize: 15, padding: 5}}>
                  Tiempo de preparación: {recetas?.tiempo}
                </Text>
                <Text style={{fontSize: 15, padding: 5}}>
                  Porciones: {recetas?.porciones}
                </Text>
              </View>
              <Image
                source={{uri: recetas?.url}}
                style={{
                  height: 300,
                  width: '95%',
                  marginVertical: 5,
                  borderRadius: 10,
                  alignSelf: 'center',
                }}
              />

              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  marginBottom: 10,
                }}>
                <Text
                  style={{
                    marginTop: 4,
                    textAlignVertical: 'top',
                    marginHorizontal: 10,
                  }}>
                  Gastronomía: {recetas?.tipo}
                </Text>

                {existe.includes(recetas.id) ? (
                  <View
                    style={{
                        backgroundColor: 'grey',
                        padding: 10,
                        marginVertical: 5,
                        borderRadius: 5,
                        width: '50%',
                        marginBottom: 5,
                        width: '30%',
                        marginHorizontal: 10
                    }}>
                    <Text style={{fontSize: 15, color: 'white', textAlign: 'center'}}>
                      En Favoritos
                    </Text>
                  </View>
                ) : (
                  <TouchableOpacity
                    style={{
                      backgroundColor: 'gold',
                      padding: 10,
                      marginVertical: 5,
                      borderRadius: 5,
                      width: '50%',
                      marginBottom: 5,
                      width: '30%',
                      marginHorizontal: 10
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        color: '#2d2e32',
                        paddingHorizontal: 5,
                        textAlign: 'center',
                      }}
                      onPress={() => {
                        setModalVisible(true);
                      }}>
                      Favoritos
                    </Text>
                  </TouchableOpacity>
                )}
              </View>

              <Text
                style={{
                  color: 'white',
                  textAlign: 'justify',
                  fontStyle: 'italic',
                  fontSize: 15,
                  backgroundColor: '#0000008a',
                  padding: 5,
                  borderRadius: 10,
                  marginHorizontal: 10,
                  marginBottom: 15,
                  marginTop: 10
                }}>
                {recetas?.descripcion}
              </Text>

              <View
                style={{
                  justifyContent: 'space-evenly',
                  flexDirection: 'row',
                  marginBottom: 50,
                  // marginTop: 15
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'white',
                    padding: 10,
                    marginVertical: 5,
                    borderRadius: 5,
                    width: '80%',
                    marginBottom: 5,
                    width: '30%',
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#2d2e32',
                      paddingHorizontal: 5,
                      textAlign: 'center',
                    }}
                    onPress={() => {
                      setModalRecetaOpen(true);
                    }}>
                    Preparación
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    backgroundColor: 'white',
                    padding: 10,
                    marginVertical: 5,
                    borderRadius: 5,
                    width: '80%',
                    marginBottom: 5,
                    width: '30%',
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#2d2e32',
                      paddingHorizontal: 5,
                      textAlign: 'center',
                    }}
                    onPress={() => {
                      setModalIngredientesOpen(true);
                    }}>
                    Ingredientes
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    backgroundColor: 'white',
                    padding: 10,
                    marginVertical: 5,
                    borderRadius: 5,
                    width: '80%',
                    marginBottom: 5,
                    width: '30%',
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#2d2e32',
                      paddingHorizontal: 5,
                      textAlign: 'center',
                    }}
                    onPress={() => {
                      setModalGaleriaOpen(true);
                      setIdReceta(id);
                    }}>
                    Galería
                  </Text>
                </TouchableOpacity>
              </View>
  
            </ScrollView>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default index;
