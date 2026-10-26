import products from '@/store/productsStore';
import { Redirect,useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import {View, Text} from 'react-native';
import CustomButton from '@/components/shared/CustomButton';
import { useCart } from '@/store/cart.store';


const ProductScreen =()=>{
    const {id} = useLocalSearchParams();
    const navigation = useNavigation();
    const { addItem } = useCart();

    const product = products.find((p) => p.id === id);

    useEffect(() => {
        navigation.setOptions({
            title:product?.title ?? 'Producto',
        });
    }, [product]);

    if(!product){
        return <Redirect href="/" />;
    }

    return(
        <View className='px-5 mt-2'>
            <Text className='font-work-black text-2xl'>{product.title}</Text>
            <Text className=''>{product.description}</Text>
            <Text className='font-work-black'>{product.price}</Text>
            <CustomButton
                className="mt-4"
                onPress={() => addItem(product.id)}
            >
                Agregar al carrito
            </CustomButton>
        </View>
    );
};

export default ProductScreen;
