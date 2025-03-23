import HomeScreen from "@/app/(tabs)/index";
import { NavigationWrapper } from "@/test-utils";
import { render, screen } from "@testing-library/react-native";

describe("<HomeScreen />", () => {
  test("Text renders correctly on HomeScreen", () => {
    render(
      <NavigationWrapper>
        <HomeScreen />
      </NavigationWrapper>
    );

    screen.getByText("Welcome!");
  });
});
