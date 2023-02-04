import { View } from 'react-native';

import Navbar from '../components/organisms/navbar/Navbar';
import MainContent from '../components/organisms/MainContent';
import Footer from '../components/organisms/Footer';

export default function MainPage() {
  return (
    <View>
      <Navbar></Navbar>
      <MainContent></MainContent>
      <Footer></Footer>
    </View>
  );
}
