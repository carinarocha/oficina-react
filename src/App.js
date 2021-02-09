import logo from './logo.svg';
import './App.css';
import User from './components/Users';

const users = [
  {
    name: 'Isa',
    description: 'Cupcake ipsum dolor sit amet bonbon cake jelly beans caramels. Marshmallow danish I love cookie bonbon. Chocolate marzipan topping brownie croissant pastry carrot cake tiramisu. Candy canes candy canes I love oat cake cotton candy. Cookie chocolate cake chocolate bar I love ice cream. Lollipop marzipan jelly. Ice cream cookie soufflé topping.',
    //url: 'https://avatars.githubusercontent.com/u/32148199?s=460&u=8e7774ef0fa6754948175fd964254563b32f4b7a&v=4'
  },
  {
    name: 'Cintia',
    description: 'Cupcake ipsum dolor sit amet. Carrot cake icing topping. Wafer I love jelly beans cotton candy gingerbread. Sweet jelly-o muffin cookie pastry. Topping donut liquorice ice cream cake. I love danish donut chocolate cake. Bear claw marshmallow pastry pudding. Powder jelly beans chocolate cake pastry candy I love I love tart I love. Gingerbread jelly-o cupcake chocolate bar sweet donut ice cream liquorice.'
  },
  {
    name: 'Moni',
    description: 'Cupcake ipsum dolor sit amet I love oat cake. Gingerbread carrot cake sweet. Gummies I love bear claw. Brownie danish brownie jelly beans. Jelly-o soufflé chupa chups tootsie roll cake tootsie roll powder chocolate bar. I love gummies jelly I love I love pudding fruitcake biscuit cake.'
  }
];
// mudar a forma para trazer a imagem na tela : <User name={users[0].name} description={users[0].description} url={users[0].url}/>
function App() {
  return (
    <div className="App">
      <User name={users[0].name} description={users[0].description}/>
      <User name={users[1].name} description={users[1].description}/>
      <User name={users[2].name} description={users[2].description}/>
    </div>
  );
}

export default App;
