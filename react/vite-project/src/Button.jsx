function Button(){
    
    // this would be inline JS styling
    // evades class naming conflicts
    // good for components with little styling, like buttons
    const styles = {
  
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding:"10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }

    
    return(<button style={styles}>Click Me</button>);
}

export default Button;