import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Greeting from "./components/greating";
import PageMain from "./components/pageMain";
import PageFooter from "./components/pageFooter";

import GoBackButton from "./components/goBackButton";

import FormLogin from "./components/formLogin";
import SocialLogin from "./components/socialLogin";
import NoAccount from "./components/noAccount";

import FormRegistration from "./components/formRegistration";
import HasAccount from "./components/hasAccount";

import PasswordRecovery from "./components/passwordRecovery";

import PasswordRecoverySecond from "./components/passwordRecoverySecond";

import VerificationPage from "./components/verificationPage";

import TestSuccessful from "./components/testSuccessful";

import FormRouteSearch from "./components/formRouteSearch";
import RouteStoryList from "./components/routeStoryList";
import Parameters from "./components/parameters";
//import RouteStoryItem from "./components/routeStoryItem";
import Navigation from "./components/navigation";

import MyRoutesSelector from "./components/myRoutesSelector";
// import MyRoutesDriver from "./components/myRoutesDriverItem";

import RouteCreating from "./components/routeCreating";

import ChatList from "./components/chatList";

import Profile from "./components/profile";

import DaysParameter from "./components/daysParameter";

import HumanParameter from "./components/humanParameter";

import TimeParameter from "./components/timeParameter";

import RouteSelectedList from "./components/routeSelectedList";

import RouteSelected from "./components/routeSelected";

import PaymentMethod from "./components/paymentMethod";

import SuccessfulBooking from "./components/successfulBooking";

import MyRoutesSelected from "./components/myRoutesSelected";

import ProfileSettings from "./components/profileSettings";

import CarSettings from "./components/carSettings";

import CardSettings from "./components/cardSettings";

import ServiceSettings from "./components/serviceSettings";

import AddCard from "./components/addCard";

import VievCard from "./components/vievCard";

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
                    <Route path="/viev-card" element={
                        <div>
                            <GoBackButton />
                            <VievCard />
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