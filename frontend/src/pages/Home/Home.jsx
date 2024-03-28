import React, { useState } from "react";
import './Home.css';
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import DisplayFood from "../../components/DisplayFood/DisplayFood";
const Home =()=>{
    const [category,setCategory] = useState('All');
    return(
        <div className="container">
            <Header />
            <ExploreMenu category={category} setCategory={setCategory}/>
             <DisplayFood category={category}/>
        </div>
    )
}
export default Home;