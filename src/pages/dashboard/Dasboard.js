import React, { useState, useEffect } from "react";
import "./Dasboard.css";
import { getAllUsers, modifyUser } from '../../shared/services/crud-service';

function Dashboard() {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        // call api or anything
        console.log("loaded");
      
        getAllUsers().then(res => {
          console.log(res);
          setUsers(res.data);
        });
      }, []);
    
     const handleUpdate = () => {
        // 
        /**
         * @TODO:
         * Now once this handle update method gets called for a particular user, so take the "_id" from that loop for each user 
         * call the method of crud service "modifyUser" function to update the user details like "Role"
         * Now Only if the logged in user is a super Admin then only that update can happen which is already handled.
         * 
         * @description Data to be passed to crud service "modifyUser" function ->
         * Param 1 -> _id of that user for which the update button is clicked
         * Param 2 -> 
         * [
                {
                    "propName": "userRole.superAdmin / userRole.admin",
                    "propValue": true / false
                }
            ]
            
         */
     }
      
  return (
    <>
      <div className="dashboard-table-container">
        <table className="dashboard-table">
          <tr>
            <th className="dashboard-table-th">ID</th>
            <th className="dashboard-table-th">First Name</th>
            <th className="dashboard-table-th">Last Name</th>
            <th className="dashboard-table-th">Mobile Number</th>
            <th className="dashboard-table-th">EmailID</th>
            <th className="dashboard-table-th">Roles</th>
            <th className="dashboard-table-th">Action</th>
          </tr>
          {users.map((val, key) => {
            return (
              <tr key={key}>
                <td className="dashboard-table-td">{val._id}</td>
                <td className="dashboard-table-td">{val.lastName}</td>
                <td className="dashboard-table-td">{val.contactNumber}</td>
                <td className="dashboard-table-td">{val.email}</td>
                <td className="dashboard-table-td">
                    <label for="superadmin">Super Admin</label>
                    <input name="superadmin" type="checkbox" value={val.userRole.superAdmin}/>
                    <label for="admin">Admin</label>
                    <input name="admin" type="checkbox" value={val.userRole.admin}/>
                </td>
                <td className="dashboard-table-td">
                    <button class="action-button m-r-2">Update</button>
                    <button class="action-button">Delete</button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default Dashboard;
