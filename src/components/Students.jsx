import React from 'react'

function Students({name, subject, marks, id, students, setStudents}) {
  

  function onDelete(){
    fetch(`http://localhost:3000/studentsData/${id}`, {
      method: 'DELETE',
      headers:{
      'Content-Type':'application/json'
      }
    })

    .then((res)=> res.json())
    .then(()=> { 
      let deletedStudents= students.filter(student => student.id !== id)
      setStudents(deletedStudents)
    })
    
  
   }  
   return (
    <div>
      <h1>Student Data</h1>
      <p>name: {name}</p>
      <p>subject: {subject}</p>
      <p>marks: {marks}</p>

< button onClick={onDelete}>Delete</button>



    </div>
  )
}

export default Students;
