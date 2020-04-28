import React from 'react';
import { StyleSheet, FlatList, View, Text, TouchableOpacity, Alert, Picker } from 'react-native';

import { search, userID } from '../lib/utils'

const styles = StyleSheet.create({
  flatListView: {
    backgroundColor: '#FFF'
  },
  itemTouchable: {
    flexDirection: 'column',
    padding: 15,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    borderBottomColor: '#dddddd',
    borderBottomWidth: 0.25
  },
  itemTouchableCovid: {
    backgroundColor: 'red',
    flexDirection: 'column',
    padding: 15,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    borderBottomColor: '#dddddd',
    borderBottomWidth: 0.25
  },
  itemTouchableQuar: {
    backgroundColor: '#E9775E',
    flexDirection: 'column',
    padding: 15,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    borderBottomColor: '#dddddd',
    borderBottomWidth: 0.25
  },
  itemView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemView1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: "grey"
  },
  itemApprove: {
    fontSize: 22,
    fontFamily: 'IBMPlexSans-Medium',
    flex: 0.5,
    color:"#0E6B04",
    height: 40,
    paddingLeft: '12%'
  },
  itemDecline: {
    fontSize: 22,
    fontFamily: 'IBMPlexSans-Medium',
    flex: 0.5,
    color: "red",
    height: 40,
    paddingLeft: '12%'
  },
  itemName: {
    fontSize: 24,
    fontFamily: 'IBMPlexSans-Medium',
  },
  itemNameCovid: {
    fontSize: 24,
    fontFamily: 'IBMPlexSans-Medium',
    color: "#FFF"
  },
  itemDescription: {
    fontSize: 14,
    fontFamily: 'IBMPlexSans-Medium',
    color: 'gray'
  },
  itemDescriptionCovid: {
    fontSize: 14,
    fontFamily: 'IBMPlexSans-Medium',
    color: '#fff'
  },
  itemQuantity: {
    fontSize: 14,
    fontFamily: 'IBMPlexSans-Medium',
    color: 'gray'
  },
  itemQuantityCovid: {
    fontSize: 14,
    fontFamily: 'IBMPlexSans-Medium',
    color: '#fff'
  },
  emptyListView: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  emptyListText: {
    fontFamily: 'IBMPlexSans-Bold',
    color: '#999999',
    fontSize: 16
  }
});

const MyResources = function ({ navigation }) {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    navigation.addListener('focus', () => {
      search({ userID: userID() })
        .then(setItems)
        .catch(err => {
          console.log(err);
          Alert.alert('ERROR', 'Please try again. If the problem persists contact an administrator.', [{ text: 'OK' }]);
        });
    })
  }, []);

  const Item = (props, index) => {
    if (index === 0) {
      return (
        <TouchableOpacity style={styles.itemTouchableCovid}
          onPress={() => { }}>
          <View style={styles.itemView}>
            <Text style={styles.itemNameCovid}>{props.name}</Text>
            <Text style={styles.itemQuantityCovid}> ( {props.quantity} ) </Text>
          </View>
          <Text style={styles.itemDescriptionCovid}>{props.description}</Text>
          <Text style={styles.itemDescriptionCovid}>Note: There is a request placed by Covid person for this item and it is auto-approved.</Text>
        </TouchableOpacity>
      );
    }
    if (index === 2) {
      return (
        <TouchableOpacity style={styles.itemTouchableQuar}
          onPress={() => { }}>
          <View style={styles.itemView}>
            <Text style={styles.itemNameCovid}>{props.name}</Text>
            <Text style={styles.itemQuantityCovid}> ( {props.quantity} ) </Text>
          </View>
          <Text style={styles.itemDescriptionCovid}>{props.description}</Text>
          <Text style={styles.itemDescriptionCovid}>Note: There is a request placed by Quarantine person for this item and it is auto-approved.</Text>
        </TouchableOpacity>
      );
    }
    if (index === 1 || index === 5) {
      return (
        <TouchableOpacity style={styles.itemTouchable}
          onPress={() => { }}>
          <View style={styles.itemView}>
            <Text style={styles.itemName}>{props.name}</Text>
            <Text style={styles.itemQuantity}> ( {props.quantity} ) </Text>
          </View>
          <Text style={styles.itemDescription}>{props.description}</Text>
          <Text style={styles.itemDescription}>Note: There is a request placed by Lockdown person for this item. Please approve or decline the request</Text>
          <View style={styles.itemView1}>
              <Text style={styles.itemApprove}>Approve</Text>
              <Text style={styles.itemDecline}>Decline</Text>
            </View>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity style={styles.itemTouchable}
        onPress={() => { }}>
        <View style={styles.itemView}>
          <Text style={styles.itemName}>{props.name}</Text>
          <Text style={styles.itemQuantity}> ( {props.quantity} ) </Text>
        </View>
        <Text style={styles.itemDescription}>{props.description}</Text>
        <Text style={styles.itemDescription}>Note: There is no request for this item. You will receive notification when a request is received.</Text>
      </TouchableOpacity>
    );

  };

  if (items.length > 0) {
    return (
      <>
        <FlatList style={styles.flatListView}
          data={items}
          renderItem={({ item, index }) => Item(item, index)}
          keyExtractor={item => item.id || item['_id']}
        />
      </>
    )
  } else {
    return (
      <View style={styles.emptyListView}>
        <Text style={styles.emptyListText}>You currently have no donations listed</Text>
      </View>
    )
  }
};

export default MyResources;
