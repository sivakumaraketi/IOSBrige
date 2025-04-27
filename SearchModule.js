import { NativeModules } from 'react-native';

const { SearchBridge } = NativeModules;

export default {
  searchItems: (items, query) => {
    return SearchBridge.searchItems(items, query);
  }
};
