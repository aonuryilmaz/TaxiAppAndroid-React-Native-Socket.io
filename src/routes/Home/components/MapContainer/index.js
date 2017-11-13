import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { View, Text, Button, Content } from 'native-base';
import MapView from 'react-native-maps';

import SearchBox from '../SearchBox'
import SearchResults from '../SearchResults'

import styles from './MapContainerStyles.js';
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export const MapContainer = ({
    region,
    getInputData,
    toggleSearchResultModal,
    getAddressPredictions,
    resultTypes,
    predictions,
    getSelectedAddress,
    selectedAddress,
    carMarker,
    nearByDrivers
     }) => {
        
    const {selectedPickUp,selectedDropOff}=selectedAddress||{};    
    return (
        <Content scrollEnabled={false}>
            <View style={{ height: height, width: width, flex: 1 }}>
                <MapView provider={MapView.PROVİDER_GOOGLE}
                    style={styles.map}
                    region={region}
                >
                    <MapView.Marker
                        coordinate={region}
                        pinColor='green'
                    />
                    {
                        selectedPickUp &&
                        <MapView.Marker
                        coordinate={{latitude:selectedPickUp.latitude,longitude:selectedPickUp.longitude}}
                        pinColor='green'
                    />
                    }
                    {
                        selectedDropOff&&
                        <MapView.Marker
                        coordinate={{latitude:selectedDropOff.latitude,longitude:selectedDropOff.longitude}}
                        pinColor='blue'
                    />
                    }
                    {
                        nearByDrivers &&
                         nearByDrivers.map((marker, index) =>                
                            <MapView.Marker
                                key={index}
                                coordinate={{latitude:marker.coordinate.coordinates[1],longitude:marker.coordinate.coordinates[0]}}
                                image={carMarker}
                            />
                        )
                    }

                </MapView>
                <SearchBox getInputData={getInputData} toggleSearchResultModal={toggleSearchResultModal} getAddressPredictions={getAddressPredictions} selectedAddress={selectedAddress} />
                {

                    (resultTypes.pickUp || resultTypes.dropOff) &&
                    <SearchResults getSelectedAddress={getSelectedAddress} predictions={predictions} />
                }
            </View>
        </Content>
    )
}
