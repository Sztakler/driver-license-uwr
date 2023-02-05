import { View } from 'react-native';

import Navbar from '../components/organisms/navbar/Navbar';
import MainContent from '../components/organisms/MainContent';
import Footer from '../components/organisms/Footer';

import styles from "../components/templates/homepage/styles.js";


export default function HomePage() {
  return (
    <View style={styles.container}>
      <Navbar></Navbar>
      <MainContent></MainContent>
      <Footer></Footer>
    </View>
  );
}
