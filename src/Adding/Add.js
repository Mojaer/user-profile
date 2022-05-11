import React from 'react';

const Add = (props) => {
    const data = props.data;

    let total =data.reduce((totalSalary,data) => totalSalary + Number(data.salary),0)

    const ConvertNumber=(num)=>{
        let finalNum = Number(num.toFixed(2));
        return finalNum;
    }

    return (
        <div>
                <h3>People Added: {data.length}</h3>
                <p>Total salary:{ConvertNumber(total)}</p>

        </div>
    );
};

export default Add;