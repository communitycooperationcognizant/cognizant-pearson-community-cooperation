import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Button, TextInput, Picker } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    margin: 20
  },
  scroll: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 25,
    paddingTop: 75
  },
  image: {
    alignSelf: 'center',
    height: 135,
    width: 135,
    resizeMode: 'contain'
  },
  title: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 30,
    color: '#323232',
    paddingBottom: 15
  },
  subtitle: {
    fontFamily: 'IBMPlexSans-Light',
    fontSize: 24,
    color: '#323232',
    textDecorationColor: '#D0E2FF',
    textDecorationLine: 'underline',
    paddingBottom: 5,
    paddingTop: 20
  },
  content: {
    fontFamily: 'IBMPlexSans-Medium',
    color: '#323232',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16
  },
  buttonGroup: {
    flex: 1,
    paddingTop: 15,
    width: 175
  },
  button: {
    backgroundColor: '#1062FE',
    color: '#FFFFFF',
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 16,
    overflow: 'hidden',
    padding: 12,
    textAlign: 'center',
    marginTop: 15
  },
  picker: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 16,
    marginTop: 15
  },
  textInput: {
    fontFamily: 'IBMPlexSans-Medium',
    flex: 1,
    borderColor: '#D0E2FF',
    borderWidth: 2,
    padding: 14,
    elevation: 2,
    marginBottom: 25
  }
});

const Home = () => {
  const [community, setCommunity] = useState("Select your Community");
  const [category, setCategory] = useState("Select your Category");
  const [name, setName] = useState("");
  return (
    <View style={styles.center}>
      <ScrollView style={styles.scroll}>
        <Text style={styles.title}>Join Community</Text>
        {(community === "Select your Community" || category === "Select your Category") &&
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={(t) => setName(t)}
            placeholder='Enter you name'
          />
        }
        {(community === "Select your Community" || category === "Select your Category") &&
          <>
            <Picker style={styles.picker}
              selectedValue={community}

              onValueChange={(itemValue, itemIndex) => setCommunity(itemValue)} >
              <Picker.Item label="Select your Community" value="Select your Community" />
              <Picker.Item label="Covid" value="Covid" />
              <Picker.Item label="Quarantine" value="Quarantine" />
              <Picker.Item label="Lockdown" value="Lockdown" />
            </Picker>

            <Picker style={styles.picker}
              selectedValue={category}

              onValueChange={(itemValue, itemIndex) => setCategory(itemValue)} >
              <Picker.Item label="Select your Category" value="Select your Category" />
              <Picker.Item label="Volunteers" value="Volunteers" />
              <Picker.Item label="Doctor and health care" value="Doctor and health care" />
              <Picker.Item label="Animal care" value="Animal care" />
              <Picker.Item label="Government Authorities" value="Government Authorities" />

            </Picker>
          </>
        }
        {community !== "Select your Community" && category !== "Select your Category" &&
          <>
            <Text style={styles.title}>Welcome {name}</Text>
            <Image
              style={styles.image}
              source={require('../images/tick.png')}
            />
            <Text style={styles.content}>You are in {community} - {category} Community.</Text>
            <Text style={styles.content}>You can also contribute to other communities in donate section</Text>
          </>
        }
      </ScrollView>
    </View>
  )
};

export default Home;
