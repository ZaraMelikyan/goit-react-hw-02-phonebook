import styled from 'styled-components';


export const StyledContactForm = styled.form`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 15px;
  padding: 15px;
  border: 1px solid #d4d4d4;

   @media screen and (min-width: 768px) {
    width: 350px;
  }
  `


export const StyledFormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  color: #333232;
  `
  


export const StyledFormInput = styled.input`
  padding: 11px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;

  :focus {
    outline: transparent;
    border: 1px solid #2196f3;
  }
`
  

export const StyledFormButtonWrapper = styled.div`
 text-align: center;
`

export const StyledFormButton = styled.button `
  min-width: 150px;
  height: 40px;
  border: 0px solid transparent;
  border-radius: 4px;

  color: #fff;
  background-color: #2196f3;

  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);

  opacity: 1;

  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;

  :hover,
  :focus {
    opacity: 0.8;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`