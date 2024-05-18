import styles from "../Components/Buttons.module.css";

const Buttons = ({ handleOnClickEvent }) => {
  const buttons = ['AC', '()', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '⌦', '='];
  return (
    <>
      {buttons.map(i =>
        <button className={`${styles['button']}`} onClick={handleOnClickEvent}>{i}</button>
      )}
    </>
  )
}
export default Buttons;