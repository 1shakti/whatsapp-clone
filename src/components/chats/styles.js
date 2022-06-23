import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    flex: 0.65;
`;

export const ChatHeader = styled.div`
    padding: 20px 20px 14px 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid lightgray;

    .chat__headerinfo {
        flex: 1;
        padding-left: 20px;
    }

    .chat__headerinfo > h3 {
        margin-bottom: 3px;
        font-weight: 500;
    }

    .chat__headerinfo > p{
        color: gray;
    }

    .chat__headeright {
        display: flex;
        justify-content: space-between;   
        min-width: 100px;  
    }
`;

export const Chatsection = styled.div`
    flex: 1;
    background-image: url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png");
    background-repeat: repeat;
    background-position: center;
    padding: 30px;
    overflow: scroll;
`;

export const Message = styled.p`
    position: relative;
    padding: 10px;
    font-size: 16px;
    background-color: white;
    border-radius: 10px;
    margin-bottom: 30px;
    width: fit-content;
    &{
        background-color: #dcf8c6;
        margin-left: auto;
     }
        

    .chat__name {
        font-weight: 800;
        position: absolute;
        top: -15px;
        font-size: xx-small;
    }

    .chat__timestamp {
        margin-left: 10px;
        font-size: xx-small;
    }

`;
