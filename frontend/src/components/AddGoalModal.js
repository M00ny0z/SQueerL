import React from 'react'
import { useFormik } from 'formik';

function AddGoalModal() {
    const formik = useFormik({
        initialValues: {
          goalName: '',
          checkFrequency: '',
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
      return (
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="goalName">Goal Name:</label>
          <input
            id="goalName"
            name="goalName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.goalName}
          />
          <label htmlFor="checkFrequency">Check-in Frequency:</label>
          <select 
            id="checkFrequency" 
            name="checkFrequency" 
            onChange={formik.handleChange}>
                <option value="onceDay">Once a day</option>
                <option value="onceWeek">Once a week</option>
                <option value="everyOtherDay">Every other day</option>
          </select>

          <button type="submit">Submit</button>
        </form>
      );
}

export default AddGoalModal
