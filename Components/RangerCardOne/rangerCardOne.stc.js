import Styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const RangerCardOneStc = Styled.div`

    //overflow: auto;
    margin: 0;
    padding-bottom: 1rem;
    padding: 0;
    margin: 0;
    background: linear-gradient(45deg, black, transparent);

    .card{
        border-radius: 1.5rem;
        box-shadow: 10px 10px 13px; //rgba(0,0,0,.2);
    }
    
    .maarif{
        padding-bottom: 1rem;
        height: 90%;
        //box-shadow: 1rem 1rem rgba(0,0,0,.3);
    }

    .saafir{
        padding-bottom: 3rem;
        height: 90%;
    }

    .bernosi{
        padding-bottom: 5rem;
        height: 90%;
    }
`;

export default RangerCardOneStc;