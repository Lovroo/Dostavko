import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import HeaderTabs from '../components/HeaderTabs';
import GlobalStyles from '../src/GlobalStyles';

export default function Home() {
    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <HeaderTabs />
        </ SafeAreaView>
    );
}
