import {Dimensions} from 'react-native';
//import colors from '../../assets/colors';
const {width} =Dimensions.get('window');

const styles={
    fareContainer:{
        width:width,
        height:40,
        padding:10,
        backgroundColor:'grey'
    },
    fareText:{
        fontSize:14
    },
    amount:{
        fontWeight:'bold',
        fontSize:12
    }
};

export default styles;