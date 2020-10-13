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


    return (<div className="Filters-Container__wrapper">
                    <div className="Filter__wrapper">
                      <p> מקום</p>
                    <Select options={lessonAreaOptions} className="filter__option"/>
                    </div>
                    <div className="Filter__wrapper">
                      <p> מין</p>
                    <Select options={teacherGenderOptions} className="filter__option"/>
                    </div>
                    <div className="Filter__wrapper">
                      <p> :סנן לפי </p>
                    <Select options={sortOptions} className="filter__option"/>
                    </div>
            </div>
            )
}

export default Filters;