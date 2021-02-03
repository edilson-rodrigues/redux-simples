
import Card from './components/Card/'
import AppStyle from './AppStyle'
import Intervalo from './components/Intervalo'

const card_color = {
  red: "red",
  blue: "blue",
  green: "green",
  purple: "purple"
}


const App = () => (
  <AppStyle>
    <AppStyle.Title>
      Exercício React-Redux (Simples)
    </AppStyle.Title>
    <AppStyle.Row>
      <Intervalo />
    </AppStyle.Row>
    <AppStyle.Row>
      <Card title="Card 2" color={card_color.blue}>Y</Card>
      <Card title="Card 3" color={card_color.green}>X</Card>
      <Card title="Card 4" color={card_color.purple}>Y</Card>
    </AppStyle.Row>
  </AppStyle>
);


export default App;
