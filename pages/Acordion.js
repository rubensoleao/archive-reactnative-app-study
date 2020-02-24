// Código do acordeão https://github.com/oblador/react-native-collapsible


import React, { Component } from 'react';
//import react in our project
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
//import basic react native components
import * as Animatable from 'react-native-animatable';
//import for the animation of Collapse and Expand
import Collapsible from 'react-native-collapsible';
//import for the collapsible/Expandable view
import Accordion from 'react-native-collapsible/Accordion';
//import for the Accordion view

//Dummy content to show
//You can also use dynamic data by calling webservice
const CONTENT = [
  {
    title: 'Rodrigo Santos Barros',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate mattis pellentesque. Integer sit amet neque quis massa ornare semper dapibus sed leo. Morbi nibh lectus, volutpat quis dictum a, consectetur scelerisque est. Nunc non est nec ante pharetra sollicitudin. Duis ut ante ex. Nulla volutpat, odio et faucibus blandit.'
  },
  {
    title: 'Samuel Martins Gomes',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate mattis pellentesque. Integer sit amet neque quis massa ornare semper dapibus sed leo. Morbi nibh lectus, volutpat quis dictum a, consectetur scelerisque est. Nunc non est nec ante pharetra sollicitudin. Duis ut ante ex. Nulla volutpat, odio et faucibus blandit.',
  },
  {
    title: 'Luís Melo Ribeiro',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate mattis pellentesque. Integer sit amet neque quis massa ornare semper dapibus sed leo. Morbi nibh lectus, volutpat quis dictum a, consectetur scelerisque est. Nunc non est nec ante pharetra sollicitudin. Duis ut ante ex. Nulla volutpat, odio et faucibus blandit. ',
  },
];

//To make the selector (Something like tabs)
const SELECTORS = [
  { title: 'T&C', value: 0 },
  { title: 'Privacy Policy', value: 1 },
  { title: 'Return Policy', value: 2 },
  { title: 'Reset all' },
];

export default class Accordion1 extends Component {
  state = {
    //default active selector
    activeSections: [],
    //collapsed condition for the single collapsible
    collapsed: true,
    //multipleSelect is for the Multiple Expand allowed
    //true: You can expand multiple at a time
    //false: One can be expand at a time and other will be closed automatically
    multipleSelect: false,
  };

  toggleExpanded = () => {
    //Toggling the state of single Collapsible
    this.setState({ collapsed: !this.state.collapsed });
  };

  setSections = sections => {
    //setting up a active section state
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader = (section, _, isActive) => {
    //Accordion Header view
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
    );
  };

  renderContent(section, _, isActive) {
    //Accordion Content view
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
          {/* animation={isActive ? 'zoomIn' : undefined} adicionar em baixo */}
        <Animatable.Text
          style={{ textAlign: 'left' }}>
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  }

  render() {
    const { multipleSelect, activeSections } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ paddingTop: 30 }}>

          {/*Code for Accordion/Expandable List starts here*/}
          <Accordion
            activeSections={activeSections}
            //for any default active section
            sections={CONTENT}
            //title and content of accordion
            touchableComponent={TouchableOpacity}
            //which type of touchable component you want
            //It can be the following Touchables
            //TouchableHighlight, TouchableNativeFeedback
            //TouchableOpacity , TouchableWithoutFeedback
            expandMultiple={multipleSelect}
            //Do you want to expand mutiple at a time or single at a time
            renderHeader={this.renderHeader}
            //Header Component(View) to render
            renderContent={this.renderContent}
            //Content Component(View) to render
            duration={400}
            //Duration for Collapse and expand
            onChange={this.setSections}
            //setting the state of active sections
          />
          {/*Code for Accordion/Expandable List ends here*/}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 30,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
    textAlign: 'center',
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
});
