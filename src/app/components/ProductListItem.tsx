import { StyleSheet,Text,View,Image } from 'react-native';

import EditScreenInfo from '@/src/app/components/EditScreenInfo';
import {Product} from '../types'
import Colors from '../constants/Colors';
export const deafaultPizzaImage =
 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png';


type ProductListItemProps={
  product:Product;
}

const ProductListItem = ({product}:ProductListItemProps) =>{
  
  return(<View style={styles.container}>
    <Image source={{uri:product.image || deafaultPizzaImage}} style={styles.image}
    resizeMode='contain'
    />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.prices}>Rs.{product.price}</Text>
      
    </View>);
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    padding:20,
    borderRadius:10,
    flex:1,
    maxWidth:'50%',
  },
  title: {
    fontSize:20, 
    fontWeight:'bold',
  },
  image:{
    width:"100%",
    aspectRatio:1,
  },
 
  prices:{
    fontSize:16,
    fontWeight:'bold',
    marginVertical:10,
    color:Colors.light.tint,
  }
});
