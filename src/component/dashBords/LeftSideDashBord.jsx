
import styled from "styled-components";

export function LeftSideDashBord() {




    const LeftMainSection = styled.section`
        width: 200px; /* Adjust width as needed */
        background-color: #2b2b5e; /* Blue color */
        height: 100%; /* Set full height */
        position: absolute; /* Fix sidebar to the left */
        top: 0; /* Position sidebar at the top */
        left: 0; /* Position sidebar on the left */
        overflow: hidden;

    `
    const LeftSubDiv = styled.div`
        height: 15%;
        width: 100%;
        background-color: #4d2170;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

    `
    const LeftImage = styled.img`
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;



    `


    const LeftSubDiv2 = styled.div`
 
        height: 5%;
        width: 100%;
        background-color: #4d2170;
        display: flex;
        justify-content:center;
        align-items: center;
        flex-direction: column;
        margin-top: 20%;
     


    `
    const LeftH1 = styled.h1`
       
    color: white;
        margin: auto;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        margin: auto;
    `
    const LeftSecondH1 = styled.h1`

        color: #ffffff;
        margin: auto;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        margin: auto;
        font-weight: lighter;
        font-size:15px ;

    `



    return (

          <LeftMainSection>

<LeftSubDiv><LeftH1>Acmy Solution</LeftH1></LeftSubDiv>
              <LeftSubDiv2>
              <LeftSecondH1><LeftImage src='src/assets/icons/img.png'></LeftImage> Dashboard</LeftSecondH1>
              </LeftSubDiv2>
          </LeftMainSection>



    );
}
