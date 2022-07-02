const Confirmation = (props) => (
  <>
    <span>Confirmation is rendering!</span><br/>
    <form onSubmit={props.purchaseButtonHandler}>
      <input type="submit" value="Purchase"></input>
    </form>
  </>
)

export default Confirmation;