import List from './List.jsx'

function App() {
  const fruits = [{id:1, name:"apple", calories:95}, 
                  {id:2, name:"orange", calories:45}, 
                  {id:3, name:"banana", calories:105}, 
                  {id:4, name:"coconut", calories:159}, 
                  {id:5, name:"pineapple", calories:97}];

  const vegetablges = [{id:6, name:"potato", calories:95}, 
                    {id:7, name:"tomato", calories:45}, 
                    {id:8, name:"cauliflower", calories:105}, 
                    {id:9, name:"cabbage", calories:159}, 
                    {id:10, name:"chillie", calories:97}];
  return (
    <>
    {fruits.length>0 && <List items= {fruits} category="Fruits"></List>}
    {vegetablges.length>0 && <List items= {vegetablges} category="Vegetables"></List>}

    </>
  )
}

export default App
