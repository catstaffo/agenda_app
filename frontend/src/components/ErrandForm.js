
const ErrandForm = ({createErrand, name, handleInputChange}) => {
  return (
    <form className="errand-form" onSubmit={createErrand}>
      <input
      type="text"
      placeholder="Add an errand"
      name="name"
      value={name}
      onChange={handleInputChange} />
      <button type="submit">Add</button>
    </form>
  )
}

export default ErrandForm