import { useEffect } from "react";
import api from "../api/axios";

function Dashboard() {
    useEffect(() => {
        api.get("accounts/me/")
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return <h1>Dashboard</h1>;
}

export default Dashboard;