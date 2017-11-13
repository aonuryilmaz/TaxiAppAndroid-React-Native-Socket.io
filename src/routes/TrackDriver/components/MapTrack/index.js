import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { View,Content} from 'native-base';
import MapView from 'react-native-maps';


import styles from './MapTrackStyles.js';
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export const MapContainer = ({
    region,
    driverLocation,
    showCarMaker,
    selectedAddress,
    carMarker
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
                    { showCarMaker &&
                        <MapView.Marker
                            coordinate={{latitude:driverLocation.coordinate.coordinates[1], longitude:driverLocation.coordinate.coordinates[0]}}
                            image={carMarker}
    
                        />	
                    }

                </MapView>
            </View>
        </Content>
    )
}

export default MapContainer;