import React from 'react';
import {Actions,Scene} from 'react-native-router-flux';
import HomeConteiner from './Home/containers/HomeContainer';
import TrackDriverContainer from './TrackDriver/containers/TrackDriverContainer';

const scenes =Actions.create(
    <Scene key="root" hideNavBar androidStatusBarColor>
        <Scene key="home" component={HomeConteiner} title="home" initial />
        <Scene key="trackDriver" component={TrackDriverContainer} title="trackDriver"  />
    </Scene>  
);

export default scenes;