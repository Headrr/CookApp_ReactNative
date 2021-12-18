import React from 'react';
import {View, Text, Modal, TouchableOpacity, ScrollView} from 'react-native';

const index = ({modalVisible, setModalVisible, character}) => {

  return (
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
            justifyContent: 'center',
            borderRadius: 20,
          }}>
          <View>
            <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
                alignSelf: 'flex-start',
                margin: 20,
              }}>
              Preparación: {character?.name}
            </Text>
          </View>
          <ScrollView>
            <Text
              style={{
                marginVertical: 15,
                marginHorizontal: 20,
                fontSize: 15,
                textAlign: 'justify',
              }}>
              {character?.prep}
            </Text>
          </ScrollView>
          <View
            style={{
              justifyContent: 'flex-end',
              marginTop: 10,
              marginBottom: 10,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: 'red',
                padding: 5,
                marginVertical: 5,
                borderRadius: 5,
                width: '25%',
                alignSelf: 'flex-end',
                margin: 20,
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
  );
};

export default index;
