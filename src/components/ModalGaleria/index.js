import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';
import ModalImagen from '../../components/ModalImagen';
import Icon from 'react-native-vector-icons/FontAwesome';
// MaterialIcons
// import { IconName } from "react-icons/fa";

const index = ({modalVisible, setModalVisible, character, idReceta}) => {
  const [state, setState] = useState({});
  const idRecipe = character.id;
  const [fotoCargada, setFotoCargada] = useState(false);
  const [modalImagenOpen, setModalImagenOpen] = useState(false);
  const [urlImagen, setUrlImagen] = useState('');

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const cambioUrlSegura = (url) => {
    const secure = "https"
    const urlLimpia = url.slice(4);
    const urlSegura = secure.concat(urlLimpia);
    return urlSegura;
  };

  const espera = async () => {
    setFotoCargada(true);
    await sleep(1000)
    setFotoCargada(false);
  }
  const uploadImage = foto => {
    const data = new FormData();
    data.append('file', foto);
    data.append('upload_preset', 'react-redescolar');
    fetch('https://api.cloudinary.com/v1_1/as-del-sur/image/upload', {
      method: 'post',
      body: data,
    })
      .then(resp => resp.json())
      .then(data => {
        axios
          .post(
            'https://pacific-savannah-47698.herokuapp.com/addUrl',
            // "http://192.168.1.9:3200/addUrl",
            {
              idReceta: idRecipe,
              url: cambioUrlSegura(data.url),
            },
          )
          .catch(function (err) {
            console.log(err);
          });
          espera();
        // setFotoCargada(true);
        // sleep(100);
        // setFotoCargada(false);
      })
      .catch(err => console.log(err));
  };

  const tomarFoto = async () => {
    return launchCamera(
      {
        cameraType: 'back',
        saveToPhotos: true,
        includeBase64: true,
      },
      response => {
        if (response.didCancel) {
          console.log('El usuario cancelo');
          return;
        }
        if (response.assets[0].uri) {
          setState({...state, uri});
          const uri = response.assets[0].uri;
          const type = response.assets[0].type;
          const name = response.assets[0].fileName;
          const source = {
            uri,
            type,
            name,
          };
          uploadImage(source);
          console.log('Imagen cargada');
        }
      },
    );
  };

  const [listaGaleria, setListaGaleria] = useState([]);
  // const peticionGaleria = async() => {
  //     await axios
  //     .get(`https://pacific-savannah-47698.herokuapp.com/getUrl/${idRecipe}`)
  //     // .get(`http://192.168.1.9:3200/getUrl/${idRecipe}`)
  //     .then(e => setListaGaleria(e.data))
  //         // console.log(listaGaleria),
  //     .catch(err => console.log("ERROR", err));
  //     await sleep(50);
  //     verGaleria();
  // };

  // const peticionGaleria = async() => {
  //     await axios
  //     .get(`https://pacific-savannah-47698.herokuapp.com/getUrl/${idReceta}`)
  //     // .get(`http://192.168.1.9:3200/getUrl/${idRecipe}`)
  //     .then(e => setListaGaleria(e.data))
  //         // console.log(listaGaleria),
  //     .catch(err => console.log("ERROR", err));
  //     // await sleep(50);
  //     // verGaleria();
  // };

  // const verGaleria = () => {
  //     peticionGaleria();
  // };

  useEffect(() => {
      // peticionGaleria();
      const peticionGaleria = async() => {
          await axios
          .get(`https://pacific-savannah-47698.herokuapp.com/getUrl/${idReceta}`)
          // .get(`http://192.168.1.9:3200/getUrl/${idRecipe}`)
          .then(e => setListaGaleria(e.data))
              // console.log(listaGaleria),
          .catch(err => console.log("ERROR", err));
          // await sleep(50);
          // verGaleria();
      };
  peticionGaleria();
  }, [idReceta, fotoCargada]
  )

  // useEffect(() => {
  //     if (idRecipe == undefined) {
  //         return (console.log("ESPERANDO"),
  //         console.log(idRecipe))
  //     }
  //     else peticionGaleria();
  // },
  // // []
  // // [idRecipe]
  // [idRecipe, fotoCargada]
  // )
  const peticionGaleria = async () => {
    // const idRecipe = 1
    await axios
      .get(`https://pacific-savannah-47698.herokuapp.com/getUrl/${idReceta}`)
    //   .get(`https://pacific-savannah-47698.herokuapp.com/getUrl/1`)
      // .get(`http://192.168.1.9:3200/getUrl/${idRecipe}`)
      .then(e => setListaGaleria(e.data))
      .catch(err => console.log('ERROR', err));
    console.log(listaGaleria);
  };

  
  return (
    <>
      <ModalImagen
        modalVisible={modalImagenOpen}
        setModalVisible={setModalImagenOpen}
        character={urlImagen}
      />

      <Modal transparent={true} visible={modalVisible}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 22,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              width: '90%',
              height: '80%',
              alignSelf: 'center',
              borderRadius: 20,
            }}>
            <View style={{marginTop: 0, marginBottom: 20}}>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: 'bold',
                  alignSelf: 'flex-start',
                  marginHorizontal: 20,
                  marginVertical: 10,
                }}>
                Galería: {character?.name}
              </Text>
              {/* <FontAwesomeIcon icon={faCoffee} /> */}
                {/* <Icon name='dribbble' size={25} color="#900" type='FontAwesome'></Icon> */}
                {/* <Icon name='person-outline' type="MaterialIcons"/> */}
               <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  alignSelf: 'flex-start',
                  marginHorizontal: 20,
                  marginVertical: 10,
                }}>
                Galería de imágenes de "{character?.name}" de nuestros mejores
                cocineros. Dónde podrás colaborar con tu mejor plato.
              </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              {/* <TouchableOpacity
                style={{
                  backgroundColor: 'blue',
                  padding: 10,
                  marginVertical: 5,
                  borderRadius: 5,
                  width: '35%',
                  alignSelf: 'flex-end',
                  marginHorizontal: 20,
                  marginBottom: 20,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: 'white',
                    paddingHorizontal: 5,
                    textAlign: 'center',
                  }}
                  onPress={() => peticionGaleria()}>
                  Ver galería
                </Text>
              </TouchableOpacity> */}

              <TouchableOpacity
                style={{
                  backgroundColor: 'blue',
                  padding: 10,
                  marginVertical: 5,
                  borderRadius: 5,
                  width: '30%',
                  alignSelf: 'flex-end',
                  marginHorizontal: 20,
                  marginBottom: 20,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: 'white',
                    paddingHorizontal: 5,
                    textAlign: 'center',
                  }}
                  onPress={() => tomarFoto()}>
                  Agregar fotografía
                </Text>
              </TouchableOpacity>
              {/* {listaGaleria.map(e => {
                <Text key={e.id}>{e.idReceta}</Text>;
              })} */}
            </View>
            {/* <Image
                  source={{uri: listaGaleria.url}}
                  style={{
                      height: 50,
                      width: 50,
                      marginVertical: 5,
                      marginHorizontal: 10,
                      borderRadius: 10,
                      alignSelf: 'center'
                  }}
                  /> */}
            <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                alignSelf: 'flex-start',
                marginHorizontal: 20,
                marginVertical: 10,
              }}>
              Galeria de imágenes
            </Text>
            {/* <TouchableOpacity
                style={{backgroundColor: 'grey', width:30, height: 30, alignItems: 'center', flexDirection: 'column'}}
                onPress={() => peticionGaleria()}>
                <Text style={{alignContent: 'center', alignSelf: 'center', fontSize: 20}}>C</Text>
            </TouchableOpacity> */}
            { fotoCargada == true ? <ActivityIndicator style={{padding: 20}} size={40} color="black" /> : null }
            </View>
            <View style={{marginHorizontal: 10}}>
                {/* <Image source={{uri: 'https://res.cloudinary.com/as-del-sur/image/upload/v1639697690/ynu8qcxa4wf9kxeapryi.jpg'}} style={{width: 200, height: 200}}></Image> */}
              <ScrollView horizontal={true}>
                {listaGaleria.map(foto => (
                      <>
                    <TouchableOpacity
                      key={foto.id}
                      onPress={() => {
                        setModalImagenOpen(true);
                        setUrlImagen(foto.url);
                      }}>
                  <View>
                  <Image
                    // source={{uri: foto.url}}
                    source={{uri: foto.url}}
                    style={{
                      height: 100,
                      width: 100,
                      marginVertical: 5,
                      marginHorizontal: 10,
                      borderRadius: 10,
                      alignSelf: 'center',
                    }}
                  />
                  {/* <Text>{foto.url}</Text> */}
                  </View>
                     </TouchableOpacity>
                     </>
                ))}
              </ScrollView>
            </View>

            <View></View>
            <View
              style={{
                justifyContent: 'flex-end',
                marginTop: 5,
                marginBottom: 10,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'red',
                  padding: 5,
                  marginVertical: 5,
                  borderRadius: 5,
                  width: '25%',
                  alignSelf: 'center',
                  marginTop: 50,
                }}
                onPress={() => setModalVisible(false)}>
                <Text
                  style={{fontSize: 20, color: 'white', paddingHorizontal: 5}}>
                  Cerrar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default index;
