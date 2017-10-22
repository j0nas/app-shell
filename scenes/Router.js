import React from 'react';
import {TabNavigator} from "react-navigation";
import Offers from "./Offers/Offers";
import Products from "./Products/Products";
import Coupons from "./Coupons/Coupons";
import Profile from "./Profile/Profile";
import {Footer} from "native-base";
import FooterTab from "../components/general/FooterTab/FooterTab";

export const ROUTE_OFFERS = 'ROUTE_OFFERS';
export const ROUTE_PRODUCTS = 'ROUTE_PRODUCTS';
export const ROUTE_COUPONS = 'ROUTE_COUPONS';
export const ROUTE_PROFILE = 'ROUTE_PROFILE';

const Navigator = TabNavigator(
  {
    [ROUTE_PRODUCTS]: {screen: Products},
    [ROUTE_OFFERS]: {screen: Offers},
    [ROUTE_COUPONS]: {screen: Coupons},
    [ROUTE_PROFILE]: {screen: Profile},
  },
  {
    tabBarPosition: 'bottom',
    tabBarComponent: ({ navigation: { navigate }, navigationState: { index } }) =>
      <Footer>
        <FooterTab active={index === 0} iconName="basket" text="Produkter" onPress={() => navigate(ROUTE_PRODUCTS)}/>
        <FooterTab active={index === 1} iconName="cash" text="Tilbud" onPress={() => navigate(ROUTE_OFFERS)}/>
        <FooterTab active={index === 2} iconName="pricetag" text="Kuponger" onPress={() => navigate(ROUTE_COUPONS)}/>
        <FooterTab active={index === 3} iconName="person" text="Profil" onPress={() => navigate(ROUTE_PROFILE)}/>
      </Footer>
  },
);

const Router = () => <Navigator/>;

export default Router;