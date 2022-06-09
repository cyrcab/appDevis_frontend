import React, { useRef, useState } from 'react';
import styled from 'styled-components/native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import CategoryContainer from '../../../components/category/CategoryContainer';
import fakeQuestionList from '../../../app/datas/fakeQuestion';
import { StyleSheet, Dimensions } from 'react-native';

const CategoryList = () => {
  const { width: windowWidth } = Dimensions.get('window');
  const [index, setIndex] = useState(0);

  const carouselRef = useRef(null);

  const renderItem = ({ item }) => {
    return <CategoryContainer title={item.name} items={item.questions} />;
  };

  return (
    <Main>
      <CarouselContainer>
        <Carousel
          ref={carouselRef}
          data={fakeQuestionList}
          renderItem={renderItem}
          sliderWidth={windowWidth}
          itemWidth={windowWidth * 0.9}
          onSnapToItem={(i) => setIndex(i)}
        />
      </CarouselContainer>
      <PaginationContainer>
        <Pagination
          dotsLength={fakeQuestionList.length}
          activeDotIndex={index}
          carouselRef={carouselRef}
          dotStyle={styles.activeDots}
          tappableDots={true}
          inactiveDotStyle={styles.inactiveDots}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.7}
        />
      </PaginationContainer>
    </Main>
  );
};

const styles = StyleSheet.create({
  activeDots: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ff9b42',
  },
  inactiveDots: {
    backgroundColor: 'grey',
  },
});

const Main = styled.View`
  height: 100%;
  display: flex;
  justify-content: space-between;
`;
const CarouselContainer = styled.View`
  width: 100%;
  height: 90%;
`;
const PaginationContainer = styled.View`
  height: 10%;
`;

export default CategoryList;
