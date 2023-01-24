import React from "react";
import { Card } from "./Card";
import "./App.css";
import "./index.css";

export function App() {
    return (
        <>
            <Card userName={"alexmlhttp"}>Alex Nieblas</Card>
            <Card initialIsFollowing={true}>Alex Nieblas</Card>
        </>
    );
}