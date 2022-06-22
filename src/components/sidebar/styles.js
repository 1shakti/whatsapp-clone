import styled from "styled-components";

export const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
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

export const Main = styled.div`
    flex: 1;
    background-color: white;
    overflow: scroll;
`;

export const CardContainer = styled.div`
    display: flex; 
    padding: 20px;
    cursor: pointer;
    border-bottom: 1px solid #f6f6f6;  
    &:hover {
    background-color: #ebebeb;
    }

    .user-details {
        margin-left: 15px;
    }

    .user-details > h2{
        font-size: 16px;
        margin-bottom: 8px;   
    }
`;



