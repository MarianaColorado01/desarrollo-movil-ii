import {Text, View} from 'react-native';
const CustomDrawer = () => {
    return(
        <View className='flex-1 justify-center items-center bg-white p-6'>
            <View className='flex justify-center items-center mx-3 p-10 mb-10 h-[150px] rounded-x1 bg-primary'>
                <View className='flex justify-center items-center bg-white rounded-full h-24 w-24'>
                    <Text className='text-primary font-work-black text-3x1'>FH</Text>
                </View>
            </View>
        </View>
    )
}