import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import  Navigation  from '@/components/Home/Navigation'

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 24, color: 'blue' }}>Welcome</Text>
      </View>
    </SafeAreaView>
    
  )
}