import React from 'react'

function Profile({ item }) {
    return (
        <div class="col-md-4">
        <div class="card">
            <div class="card-body">
                <img src={item.photo} alt="" width={300} height={250}/>
                <p class="card-text"><h5 style={{ marginRight: "10px" }}>Name:</h5>{item.name}</p>
                <p class="card-text"><h5 style={{ marginRight: "10px" }}>Matric No:</h5> {item.matric}</p>
                <p class="card-text"><h5 style={{ marginRight: "10px" }}>Department:</h5> {item.department}</p>
                <p class="card-text"><h5 style={{ marginRight: "10px" }}>Faculty:</h5> {item.faculty}</p>
            </div>
            </div>
        </div>
    )
}

export default Profile


