import styled from "styled-components";

const iconClose = require("../../assets/images/icon-close.png");

export const Wrapper = styled.div`
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
  text-transform: uppercase;  
`;

export const DeleteItem = styled.button`
  vertical-align: middle;
  background: url(${iconClose});
  background-size: cover;
  cursor: pointer;      
  width: 11px;
  height: 11px;
  padding: 0;
  border: none;
  margin-left: 6px;
`;
