import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import {data} from '../../data';
import {SafeAreaView, StyleSheet} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const index = ({}) => {
  // const [text, setText] = useState('');
  // const [teslaBuscar, setTeslaBuscar] = useState(data);

  // useEffect(() => {
  //   if(!text) return setTeslaBuscar(data);

  //   if(isNaN(text)){
  //     setTeslaBuscar(
  //       data.filter(item => item.modelo.toLocaleLowerCase().includes(text.toLocaleLowerCase()))
  //     )
  //   }
  //   else{
  //     const carDetected = data.filter( item => item.id === text );
  //     setTeslaBuscar(carDetected ? carDetected : []);
  //   }
  // }, [text])

  // const renderResultados = () => (
  //   <Text style={{color: 'white', fontSize: 20, marginTop: 20, marginLeft: 20}}> No hay resultados</Text>
  // );

  const image = {
    uri:
      // "https://reactjs.org/logo-og.png"
      // 'https://st.depositphotos.com/1001092/4768/i/950/depositphotos_47684611-stock-photo-delicious-portion-of-fresh-salmon.jpg',
    "https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_960_720.jpg"
  };

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{backgroundColor: '#2d2e32', height: '100%'}}>
      <View>
        <ImageBackground
          source={image}
          style={{justifyContent: 'center', height: '100%'}}>
          <View
            style={{
              backgroundColor: '#0000008a',
              // backgroundColor: '#rgb(108, 117, 125)'
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignContent: 'space-between',
                alignSelf: 'flex-end',
                marginHorizontal: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 50,
                  marginTop: 10,
                  marginBottom: 10,
                }}>
                Cook
              </Text>
              <Text
                style={{
                  color: '#rgb(255,83,9)',
                  fontSize: 50,
                  fontWeight: 'bold',
                  marginTop: 10,
                  marginBottom: 10,
                }}>
                App
              </Text>
            </View>
          </View>

          <View
            style={{
              marginTop: 100,
              marginHorizontal: 10,
              backgroundColor: '#0000008a',
              borderRadius: 15,
              padding: 10,
            }}>
            <Text
              style={{
                fontSize: 45,
                color: 'white',
                textAlign: 'left',
                flexDirection: 'column',
                width: '70%',
              }}>
              Cocina Deliciosos Platos Fácilmente
            </Text>

            <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
                color: 'gray',
                textAlign: 'left',
                flexDirection: 'column',
                width: '90%',
              }}>
              Podrás encontrar muchas recetas que te podrán ser de gran ayuda
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              paddingHorizontal: 5,
              marginTop: '5%',
              marginBottom: '20%',
            }}>
            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: '#24aa87',
                borderRadius: 10,
                alignSelf: 'center',
                width: '70%',
                marginVertical: 20,
                marginBottom: 50,
              }}
              onPress={() => navigation.navigate('Recetas')}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 26,
                  fontWeight: 'bold',
                  alignSelf: 'center',
                }}>
                Ingresar
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default index;
