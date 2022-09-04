import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

export default function useCachedResources(): boolean {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, global-require
          'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        SplashScreen.hideAsync();
      }
    }

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
