import React, { useState, useEffect } from "react";
import axios from "axios";

const AllTrainers = () => {
    const [trainerList, setTrainerList] = useState([]);

    useEffect(() => {
        axios.get("/api/trainer"), then((response) => {
            setTrainerList(response.data);
        });
}, []);

return (
    <div>
        <h2>All Trainers</h2>
        <ul>
            {trainerListList.map((trainer) => (
                <li key = {trainer.id}>
                    <img src={trainer.image} alt = {trainer.firstName} />
                    {trainer.firstName} {trainer.lastName}
                </li>
            ))}
        </ul>
    </div>
);
 };

 export default AllTrainers;


