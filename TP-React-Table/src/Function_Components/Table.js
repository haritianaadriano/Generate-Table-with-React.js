import React from "react";

const DATA= [
    {name: "Tiger Nixon", position:"System Architect", office:"Edinburgh", age:61, start_date:"2011/04/2", salary:"$320,000"},
    {name:"Garett Winters", position:"Accountant", office:"Tokyo", age:63, start_date:"2011/07/2", salary:"$390,00"},
    {name:"Ashton Cox", position:"Junior Technical Author", office:"San Francisco", age:66, start_date:"2009/01/15", salary:"$400,500"},
    {name:"Cedric Kelly", position:"Senior Javascript Developer", office:"Edinburgh", age:22, start_date:"2012/03/22", salary:"$650,120"},
    {name:"Airi Satou", position:"Accountant", office:"Tokyo", age:33, start_date:"2008/11/26", salary:"$250,500"},
    {name:"Brielle Williamson", position:"Integration Specialist", office:"New York", age:61, start_date:"2012/12/04",salary:"$280,400"},
    {name:"Herrod Chandler", position:"Sales Assitant", office:"San Francisco", age:59, start_date:"2012/08/05", salary:"$500,000"},
    {name:"Rhona Davidson", position:"Integration Specialist", office:"Tokyo", age:55, start_date:"2010/10/10", salary:"$620,000"},
    {name:"Colleen Hurst", position:"Javascript Developer", office:"San Francisco", age:39, start_date:"2009/09/15", salary:"$620,600"},
    {name:"Sonya Frost", position:"Software Engineer", office:"Edinburgh", age:23, start_date:"2008/12/16", salary:"$560,500"}
]

const DataTable=function (){
    return (
    <table className="table table-bordered">
        <thead>
            <tr className="table-light">
                <th scope="col">Name</th>
                <th scope="col">Position</th>
                <th scope="col">Office</th>
                <th scope="col">age</th>
                <th scope="col">Start date</th>
                <th scope="col">Salary</th>
            </tr>
        </thead>
        <tbody>
            <td className="table-light">
                {DATA.map(data => (<tr>{data.name}</tr>))}
            </td>
            <td className="table-light">
                {DATA.map(data => (<tr>{data.position}</tr>))}
            </td>
            <td className="table-light">
                {DATA.map(data => (<tr>{data.office}</tr>))}
            </td>
            <td className="table-light">
                {DATA.map(data => (<tr>{data.age}</tr>))}
            </td>
            <td className="table-light">
                {DATA.map(data => (<tr>{data.start_date}</tr>))}
            </td>
            <td className="table-light">
                {DATA.map(data => (<tr>{data.salary}</tr>))}
            </td>
        </tbody>
    </table>
    )
}

export default DataTable;