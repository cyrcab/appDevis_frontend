import React, { useRef } from 'react';
import styled from 'styled-components/native';
import Carousel from 'react-native-anchor-carousel';

import CategoryContainer from '../../../components/category/CategoryContainer';
import fakeQuestionList from '../../../app/datas/fakeQuestion';
import { StyleSheet, Dimensions } from 'react-native';

const CategoryList = () => {
  const { width: windowWidth } = Dimensions.get('window');
  const carouselRef = useRef(null);
  const renderItem = ({ item }) => {
    return <CategoryContainer title={item.name} items={item.questions} />;
  };

  return (
    <Main>
      <Carousel
        ref={carouselRef}
        data={fakeQuestionList}
        renderItem={renderItem}
        style={styles.carousel}
        itemWidth={windowWidth * 1}
        containerWidth={windowWidth}
        inActiveScale={1}
        inActiveOpacity={0.9}
      />
    </Main>
  );
};
const styles = StyleSheet.create({
  carousel: {
    padding: 20,
    backgroundColor: '#EEEFF5',
    paddingBottom: 150,
  },
});

const Main = styled.View`
  height: 100%;
`;

export default CategoryList;
