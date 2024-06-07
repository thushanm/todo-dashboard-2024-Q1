import {Welcome} from "../dashBords/Welcome.jsx";
import {LeftSideDashBord} from "../dashBords/LeftSideDashBord.jsx";
import styled from "styled-components";
import {ActivityFeed} from "../dashBords/ActivityFeed.jsx";


export function AppLayOut() {

const Div = styled.div`
height: 100vh;
    width: 100vw;
    overflow-y: hidden;
    justify-content: center; /* Center elements horizontally */
    align-items: center;
    

`

    const H1 = styled.h1`
        color: #110f10;
        text-align: center;
        font-weight: lighter;
        font-size:30px ;
        margin: auto;


    `

    return (
        <Div>
<H1>Dashboard</H1>
<Welcome></Welcome>
            <LeftSideDashBord/>
            <ActivityFeed/>
        </Div>
    );
}

