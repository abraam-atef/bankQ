import { useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import api from "./api"

export default function Add() {
    const nav = useNavigate()
    const { subject } = useParams()
    const [text, setText] = useState("")
    const [answer, setAnswer] = useState("")
    const data = { text: text, answer: answer }
    const postFunc = (e) => {
        e.preventDefault()
        api.post(`/${subject}`, data).then(() => nav(`/${subject}`))
    }

    return <form onSubmit={postFunc}>
        <h1 className="p-4 text-center">Add {subject}</h1>
        <div className="form-floating my-4">
            <input type="text" className="form-control" onChange={e => setText(e.target.value)} id="text" placeholder="name@example.com" required />
            <label htmlFor="text">Text</label>
        </div>
        <div className="form-floating my-4">
            <input type="answer" className="form-control" onChange={e => setAnswer(e.target.value)} id="answer" placeholder="name@example.com" required />
            <label htmlFor="answer">Answer</label>
        </div>
        <div className="d-grid gap-2 my-2">
            <button className="btn btn-primary btn-lg" type="submit">Add Data</button>
        </div>
        <div style={{direction:"rtl"}} className="alert alert-info" role="alert">
            لو الاجابة اطول من اللازم يكفي كتابة رقم الصفحة فقط او اي شئ بسيط يدلل علي الاجابة
        </div>
        <div className="d-grid gap-2 my-2">
            <Link className="btn btn-outline-success btn-lg" to={`/${subject}`}>back</Link>
        </div>

    </form>
}