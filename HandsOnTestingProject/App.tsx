/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  Header,
  LearnMoreLinks,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
  testID?: string;
}>;

function Section({children, title, testID}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View testID={testID} style={styles.sectionContainer}>
      <Text
        testID={`sectionTitle${title}`}
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
         testID={`sectionDescription${title}`}
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        testID='scrollViewContanier'
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          testID="sectionContainer"
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section testID="sectionItem1" title="Descubre">
          <Text style={styles.highlight}>Aprende</Text>, conoce nuevas
          técnicas y actualízate en temas, herramientas y buenas prácticas 
          de Testing en distintos paths de carrera.
          </Section>
          <Section testID="sectionItem2" title="Comparte">
          En las salas de las charlas podrás compartir tus dudas y experiencias
          con el speaker y la comunidad.
          </Section>
          <Section testID="sectionItem3" title="Diviertete">
          Participa, compite, muestra tus súper poderes. ¡Concursa por 
          premios y becas para potenciar tus habilidades!
          </Section>
          <Section testID="sectionItem4" title="Explora">
          Conecta con nuevos retos profesionales. Habrá vacantes interesantes
          ya sea que quieras trabajar como freelance o por contrato indefinido. 
          </Section>
         <Text testID= "sectionTalksTitle" style={styles.centeredTextTitle}>Charlas</Text>
            <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  centeredTextTitle: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    marginTop: 32,
    color: Colors.black,
  },
});

export default App;
