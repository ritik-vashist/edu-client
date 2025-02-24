/* eslint-disable react/no-array-index-key */
import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomeView";
import CoursePage from "./pages/CoursePageViewWithVideo/IndividualCourse";
import MyCourses from "./pages/CoursePageViewWithVideo/index";
import WishlistPage from "./pages/wishListView";
import ProfilePage from "./pages/ProfilePage/index";
import CourseDetail from "./pages/CourseDetail";
import Privacy from "./pages/Info/Privacy";
import Terms from "./pages/Info/Terms";
import Faqs from "./pages/Info/Faqs";
import About from "./pages/Info/About";
import Checkout from "./pages/CheckoutView";
import MentorRating from "./pages/MentorRating";
import PeerPage from "./pages/PeerDiscussionPage/peer";
import Comment from "./pages/PeerDiscussionPage/comments";
import StudentDashboard from "./pages/StudentDashboardPage";
import AssignmentSubmission from "./pages/StudentDashboardPage/AssignmentSubmission/AssignmentSubmission";
import JobOpenings from "./pages/JobOpeningPage";
import Contests from "./pages/Contests";
import Statistics from "./pages/Statistics";
import ContactUs from "./pages/ContactUs";
import MentorPage from "./pages/MentorPage";
import ReferralAndCoupons from "./pages/ReferralAndCouponCodes";
import EditProfile from "./pages/ProfilePage/ProfileComponent/EditProfile";
import Resources from "./pages/Resources";
import HackathonsAndEvents from "./pages/HackAndEventsPage";

// IMPORTANT - Don't add any route inside the scope of <SwipeableRoutes> </SwipeableRoutes> unless it is a page which can be navigated using the bottom navigation.
const renderRoutes = () => (
  <Switch>
    <Route path="/" exact>
      <Redirect to="/home" />
    </Route>
    <Route path="/terms-and-conditions" exact component={Terms} />
    <Route path="/course/:id" exact component={CourseDetail} />
    <Route path="/mycourses/:coursename" exact component={CoursePage} />
    <Route path="/checkout/:id" exact component={Checkout} />
    <Route path="/privacy" exact component={Privacy} />
    <Route path="/about" exact component={About} />
    <Route path="/faq" exact component={Faqs} />
    <Route path="/ratementor/:coursename" exact component={MentorRating} />
    <Route path="/terms-and-conditions" exact component={Terms} />
    <Route path="/resources/:coursename" exact component={Resources} />
    <Route path="/contactUs" exact component={ContactUs} />
    <Route path="/dashboard" exact component={StudentDashboard} />
    <Route path="/contests" exact component={Contests} />
    <Route path="/dashboard/assignment/:id" exact component={AssignmentSubmission} />
    <Route path="/job-openings" exact component={JobOpenings} />
    <Route path="/statistics" exact component={Statistics} />
    <Route path="/peer" exact component={PeerPage} />
    <Route path="/peer/:id/comments" exact component={Comment} />
    <Route path="/faq" exact component={Faqs} />
    <Route path="/about" exact component={About} />
    <Route path="/mentorPage" exact component={MentorPage} />
    <Route path="/referralAndCoupons" exact component={ReferralAndCoupons} />
    <Route path="/editprofile" exact component={EditProfile} />
    <Route path="/hackathonsAndEvents" exact component={HackathonsAndEvents} />
    <MainLayout>
      <Route path="/home" exact component={HomePage} />
      <Route path="/my-course" exact component={MyCourses} />
      <Route path="/wishlist" exact component={WishlistPage} />
      <Route path="/profile" exact component={ProfilePage} />
    </MainLayout>
  </Switch>
);

function Routes() {
  return renderRoutes({});
}

export default Routes;
