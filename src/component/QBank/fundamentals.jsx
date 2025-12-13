import { useEffect, useState } from "react"
import api from "../api"
import { Link } from "react-router-dom"
export default function Fundamentals() {
    const [data, setData] = useState([])
    const [num, setNum] = useState(0)
    const env = "fundamentals"
    useEffect(() => {
        api.get(`/${env}`).then(r => setData(r.data))
    }, [])
    return <div>
        <h1 className="p-4 text-center">Fundamentals</h1>
        {data.map((data, i) => { return <p key={i}>{i + 1}. {data.text}</p> })}
        <div className="collapse" id="answers">
            {data.map((data, i) => { return <p key={i}>{i + 1}. {data.answer}</p> })}
        </div>
        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#answers" aria-expanded="false" aria-controls="collapseExample">
            show answers
        </button>
        <div className="input-group mb-3 fixed-bottom container">
            <Link to={`/add/${env}`} className="btn col-3 btn-primary btn-lg">Add</Link>
            <Link to={num === "" ? "/error":num <= 0 ?"/error" : num > data.length ? "/error":`/${env}/exam/${num}`}
             className="btn col-3 btn-danger btn-lg">Exam</Link>
            <input type="number" onChange={e=>setNum(e.target.value)} className="form-control-lg form-control" placeholder="" aria-label="Example text with two button addons"/>
        </div>
    </div>
}