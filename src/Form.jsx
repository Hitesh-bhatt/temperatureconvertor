import React, { useState } from "react";

const Form = () => {
  const [Data, SetFullData] = useState({
    Name: "",
    FullName: "",
    Mob: "",
    Email: "",
  });

  const HandleChange = (e) => {
    const {name,value} = e.target;
    SetFullData((prevData)=>({
         ...prevData,
         [name]:value   
    }));
    
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(Data)
  };
  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" name="Name" value={Data.Name} onChange={HandleChange} />
        </div>
        <div>
          <label>FullName: </label>
          <input type="text" name="FullName" value={Data.FullName}  onChange={HandleChange}/>
        </div>
        <div>
          <label>Mob: </label>
          <input type="text" name="Mob" value={Data.Mob}  onChange={HandleChange}/>
        </div>
        <div>
          <label>Email: </label>
          <input type="text" name="Email" value={Data.Email}  onChange={HandleChange}/>
        </div>
        <button onClick={HandleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
