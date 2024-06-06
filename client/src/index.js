import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Clean from "views/Clean.js";
import Table from "views/Table.js";
import Crud from "views/Crud.js";
import IndexPechna from "views/IndexPechna.js";
import IndexNoticiasIA from "views/IndexNoticiaIA.js";
import IndexTable from "views/IndexTable.js";
import MainIndex from "views/Index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/admin" component={Admin} />
      <Route path="/auth" component={Auth} />
      {/* add routes without layouts */}
      <Route path="/landing" exact component={Landing} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/clean" exact component={Clean} />
      <Route path="/table" exact component={Table} />
      <Route path="/crud" exact component={Crud} />
      <Route path="/index-1" exact component={IndexPechna} />
      <Route path="/index-2" exact component={IndexNoticiasIA} />
      <Route path="/table-example" exact component={IndexTable} />
      <Route path="/" exact component={MainIndex} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
);
