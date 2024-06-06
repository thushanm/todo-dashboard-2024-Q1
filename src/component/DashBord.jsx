
import styled from "styled-components";

export function DashBord() {

    const LeftMain = styled.main`
    height: 100vh;
        width: 40vw;
    `


    const LeftMainSection = styled.section`
        height: 100%;
        width: 60%;
        background-color: #222262;
 
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
        <LeftMain>
          <LeftMainSection>

<LeftSubDiv><LeftH1>Acmy Solution</LeftH1></LeftSubDiv>
              <LeftSubDiv2>
              <LeftSecondH1><LeftImage src='src/assets/icons/img.png'></LeftImage> Dashboard</LeftSecondH1>
              </LeftSubDiv2>
          </LeftMainSection>
        </LeftMain>


    );
}
