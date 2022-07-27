import {StyleSheet,Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window')

export const DetailsStyle = StyleSheet.create({
    search: {height: height*.06,padding:10,backgroundColor:"#E5E5E5",marginVertical:5,justifyContent:"center",alignItems:'center',width:'48%',alignSelf:"center"},
    container: {flex:1, backgroundColor:'#FFF'},
    centerBox: {padding:10,width:'95%',backgroundColor: '#FFFFFF', margin: 8, elevation: 2, borderWidth: width*0.002, borderColor: '#E5E5E5', flexDirection:'row',alignSelf:'center',justifyContent:"space-between"},
    imageWrap: {width:'30%', justifyContent:'center', alignItems:'center',backgroundColor:'#E5E5E5'},
    image: {width:'100%', height: height*0.22, resizeMode:'cover'},
    contentBox: {width:"67%"},
})
