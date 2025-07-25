import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../modules/common/pages/Login";
import Home from "../modules/user/pages/Home";
import Dashboard from "../modules/user/pages/Dashboard";
import Programs from "../modules/user/pages/Programs";
import ProductDetails from "../modules/user/pages/ProductDetails";
import AdminHome from "../modules/admin/pages/Home";
import AdminDashboard from "../modules/admin/pages/Dashboard";
import AdminProgram from "../modules/admin/pages/Program";
import AdminExercise from "../modules/admin/pages/Exercise";
import AdminEmployees from "../modules/admin/pages/Employees";
import AdminUsers from "../modules/admin/pages/Users";
import Products from "../modules/user/pages/Products";
import Exercise from "../modules/user/pages/Exercise";
import Detail from "../modules/admin/pages/Detail";
import UserProfile from "../modules/admin/pages/UserProfile";
import UserBilling from "../modules/admin/pages/UserBilling";
import UserReports from "../modules/admin/pages/UserReports";
import Social from "../modules/admin/pages/Social";
import UserExercise from "../modules/admin/pages/UserExercise";
import Messages from "../modules/admin/pages/Messages";
import Reports from "../modules/admin/pages/Reports";
import ReportDetail from "../modules/admin/pages/ReportDetail";
import Workouts from "../modules/user/pages/Workouts";

function AppRoute(props) {
  return (
    <Routes>
      <Route exact path="/" element={<Login bodyBg="#efefef" />} />
      <Route exact path="/login" element={<Login bodyBg="#efefef" />} />
      <Route exact path="workouts" element={<Workouts bodyBg="#efefef" />} />
      <Route exact path="user" element={<Home bodyBg="#efefef" />}>
        <Route exact path="dashboard" element={<Dashboard />} />
        <Route exact path="marketplace" element={<Products />} />
        <Route exact path="productDetails" element={<ProductDetails />} />
        <Route exact path="programs" element={<Programs bodyBg="#efefef" />} />

        <Route
          exact
          path="exerciselib"
          element={<Exercise bodyBg="#efefef" />}
        />
        <Route
          exact
          path="myprograms"
          element={<Programs bodyBg="#efefef" />}
        />
      </Route>

      <Route exact path="admin" element={<AdminHome bodyBg="" />}>
        <Route exact path="dashboard" element={<AdminDashboard />} />
        <Route exact path="programs" element={<AdminProgram />} />
        <Route exact path="exericse" element={<AdminExercise />} />
        <Route exact path="employees" element={<AdminEmployees />} />
        <Route exact path="users" element={<AdminUsers />} />
        <Route exact path="user" element={<Detail />}>
          <Route
            exact
            path="profile"
            element={<UserProfile bodyBg="#efefef" />}
          />{" "}
          <Route
            exact
            path="messages"
            element={<Messages bodyBg="#efefef" />}
          />{" "}
          <Route
            exact
            path="exercise"
            element={<UserExercise bodyBg="#efefef" />}
          />{" "}
          <Route exact path="social" element={<Social bodyBg="#efefef" />} />{" "}
          <Route
            exact
            path="reports"
            element={<UserReports bodyBg="#efefef" />}
          />
          <Route
            exact
            path="billing"
            element={<UserBilling bodyBg="#efefef" />}
          />
        </Route>
        <Route exact path="reports" element={<Reports />}></Route>
        <Route
          exact
          path="reports/detail"
          element={<ReportDetail bodyBg="#efefef" />}
        />
      </Route>
    </Routes>
  );
}

export default AppRoute;
