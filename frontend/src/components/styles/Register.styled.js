import styled from 'styled-components'

export const StyledRegister = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 10px 0;
  padding: 50px;
  flex-direction: ${({ layout }) => layout || 'row'};

  img {
    width:  100%;
  }

  label {
    color: #000;
    font-family: 'Poppins', sans-serif;
    
  }

  & > div {
    flex: 2;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`