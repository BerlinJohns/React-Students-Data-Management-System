import React from 'react'
import serStudents from './serStudents'

function searchResult({searchResults}) {
    const results=searchResult.map(<serStudents key={students.id} students={students}/>)

    const constents=results?.length?results:<h1>No Matching data</h1>
        
        
  return (
    <div>searchResult</div>
  )
}

export default searchResult