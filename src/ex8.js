// Define the Car component
const Car = (props) => {
    return (
      <div>
        <h1>Car Details</h1>
        <p>Brand: {props.brand}</p>
        <p>Model: {props.model}</p>
      </div>
    );
  };
  
  // Define the App component
  const Ex8 = () => {
    // Example JSON data for a car
    const carData = {
      brand: "Toyota",
      model: "Corolla"
    };
  
    return (
      <div>
        <Car brand={carData.brand} model={carData.model} />
      </div>
    );
  };
  
  export default Ex8;