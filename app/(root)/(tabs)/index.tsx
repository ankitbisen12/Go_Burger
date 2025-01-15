import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

const Index = () => {
  return (
    <SafeAreaView className='h-full'>
      <Link href="/sign-in">Sign In </Link> 
    </SafeAreaView>
  )
}

export default Index;