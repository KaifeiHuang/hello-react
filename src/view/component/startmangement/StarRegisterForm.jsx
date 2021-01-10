import React, { useState, useEffect} from 'react';

const StarRegisterForm = (props) => {

    const { starInfosData, setstarInfosData } = props

    const [name, setname] = useState("")
    const [number, setnumber] = useState("")
    const [job, setjob] = useState("")

    const handleInputChange1 = (event) => {
        setname([event.target.value])
    }

    const handleInputChange2 = (event) => {
        setnumber([event.target.value])
    }

    const handleInputChange3 = (event) => {
        setjob([event.target.value])
    }

    const addStarInfo = () => {
        let tmpStarInfo = {
            name: [name],
            number: [number],
            job: [job]
        }
        setstarInfosData([...starInfosData, tmpStarInfo])

    }

    useEffect(() => {
        console.log(`you input the content is ${name}`)
        return () => {
            console.log("cleanup")
        }
    }, [name])

    



    return <div id="StarRegisterForm">
        <table>
            <tbody>
                <tr>
                    <td>name:</td><td><input type="text" onChange={handleInputChange1} /></td>
                </tr>
                <tr>
                    <td>number:</td><td><input type="text" onChange={handleInputChange2} /></td>
                </tr>
                <tr>
                    <td>job:</td><td><input type="text" onChange={handleInputChange3} /></td>
                </tr>
                <tr>
                    <td></td><td><button onClick={addStarInfo}>Add</button></td>
                </tr>
            </tbody>

        </table>

        {/* 这里未使用form表单提交是因为表单的提交默认会刷新页面 */}
    </div>
}


export default StarRegisterForm



