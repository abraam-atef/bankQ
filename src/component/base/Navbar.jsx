import { NavLink } from "react-router-dom"

export default function Navbar() {

    const routs = [
        {
            name:"Home",
            route:"/"
        },
        {
            name:"Fundamental",
            route:"/fundamentals"
        },
        {
            name:"Termo",
            route:"/termo"
        },
        {
            name:"Phisiology",
            route:"/phisiology"
        },
        {
            name:"Micro",
            route:"/micro"
        },
        {
            name:"Anatomy",
            route:"/anatomy"
        },
    ]


    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand">Study</a>
                <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        {routs.map((data,i)=>{return <li key={i} className="nav-item">
                            <NavLink className="nav-link" to={data.route}>{data.name}</NavLink>
                        </li>})}
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}