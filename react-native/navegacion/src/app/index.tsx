import { Href, Redirect } from 'expo-router';


const App = ()=> {
  return <Redirect href={'/(drawer)/(tabs)/(stack)/home' as Href} />;
};

export default App;
