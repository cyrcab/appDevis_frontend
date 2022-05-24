// besoin d'un lien, titre, logo
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styled from 'styled-components/native';

const FastAction = ({ title, link, logo }) => {
  const navigation = useNavigation();

  return (
    <MainContainer
      activeOpacity={0.6}
      onPress={() => {
        navigation.navigate(link);
      }}
    >
      <View style={styles.iconSection}>
        <View style={styles.iconContainer}>
          <Icon name={logo} size={30} color="white" />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </MainContainer>
  );
};

const MainContainer = styled.TouchableOpacity`
  width: 45%;
  height: 45%;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  background: #fdfdff;
  padding: 10px;
  box-shadow: 0px 2px 5px rgba(31, 19, 0, 0.3);
`;

const styles = StyleSheet.create({
  main: {
    width: '45%',
    height: '45%',
    borderRadius: 20,
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#FDFDFF',
  },

  shadowProps: {
    shadowColor: '#1F1300',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,

    elevation: 5,
  },

  // icon style

  iconSection: {
    height: '55%',
    width: '50%',
    justifyContent: 'center',
  },
  iconContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#083D77',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // text style
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  textContainer: {
    // borderWidth: 1,
    height: '35%',
    width: '80%',
  },
});

export default FastAction;
