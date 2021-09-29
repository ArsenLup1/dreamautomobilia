import styled from "styled-components";

const BoutonStc = styled.button`
    background-color: #2162be !important;
    border: 2px solid #2162be!important;
    padding: 13px 25px 13px 30px!important;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    transition: background-color .4s;
    line-height: 1;
    border-radius: 40px;
    color:#fff !important;
    border-radius:40px;
    font-size:14px;
    font-size: 13px;
    font-weight: 600;

    &:hover
    {
        background-color:#fff !important;
        color:#2162be !important;
    }

    svg 
    {
        font-size: 25px;
        margin-left: 20px;
    }
`;

export default BoutonStc;