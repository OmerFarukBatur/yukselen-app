import React from 'react'

function Kapha() {
    return (
        <>

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th colSpan="3" style={{ backgroundColor: "#efd780" }}>
                            <h3>KAPHA</h3>
                        </th>
                        <th>&nbsp;&nbsp;&nbsp;&nbsp;ASLA&nbsp;&nbsp;&nbsp;&nbsp;</th>
                        <th>&nbsp;&nbsp;&nbsp;BAZEN&nbsp;&nbsp;&nbsp;</th>
                        <th>SIKLIKLA</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowSpan="11" style={{ backgroundColor: "#efd780" }}>
                            <h3>&nbsp;&nbsp;&nbsp;ZİHİN&nbsp;&nbsp;&nbsp;</h3>
                        </td>

                    </tr>

                    {/* @foreach (var item in ViewData["form4Zihin"] as IEnumerable<Yukselen.EntityLayer.Entities.Question>)

                                {
                                    @if (i == 11)
                                    {
                                        i = 1;
                                    }*/}

                    <tr>
                        <td>1</td>
                        <td id="id" style={{ textAlign: "left", paddingLeft: "20" }}>soru</td>
                        <td>
                            <input id="id" type="radio" value="1" className="checkbox" name="name" />

                        </td>
                        <td>
                            <input id="id" type="radio" value="3" className="checkbox" name="name" />

                        </td>
                        <td>
                            <input id="id" type="radio" value="5" className="checkbox" name="name" />

                        </td>
                    </tr>

                    {/*  } */}

                </tbody>
                <tbody>
                    <tr>
                        <td rowSpan="11" style={{ backgroundColor: "beige" }} >
                            <h3>&nbsp;&nbsp;&nbsp;BEDEN&nbsp;&nbsp;&nbsp;</h3>
                        </td>

                    </tr>

                    {/* @foreach (var item in ViewData["form4Beden"] as IEnumerable<Yukselen.EntityLayer.Entities.Question>)

                                { 
                                    @if (i == 11)
                                    {
                                        i = 1;
                                    }*/}

                    <tr>
                        <td>1</td>
                        <td id="id" style={{ textAlign: "left", paddingLeft: "20" }}>soru</td>
                        <td>
                            <input id="id" type="radio" value="1" className="checkbox" name="name" />

                        </td>
                        <td>
                            <input id="id" type="radio" value="3" className="checkbox" name="name" />

                        </td>
                        <td>
                            <input id="id" type="radio" value="5" className="checkbox" name="name" />

                        </td>
                    </tr>
                    {/* i += 1;
                                    
                                 } */}

                </tbody>
            </table>

        </>
    )
}

export default Kapha
