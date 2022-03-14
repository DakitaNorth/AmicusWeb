import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Greeting from "./components/welcomePage/greating";
import PageMain from "./components/welcomePage/pageMain";
import PageFooter from "./components/welcomePage/pageFooter";

import GoBackButton from "./components/A1General/goBackButton";

import FormLogin from "./components/loginPage/formLogin";
import SocialLogin from "./components/loginPage/socialLogin";
import NoAccount from "./components/loginPage/noAccount";

import FormRegistration from "./components/registrPage/formRegistration";
import HasAccount from "./components/registrPage/hasAccount";

import PasswordRecovery from "./components/passwordRecoveryPage/passwordRecovery";

import PasswordRecoverySecond from "./components/passwordRecoveryPage/passwordRecoverySecond";

import VerificationPage from "./components/verificationPage/verificationPage";

import TestSuccessful from "./components/A1General/testSuccessful";

import FormRouteSearch from "./components/routeSearchPage/formRouteSearch";
import RouteStoryList from "./components/routeSearchPage/routeStoryList";
import Parameters from "./components/A1General/parameters";
//import RouteStoryItem from "./components/routeStoryItem";
import Navigation from "./components/A1General/navigation";

import MyRoutesSelector from "./components/myRoutesPage/myRoutesSelector";
// import MyRoutesDriver from "./components/myRoutesDriverItem";

import RouteCreating from "./components/routeCreatingPage/routeCreating";

import ChatList from "./components/chatPage/chatList";

import Profile from "./components/profilePage/profile";

import DaysParameter from "./components/daysParameterPage/daysParameter";

import HumanParameter from "./components/humanParameterPage/humanParameter";

import TimeParameter from "./components/timeParameterPage/timeParameter";

import RouteSelectedList from "./components/selectedRouteListPage/routeSelectedList";

import RouteSelected from "./components/selectedRoutePage/routeSelected";

import PaymentMethod from "./components/paymentMethod/paymentMethod";

import SuccessfulBooking from "./components/successfulBookingPage/successfulBooking";

import MyRoutesSelected from "./components/myRoutesSelected/myRoutesSelected";

import ProfileSettings from "./components/profileSettingsPage/profileSettings";

import CarSettings from "./components/carSettingsPage/carSettings";

import CardSettings from "./components/cardSettingsPage/cardSettings";

import ServiceSettings from "./components/serviceSettingsPage/serviceSettings";

import AddCard from "./components/addCardPage/addCard";

import AddCar from "./components/addCarPage/addCar";

import VievCard from "./components/vievCardPage/vievCard";

import VievCar from "./components/vievCarPage/vievCar";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={
                        <div>
                            <Greeting />
                            <PageMain />
                            <PageFooter />
                        </div>
                    } />
                    <Route path="/login" element={
                        <div>
                            <GoBackButton />
                            <FormLogin />
                            <SocialLogin />
                            <NoAccount />
                        </div>
                    } />
                    <Route path="/registration" element={
                        <div>
                            <GoBackButton />
                            <FormRegistration />
                            <HasAccount />
                        </div>
                    } />
                    <Route path="/password-recovery" element={
                        <div>
                            <GoBackButton />
                            <PasswordRecovery />
                        </div>
                    } />
                    <Route path="/password-recovery-second" element={
                        <div>
                            <GoBackButton />
                            <PasswordRecoverySecond />
                        </div>
                    } />
                    <Route path="/verification" element={
                        <div>
                            <GoBackButton />
                            <VerificationPage />
                        </div>
                    } />
                    <Route path="/successful" element={
                        <div>
                            <GoBackButton />
                            <TestSuccessful />
                        </div>
                    } />
                    <Route path="/route-search" element={
                        <div>
                            <FormRouteSearch />
                            <Parameters />
                            <RouteStoryList/>
                            <Navigation />
                        </div>
                    } />
                    <Route path="/creating-route" element={
                        <div>
                            <RouteCreating />
                            <Navigation />
                        </div>
                    } />
                    <Route path="/my-routes" element={
                        <div>
                            <MyRoutesSelector />
                            <Navigation />
                        </div>
                    } />
                    <Route path="/my-route-selected" element={
                        <div>
                            <GoBackButton />
                            <MyRoutesSelected />
                            <Navigation />
                        </div>
                    } />
                    <Route path="/messages" element={
                        <div>
                            <ChatList />
                            <Navigation />
                        </div>
                    } />
                    <Route path="/profile" element={
                        <div>
                            <Profile />
                            <Navigation />
                        </div>
                    } />
                    <Route path="/my-profile-settings" element={
                        <div>
                            <GoBackButton />
                            <ProfileSettings />
                        </div>
                    } />
                    <Route path="/my-car-settings" element={
                        <div>
                            <GoBackButton />
                            <CarSettings />
                        </div>
                    } />
                    <Route path="/my-card-settings" element={
                        <div>
                            <GoBackButton />
                            <CardSettings />
                        </div>
                    } />
                    <Route path="/my-servics-settings" element={
                        <div>
                            <GoBackButton />
                            <ServiceSettings />
                        </div>
                    } />
                    <Route path="/add-card" element={
                        <div>
                            <GoBackButton />
                            <AddCard />
                        </div>
                    } />
                    <Route path="/add-car" element={
                        <div>
                            <GoBackButton />
                            <AddCar />
                        </div>
                    } />
                    <Route path="/viev-card" element={
                        <div>
                            <GoBackButton />
                            <VievCard />
                        </div>
                    } />
                    <Route path="/viev-car" element={
                        <div>
                            <GoBackButton />
                            <VievCar />
                        </div>
                    } />
                    <Route path="/days-parameter" element={
                        <div>
                            <GoBackButton />
                            <DaysParameter />
                            <Navigation />
                        </div>
                    } />
                    <Route path="/human-parameter" element={
                        <div>
                            <GoBackButton />
                            <HumanParameter />
                            <Navigation />
                        </div>
                    } />
                    <Route path="/time-parameter" element={
                        <div>
                            <GoBackButton />
                            <TimeParameter />
                            <Navigation />
                        </div>
                    } />
                    <Route path="/selected-route-list" element={
                        <div>
                            <GoBackButton />
                            <RouteSelectedList />
                            <Navigation />
                        </div>
                    } />
                    <Route path="/selected-route" element={
                        <div>
                            <GoBackButton />
                            <RouteSelected />
                            <Navigation />
                        </div>
                    } />
                    <Route path="/payment-method" element={
                        <div>
                            <GoBackButton />
                            <PaymentMethod />
                        </div>
                    } />
                    <Route path="/successful-booking" element={
                        <div>
                            <GoBackButton />
                            <SuccessfulBooking />
                        </div>
                    } />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;