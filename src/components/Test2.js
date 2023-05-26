import React, { useState } from 'react'

function Test2() {

    let js=['react','angular','vue'];
    let java=['servlet','jsp','spring'];

    let [selectedTech,setSelectedTech]=useState([])
    let [skill,setSkill]=useState({
        technology:"",
        subtechnology:""
    })

    function handleSelection(e){
        if(e.target.value==='javascript'){
            setSelectedTech(js)
        }   
        else{
            setSelectedTech(java)
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        
    }

    console.log(selectedTech)
  return (
    <div>

        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <input type="radio" name="tech" id="js" value="javascript" onChange={handleSelection}/>
                <label htmlFor="js">JavaSCript</label>
            </div>
            <div className="mb-3">
                <input type="radio" name="tech" id="java" value="java" onChange={handleSelection}/>
                <label htmlFor="java">Java</label>
            </div>
            <select name="" id="">
                {
                    selectedTech.map((tech,ind)=><option key={ind}>{tech}</option>)
                }
            </select>
        </form>
    </div>
  )
}

export default Test2