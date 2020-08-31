import React from "react";
import recipes from "../recipes";
import Recipes from "./Recipes"

class App extends React.Component {
    render() {
        return (
            <Recipes>${recipes[0]}</Recipes>
        );
    }
}

export default App;