// create your App component here
import React, { useEffect, useState } from "react"

function App() {
    const [dog, setDog] = useState("")
    
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(r => r.json())
            .then(dog => {
                setDog(dog.message)
            })
    }, [])
    
    if (!dog) {
        return <p>Loading...</p>
    }

    return (
        <img src={dog} alt="A Random Dog" />
    )
}

export default App;