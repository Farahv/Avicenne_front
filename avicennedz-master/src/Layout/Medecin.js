import React, { Component } from 'react';
import { useLocation, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from '../Components/Sidebar.js';
import FormMedicalDoc from '../ScreensMedecin/FormMedicalDoc.js';
import routes, { routesSecondary } from '../routes.js'


export class Medecin extends Component {

    state = {
        sidebarOpen: false
    }

    getRoutes = (routes) => {
        return routes.map((prop, key) => {
            if (prop.layout === "/medecin") {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        element={prop.component}
                        key={key}
                    />
                );
            } else {
                return null;
            }
        });
    };

    setSideBarOpen = (open) => {
        this.setState({ sidebarOpen: open })
    }


    render() {
        return (
            <div>

                <Sidebar
                    routes={routes}
                    routesSecondary={routesSecondary}
                    setSideBarOpen={this.setSideBarOpen}
                />
                <Routes>
                    {this.getRoutes(routes)}
                    {this.getRoutes(routesSecondary)}
                    <Route path="/medecin/createdoc" element={<FormMedicalDoc />} />
                </Routes>

            </div>
        )
    }
}

export default Medecin
