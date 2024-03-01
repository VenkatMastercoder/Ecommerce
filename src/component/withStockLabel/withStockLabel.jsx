const withStockLabel = (ProductCard) => {
  // eslint-disable-next-line react/display-name
  return (Props) => {
    return (
      <>
        <div>
          <label>IN STOCK</label>
          <ProductCard {...Props} />
        </div>
      </>
    );
  };
};

/* What is A Function Component 
  - ITS Normal JS Function with Returns a Jsx  

  What is A High Order Component 
  - ITS Normal JS Function With Return a Component

  - Input Prop - Component => Return a New Component [ HOC ]
*/

export default withStockLabel;
