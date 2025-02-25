import PropTypes from 'prop-types';

function List(props){
    

        // fruits.sort((a,b)=> a.name.localeCompare(b.name)); //ALPHABETICAL
        // fruits.sort((a,b)=> b.name.localeCompare(a.name)); //Reverse ALPHABETICAL
        // fruits.sort((a,b)=> a.calories - b.calories); //Numeric
        // fruits.sort((a,b)=> b.calories - a.calories); //Reverse Numeric

        // const lowCalFruits = fruits.filter(fruit => fruit.calories <100);
        // const highCalFruits = fruits.filter(fruit => fruit.calories >100);

    const { items =[], category= "Category"} = props;

    const listItems = items.map(item => <li key={item.id}>
        {item.name}:&nbsp; 
        <b>{item.calories}</b>
        </li>);

    return(<>
    <h3 className="list-category">{category}</h3>
    <ol className="list-items">{listItems}</ol>
    </>);
}
List.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        calories: PropTypes.number.isRequired,
      })
    ), // Ensures `items` is an array of objects with id, name, and calories
    category: PropTypes.string, // Ensures `category` is a string
  };
export default List