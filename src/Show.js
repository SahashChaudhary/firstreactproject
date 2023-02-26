import React from "react";

const Show = () => {
    const arr = ['Apple', 'Mango', 'Banana']
    return (
        <>
            {
                arr.map((item, id) => {
                    console.log(item)
                    return <a href="#" >{item}</a>
                })
            }
        </>
    )
}
export default Show