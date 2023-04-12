import "./bb.css"
const BlockB = (props) => {
  return(
    <div className="BlockB">
       
        <h1>This is Block B</h1><br />
        <p className="pera">
        <input type="text" placeholder="Type somthing..." onChange={props.fnHandler} />
        

        </p>
    </div>
  )
}
export default BlockB;