import React, { ReactElement } from 'react';
import { StyleSheet, View } from 'react-native';
import { Headline } from 'react-native-paper';

interface Props {
  title: string;
  children?: ReactElement;
}

const AppLayout = (props: Props) => {
  return (
    <View style={styles.container}>
      <Headline>{props.title}</Headline>
      {props.children}
    </View>
  );
};

export default AppLayout;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    marginTop: 36,
  },
});
