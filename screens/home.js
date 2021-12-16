import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import Categories from '../components/Categories';
import HeaderTabs from '../components/HeaderTabs';
import RestaurantItems, { localRestaurant } from '../components/RestaurantItems';
import SearchBar from '../components/SearchBar';
import GlobalStyles from '../src/GlobalStyles';

const YELP_API_KEY = "NmeS4tBpHNLFXNYdGShHGsicQqulJ5ws9clXLIhbodqwzYprstPNSzW0al0TQZ_ormXI01Vo-KKPx6rls4JyujGp5fqEQIiJgbbJQ12kBo0E_IT7XV8mGYvS_nW7YXYx";



export default function Home() {
    const [restaurantData, setRestaurantData] = React.useState(localRestaurant)

    const getRestaurantsFromYelp = () => {
        const yelp_url = "https://api.yelp.com/v3/businesses/search?term=restaurants&location=Dublin";

    const apiOptions = {
        headers: {
            Authorization: `Bearer ${YELP_API_KEY}`,

        },
    };
        return fetch(yelp_url, apiOptions).then((res)=> res.json()).then(json => setRestaurantData(json.bussines));
    };

    return (
        <SafeAreaView style={{backgroundColor: "#eee", flex: 1, paddingTop: 40}}>
            <View style={{backgroundColor: "white", padding: 15}}> 
            <HeaderTabs />
            <SearchBar />
            </View> 
            <ScrollView showsVerticalScrollIndicator={false}>
            <Categories />
            <RestaurantItems restaurantData={restaurantData}/>
            </ScrollView>
        </ SafeAreaView>
    );
}
