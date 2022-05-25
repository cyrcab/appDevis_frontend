import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import des différentes pages
import EstimateList from '../admin/estimates/EstimateList';
import OfferList from '../admin/offer/OfferList';
import CategoryList from '../admin/category/CategoryList';
import EstimateCreation from '../admin/estimates/EstimateCreation';
import Home from '../admin/Home';

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Accueil" component={Home} />
      <HomeStack.Screen name="Liste des devis" component={EstimateList} />
      <HomeStack.Screen name="Création de devis" component={EstimateCreation} />
      <HomeStack.Screen name="Liste des catégories" component={CategoryList} />
      <HomeStack.Screen name="Liste des offres" component={OfferList} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
