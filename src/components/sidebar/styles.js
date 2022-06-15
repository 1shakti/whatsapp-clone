import styled from "styled-components";

export const SidebarContainer = styled.div`
    flex: 0.35;
`;

export const SideHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border: 1px solid lightgrey;
`;

export const SideHeaderRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 10vw;

    .MuiSvgIcon-root {
        margin-rigth: 2vw;
        font-size:  24px !important;
    }
`;

export const SideSearch = styled.div`
    display: flex;
    align-items: center;
    background-color: #f6f6f6;
    height: 39px;
    padding: 10px;
`;

export const SideMain =  styled.div``;


export const SideInputContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    width: 100%;
    height: 35px;
    border-radius: 20px;

    input {
        border: none;
        margin-left: 10px;
    }

    .MuiSvgIcon-root {
        color: grey;
        padding: 10px;
    }
`;

export const Card =  styled.div`
    flex: 1;
    background-color: blue;
`;

export const CardContainer = styled.div`

`;
