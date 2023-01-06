import styled from 'styled-components';

export const Board = styled.div`
  padding: 16px;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  header {
    padding: 8px;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  width: 100%;

  button {
    align-items: center;
    background: #fff;
    border: 1px solid rgba(204, 204, 204, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 128px;
    gap: 4px;
    border-radius: 8px;
    width: 100%;

    strong {
      font-weight: 500;
    }

    span {
      font-size: 14px;
      color: #666;
    }

    & + button {
      margin-top: 24px;
    }
  }


`;
