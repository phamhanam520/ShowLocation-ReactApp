import React from "react";

export default Location = ({ coords }) => {
    const { latitude, longitude } = coords;
    const KEY = "AIzaSyC3r4cYivNbIducKrIS_ebFyZDTKrb5DrA";
    const coordsString = `${latitude},${longitude}`;
    const src = `https://www.google.com/maps/embed/v1/place?key=${KEY}&q=${coordsString}`
    return (
        <div>
            <iframe
                width="600"
                height="450"
                // style="border:0"
                loading="lazy"
                allowfullscreen
                referrerpolicy="no-referrer-when-downgrade"
                src={src}>
            </iframe>
        </div>
    )
}