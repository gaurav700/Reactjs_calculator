import styles from "../Components/Input.module.css";
const Input = ({ calval }) => {
  return (
    <>
      <textarea type="text" className={`${styles['input-tag']}`} value={calval} readOnly />
    </>
  )
}
export default Input;