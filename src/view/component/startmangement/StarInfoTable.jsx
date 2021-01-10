import React, { useState } from 'react';


const StarInfoTable = (props) => {

    const { starInfosData, setstarInfosData } = props

    return <div id="StarInfoTable">
        <table>
            <thead >
                <tr id="starthead">
                    <td>Name</td>
                    <td>number</td>
                    <td>job</td>
                </tr>
            </thead>
            
            <tbody>
                {starInfosData.map(starInfo => {
                    return <tr>
                        <td>{starInfo.name}</td>
                        <td>{starInfo.number}</td>
                        <td>{starInfo.job}</td>
                    </tr>
                })}

            </tbody>
        </table>
    </div>

}

export default StarInfoTable