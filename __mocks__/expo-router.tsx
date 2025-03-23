export const useRouter = jest.fn(() => ({
  push: jest.fn(),
  replace: jest.fn(),
  back: jest.fn(),
}));

export const useNavigation = jest.fn(() => ({
  navigate: jest.fn(),
  goBack: jest.fn(),
}));

export const useLocalSearchParams = jest.fn(() => ({}));

export const Link = jest.fn(() => null);
