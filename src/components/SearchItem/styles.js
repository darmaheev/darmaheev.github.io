import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
  min-height: 200px;
  max-width: 500px;
  flex-direction: row;
  flex-wrap: wrap; 
  justify-content: center;
  background-color: #ffffff;
  margin: 8px 15px;
  border: 1px solid #f0f0f0;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  overflow: hidden;
  top: 0px;
  transition-property: top, box-shadow;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  z-index: 0;
  &:hover {
    top: -5px;
    box-shadow: 0px 25px 25px rgba(0, 0, 0, 0.326398);
  }  
`;

export const Photo = styled.div`
  align-self: center;
  width: 200px;
  height: 200px;
  background: url(${props => props.src}) no-repeat;
  background-size: cover;
`;

export const Info = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 25px;
  text-align: center;
`;

export const Title = styled.span`
  font-size: 18px;
  color: #202020;
  font-weight: 700;
  cursor: pointer;
  margin-bottom: 9px;
  text-transform: uppercase;
`;

export const Text = styled.span`
  font-size: 12px;
  line-height: 18px;
  color: #202020;
  font-weight: 400;
  margin-bottom: 15px;
`;

export const TagList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 27px;
  border-radius: 13px;
  background-color: rgba(31, 151, 201, 0.1);
  font-size: 12px;
  color: #1f97c9;
  font-weight: 400;
  padding: 8px 18px;
  margin-bottom: 8px;
  margin-right: 8px;
`;
