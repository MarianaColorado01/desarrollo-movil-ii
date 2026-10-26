import { ActivityIndicator, Pressable, Text, View } from "react-native";
import { Image } from "expo-image";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Screen } from "@/components/ui/Screen";
import { MovieCast } from "@/components/movie/MovieCast";
import { useMovie} from "@/features/movies/hooks/useMovie";

export default function MovieDetailsScreen(){
    const router = useRouter();
    const { id } = useLocalSearchParams<{ id?: string | string[] }>();
    const movieId = typeof id === 'string' ? Number(id) : Number.NaN;
    const {movieQuery, castQuery} = useMovie(movieId);
    const movie = movieQuery.data;
    const currency = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

    if (!Number.isInteger(movieId) || movieId <= 0) {
        return (
            <Screen>
                <Stack.Screen options={{headerShown: false}}/>
                <View className="flex-1 items-center justify-center px-8">
                    <Text className="text-center text-white">El identificador de la película no es válido.</Text>
                    <Pressable onPress={() => router.back()} className="mt-5 rounded-xl bg-purple-600 px-5 py-3">
                        <Text className="font-semibold text-white">Volver</Text>
                    </Pressable>
                </View>
            </Screen>
        );
    }

    if (movieQuery.isPending) {
        return (
            <Screen>
                <Stack.Screen options={{headerShown: false}}/>
                <View className="flex-1 items-center justify-center">
                    <ActivityIndicator size="large" color="#a855f7"/>
                    <Text className="mt-3 text-zinc-400">Cargando película...</Text>
                </View>
            </Screen>
        );
    }


    if(movieQuery.isError || !movie){
        return(
            <Screen>
                <Stack.Screen options={{headerShown: false}}/>
                <View className="flex-1 items-center justify-center px-8">
                    <Text className="text-center text-white">No se pudo cargar la película.</Text>
                    <Pressable onPress={()=>router.back()} className="mt-5 rounded-xl bg-purple-600 px-5 py-3">
                        <Text className="font-semibold text-white">Volver</Text>
                    </Pressable>
                    
                </View>
            </Screen>
        );
    }

    return(
        <Screen scroll>
            <Stack.Screen options={{headerShown:false}}/>
            <View className="relative">
                <Image 
                    source={movie.backdrop || movie.poster} 
                    contentFit="cover" 
                    transition={250} 
                    style={{width:'100%', height:250}}
                />
                <View className="absolute inset-0 bg-black/20"/>
                <Pressable onPress={()=>router.back()} className="absolute left-4 top-12 rounded-full bg-black/60 p-2">
                    <Ionicons name="arrow-back" size={24} color="white"/>
                </Pressable>
            </View>
            
            <View className="mt-16 px-5">
                <Image source={movie.poster} contentFit="cover" transition={250} style={{width:120, height:180, borderRadius:16}}/>
                <Text className="mt-4 text-sm text-zinc-400">{movie.originalTitle}</Text>
                <Text className="mt-4 text-3xl font-bold text-white">{movie.title}</Text>

                <View className="mt-3 flex-row flex-wrap items-center gap-2">
                    <Text className="mt-2 text-purple-400">{movie.rating.toFixed(1)}</Text>
                    {!!movie.duration && <Text className="text-zinc-400">{movie.duration} min</Text>}
                    {movie.releaseDate &&(
                        <Text className="text-zinc-400">{movie.releaseDate.getFullYear()}</Text>
                    )}
                </View>

                {!!movie.genres.length && (
                    <Text className="mt-3 text-zinc-300">{movie.genres.join(' · ')}</Text>
                )}

                <Text className="mt-6 text-lg font-semibold text-white">Sinopsis</Text>
                <Text className="mt-2 leading-6 text-zinc-300">{movie.description}</Text>

                {!!movie.budget && (
                    <View className="mt-6 rounded-2xl bg-zinc-900 p-4">
                        <Text className="text-sm text-zinc-400">Presupuesto</Text>
                        <Text className="mt-1 text-xl font-bold text-white">{currency.format(movie.budget)}</Text>
                        
                    </View>
                )}

                {!!movie.productionCompanies.length && (
                    <View className="mt-6">
                        <Text className="text-lg font-semibold text-white">Productoras</Text>
                        <Text className="mt-2 leading-6 text-zinc-300">{movie.productionCompanies.join(', ')}</Text>
                        
                    </View>
                )}

                <View className="mt-6 ">
                    <Text className="text-lg font-semibold text-white"> Reparto</Text>
                    <MovieCast cast={castQuery.data ?? []} isLoading={castQuery.isPending}/>
                    
                </View>
                
            </View>
        </Screen>
    )
}
