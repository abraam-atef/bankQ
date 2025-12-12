import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import api from "./api"
import { Link } from "react-router-dom"
export default function Exam() {
    const { subject, num } = useParams()
    const [data, setData] = useState([])
    useEffect(() => {
        api.get(`/${subject}`).then(r => setData(r.data))
    }, [])

    const shuffle = (array) => {
        let arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    };

    const exam = shuffle(data).slice(0, num);


    return <div>
        <h1 className="text-center my-2">{subject.toUpperCase()} EXAM</h1>
        {exam.map((data, i) => { return <p key={i}>{i + 1}. {data.text}</p> })}
        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#answers" aria-expanded="false" aria-controls="collapseExample">
            show answers
        </button>
        <div className="collapse" id="answers">
            {exam.map((data, i) => { return <p key={i}>{i + 1}. {data.answer}</p> })}
        </div>
        
    </div>
}