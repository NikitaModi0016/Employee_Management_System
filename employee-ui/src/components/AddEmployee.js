import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import EmployeeService from '../services/EmployeeService';


function AddEmployee() {

    const [employee, setEmployee] = useState({
        id: "",
        firstName: "",
        lastName: "",
        emailId: "",
    });

    const navigaye = useNavigate();

    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({ ...employee, [e.target.name]: value });
    };

    const saveEmployee = (e) => {
        e.preventDefault();
        EmployeeService.saveEmployee(employee)
            .then((response) => {
                console.log(response);
                navigaye("/employeeList");

            })
            .catch((error) => {
                console.log(error);
            });
    };
    const reset = (e) => {
        e.preventDefault();
        setEmployee({
            id: "",
            firstName: "",
            lastName: "",
            emailId: "",
        });
    };

    return (
        <div className="flex max-w-2xl mx-auto mt-2 shadow border-b rounded-b-xl justify-center bg-[#C1DAD6]">
            <div className="px-8 py-8">
                <div className="font-semibold text-2xl tracking-wider">
                    <h1  >Add New Employee</h1>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className=" font-semibold">First Name:</label>
                    <input
                        className="rounded h-8 w-80 border-2 mt-2 ml-4 px-2 py-2"
                        type="text"
                        name="firstName"
                        value={employee.firstName}
                        onChange={(e) => handleChange(e)}
                        placeholder='Enter the first name' required></input>
                </div>

                <div className="items-center justify-center h-14 w-full my-4">
                    <label className=" font-semibold ">Last Name:</label>
                    <input className="rounded h-8 w-80 border-2 mt-2 ml-4 px-2 py-2"
                        type="text"
                        name="lastName"
                        value={employee.lastName}
                        onChange={(e) => handleChange(e)}
                        placeholder='Enter the last name' required></input>
                </div>

                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="  font-semibold">Email ID:</label>
                    <input className="rounded h-8 w-80 border-2 mt-2 ml-4 px-2 py-2"
                        type="email"
                        name="emailId"
                        value={employee.emailId}
                        onChange={(e) => handleChange(e)}
                        placeholder='Enter the email' required></input>
                </div>

                <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                    <button
                        onClick={saveEmployee}
                        className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6">
                        Save
                    </button>
                    <button
                        onClick={reset}
                        className="rounded text-white font-semibold bg-[#F64A8A] hover:bg-[#DE3163] py-2 px-6">
                        Clear
                    </button>
                </div>


            </div>
        </div>
    )
}

export default AddEmployee
