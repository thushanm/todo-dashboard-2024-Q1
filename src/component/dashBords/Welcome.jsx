import styled from "styled-components";
export function Welcome() {
const Div = styled.div`
    height: 20%;
    width: 80%;
    border-radius: 10px;
    border: #afacac 1px solid;
    margin-left: 15%;
    margin-top: 1%;
    overflow: hidden;
    @media (max-width: 768px) {
        padding: 10px; /* Reduce padding for better fit on smaller screens */
        font-size: 0.8rem;
   /* Adjust font size for better readability */ /* Optional */
    }

    @media (max-width: 480px) {
        /* Additional adjustments for very small screens (optional) */
        /* Example: adjust line height, text alignment, etc. */
    }
   
`
    const WelcomText = styled.h1`
    color: black;
        font-weight: bold;
        font-family: Arial;
        margin-left: 5%;
        font-size:23px ;
        
     
      `
    const WelcomText2 = styled.h1`
        color: #646363;
        font-weight: lighter;
        font-family: Arial;
        margin-left: 5%;
        font-size: 13px;


    `
    const WelcomText3 = styled.h1`
        color: #bc14e1;
        font-weight: lighter;
        font-family: Arial;
        margin-left: 5%;
        font-size: 13px;
     
        text-outline: deeppink;


    `

    return(
<Div>
   <WelcomText>Welcome back, John Doe</WelcomText>
   <WelcomText2>The end of the year is coming. Are you planning your performance interviews? You can do this super efficiently with Acmy</WelcomText2>
    <WelcomText3> Look here for more information </WelcomText3>

</Div>

    )


}

