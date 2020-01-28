const Auxillary = (props) => props.children;

export default Auxillary;

/* Allows us to have adjacent JSX code in our components. This does nothing but tell us to accept and render
  anything in between aka it's children. Acts as a wrapper. It does not create another Div in the root. However,
  one can use <React.Fragment> or <> </> to achieve the same effect.
  */