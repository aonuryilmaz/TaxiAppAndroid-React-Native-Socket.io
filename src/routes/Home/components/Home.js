import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Container, Content } from 'native-base';
import {Actions } from 'react-native-router-flux';

import HeaderComponent from "../../../components/HeaderComponent";
import FooterComponent from "../../../components/FooterComponent";
import { MapContainer } from './MapContainer';
import Fare from './Fare'
import Fab from './Fab'
import FindDriver from './FindDriver'
import styles from './MapContainer/MapContainerStyles.js';

const taxiLogo = require('../../../assets/img/taxi_logo_white.png');
const carMarker = require('../../../assets/img/carMarker.png');
export default class Home extends Component {
    componentDidMount() {
        var rx = this;
        this.props.getCurrentLocation();
        setTimeout(function () {
            rx.props.getNearByDrivers();
        }, 1000)
    }
    componentDidUpdate(prevProps,prevState){
        if(this.props.booking.status==='confirmed'){
            Actions.trackDriver({type:'reset'});
        }
    }
    render() {
        const region = {
            latitude: 3.146642,
            longitude: 101.695845,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        };
        const { status } = this.props.booking;

        return (

            <Container>
                {
                    (status!=='pending') &&
                    <View style={{ flex: 1 }}>
                        <HeaderComponent logo={taxiLogo} />

                        <MapContainer
                            predictions={this.props.predictions}
                            resultTypes={this.props.resultTypes}
                            region={region} getInputData={this.props.getInputData} toggleSearchResultModal={this.props.toggleSearchResultModal}
                            getAddressPredictions={this.props.getAddressPredictions}
                            getSelectedAddress={this.props.getSelectedAddress}
                            selectedAddress={this.props.selectedAddress}
                            carMarker={carMarker}
                            nearByDrivers={this.props.nearByDrivers}
                        />
                        <Fab onPressAction={() => this.props.bookCar()} />

                        {
                            this.props.fare &&
                            <Fare fare={this.props.fare} />
                        }
                        <FooterComponent />
                    </View>
                    ||
                    <FindDriver selectedAdress={this.props.selectedAddress} />
                }
                
            </Container>
        )
    }
}
