import React, { Component } from 'react';
import { Text } from 'react-native';
import { View, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './FindDriverStyles.js';

import Spinner from 'react-native-spinkit';

export const FindDriver = ({ selectedAdress }) => {
    const {selectedPickUp,selectedDropOff}=selectedAdress || {};
    return (
        <View style={styles.findDriverContainer} >            
            <View style={styles.content}>
                <Text style={styles.text}>Processing your request</Text>
                <Spinner  size={150} type="Pulse" color="#ffffff"/>
                <Icon style={styles.locationIcon} name="map-marker" />
                <View style={styles.pickup}>
                    <Text>{selectedPickUp.name}</Text>
                </View>
                <Icon style={styles.toArrow} name="long-arrow-down" />
                <View style={styles.dropoff}>
                    <Text>{selectedDropOff.name}</Text>
                </View>
                <View>
                    <Text style={styles.termsText}>By booking you confirm  that you accept ourt T & C</Text>
                    <Button style={styles.cancelBtn}>
                        <Text style={styles.cancelBtnText}>Cancel</Text>
                    </Button>
                </View>
            </View>
        </View>
    )
}
export default FindDriver;