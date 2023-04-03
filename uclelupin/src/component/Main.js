import { useState } from 'react';


function Main() {
    const [content, setContent] = useState([]);
    const [selectedContentIndex, setSelectedContentIndex] = useState(null);

    return (
        <section className="body-wrapper">
            <ul>

            </ul>
        </section>
    );
}

export default Main;
