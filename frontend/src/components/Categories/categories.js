import React from "react";

const categories = (props) => {
    return (
        <div className={"table-responsive mt-5"}>
            <table className={"table table-striped text-center"}>
                <thead>
                <tr>
                    <th>Category</th>
                </tr>
                </thead>
                <tbody>
                {props.categories.map((term) => {
                    return (
                        <tr><td>{term}</td></tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}

export default categories;