import React, { useState } from 'react'
import studentdata from './studentdata'
import Profile from './Profile'

function Studentclass() {
    const [students, setStudent] = useState(studentdata)

    return (
        <div>
            <h2 className='myheading' shadow>Welcome to Alabian Students World!</h2>

            <div>
                <div className='container'>
                    <div className='row gy-4 justify-content-center'>
                        {
                            students.map((item) => {
                                return (
                                    <Profile item={item} />
                                )
                            })
                        }
                    </div>

                </div>
            </div>
            <div className=' newrow row justify-content-center'>
                
                    <button class='btn' onClick={() => setStudent([])}>Clear Data</button>
                
            </div>

        </div>
    )
}

export default Studentclass