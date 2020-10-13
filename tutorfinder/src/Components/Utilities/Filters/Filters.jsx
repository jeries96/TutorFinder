import React from 'react' 

import Select from 'react-select';
import './Filters.css'
function Filters(props) {
    const lessonAreaOptions = [
        { value: "online", label: "אונליין" },
        { value: "campus", label: "בקאמפוס" },
        { value: "studentHome", label: "בית/מקום אחר" }
      ]
      const teacherGenderOptions = [
        { value: "male", label: "זכר" },
        { value: "female", label: "נקבה" },
      ]
      const sortOptions = [
        { value: "nearest", label: "הכי קרובים" },
        { value: "mostReviews", label: "הכי טובים" },
      ]


    return (<div>
                    <Select options={lessonAreaOptions} className="filter__option"/>
                    <Select options={teacherGenderOptions} className="filter__option"/>
                    <Select options={sortOptions} className="filter__option"/>

            </div>
            )
}

export default Filters;