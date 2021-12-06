import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const PastryCard = (props) => {
    const pastry = props.pastry;

    return(
        <div className="card-container">
            <img src="https://www.kingarthurbaking.com/sites/default/files/styles/featured_image_2x/public/recipe_legacy/4037-3-large.jpg?itok=JC3-ZcHc" alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/show-pastry/${pastry._id}`}>
                        { pastry.id }
                    </Link>
                </h2>
                <h3>{pastry.name}</h3>
                <p>{pastry.ppu}</p>
            </div>
        </div>
    )
};

export default PastryCard;