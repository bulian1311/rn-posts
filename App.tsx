import React, { useState } from "react";
import { Text, View } from "react-native";
import { AppLoading } from "expo";

import AppNavigation from "./src/navigation/app.navigation";
import bootstrap from "./src/bootstrap";

export default function App() {
  const [isReady, setIsReady] = useState<boolean>(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsReady(true)}
        onError={err => console.log(err.message)}
      />
    );
  }

  return <AppNavigation />;
}
