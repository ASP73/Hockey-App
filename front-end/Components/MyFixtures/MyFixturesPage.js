import { MyFixtureProvider } from "../../Contexts/MyFixtureContext";
import MyFixturesList from "./MyFixturesList";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TeamSheetPage from "../TeamSheet/TeamSheetPage";
import VenueMap from "./VenueMap";

export default function MyFixturesPage() {
    const Stack = createNativeStackNavigator();

    return (
        <MyFixtureProvider>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name="MyFixturesList"
                    component={MyFixturesList}
                />
                <Stack.Screen name="TeamSheet" component={TeamSheetPage} />
                <Stack.Screen name="Details" component={VenueMap} />
            </Stack.Navigator>
        </MyFixtureProvider>
    );
}
