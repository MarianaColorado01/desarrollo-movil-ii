import { FlatList, Text, View } from "react-native";
import { useRouter } from "expo-router";
import {Movie} from '@/types/movie';
import {MoviePoster} from './MoviePoster';

type Props = {
    title:string;
    movies: Movie[];
};

export function MovieHorizontalList({title, movies}:Props){

    const router = useRouter();

    return(
        <View className='mb-6'>
            <Text className="mb-3 px-4 text-2xl font-bold text-white">{title}</Text>
            <FlatList
                horizontal
                data={movies}
                keyExtractor={(item) => String(item.id)}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingHorizontal:8}}
                renderItem={({item})=>(
                    <MoviePoster
                        movie={item}
                        smallPoster
                        onPress={()=>router.push(`/movie/${item.id}`)}
                    />
                )}
            />
        </View>
    );
}