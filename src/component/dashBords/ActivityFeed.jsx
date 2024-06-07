import styled from "styled-components";


export function ActivityFeed() {
const Div = styled.div`
    height: 35%;
    width: 25%;
    border-radius: 10px;
    border: #afacac 1px solid;
   margin-left: 70%;
   margin-top: 0.2%;
`
    const WelcomText = styled.h1`
        color: black;
        font-weight: bold;
        font-family: Arial;
        margin-left: 5%;
        font-size:23px ;


    `
    const ContractNumber = styled.span`
  color: deeppink;
        font-family: Arial;
        
`;const Date = styled.span`
        color: #696565;
        font-family: Arial;

    `;
    const Image1 = styled.img`
        width: 5%;
        object-fit: cover;



    `

    return (

        <Div>


<WelcomText>Activity Feed</WelcomText>
               <h6>
                   <div>
                   <Image1 src='src/assets/icons/images.jpeg'/>
                <b>Ushantha Charuka</b> <>created</> <ContractNumber>Contract #00124 needs John Beiges
                signature</ContractNumber><br/><Date>Sep 16, 2022 at 11:30 AM</Date>

                   </div>
               </h6> <h6>
                   <div>
                   <Image1 src='src/assets/icons/images.jpeg'/>
                <b>Thushan Madhushara</b> <>created</> <ContractNumber>Contract #00124 needs John Beiges
                signature</ContractNumber><br/><Date>Sep 15, 2022 at 1:30 AM</Date>

                   </div>
               </h6>

        </Div>


    );
}

