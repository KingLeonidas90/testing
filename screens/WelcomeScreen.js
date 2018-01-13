import React, { Component } from 'react';
import { View, ScrollView, Dimensions, Animated, Text } from 'react-native';
import { Button, Card } from 'react-native-elements';


const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const TEST_DATA = [
  { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non atque aliquam, deserunt beatae suscipit modi, consectetur necessitatibus voluptate incidunt pariatur eius nesciunt animi quibusdam voluptatem vitae repudiandae sunt eaque nulla? Unde, error, voluptatibus. Quos architecto modi suscipit quasi a ducimus, adipisci porro saepe laboriosam, fugiat ab recusandae cum nesciunt aspernatur.', color: '#ff5055' },
  { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni officiis, nulla similique nemo saepe consequatur. Saepe vel doloribus, architecto deserunt!', color: '#ff5055' },
  { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, quos.', color: '#ff5055' }
];

 class WelcomeScreen extends Component {
   onSlidesComplete = () => {
   //     // Immer wenn man React Navigation verwendet, werden bestimmt props
   //     // automatisch für die jeweiligen Klassen zur Verfügung gestellt sofern man
   //     // in der main den jeweiligen Screen als screen angibt bzw bindet
       this.props.navigation.navigate('auth');
     }

  scrollX = new Animated.Value(0)


  renderLastSlide = (index) => {
    if (index === TEST_DATA.length - 1) {
      return (
        <Button
          title='Onwards!'
          raised
          buttonStyle={styles.buttonStyle}
          onPress={this.onSlidesComplete}
        />
      );
    }
  }
  renderDots() {
    const position = Animated.divide(this.scrollX, SCREEN_WIDTH);
    return TEST_DATA.map((_, index) => {
        const opacity = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp'
        });
        return (
          <Animated.View
            key={index}
            style={[{ opacity }, styles.animatedViewStyle]}
          />
        );
      });
  }

  renderSlides() {
    return TEST_DATA.map((slide, index) => {
      return (
          <Text style={styles.slideText} key={index}>
          {slide.text}
          </Text>
      );
    });
  }

  render() {
    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View
        style={{ width: SCREEN_WIDTH, height: SCREEN_WIDTH, backgroundColor: '#ff5055' }}
      >
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: this.scrollX } } }]
          )}
          scrollEventThrottle={16}
        >
          {this.renderSlides()}
        </ScrollView>

      </View>
      <View style={{ flexDirection: 'row' }}>
        {this.renderDots()}
      </View>


    </View>
    );
  }
}

const styles = {
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideText: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT
  },
  buttonStyle: {
    backgroundColor: '#0288D1'
  },
  animatedViewStyle: {
    height: 10,
    width: 10,
    backgroundColor: '#595959',
     margin: 8,
     borderRadius: 5
  }
};

export default WelcomeScreen;
