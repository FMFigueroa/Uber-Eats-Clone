import * as React from "react";
import RootNavigation from "./navigation";
import { LogBox } from 'react-native';

export default function App() {
  LogBox.ignoreLogs(['Setting a timer']);
  return <RootNavigation />;

}
