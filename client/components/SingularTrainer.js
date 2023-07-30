import React from "react";

const SingularTrainer = ({ trainer }) => {
    const { firstName, lastName, team, image } = pokemon;
    
    return (
        <div>
            <h2>{firstName} {lastName}</h2>
            <p>Team: {team}</p>
            <p>Pokemon: {pokemon}</p>
            <img src={image} alt={name} />
        </div>
    );
};

export default SingularTrainer;