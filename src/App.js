import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
    const [people, setPeople] = useState(data);
    const [value, setValue] = useState(0);
    const next = () => {
        if (value === people.length - 1) {
            setValue(0);
        } else setValue(value + 1);
    };
    useEffect(() => {
        setTimeout(() => {
            next();
        }, 3000);
    });

    const { id, image, name, quote, title } = people[value];
    return (
        <div className="section-center">
            <article key={id}>
                <img src={image} alt={name} className="person-img" />
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="text">{quote}</p>
                <FaQuoteRight className="icon" />
            </article>
        </div>
    );
    // <section className="section">
    //     <div key={id} className="title">
    //         <h2>
    //             <span>/</span>Reviews
    //         </h2>
    //         <div className="section-center">

    //         </div>
    //         <img className="person-img" src={image} alt={name} />
    //         <h3>{name}</h3>
    //         <h4 className="title">{title}</h4>
    //         <p>{quote}</p>
    //     </div>
    // </section>
}

export default App;
