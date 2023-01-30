import styled from 'styled-components';



export const Container = styled.div
`display: flex;
justify-content: center;
gap: 12px;
align-items: center;
`;

 export const Button = styled.button
 `font-weight: 500;
 font-size: 22px;
 line-height: 1.18;
 width: 100px;
 border-radius: 5px;
padding: 10px 5px;
cursor: pointer;
background-color: rgb(48, 213, 200);
&:hover {
  color: #fff;
}
 `
