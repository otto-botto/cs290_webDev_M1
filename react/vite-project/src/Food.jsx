function Food(){
    // if using JS outside the return, don't need {}
    // if using JS inside return, need {}

    const food1 = "Cabbage";
    const food2 = "Tomato";
    
    return(
        <ul>
            <li>Cheese</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>

    );


}

export default Food