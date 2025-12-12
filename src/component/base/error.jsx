

export default function Error(){
    return (
        <div className="contaner d-flex justify-content-center align-items-center" style={{ height : "90vh" }}>
            <div>
                <h1 className="text-center">we cant response your request</h1>
                <li className="mx-5">maybe you put a value biger than the relate value</li>
                <li className="mx-5">maybe you didnot put any value</li>
            </div>
            
        </div>
    )
}