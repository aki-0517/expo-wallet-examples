import { SafeAreaView, Text, View } from "react-native";
import Constants from "expo-constants";
import LoginScreen from "@/components/LoginScreen";
import { usePrivy } from "@privy-io/expo";
import { UserScreen } from "@/components/UserScreen";
import { PRIVY_APP_ID, PRIVY_CLIENT_ID } from '@env';

export default function Index() {
  const { user } = usePrivy();
  if (PRIVY_APP_ID.length !== 25) {
    return (
      <SafeAreaView>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>You have not set a valid `privyAppId` in .env</Text>
        </View>
      </SafeAreaView>
    );
  }
  if (
    !PRIVY_CLIENT_ID.startsWith(
      "client-"
    )
  ) {
    return (
      <SafeAreaView>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>You have not set a valid `privyClientId` in .env</Text>
        </View>
      </SafeAreaView>
    );
  }
  return !user ? <LoginScreen /> : <UserScreen />;
}
