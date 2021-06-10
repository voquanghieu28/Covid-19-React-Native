var favouriteList = []

class LocalStorage {

    
    static addFavourite(countryCode) {
        favouriteList.push(countryCode)
    }

    static getAllFavourite() {
        return favouriteList
    }

    static removeFavourite(countryCode) {
        favouriteList.splice(favouriteList.indexOf(countryCode), 1)
    }

    static clearFavourite() {
      favouriteList = []
    }
}
module.exports = LocalStorage

/*
import AsyncStorage from '@react-native-community/async-storage'
const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('favourites', value)
    console.log('succedddddddd')
  } catch (e) {
    // saving error
    console.log('ERRORRRR')
  }
}

const retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('favourites');
    if (value !== null) {
      // We have data!!
      console.log(value);
    }
  } catch (error) {
    // Error retrieving data
  }
}
*/