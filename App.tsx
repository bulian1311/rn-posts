import React, { useState } from "react";
import { Provider } from "react-redux";
import { AppLoading } from "expo";

import AppNavigation from "./src/navigation/app.navigation";
import bootstrap from "./src/bootstrap";
import store from "./src/store";

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

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
