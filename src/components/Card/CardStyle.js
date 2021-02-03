import styled from 'styled-components';

const handleColorType = color => {
  switch (color) {
    case "red":
      return "#ff1744";

    case "red-light":
      return "#ff616f";

    case "blue":
      return "#00b0ff";

    case "blue-light":
      return "#69e2ff";

    case "green":
      return "#00e676";

    case "green-light":
      return "#66ffa6";

    case "purple":
      return "#651fff";

    case "purple-light":
      return "#a255ff";

    default:
      return "#000000";
  }
};

const CardStyle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 5px;   
  background-color: ${({ color }) => handleColorType(color)};
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: 5px; /* 5px rounded corners */
`
CardStyle.Header = styled.header`
  display: flex;
  justify-content: center;
  color: ${({ color }) => handleColorType(color)};
  border-radius: 5px 5px 0 0;
`
CardStyle.Title = styled.div`
  flex: 1;
  padding: 5px;
  font-weight: bold;
`
CardStyle.Content = styled.div`
  padding: 20px;    
  background-color: ${({ color }) => handleColorType(color)};
  color: #000000;
  border-radius: 0 0 5px 5px; 
`


export default CardStyle;