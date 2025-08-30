# Installation

# React Native

## Introduction

AppKit has support for [Wagmi](https://wagmi.sh) and [Ethers](https://docs.ethers.org/v6/). Choose one of these Ethereum libraries to get started.

<Info>
  **Don't have a project ID?**

  Head over to Reown Dashboard and create a new project now!

  <Card title="Get started" href="https://dashboard.reown.com/?utm_source=cloud_banner&utm_medium=docs&utm_campaign=backlinks" />
</Info>

## Installation

<Tabs>
  <Tab title="React Native CLI">
    <Tabs>
      <Tab title="Wagmi">
        ```
        yarn add @reown/appkit-wagmi-react-native wagmi viem @tanstack/react-query
        ```

        Additionally add these extra packages to help with async storage, polyfills, and SVG's.

        ```
        yarn add @react-native-async-storage/async-storage react-native-get-random-values react-native-svg react-native-modal@14.0.0-rc.1 @react-native-community/netinfo @walletconnect/react-native-compat
        ```

        On iOS, use CocoaPods to add the native modules to your project:

        ```
        npx pod-install
        ```
      </Tab>

      <Tab title="Ethers">
        ```
        yarn add @reown/appkit-ethers-react-native ethers
        ```

        Additionally add these extra packages to help with async storage, polyfills, and SVG's.

        ```
        yarn add @react-native-async-storage/async-storage react-native-get-random-values react-native-svg react-native-modal@14.0.0-rc.1 @react-native-community/netinfo @walletconnect/react-native-compat
        ```

        On iOS, use CocoaPods to add the native modules to your project:

        ```
        npx pod-install
        ```
      </Tab>

      <Tab title="Ethers v5">
        ```
        yarn add @reown/appkit-ethers5-react-native ethers@5.7.2
        ```

        Additionally add these extra packages to help with async storage, polyfills, and SVG's.

        ```
        yarn add @ethersproject/shims@5.7.0 @react-native-async-storage/async-storage react-native-get-random-values react-native-svg react-native-modal@14.0.0-rc.1 @react-native-community/netinfo @walletconnect/react-native-compat
        ```

        On iOS, use CocoaPods to add the native modules to your project:

        ```
        npx pod-install
        ```
      </Tab>
    </Tabs>
  </Tab>

  <Tab title="Expo">
    <Tabs>
      <Tab title="Wagmi">
        ```
        npx expo install @reown/appkit-wagmi-react-native wagmi viem @tanstack/react-query
        ```

        Additionally add these extra packages to help with async storage, polyfills, and SVG's.

        ```
        npx expo install @react-native-async-storage/async-storage react-native-get-random-values react-native-svg react-native-modal@14.0.0-rc.1 @react-native-community/netinfo @walletconnect/react-native-compat expo-application
        ```

        ## Create babel.config.js

        For Expo SDK 53 and later, you need to create a `babel.config.js` file in your project root to properly support the valtio library:

        ```js
        module.exports = function (api) {
          api.cache(true);
          return {
            presets: [["babel-preset-expo", { unstable_transformImportMeta: true }]],
          };
        };
        ```

        This configuration enables the `unstable_transformImportMeta` option which is required for valtio to work correctly with Expo 53+.

        <details>
          <summary>Additional setup for Expo SDK 48 only</summary>

          <div>
            If you are using Expo SDK 48, you also need to polyfill `crypto` with expo-crypto library.

            1. Add `expo-crypto`

            ```
            npx expo install expo-crypto
            ```

            2. Create a file named `crypto-polyfill.js`

            ```js
            // src/crypto-polyfill.js

            // Apply only with Expo SDK 48
            import { getRandomValues as expoCryptoGetRandomValues } from "expo-crypto";

            class Crypto {
              getRandomValues = expoCryptoGetRandomValues;
            }

            // eslint-disable-next-line no-undef
            const webCrypto = typeof crypto !== "undefined" ? crypto : new Crypto();

            (() => {
              if (typeof crypto === "undefined") {
                Object.defineProperty(window, "crypto", {
                  configurable: true,
                  enumerable: true,
                  get: () => webCrypto,
                });
              }
            })();
            ```

            3. Import `crypto-polyfill.js` in your App root file

            ```js
            // src/App.js

            import './crypto-polyfill.js'
            import '@walletconnect/react-native-compat';
            ...
            import { createAppKit } from '@reown/appkit-...'
            ```
          </div>
        </details>
      </Tab>

      <Tab title="Ethers">
        ```
        npx expo install @reown/appkit-ethers-react-native ethers
        ```

        Additionally add these extra packages to help with async storage, polyfills, and SVG's.

        ```
        npx expo install @react-native-async-storage/async-storage react-native-get-random-values react-native-svg react-native-modal@14.0.0-rc.1 @react-native-community/netinfo @walletconnect/react-native-compat expo-application
        ```

        ## Create babel.config.js

        For Expo SDK 53 and later, you need to create a `babel.config.js` file in your project root to properly support the valtio library:

        ```js
        module.exports = function (api) {
          api.cache(true);
          return {
            presets: [["babel-preset-expo", { unstable_transformImportMeta: true }]],
          };
        };
        ```

        This configuration enables the `unstable_transformImportMeta` option which is required for valtio to work correctly with Expo 53+.

        <details>
          <summary>Additional setup for Expo SDK 48 only</summary>

          <div>
            If you are using Expo SDK 48, you also need to polyfill `crypto` with expo-crypto library.

            1. Add `expo-crypto`

            ```
            npx expo install expo-crypto
            ```

            2. Create a file named `crypto-polyfill.js`

            ```js
            // src/crypto-polyfill.js

            // Apply only with Expo SDK 48
            import { getRandomValues as expoCryptoGetRandomValues } from "expo-crypto";

            class Crypto {
              getRandomValues = expoCryptoGetRandomValues;
            }

            // eslint-disable-next-line no-undef
            const webCrypto = typeof crypto !== "undefined" ? crypto : new Crypto();

            (() => {
              if (typeof crypto === "undefined") {
                Object.defineProperty(window, "crypto", {
                  configurable: true,
                  enumerable: true,
                  get: () => webCrypto,
                });
              }
            })();
            ```

            3. Import `crypto-polyfill.js` in your App root file

            ```js
            // src/App.js

            import './crypto-polyfill.js'
            import '@walletconnect/react-native-compat';
            ...
            import { createAppKit } from '@reown/appkit-...'
            ```
          </div>
        </details>
      </Tab>

      <Tab title="Ethers v5">
        ```
        npx expo install @reown/appkit-ethers5-react-native ethers@5.7.2
        ```

        Additionally add these extra packages to help with async storage, polyfills, and SVG's.

        ```
        npx expo install @ethersproject/shims@5.7.0 @react-native-async-storage/async-storage react-native-get-random-values react-native-svg react-native-modal@14.0.0-rc.1 @react-native-community/netinfo @walletconnect/react-native-compat expo-application
        ```

        ## Create babel.config.js

        For Expo SDK 53 and later, you need to create a `babel.config.js` file in your project root to properly support the valtio library:

        ```js
        module.exports = function (api) {
          api.cache(true);
          return {
            presets: [["babel-preset-expo", { unstable_transformImportMeta: true }]],
          };
        };
        ```

        This configuration enables the `unstable_transformImportMeta` option which is required for valtio to work correctly with Expo 53+.

        <details>
          <summary>Additional setup for Expo SDK 48 only</summary>

          <div>
            If you are using Expo SDK 48, you also need to polyfill `crypto` with expo-crypto library.

            1. Add `expo-crypto`

            ```
            npx expo install expo-crypto
            ```

            2. Create a file named `crypto-polyfill.js`

            ```js
            // src/crypto-polyfill.js

            // Apply only with Expo SDK 48
            import { getRandomValues as expoCryptoGetRandomValues } from "expo-crypto";

            class Crypto {
              getRandomValues = expoCryptoGetRandomValues;
            }

            // eslint-disable-next-line no-undef
            const webCrypto = typeof crypto !== "undefined" ? crypto : new Crypto();

            (() => {
              if (typeof crypto === "undefined") {
                Object.defineProperty(window, "crypto", {
                  configurable: true,
                  enumerable: true,
                  get: () => webCrypto,
                });
              }
            })();
            ```

            3. Import `crypto-polyfill.js` in your App root file

            ```js
            // src/App.js

            import './crypto-polyfill.js'
            import '@walletconnect/react-native-compat';
            ...
            import { createAppKit } from '@reown/appkit-...'
            ```
          </div>
        </details>
      </Tab>
    </Tabs>
  </Tab>
</Tabs>

## Implementation

<Tabs>
  <Tab title="Wagmi">
    Start by importing `createAppKit`, and wagmi packages, then create your configs as shown below.
    Finally, pass your configuration to `createAppKit`.

    <Note>
      Make sure you import `@walletconnect/react-native-compat` before `wagmi` to avoid any issues.
    </Note>

    <Note>
      `createAppKit` must be called before rendering the `<AppKit />` component or any other AppKit UI components. Make sure to call `createAppKit` at the module level, outside of your React components.
    </Note>

    ```tsx
    import "@walletconnect/react-native-compat";
    import { WagmiProvider } from "wagmi";
    import { mainnet, polygon, arbitrum } from "@wagmi/core/chains";
    import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
    import {
      createAppKit,
      defaultWagmiConfig,
      AppKit,
    } from "@reown/appkit-wagmi-react-native";

    // 0. Setup queryClient
    const queryClient = new QueryClient();

    // 1. Get projectId at https://dashboard.reown.com
    const projectId = "YOUR_PROJECT_ID";

    // 2. Create config
    const metadata = {
      name: "AppKit RN",
      description: "AppKit RN Example",
      url: "https://reown.com/appkit",
      icons: ["https://avatars.githubusercontent.com/u/179229932"],
      redirect: {
        native: "YOUR_APP_SCHEME://",
        universal: "YOUR_APP_UNIVERSAL_LINK.com",
      },
    };

    const chains = [mainnet, polygon, arbitrum] as const;

    const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

    // 3. Create modal
    createAppKit({
      projectId,
      metadata,
      wagmiConfig,
      defaultChain: mainnet, // Optional
      enableAnalytics: true, // Optional - defaults to your Cloud configuration
    });

    export default function App() {
      return (
        <WagmiProvider config={wagmiConfig}>
          <QueryClientProvider client={queryClient}>
            // Rest of your app...
            <AppKit />
          </QueryClientProvider>
        </WagmiProvider>
      );
    }
    ```

    #### Trigger the modal

    To open AppKit modal you can use our **default** button component or build your own logic using our hooks.

    <Tabs>
      <Tab title="Components">
        You can use our components to open the modal

        ```tsx
        import { AppKitButton } from "@reown/appkit-wagmi-react-native";

        export default function ConnectView() {
          return (
            <>
              ...rest of your view
              <AppKitButton />
            </>
          );
        }
        ```

        Learn more about the AppKit components [here](../../core/components)
      </Tab>

      <Tab title="Hooks">
        You can trigger the modal by calling the `open` function from `useAppKit` hook.

        ```tsx
        import { Pressable, Text } from "react-native";
        import { useAppKit } from "@reown/appkit-wagmi-react-native";

        export default function ConnectView() {
          const { open } = useAppKit();

          return (
            <>
              <Pressable onClick={() => open()}>
                <Text>Open Connect Modal</Text>
              </Pressable>
            </>
          );
        }
        ```

        Learn more about the AppKit hooks [here](../../core/hooks)
      </Tab>
    </Tabs>
  </Tab>

  <Tab title="Ethers">
    Start by importing `createAppKit` and create your configs as shown below.
    Finally, pass your configuration to `createAppKit`.

    <Note>
      Make sure you import `@walletconnect/react-native-compat` before using our package to avoid any issues.
    </Note>

    <Note>
      `createAppKit` must be called before rendering the `<AppKit />` component or any other AppKit UI components. Make sure to call `createAppKit` at the module level, outside of your React components.
    </Note>

    ```tsx
    import "@walletconnect/react-native-compat";

    import {
      createAppKit,
      defaultConfig,
      AppKit,
    } from "@reown/appkit-ethers-react-native";

    // 1. Get projectId from https://dashboard.reown.com
    const projectId = "YOUR_PROJECT_ID";

    // 2. Create config
    const metadata = {
      name: "AppKit RN",
      description: "AppKit RN Example",
      url: "https://reown.com/appkit",
      icons: ["https://avatars.githubusercontent.com/u/179229932"],
      redirect: {
        native: "YOUR_APP_SCHEME://",
      },
    };

    const config = defaultConfig({ metadata });

    // 3. Define your chains
    const mainnet = {
      chainId: 1,
      name: "Ethereum",
      currency: "ETH",
      explorerUrl: "https://etherscan.io",
      rpcUrl: "https://cloudflare-eth.com",
    };

    const polygon = {
      chainId: 137,
      name: "Polygon",
      currency: "MATIC",
      explorerUrl: "https://polygonscan.com",
      rpcUrl: "https://polygon-rpc.com",
    };

    const chains = [mainnet, polygon];

    // 4. Create modal
    createAppKit({
      projectId,
      metadata,
      chains,
      config,
      enableAnalytics: true, // Optional - defaults to your Cloud configuration
    });

    export default function App() {
      return (
        <>
          // Rest of your app...
          <AppKit />
        </>
      );
    }
    ```

    #### Trigger the modal

    To open AppKit modal you can use our **default** button component or build your own logic using our hooks.

    <Tabs>
      <Tab title="Components">
        You can use our components to open the modal

        ```tsx
        import { AppKitButton } from "@reown/appkit-ethers-react-native";

        export default function ConnectView() {
          return (
            <>
              ...rest of your view
              <AppKitButton />
            </>
          );
        }
        ```

        Learn more about the AppKit components [here](../../core/components)
      </Tab>

      <Tab title="Hooks">
        You can trigger the modal by calling the `open` function from `useAppKit` hook.

        ```tsx
        import { Pressable, Text } from "react-native";
        import { useAppKit } from "@reown/appkit-ethers-react-native";

        export default function ConnectView() {
          const { open } = useAppKit();

          return (
            <>
              <Pressable onClick={() => open()}>
                <Text>Open Connect Modal</Text>
              </Pressable>
            </>
          );
        }
        ```

        Learn more about the AppKit hooks [here](../../core/hooks)
      </Tab>
    </Tabs>
  </Tab>

  <Tab title="Ethers v5">
    Start by importing `createAppKit` and create your configs as shown below.
    Finally, pass your configuration to `createAppKit`.

    <Note>
      Make sure you import `@walletconnect/react-native-compat` and `@ethersproject/shims` before using our package to avoid any issues.
    </Note>

    <Note>
      `createAppKit` must be called before rendering the `<AppKit />` component or any other AppKit UI components. Make sure to call `createAppKit` at the module level, outside of your React components.
    </Note>

    ```tsx
    import "@walletconnect/react-native-compat";
    import "@ethersproject/shims";

    import {
      createAppKit,
      defaultConfig,
      AppKit,
    } from "@reown/appkit-ethers5-react-native";

    // 1. Get projectId from https://dashboard.reown.com
    const projectId = "YOUR_PROJECT_ID";

    // 2. Create config
    const metadata = {
      name: "AppKit RN",
      description: "AppKit RN Example",
      url: "https://reown.com/appkit",
      icons: ["https://avatars.githubusercontent.com/u/179229932"],
      redirect: {
        native: "YOUR_APP_SCHEME://",
      },
    };

    const config = defaultConfig({ metadata });

    // 3. Define your chains
    const mainnet = {
      chainId: 1,
      name: "Ethereum",
      currency: "ETH",
      explorerUrl: "https://etherscan.io",
      rpcUrl: "https://cloudflare-eth.com",
    };

    const polygon = {
      chainId: 137,
      name: "Polygon",
      currency: "MATIC",
      explorerUrl: "https://polygonscan.com",
      rpcUrl: "https://polygon-rpc.com",
    };

    const chains = [mainnet, polygon];

    // 4. Create modal
    createAppKit({
      projectId,
      metadata,
      chains,
      config,
      enableAnalytics: true, // Optional - defaults to your Cloud configuration
    });

    export default function App() {
      return (
        <>
          // Rest of your app...
          <AppKit />
        </>
      );
    }
    ```

    #### Trigger the modal

    To open AppKit modal you can use our **default** button component or build your own logic using our hooks.

    <Tabs>
      <Tab title="Components">
        You can use our components to open the modal

        ```tsx
        import { AppKitButton } from "@reown/appkit-ethers5-react-native";

        export default function ConnectView() {
          return (
            <>
              ...rest of your view
              <AppKitButton />
            </>
          );
        }
        ```

        Learn more about the AppKit components [here](../../core/components)
      </Tab>

      <Tab title="Hooks">
        You can trigger the modal by calling the `open` function from `useAppKit` hook.

        ```tsx
        import { Pressable, Text } from "react-native";
        import { useAppKit } from "@reown/appkit-ethers5-react-native";

        export default function ConnectView() {
          const { open } = useAppKit();

          return (
            <>
              <Pressable onClick={() => open()}>
                <Text>Open Connect Modal</Text>
              </Pressable>
            </>
          );
        }
        ```

        Learn more about the AppKit hooks [here](../../core/hooks)
      </Tab>
    </Tabs>
  </Tab>
</Tabs>

## Getting Support 🙋

Reown is committed to delivering the best developer experience.

If you have any questions, feature requests, or bug reports, feel free to open an issue on [GitHub](https://github.com/reown-com/appkit-react-native)!

## Enable Wallet Detection (Optional)

<Info>
  **This is an optional feature** that enhances the user experience by:

  * Showing a green checkmark next to installed wallets
  * Prioritizing installed wallets at the top of the list

  **All 430+ wallets in the AppKit ecosystem work via WalletConnect protocol regardless of this configuration.** You only need to add the wallets your users most commonly have installed.
</Info>

To enable AppKit to detect wallets installed on the device, you can make specific changes to the native code of your project.

<Tabs>
  <Tab title="React Native CLI">
    <Tabs>
      <Tab title="iOS">
        1. Open your `Info.plist` file.
        2. Locate the `<key>LSApplicationQueriesSchemes</key>` section.
        3. Add the desired wallet schemes as string entries within the `<array>`. These schemes represent the wallets you want to detect.
        4. Refer to our [Info.plist example file](https://github.com/WalletConnect/react-native-examples/blob/main/dapps/ModalUProvider/ios/ModalUProvider/Info.plist) for a detailed illustration.

        Example:

        ```xml
        <key>LSApplicationQueriesSchemes</key>
        <array>
          <string>metamask</string>
          <string>trust</string>
          <string>safe</string>
          <string>rainbow</string>
          <string>uniswap</string>
          <!-- Add other wallet schemes names here -->
        </array>
        ```
      </Tab>

      <Tab title="Android">
        1. Open your `AndroidManifest.xml` file.
        2. Locate the `<queries>` section.
        3. Add the desired wallet package names as `<package>` entries within the `<queries>`. These package names correspond to the wallets you want to detect.
        4. Refer to our [AndroidManifest.xml example file](https://github.com/WalletConnect/react-native-examples/blob/main/dapps/ModalUProvider/android/app/src/main/AndroidManifest.xml) for detailed guidance.

        Example:

        ```xml
        <queries>
          <package android:name="io.metamask"/>
          <package android:name="com.wallet.crypto.trustapp"/>
          <package android:name="io.gnosis.safe"/>
          <package android:name="me.rainbow"/>
          <!-- Add other wallet package names here -->
        </queries>
        ```
      </Tab>
    </Tabs>
  </Tab>

  <Tab title="Expo">
    <Tabs>
      <Tab title="iOS">
        To enable AppKit to detect wallets installed on the device in your Expo project for iOS, follow these steps:

        1. Open your `app.json` (or `app.config.js`) file.
        2. Locate the ios section within the configuration.
        3. Add the `infoPlist` object if it doesn't exist, and within it, include the `LSApplicationQueriesSchemes` array. This array will contain the desired wallet schemes you want to detect.
        4. Add the wallet schemes to the `LSApplicationQueriesSchemes` array.

        Your configuration should look like this:

        ```js {4-13}
        {
          "expo": {
            "ios": {
              "infoPlist": {
                "LSApplicationQueriesSchemes": [
                  "metamask",
                  "trust",
                  "safe",
                  "rainbow",
                  "uniswap"
                  // Add other wallet schemes names here
                ]
              }
            }
          }
        }
        ```
      </Tab>

      <Tab title="Android">
        To enable AppKit to detect wallets installed on the device in your Expo project for Android, follow these steps:

        1. Open your `app.json` (or `app.config.js`) file.
        2. Locate the plugins section within the configuration.
        3. Add `queries.js` in the plugins array:

        ```js {4}
        {
          "plugins": [
            // other plugins,
            "./queries.js"
          ],
        }
        ```

        4. Create the file `queries.js`:

        ```js
        // based on https://github.com/expo/config-plugins/issues/123#issuecomment-1746757954

        const {
          AndroidConfig,
          withAndroidManifest,
          createRunOncePlugin,
        } = require("expo/config-plugins");

        const queries = {
          package: [
            { $: { "android:name": "com.wallet.crypto.trustapp" } },
            { $: { "android:name": "io.metamask" } },
            { $: { "android:name": "me.rainbow" } },
            { $: { "android:name": "io.zerion.android" } },
            { $: { "android:name": "io.gnosis.safe" } },
            { $: { "android:name": "com.uniswap.mobile" } },
            // Add other wallet package names here
          ],
        };

        /**
         * @param {import('@expo/config-plugins').ExportedConfig} config
         */
        const withAndroidManifestService = (config) => {
          return withAndroidManifest(config, (config) => {
            config.modResults.manifest = {
              ...config.modResults.manifest,
              queries,
            };

            return config;
          });
        };

        module.exports = createRunOncePlugin(
          withAndroidManifestService,
          "withAndroidManifestService",
          "1.0.0"
        );
        ```

        5. Add the wallet package names you want to be detected by your app.
      </Tab>
    </Tabs>
  </Tab>
</Tabs>

## Enable Coinbase Wallet (Optional)

<Info>
  **Coinbase Wallet support is optional.** Unlike other wallets that use the WalletConnect protocol, Coinbase Wallet uses its own proprietary SDK. If you skip this setup, Coinbase Wallet simply won't appear in your wallet list, but all other wallets will work normally.
</Info>

Follow these steps to install Coinbase SDK in your project along with our Coinbase package. Check <a href="https://mobilewalletprotocol.github.io/wallet-mobile-sdk/docs/client-sdk/rn-install">here</a> for more detailed information.

<Note>
  **Expo Compatibility:** Coinbase SDK works with [Expo Prebuild](https://docs.expo.dev/workflow/prebuild/) but not with Expo Go. You'll need to use `expo prebuild` to generate native code before building your app.
</Note>

1. Enable Expo Modules in your project running:

```
npx install-expo-modules@latest
```

2. Install Coinbase SDK

```
yarn add @coinbase/wallet-mobile-sdk react-native-mmkv
```

3. Install our custom connector

<Tabs>
  <Tab title="Wagmi">
    `yarn add @reown/appkit-coinbase-wagmi-react-native`
  </Tab>

  <Tab title="Ethers">
    `yarn add @reown/appkit-coinbase-ethers-react-native`
  </Tab>

  <Tab title="Ethers v5">
    `yarn add @reown/appkit-coinbase-ethers-react-native`
  </Tab>
</Tabs>

4. Run pod-install

```
npx pod-install
```

5. Enable Deeplink handling in your project following <a href="https://reactnative.dev/docs/linking?syntax=ios#enabling-deep-links">React Native docs</a>

6. Add Coinbase package in your AndroidManifest.xml and Info.Plist

```xml
// AndroidManifest.xml

<queries>
  <!-- other queries -->
  <package android:name="org.toshi" />
</queries>
```

```xml
// Info.plist

<key>LSApplicationQueriesSchemes</key>
<array>
  <!-- other schemes -->
  <string>cbwallet</string>
</array>
```

7. Add Coinbase response handler in your app. More info <a href="https://mobilewalletprotocol.github.io/wallet-mobile-sdk/docs/client-sdk/rn-setup#listening-for-responses">here</a>

```tsx
import { handleResponse } from "@coinbase/wallet-mobile-sdk";

// Your app's deeplink handling code
useEffect(() => {
  const sub = Linking.addEventListener("url", ({ url }) => {
    const handledBySdk = handleResponse(new URL(url));
    if (!handledBySdk) {
      // Handle other deeplinks
    }
  });

  return () => sub.remove();
}, []);
```

<Tabs>
  <Tab title="Wagmi">
    8. Initialize `coinbaseConnector` and add it in `extraConnectors`

    ```tsx
    import { coinbaseConnector } from '@reown/appkit-coinbase-wagmi-react-native'
    import { MMKV } from 'react-native-mmkv'

    const coinbase = coinbaseConnector({
      redirect: 'https://your-app-universal-link.com' || 'YOUR_APP_SCHEME://',
      storage: new MMKV() // needed if using react native new architecture
    })

    const wagmiConfig = defaultWagmiConfig({
      chains,
      projectId,
      metadata,
      extraConnectors: [coinbase]
    })
    ```

    * Prefer universal links over custom schemes to avoid an app verification warning on Coinbase Wallet
  </Tab>

  <Tab title="Ethers">
    8. Initialize `CoinbaseProvider` and add it in the default config

    ```tsx
    import { CoinbaseProvider } from '@reown/appkit-coinbase-ethers-react-native'
    import { MMKV } from 'react-native-mmkv'

    const coinbaseProvider = new CoinbaseProvider({
      redirect: 'https://your-app-universal-link.com' || 'YOUR_APP_SCHEME://',
      rpcUrl: mainnet.rpcUrl,
      storage: new MMKV() // needed if using react native new architecture
    })

    const config = defaultConfig({
      metadata,
      coinbase: coinbaseProvider
    })
    ```

    * Prefer universal links over custom schemes to avoid an app verification warning on Coinbase Wallet
  </Tab>

  <Tab title="Ethers v5">
    8. Initialize `CoinbaseProvider` and add it in the default config

    ```tsx
    import { CoinbaseProvider } from '@reown/appkit-coinbase-ethers-react-native'
    import { MMKV } from 'react-native-mmkv'

    const coinbaseProvider = new CoinbaseProvider({
      redirect: 'https://your-app-universal-link.com' || 'YOUR_APP_SCHEME://',
      rpcUrl: mainnet.rpcUrl,
      storage: new MMKV() // needed if using react native new architecture
    })

    const config = defaultConfig({
      metadata,
      coinbase: coinbaseProvider
    })
    ```

    * Prefer universal links over custom schemes to avoid an app verification warning on Coinbase Wallet
  </Tab>
</Tabs>

Check <a href="https://mobilewalletprotocol.github.io/wallet-mobile-sdk/docs/client-sdk/rn-install">Coinbase docs</a> for more detailed information.

## Examples

<Tabs>
  <Tab title="Wagmi">
    <Card title="AppKit with Wagmi example" icon="github" href="https://github.com/reown-com/react-native-examples/tree/main/dapps/W3MWagmi">
      Check the React Native example using Wagmi
    </Card>
  </Tab>

  <Tab title="Ethers">
    <Card title="AppKit with Ethers example" icon="github" href="https://github.com/reown-com/react-native-examples/tree/main/dapps/W3MEthers">
      Check the React Native example using Ethers
    </Card>
  </Tab>

  <Tab title="Ethers v5">
    <Card title="AppKit with Ethers v5 example" icon="github" href="https://github.com/reown-com/react-native-examples/tree/main/dapps/W3MEthers5">
      Check the React Native example using Ethers v5
    </Card>
  </Tab>
</Tabs>

## Test Apps

Want to see AppKit in action? Download our sample AppKit apps below and explore what it can do. Enjoy! 😊

* [Android Build (Firebase)](https://appdistribution.firebase.google.com/pub/i/0297fbd3de8f1e3f)
* [iOS Build (Testflight)](https://testflight.apple.com/join/YW2jD2s0)

## Tutorial

<div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0 }}>
  <iframe
    style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    maxWidth: '560px',
    margin: '0 auto'
  }}
    src="https://www.youtube.com/embed/R0edIW72fHo?si=KRMqX2AZZPDH7Xig"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  />
</div>

# Options

AppKit’s `createAppKit` function supports powerful configuration options to help you customize your wallet’s behavior, look, and connectivity—right out of the box.

```ts
createAppKit({ projectId, metadata, chains, ...options });
```

Use the sections below to fine-tune everything from supported wallets to chain defaults and features like onramp, swaps, email login, and more.

## metadata

Metadata for your AppKit. The `name`, `description`, `icons`, and `url` are used at certain places like the wallet connection, sign message, etc.

```ts
createAppKit({
  // ...
  metadata: {
    name: "AppKit App",
    description: "AppKit for React Native",
    url: "https://reown.com",
    icons: ["https://avatars.githubusercontent.com/u/179229932"],
    redirect: {
      native: "YOUR_APP_SCHEME://",
      universal: "https://example.com/example_dapp",
      linkMode: true,
    }
  }
});
```

## defaultChain

You can set a desired chain for the initial connection:

<Tabs>
  <Tab title="Wagmi">
    ```ts
    import { mainnet } from '@wagmi/core/chains'

    createAppKit({
      //...
      defaultChain: mainnet
    })

    ```
  </Tab>

  <Tab title="Ethers">
    ```ts
    const mainnet = {
      chainId: 1,
      name: 'Ethereum',
      currency: 'ETH',
      explorerUrl: 'https://etherscan.io',
      rpcUrl: 'https://cloudflare-eth.com',
    };

    createAppKit({
      //...
      defaultChain: mainnet
    })
    ```
  </Tab>

  <Tab title="Ethers v5">
    ```ts
    const mainnet = {
      chainId: 1,
      name: 'Ethereum',
      currency: 'ETH',
      explorerUrl: 'https://etherscan.io',
      rpcUrl: 'https://cloudflare-eth.com',
    };

    createAppKit({
      //...
      defaultChain: mainnet
    })

    ```
  </Tab>
</Tabs>

## clipboardClient

Use your preferred clipboard library to allow AppKit use the clipboard to copy addresses & URIs

```ts
import * as Clipboard from 'expo-clipboard' // or `@react-native-clipboard/clipboard`

createAppKit({
  //...
  clipboardClient: {
    setString: async (value: string) => {
      await Clipboard.setStringAsync(value)
    }
  }
})
```

## customWallets

Add custom wallets to the modal's main view. `customWallets` is an array of objects, where each object contains specific information of a custom wallet.

```ts
createAppKit({
  //...
  customWallets: [
    {
      id: "myCustomWallet",
      name: "My Custom Wallet",
      homepage: "www.mycustomwallet.com", // Optional
      mobile_link: "mobile_link", // Optional - Deeplink or universal
      link_mode: "universal_link", // Optional - Universal link if the wallet supports link-mode
      desktop_link: "desktop_link", // Optional - Deeplink
      webapp_link: "webapp_link", // Optional
      app_store: "app_store", // Optional
      play_store: "play_store", // Optional
    },
  ],
});
```

## featuredWalletIds

Select wallets that are going to be shown on the modal's main view. Array of wallet IDs defined will be prioritized (order is respected).
These wallets will also show up first in `All Wallets` view.
You can find the wallets ids in [WalletGuide](https://walletguide.walletconnect.network/)

```ts
createAppKit({
  //...
  featuredWalletIds: [
    "1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369", // Rainbow
    "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0", // Trust
  ],
});
```

## includeWalletIds

Override default recommended wallets that are fetched from [WalletGuide](https://walletguide.walletconnect.network/).
Array of wallet ids defined will be shown (order is respected).
Unlike `featuredWalletIds`, these wallets will be the **only** ones shown in `All Wallets` view and as recommended wallets.
You can get these ids from the explorer link mentioned before by clicking on a copy icon of desired wallet card.

```ts
createAppKit({
  //...
  includeWalletIds: [
    "1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369", // Rainbow
    "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0", // Trust
  ],
});
```

## excludeWalletIds

Exclude wallets that are fetched from [WalletGuide](https://walletguide.walletconnect.network/).
Array of wallet ids defined will be excluded.
All other wallets will be shown in respective places.
You can find the wallets IDs in our [Wallets List](/cloud/wallets/wallet-list).

```ts
createAppKit({
  //...
  excludeWalletIds: [
    "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0", // Trust
    "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa", // Coinbase
  ],
});
```

## debug

Enable or disable debug mode in your AppKit. This is useful if you want to see UI alerts when debugging. Default is `false`.

```ts
createAppKit({
  //...
  debug: true,
});
```

## features

Allows you to toggle (enable or disable) additional features provided by AppKit. Features such as email and social logins, swaps, etc., can be enabled using this parameter.

### swaps

Enable or disable the swap feature in your AppKit. [Swaps](/appkit/react-native/transactions/swaps) feature is enabled by default.

```ts
createAppKit({
  //...
  features: {
    swaps: true,
  },
});
```

### onramp

Enable or disable the On-Ramp feature in your AppKit. [On-Ramp](/appkit/react-native/transactions/onramp) feature is enabled by default.

```ts
createAppKit({
  //...
  features: {
    onramp: true,
  },
});
```

### email

This boolean defines whether you want to enable email login. This feature is enabled by default.

```ts
createAppKit({
  //...
  features: {
    email: true,
  },
});
```

### socials

This array contains the list of social platforms that you want to enable for user authentication. The platforms supported are X, Discord and Apple. The default value of undefined displays everything. Set it to false to disable this feature. You can also pass an empty array to disable it.

```ts
createAppKit({
  //...
  features: {
    socials: ["x", "discord", "apple"],
  },
});
```

### emailShowWallets

This boolean defines whether you want to show the wallet options on the first connect screen. If this is false and socials are enabled, it will show a button that directs you to a new screen displaying the wallet options. This feature is enabled by default.

```ts
createAppKit({
  //...
  features: {
    emailShowWallets: false,
  },
});
```

## enableAnalytics

Enable analytics to get more insights on your users activity within your [Reown Dashboard](https://dashboard.reown.com)

```ts
createAppKit({
  //...
  enableAnalytics: true,
});
```

<Card title="Learn More" href="/cloud/analytics" />

## chainImages

Add or override the modal's network images.

```ts
createAppKit({
  // ...
  chainImages: {
    1: "https://my.images.com/eth.png",
  },
});
```

## connectorImages

Set or override the images of any connector.

```ts
createAppKit({
  connectorImages: {
    // EIP6963 wallets (announced wallets use RDNS)
    'io.coinbase': "https://images.mydapp.com/coinbase.png",
    // Other wallets (use normal connector IDs)
    walletConnect: "https://images.mydapp.com/walletconnect.png",
    appKitAuth: "https://images.mydapp.com/auth.png",
  },
});
```
# Hooks

## useAppKit

The `useAppKit` hook provides functions to control the modal's visibility. You can use it to programmatically open or close the modal.

<Tabs>
  <Tab title="Wagmi">
    ```ts
    import { useAppKit } from '@reown/appkit-wagmi-react-native'
    import { Button } from 'react-native';

    export default function Component() {
      const { open, close } = useAppKit()

      return (
        <>
          <Button title="Open Modal" onPress={() => open()} />
          <Button title="Open Account View" onPress={() => open({ view: 'Account' })} />
          <Button title="Close Modal" onPress={() => close()} />
        </>
      );
    }

    ```
  </Tab>

  <Tab title="Ethers">
    ```ts
    import { useAppKit } from '@reown/appkit-ethers-react-native'
    import { Button } from 'react-native';

    export default function Component() {
      const { open, close } = useAppKit()

      return (
        <>
          <Button title="Open Modal" onPress={() => open()} />
          <Button title="Open Account View" onPress={() => open({ view: 'Account' })} />
          <Button title="Close Modal" onPress={() => close()} />
        </>
      );
    }

    ```
  </Tab>

  <Tab title="Ethers v5">
    ```ts
    import { useAppKit } from '@reown/appkit-ethers5-react-native'
    import { Button } from 'react-native';

    export default function Component() {
      const { open, close } = useAppKit()

      return (
        <>
          <Button title="Open Modal" onPress={() => open()} />
          <Button title="Open Account View" onPress={() => open({ view: 'Account' })} />
          <Button title="Close Modal" onPress={() => close()} />
        </>
      );
    }

    ```
  </Tab>
</Tabs>

You can also select the modal's view when calling the `open` function

```ts
open({ view: 'Account' })
```

List of views you can select

| Variable         | Description                                                                                                 |
| ---------------- | ----------------------------------------------------------------------------------------------------------- |
| `Connect`        | Principal view of the modal - default view when disconnected.                                               |
| `Account`        | User profile - default view when connected.                                                                 |
| `Networks`       | List of available networks - you can select and target a specific network before connecting.                |
| `WhatIsANetwork` | "What is a network" onboarding view.                                                                        |
| `WhatIsAWallet`  | "What is a wallet" onboarding view.                                                                         |
| `Swap`           | Swap tokens seamlessly - users can trade tokens directly in your app with transparent pricing.              |
| `OnRamp`         | Buy crypto with fiat - users can purchase crypto directly in your app using their preferred payment method. |

## useAppKitState

Get the current value of the modal's state

<Tabs>
  <Tab title="Wagmi">
    ```ts
    import { useAppKitState } from '@reown/appkit-wagmi-react-native'
    import { Text, View } from 'react-native';

    export default function Component() {
      const { open, selectedNetworkId } = useAppKitState();

      return (
        <View>
          <Text>Modal Open: {String(open)}</Text>
          <Text>Selected Network ID: {selectedNetworkId}</Text>
        </View>
      );
    }
    ```
  </Tab>

  <Tab title="Ethers">
    ```ts
    import { useAppKitState } from '@reown/appkit-ethers-react-native'
    import { Text, View } from 'react-native';

    export default function Component() {
      const { open, selectedNetworkId } = useAppKitState();

      return (
        <View>
          <Text>Modal Open: {String(open)}</Text>
          <Text>Selected Network ID: {selectedNetworkId}</Text>
        </View>
      );
    }
    ```
  </Tab>

  <Tab title="Ethers v5">
    ```ts
    import { useAppKitState } from '@reown/appkit-ethers5-react-native'
    import { Text, View } from 'react-native';

    export default function Component() {
      const { open, selectedNetworkId } = useAppKitState();

      return (
        <View>
          <Text>Modal Open: {String(open)}</Text>
          <Text>Selected Network ID: {selectedNetworkId}</Text>
        </View>
      );
    }
    ```
  </Tab>
</Tabs>

The modal state consists of two reactive values:

| State               | Description                                                           | Type      |
| ------------------- | --------------------------------------------------------------------- | --------- |
| `open`              | Open state will be true when the modal is open and false when closed. | `boolean` |
| `selectedNetworkId` | The current chain id selected by the user.                            | `number`  |

## useAppKitEvents

Get the last tracked modal event. The hook accepts an optional callback function that is executed when the event is triggered.

<Tabs>
  <Tab title="Wagmi">
    ```ts
    import { useAppKitEvents } from '@reown/appkit-wagmi-react-native'
    import { useEffect } from 'react';

    export default function Component() {
      const event = useAppKitEvents(newEvent => {
        console.log('New AppKit Event:', newEvent);
        // Example: Handle a specific event type
        if (newEvent?.type === 'MODAL_CLOSED') {
          // Do something when the modal is closed
        }
      });

      useEffect(() => {
        if (event) {
          console.log('Last AppKit Event:', event);
        }
      }, [event]);

      return null; // Or your component JSX
    }
    ```
  </Tab>

  <Tab title="Ethers">
    ```ts
    import { useAppKitEvents } from '@reown/appkit-ethers-react-native'
    import { useEffect } from 'react';

    export default function Component() {
      const event = useAppKitEvents(newEvent => {
        console.log('New AppKit Event:', newEvent);
        // Example: Handle a specific event type
        if (newEvent?.type === 'MODAL_CLOSED') {
          // Do something when the modal is closed
        }
      });

      useEffect(() => {
        if (event) {
          console.log('Last AppKit Event:', event);
        }
      }, [event]);

      return null; // Or your component JSX
    }
    ```
  </Tab>

  <Tab title="Ethers v5">
    ```ts
    import { useAppKitEvents } from '@reown/appkit-ethers5-react-native'
    import { useEffect } from 'react';

    export default function Component() {
      const event = useAppKitEvents(newEvent => {
        console.log('New AppKit Event:', newEvent);
        // Example: Handle a specific event type
        if (newEvent?.type === 'MODAL_CLOSED') {
          // Do something when the modal is closed
        }
      });

      useEffect(() => {
        if (event) {
          console.log('Last AppKit Event:', event);
        }
      }, [event]);

      return null; // Or your component JSX
    }
    ```
  </Tab>
</Tabs>

## useAppKitEventSubscription

Subscribe to modal specific events

<Tabs>
  <Tab title="Wagmi">
    ```ts
    import { useAppKitEventSubscription } from '@reown/appkit-wagmi-react-native'
    import { useEffect } from 'react';

    export default function Component() {
      useAppKitEventSubscription('MODAL_OPEN', newEvent => {
        console.log('Modal Opened Event:', newEvent);
        // Perform actions when the modal opens
      });

      useAppKitEventSubscription('MODAL_CLOSED', newEvent => {
        console.log('Modal Closed Event:', newEvent);
        // Perform actions when the modal closes
      });
      
      return null; // Or your component JSX
    }
    ```
  </Tab>

  <Tab title="Ethers">
    ```ts
    import { useAppKitEventSubscription } from '@reown/appkit-ethers-react-native'
    import { useEffect } from 'react';

    export default function Component() {
      useAppKitEventSubscription('MODAL_OPEN', newEvent => {
        console.log('Modal Opened Event:', newEvent);
        // Perform actions when the modal opens
      });

      useAppKitEventSubscription('MODAL_CLOSED', newEvent => {
        console.log('Modal Closed Event:', newEvent);
        // Perform actions when the modal closes
      });

      return null; // Or your component JSX
    }
    ```
  </Tab>

  <Tab title="Ethers v5">
    ```ts
    import { useAppKitEventSubscription } from '@reown/appkit-ethers5-react-native'
    import { useEffect } from 'react';

    export default function Component() {
      useAppKitEventSubscription('MODAL_OPEN', newEvent => {
        console.log('Modal Opened Event:', newEvent);
        // Perform actions when the modal opens
      });

      useAppKitEventSubscription('MODAL_CLOSED', newEvent => {
        console.log('Modal Closed Event:', newEvent);
        // Perform actions when the modal closes
      });

      return null; // Or your component JSX
    }
    ```
  </Tab>
</Tabs>

## useWalletInfo

Get the metadata information from the connected wallet

<Tabs>
  <Tab title="Wagmi">
    ```ts
    import { useWalletInfo } from '@reown/appkit-wagmi-react-native'
    import { Text, View } from 'react-native';

    export default function Component() {
      const { walletInfo } = useWalletInfo();

      if (!walletInfo) {
        return <Text>No wallet connected or info unavailable.</Text>;
      }

      return (
        <View>
          <Text>Wallet Name: {walletInfo.name}</Text>
          <Text>Wallet Icon: {walletInfo.icon}</Text> 
        </View>
      );
    }
    ```
  </Tab>

  <Tab title="Ethers">
    ```ts
    import { useWalletInfo } from '@reown/appkit-ethers-react-native'
    import { Text, View } from 'react-native';

    export default function Component() {
      const { walletInfo } = useWalletInfo();

      if (!walletInfo) {
        return <Text>No wallet connected or info unavailable.</Text>;
      }

      return (
        <View>
          <Text>Wallet Name: {walletInfo.name}</Text>
          <Text>Wallet Icon: {walletInfo.icon}</Text>
        </View>
      );
    }
    ```
  </Tab>

  <Tab title="Ethers v5">
    ```ts
    import { useWalletInfo } from '@reown/appkit-ethers5-react-native'
    import { Text, View } from 'react-native';

    export default function Component() {
      const { walletInfo } = useWalletInfo();

      if (!walletInfo) {
        return <Text>No wallet connected or info unavailable.</Text>;
      }

      return (
        <View>
          <Text>Wallet Name: {walletInfo.name}</Text>
          <Text>Wallet Icon: {walletInfo.icon}</Text>
        </View>
      );
    }
    ```
  </Tab>
</Tabs>

## Ethereum Library

<Tabs>
  <Tab title="Wagmi">
    ### useAccount

    Hook that returns the client's information.

    ```tsx
    import { useAccount } from "wagmi";

    function Components() {
      const { address, status } = useAccount();

      //...
    }
    ```

    #### useSignMessage

    Hook for signing messages with connected account.

    ```tsx
    import { View, Text, Pressable } from "react-native";
    import { useSignMessage } from "wagmi";

    function App() {
      const { data, isError, isPending, isSuccess, signMessage } = useSignMessage();

      return (
        <View>
          <Pressable
            disabled={isPending}
            onPress={() => signMessage({ message: "hello world" })}
          >
            <Text>Sign message</Text>
          </Pressable>
          {isSuccess && <Text>Signature: {data}</Text>}
          {isError && <Text>Error signing message</Text>}
        </View>
      );
    }
    ```

    #### useReadContract

    Hook for calling a read method on a Contract.

    ```tsx
    import { View, Text } from "react-native";
    import { useReadContract } from "./abi";

    function App() {
      const { data, isError, isPending, isSuccess } = useReadContract({
        abi,
        address: "0x6b175474e89094c44da98b954eedeac495271d0f",
        functionName: "totalSupply",
      });

      return (
        <View>
          {isPending && <Text>Loading</Text>}
          {isSuccess && <Text>Response: {data?.toString()}</Text>}
          {isError && <Text>Error reading contract</Text>}
        </View>
      );
    }
    ```

    <Card title="Learn More" href="https://wagmi.sh/react/api/hooks" />
  </Tab>

  <Tab title="Ethers">
    #### useAppKitAccount

    Hook that returns the client's information.

    ```tsx
    import { useAppKitAccount } from '@reown/appkit-ethers-react-native';
    import { Text, View } from 'react-native';

    export default function AccountInfoEthers() {
      const { address, chainId, isConnected } = useAppKitAccount();

      if (!isConnected) {
        return <Text>Disconnected. Please connect your wallet.</Text>;
      }

      return (
        <View>
          <Text>Connected Account (Ethers):</Text>
          <Text>Address: {address}</Text>
          <Text>Chain ID: {chainId}</Text>
        </View>
      );
    }
    ```

    #### useAppKitProvider

    Hook that returns the `walletProvider` and the `WalletProviderType`.

    ```tsx
    import { BrowserProvider } from "ethers";
    import { useAppKitProvider } from "@reown/appkit-ethers-react-native";

    function Components() {
      const { walletProvider } = useAppKitProvider();

      async function onSignMessage() {
        const ethersProvider = new BrowserProvider(walletProvider);
        const signer = await ethersProvider.getSigner();
        const message = "hello appkit rn + ethers";
        const signature = await signer.signMessage(message);
        console.log(signature.toString());
      }

      return <button onClick={() => onSignMessage()}>Sign Message</button>;
    }
    ```

    <Card title="Learn More About Ethers" href="https://docs.ethers.org/v6/getting-started/#getting-started--contracts" />
  </Tab>

  <Tab title="Ethers v5">
    #### useAppKitAccount

    Hook that returns the client's information.

    ```tsx
    import { useAppKitAccount } from "@reown/appkit-ethers5-react-native";
    import { Text, View } from 'react-native';

    export default function AccountInfoEthers5() {
      const { address, chainId, isConnected } = useAppKitAccount();

      if (!isConnected) {
        return <Text>Disconnected. Please connect your wallet.</Text>;
      }

      return (
        <View>
          <Text>Connected Account (Ethers v5):</Text>
          <Text>Address: {address}</Text>
          <Text>Chain ID: {chainId}</Text>
        </View>
      );
    }
    ```

    #### useAppKitProvider

    Hook that returns the `walletProvider` and the `WalletProviderType`.

    ```tsx
    import { ethers } from "ethers";
    import { useAppKitProvider } from "@reown/appkit-ethers5-react-native";

    function Components() {
      const { walletProvider } = useAppKitProvider();

      async function onSignMessage() {
        const provider = new ethers.providers.Web3Provider(walletProvider);
        const signer = provider.getSigner();
        const signature = await signer?.signMessage("Hello AppKit Ethers");
        console.log(signature);
      }

      return <button onClick={() => onSignMessage()}>Sign Message</button>;
    }
    ```

    <Card title="Learn More About Ethers v5" href="https://docs.ethers.org/v5/getting-started/#getting-started--contracts" />
  </Tab>
</Tabs>

# Components

# Components

AppKit comes with a set of components in case you want to integrate fast.
You can import them from `@reown/appkit-wagmi-react-native` or `@reown/appkit-ethers-react-native`

### List of components available in AppKit package

### `<AppKitButton />`

| Variable       | Description                                          | Type               |
| -------------- | ---------------------------------------------------- | ------------------ |
| `disabled`     | Enable or disable the button.                        | `boolean`          |
| `balance`      | Show or hide the user's balance.                     | `'show' \| 'hide'` |
| `size`         | Default size for the button.                         | `'md' \| 'sm'`     |
| `label`        | The text shown in the button.                        | `string`           |
| `loadingLabel` | The text shown in the button when the modal is open. | `string`           |

### `<AccountButton />`

| Variable   | Description                      | Type               |
| ---------- | -------------------------------- | ------------------ |
| `disabled` | Enable or disable the button.    | `boolean`          |
| `balance`  | Show or hide the user's balance. | `'show' \| 'hide'` |

### `<ConnectButton />`

| Variable       | Description                                          | Type           |
| -------------- | ---------------------------------------------------- | -------------- |
| `size`         | Default size for the button.                         | `'md' \| 'sm'` |
| `label`        | The text shown in the button.                        | `string`       |
| `loadingLabel` | The text shown in the button when the modal is open. | `string`       |

### `<NetworkButton />`

| Variable   | Description                   | Type      |
| ---------- | ----------------------------- | --------- |
| `disabled` | Enable or disable the button. | `boolean` |

# Smart Accounts

## Overview

<Info>
  💡 Ensure you update AppKit to the latest version for optimal compatibility.
</Info>

Smart Accounts (SAs) are enabled by default within AppKit. These accounts enhance functionality by emitting 1271 and 6492 signatures, which should be taken into account for signature verification processes, such as Sign-In with Ethereum (SIWE).

### Deployment

Smart Accounts are deployed alongside the first transaction. Until deployment, a precalculated address, known as the counterfactual address, is displayed. Despite not being deployed, the account can still sign using 6492 signatures.

### Supported Networks

**Smart Accounts are available on several EVM networks. You can view the complete list of supported networks [here](https://docs.pimlico.io/infra/platform/supported-chains).**

### User Eligibility

Smart Accounts are exclusively available for embedded wallet users (email and social login)

## FAQ

### What is a Smart Account?

A Smart Account improves the traditional account experience by replacing Externally Owned Accounts (EOAs) with a Smart Contract that follows the [ERC-4337 standard](https://eips.ethereum.org/EIPS/eip-4337). This opens up many use cases that were previously unavailable.

Smart Accounts do no require Private Keys or Seed Phrases, instead they rely on a key or multiple keys from designated signers to access the smart account and perform actions on chain. The keys can take multiple forms including passkeys and EOA signatures.

### What can I do with a Smart Account?

Smart accounts unlock a host of use cases that were previously unavailable with EOAs. Essentially anything that can be programmed into a smart contract can be used by Smart Accounts.

* **Automated Transactions:** Set up recurring payments or conditional transfers.
* **Multi-Signature Authorization:** Require multiple approvals for a transaction to increase security.
* **Delegated Transactions:** Allow a third party to execute transactions on your behalf under specific conditions.
* **Enhanced Security:** Implement complex security mechanisms such as time-locked transactions and withdrawal limits.
* **Interoperability:** Interact seamlessly with decentralized applications (dApps) and decentralized finance (DeFi) protocols.
* **Custom Logic:** Create custom transaction rules and workflows that align with personal or business requirements.

### How do I get a Smart Account?

Existing AppKit Universal Wallet Users will be given the option to upgrade their account to a smart account. Once you upgrade you will still be able to access your EOA and self-custody your account.

New AppKit Universal Wallet Users will be given smart accounts by default when they login for the first time.

### Does it cost anything?

There is a small additional cost for activating your smart account. The activation fee is added to the first transaction and covers the network fees required for deploying the new smart contract onchain.

### Can I export my Smart Account?

No, you cannot export your Smart Account. The Smart Account (SA) is deployed by the EOA and is owned by the EOA. Your EOA account will always be exportable.
Also is good to know that SA don't have seedphrases.

### Can I withdraw all my funds from my Smart Account?

Yes, you can withdraw all your funds from your Smart Account.

### What are account names?

Smart account addresses start with ’0x’ followed by 42 characters, this is the unique address of your smart account on the network. ‘0x’ addresses like this are long, unwieldy and unmemorable. AppKit allows you to assign a more memorable name for your smart account using [ENS Resolvers](https://docs.ens.domains/resolvers/ccip-read).

You can assign a name to your account and this will act as an alias for your account that can be shared publicly and provide a better user experience. AppKit account names are followed by the "reown.id" domain.

### What can I do with my account name?

As AppKit smart account addresses are the same across the supported networks by [Pimlico](https://docs.pimlico.io/infra/platform/supported-chains), you only need one account name which can then be used across the networks.

For example if you want someone to send you USDC on Polygon they can send it to “johnsmith.reown.id”. If you want someone wants to send you USDC on Optimism they can also use “johnsmith.reown.id”.

# Link Mode

AppKit Link Mode is a low latency mechanism for transporting One-Click Auth requests and session requests over universal links, reducing the need for a WebSocket connection with the Relay. This significantly enhances the user experience when connecting native dApps to native wallets by reducing the latency associated with networking connections, especially when the user has an unstable internet connection.

<Frame>
  <video controls autoPlay src="https://mintlify.s3.us-west-1.amazonaws.com/reown-5552f0bb/images/link-mode.mp4" height="400" width="300" />
</Frame>

### How to enable it:

To support link mode add a universal link for your dapp in Cloud project configuration [dashboard](https://dashboard.reown.com/sign-in), configure your Metadata with a valid universal link and set the `linkMode` property to `true`:

```ts {8,9}
const metadata = {
  name: "AppKit App",
  description: "AppKit for React Native",
  url: "https://reown.com",
  icons: ["https://avatars.githubusercontent.com/u/179229932"],
  redirect: {
    native: "YOUR_APP_SCHEME://",
    universal: "https://example.com/example_dapp",
    linkMode: true,
  },
};

const config = defaultConfig({ metadata });
```

### How does it look without Link Mode?

<Frame>
  <video controls autoPlay src="https://mintlify.s3.us-west-1.amazonaws.com/reown-5552f0bb/images/without-link-mode.mp4" height="400" width="300" />
</Frame>

### Platform specifics:

<Tabs>
  <Tab title="iOS">
    To enable universal links for your app, refer to [React Native Documentation](https://reactnative.dev/docs/linking?syntax=ios#enabling-deep-links).<br />

    After following the steps provided in the official guide:

    1. Ensure that you handle incoming Universal Links in the your `AppDelegate.mm` file.

    ```swift
    #import <React/RCTLinkingManager.h>

    // Enable deeplinks
    - (BOOL)application:(UIApplication *)application
       openURL:(NSURL *)url
       options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options
    {
      return [RCTLinkingManager application:application openURL:url options:options];
    }

    // Enable Universal Links
    - (BOOL)application:(UIApplication *)application continueUserActivity:(nonnull NSUserActivity *)userActivity
     restorationHandler:(nonnull void (^)(NSArray<id<UIUserActivityRestoring>> * _Nullable))restorationHandler
    {
     return [RCTLinkingManager application:application
                      continueUserActivity:userActivity
                        restorationHandler:restorationHandler];
    }
    ```

    2. Open your project in XCode and go to `Settings/Signing & Capabilities/Associated Domains` to add the new domain. After this, `your_project.entitlement` should look like this:

    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
    <plist version="1.0">
    <dict>
      <key>com.apple.developer.associated-domains</key>
      <array>
        <string>applinks:example.com</string>
      </array>
    </dict>
    </plist>
    ```

    3. Update/Create your domain's `.well-known/apple-app-site-association` file accordingly.

    For more information about supporting universal links, visit the [Supporting associated domains](https://developer.apple.com/documentation/xcode/supporting-associated-domains?language=objc) page

    For a debugging guide, visit the [Debugging Universal Links](https://developer.apple.com/documentation/technotes/tn3155-debugging-universal-links) page.<br />
  </Tab>

  <Tab title="Android">
    Android Studio provides a tool to configure Universal Links easily, you can read the guide in [Android Documentation](https://developer.android.com/studio/write/app-link-indexing)

    After following the steps provided in the guide:

    1. Ensure that your Universal Link is properly configured in your app's `AndroidManifest.xml` file with the `autoVerify` set to `true`. It should look similar to this:

    ```xml
    <intent-filter android:autoVerify="true">
      <action android:name="android.intent.action.VIEW" />

      <category android:name="android.intent.category.DEFAULT" />
      <category android:name="android.intent.category.BROWSABLE" />

      <data android:scheme="https" />
      <data android:host="example.com" />
      <data android:pathPattern="/example_wallet" />
    </intent-filter>
    ```

    2. Update/Create your domains's `.well-known/assetlinks.json` file accordingly

    For more information on how to configure universal links for your app, refer to [Android Documentation](https://developer.android.com/studio/write/app-link-indexing).<br />
    For testing the configured universal link to app content check [this](https://developer.android.com/training/app-links/deep-linking#testing-filters) documentation page.<br />
  </Tab>
</Tabs>

Once everything is properly configured, and the user connects with a Link Mode-supporting wallet using One-Click Auth, your dapp will send requests through it.

# Link Mode

AppKit Link Mode is a low latency mechanism for transporting One-Click Auth requests and session requests over universal links, reducing the need for a WebSocket connection with the Relay. This significantly enhances the user experience when connecting native dApps to native wallets by reducing the latency associated with networking connections, especially when the user has an unstable internet connection.

<Frame>
  <video controls autoPlay src="https://mintlify.s3.us-west-1.amazonaws.com/reown-5552f0bb/images/link-mode.mp4" height="400" width="300" />
</Frame>

### How to enable it:

To support link mode add a universal link for your dapp in Cloud project configuration [dashboard](https://dashboard.reown.com/sign-in), configure your Metadata with a valid universal link and set the `linkMode` property to `true`:

```ts {8,9}
const metadata = {
  name: "AppKit App",
  description: "AppKit for React Native",
  url: "https://reown.com",
  icons: ["https://avatars.githubusercontent.com/u/179229932"],
  redirect: {
    native: "YOUR_APP_SCHEME://",
    universal: "https://example.com/example_dapp",
    linkMode: true,
  },
};

const config = defaultConfig({ metadata });
```

### How does it look without Link Mode?

<Frame>
  <video controls autoPlay src="https://mintlify.s3.us-west-1.amazonaws.com/reown-5552f0bb/images/without-link-mode.mp4" height="400" width="300" />
</Frame>

### Platform specifics:

<Tabs>
  <Tab title="iOS">
    To enable universal links for your app, refer to [React Native Documentation](https://reactnative.dev/docs/linking?syntax=ios#enabling-deep-links).<br />

    After following the steps provided in the official guide:

    1. Ensure that you handle incoming Universal Links in the your `AppDelegate.mm` file.

    ```swift
    #import <React/RCTLinkingManager.h>

    // Enable deeplinks
    - (BOOL)application:(UIApplication *)application
       openURL:(NSURL *)url
       options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options
    {
      return [RCTLinkingManager application:application openURL:url options:options];
    }

    // Enable Universal Links
    - (BOOL)application:(UIApplication *)application continueUserActivity:(nonnull NSUserActivity *)userActivity
     restorationHandler:(nonnull void (^)(NSArray<id<UIUserActivityRestoring>> * _Nullable))restorationHandler
    {
     return [RCTLinkingManager application:application
                      continueUserActivity:userActivity
                        restorationHandler:restorationHandler];
    }
    ```

    2. Open your project in XCode and go to `Settings/Signing & Capabilities/Associated Domains` to add the new domain. After this, `your_project.entitlement` should look like this:

    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
    <plist version="1.0">
    <dict>
      <key>com.apple.developer.associated-domains</key>
      <array>
        <string>applinks:example.com</string>
      </array>
    </dict>
    </plist>
    ```

    3. Update/Create your domain's `.well-known/apple-app-site-association` file accordingly.

    For more information about supporting universal links, visit the [Supporting associated domains](https://developer.apple.com/documentation/xcode/supporting-associated-domains?language=objc) page

    For a debugging guide, visit the [Debugging Universal Links](https://developer.apple.com/documentation/technotes/tn3155-debugging-universal-links) page.<br />
  </Tab>

  <Tab title="Android">
    Android Studio provides a tool to configure Universal Links easily, you can read the guide in [Android Documentation](https://developer.android.com/studio/write/app-link-indexing)

    After following the steps provided in the guide:

    1. Ensure that your Universal Link is properly configured in your app's `AndroidManifest.xml` file with the `autoVerify` set to `true`. It should look similar to this:

    ```xml
    <intent-filter android:autoVerify="true">
      <action android:name="android.intent.action.VIEW" />

      <category android:name="android.intent.category.DEFAULT" />
      <category android:name="android.intent.category.BROWSABLE" />

      <data android:scheme="https" />
      <data android:host="example.com" />
      <data android:pathPattern="/example_wallet" />
    </intent-filter>
    ```

    2. Update/Create your domains's `.well-known/assetlinks.json` file accordingly

    For more information on how to configure universal links for your app, refer to [Android Documentation](https://developer.android.com/studio/write/app-link-indexing).<br />
    For testing the configured universal link to app content check [this](https://developer.android.com/training/app-links/deep-linking#testing-filters) documentation page.<br />
  </Tab>
</Tabs>

Once everything is properly configured, and the user connects with a Link Mode-supporting wallet using One-Click Auth, your dapp will send requests through it.

# Email & Socials

AppKit enables passwordless Web3 onboarding and authentication, allowing your users interact with your application by creating a non-custodial wallet with just their emails or social network.

<Note>
  Due to Safari’s strict third-party cookie policies, the SDK is not preserving sessions after the app is closed. Our team is working to solve this issue soon.
</Note>

## Integration

<Tabs>
  <Tab title="Wagmi">
    ### Update your Cloud settings

    1. Go to your [Reown Dashboard](https://dashboard.reown.com) project
    2. Open Dashboard and scroll down to Mobile Application IDs menu
    3. Add your iOS Bundle ID and/or your Android Package Name

    * Changes might take some minutes to impact

    ### Install packages

    ```
    yarn add @reown/appkit-auth-wagmi-react-native react-native-webview
    ```

    On iOS, use CocoaPods to add the native modules to your project:

    ```
    npx pod-install
    ```

    ### Add the auth connector in `defaultWagmiConfig`

    ```ts {1-4, 10-11}
    // Add the following code lines
    import { authConnector } from "@reown/appkit-auth-wagmi-react-native";

    const auth = authConnector({ projectId, metadata });

    const wagmiConfig = defaultWagmiConfig({
      chains,
      projectId,
      metadata,
      // Add the following code line
      extraConnectors: [auth],
    });
    ```

    ### Enable features in `createAppKit`

    ```ts {4-9}
    createAppKit({
      projectId,
      metadata,
      wagmiConfig,
      // Add the following code line
      features: {
        email: true, // default to true
        socials: ["x", "discord", "apple"], // default value
        emailShowWallets: true, // default to true
      },
    });
    ```
  </Tab>

  <Tab title="Ethers">
    ### Update your Cloud settings 1. Go to your [Reown Dashboard](https://dashboard.reown.com)

    project 2. Open Dashboard and scroll down to Mobile Application IDs menu 3.
    Add your iOS Bundle ID and/or your Android Package Name \* Changes might take
    some minutes to impact

    ### Install packages

    ```
    yarn add react-native-webview @reown/appkit-auth-ethers-react-native
    ```

    On iOS, use CocoaPods to add the native modules to your project:

    ```
    npx pod-install
    ```

    ### Add the auth connector in `defaultConfig`

    ```ts {1-4, 8-9}
    // Add the following code lines
    import { AuthProvider } from "@reown/appkit-auth-ethers-react-native";

    const authProvider = new AuthProvider({ projectId, metadata });

    const config = defaultConfig({
      metadata,
      // Add the following code line
      extraConnectors: [authProvider],
    });
    ```

    ### Enable features in `createAppKit`

    ```ts {5-9}
    createAppKit({
      projectId,
      metadata,
      chains,
      config,
      features: {
        email: true, // default to true
        socials: ["x", "discord", "apple"], // default value
        emailShowWallets: true, // default to true
      },
    });
    ```
  </Tab>
</Tabs>

## Options

* ***email \[boolean]*** : This boolean defines whether you want to enable email login. Default `true`
* ***socials \[array]*** : This array contains the list of social platforms that you want to enable for user authentication. The platforms supported are X, Discord and Apple. The default value of `undefined` displays everything. Set it to `false` to disable this feature. You can also pass an empty array to disable it.
* ***emailShowWallets \[boolean]*** : This boolean defines whether you want to show the wallet options on the first connect screen. If this is false and `socials` are enabled, it will show a button that directs you to a new screen displaying the wallet options. Default `true`

## User Flow

1. Users will be able to connect to you application by simply using an email address. AppKit will send to them a One Time Password (OTP) to copy and paste in the modal, which will help to
   verify the user's authenticity. This will create a non-custodial wallet for your user which will be available in any application that integrates AppKit and email login.

   * For Social options, the One Time Password (OTP) is not sent.

2. Eventually the user can optionally choose to move from a non-custodial wallet to a self-custodial one by pressing "Upgrade Wallet" on AppKit.
   This will open the *([WalletConnect secure website](https://secure.walletconnect.com/dashboard))* that will walk your user through the upgrading process.

# Sign In With Ethereum

AppKit provides a simple solution for integrating with "Sign In With Ethereum" (SIWE), a form of authentication that enables users to control their digital identity with their Ethereum account.
SIWE is a standard also known as [EIP-4361](https://docs.login.xyz/general-information/siwe-overview/eip-4361).

## One-Click Auth

**One-Click Auth** represents a key advancement within WalletConnect v2, streamlining the user authentication process in AppKit by enabling them to seamlessly connect with a wallet and sign a SIWE message with just one click.

Connecting a wallet, proving control of an address with an off-chain signature, authorizing specific actions. These are the kinds of authorizations that can be encoded as ["ReCaps"](https://eips.ethereum.org/EIPS/eip-5573). ReCaps are permissions for a specific website or dapp that can be compactly encoded as a long string in the message you sign and translated by any wallet into a straight-forward one-sentence summary.
WalletConnect uses permissions expressed as ReCaps to enable a One-Click Authentication.

## Pre-requisites

In order for SIWE to work, you need to have a backend to communicate with. This backend will be used to generate a nonce, verify messages and handle sessions.
More info [here](https://docs.login.xyz/sign-in-with-ethereum/quickstart-guide/implement-the-backend)

## Configure your SIWE Client

```ts
// siweConfig.ts

import {
  createSIWEConfig,
  formatMessage,
  type SIWEVerifyMessageArgs,
  type SIWECreateMessageArgs,
} from "@reown/appkit-siwe-react-native";

export const siweConfig = createSIWEConfig({
  getNonce: async (): Promise<string> => {
    // The getNonce method functions as a safeguard
    // against spoofing, akin to a CSRF token.

    return await api.getNonce();
  },
  verifyMessage: async ({
    message,
    signature,
    cacao,
  }: SIWEVerifyMessageArgs): Promise<boolean> => {
    try {
      // This function ensures the message is valid,
      // has not been tampered with, and has been appropriately
      // signed by the wallet address.

      const isValid = await api.verifyMessage({ message, signature, cacao });

      return isValid;
    } catch (error) {
      return false;
    }
  },
  getSession: async (): Promise<SIWESession | null> => {
    // The backend session should store the associated address and chainId
    // and return it via the `getSession` method.

    const session = await api.getSession();
    if (!session) throw new Error("Failed to get session!");

    const { address, chainId } = session;

    return { address, chainId };
  },
  signOut: (): Promise<boolean> => {
    try {
      // The users session must be destroyed when calling `signOut`.

      await api.signOut();
      return true;
    } catch {
      return false;
    }
  },
  createMessage: ({ address, ...args }: SIWECreateMessageArgs): string => {
    // Method for generating an EIP-4361-compatible message.

    return formatMessage(args, address);
  },
  getMessageParams: () => {
    // Parameters to create the SIWE message internally.
    // More info in https://github.com/ChainAgnostic/CAIPs/blob/main/CAIPs/caip-222.method

    return {
      domain: "your domain",
      uri: "your uri",
      chains: [1, 137], // array of chain ids
      statement: "Please sign with your account",
      iat: new Date().toISOString(),
    };
  },
});
```

## Initialize AppKit with your `siweConfig`

Add the siwe configuration in `createAppKit` initialization

```ts {5}
import { siweConfig } from "./siweConfig.ts";

createAppKit({
  //..
  siweConfig,
});
```

### SIWE Config reference

```ts
interface SIWEConfig {
  /** Required **/
  getNonce: () => Promise<string>
  createMessage: (args: SIWECreateMessageArgs) => string
  verifyMessage: (args: SIWEVerifyMessageArgs) => Promise<boolean>
  getSession: () => Promise<SIWESession | null>
  signOut: () => Promise<boolean>

  /** Required for One-Click Auth **/
  getMessageParams `() => Promise<{ domain: string, uri: string, chains: number[], statement: string }>


  /** Optional **/

  // Callback when user signs in
  onSignIn?: (session?: SIWESession) => void

  // Callback when user signs out
  onSignOut?: () => void

  // Defaults to true
  enabled?: boolean

  // In milliseconds, defaults to 5 minutes
  nonceRefetchIntervalMs?: number

  // In milliseconds, defaults to 5 minutes
  sessionRefetchIntervalMs?: number

  // Defaults to true
  signOutOnDisconnect?: boolean

  // Defaults to true
  signOutOnAccountChange?: boolean

  // Defaults to true
  signOutOnNetworkChange?: boolean
}
```

## Exported functions

### `verifySignature`

Verify a SIWE signature. Internally it calls your backend verification method.

```ts
import { verifySignature } from "@reown/appkit-siwe-react-native";

const isValid = await verifySignature({
  address,
  message,
  signature,
  chainId,
  projectId,
});
```

### `getChainIdFromMessage`

Get the chain ID from the SIWE message.

```ts
import { getChainIdFromMessage } from "@reown/appkit-siwe-react-native";

const chainId = getChainIdFromMessage(message);
```

### `getAddressFromMessage`

Get the address from the SIWE message.

```ts
import { getAddressFromMessage } from "@reown/appkit-siwe-react-native";

const address = getAddressFromMessage(message);
```

