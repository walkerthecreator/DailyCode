import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from "@uiw/codemirror-theme-vscode";


const Submission = () => {
    const [ formData , setFormData ] = React.useState({ username : "" , language : ""  , stdin : "" }) 
    const [code , setCode] = React.useState("//Enter your Code here")
    const router = useNavigate()

    const input = "border border-zinc-200 px-2 p-1 rounded-md shadow"

    function handleChange(e){
      const { value , name } = e.target
      setFormData((prev) => ({
        ...prev ,
        [name] : value
        }))
    }

    async function handleSubmit(e){
        e.preventDefault()
        const response = await axios.post('http://localhost:4000/add-new-submission' , {...formData , code : code } )
        const data  = response.data 
        console.log(data)
        router('/view')
      }

  return (
    <>
    <h1 className='text-5xl font-semibold my-6 text-center'>Playground</h1>
    <div className='flex flex-col md:flex-row gap-10'>

        <div className='w-full md:w-3/5 rounded-lg overflow-hidden '>
          
          <CodeMirror
            value={code}
            height='400px'
            theme={vscodeDark}
            onChange={(e) => { setCode(e) }}
          />
          </div>


        <form className='flex flex-col w-full md:w-1/3 mx-auto gap-4' onSubmit={handleSubmit}>
            <input type="text" className={input} name='username' onChange={handleChange} placeholder='Enter Username' required/>
            <select name="language" className={input} onChange={handleChange} required>
                <option >select your prefered language</option>
                <option value="c++">C++</option>
                <option value="python">Python</option>
                <option value="javscript">Javascript</option>
                <option value="java">Java</option>
            </select>
            <input type="text" className={input} name='stdin' placeholder='stdin' onChange={handleChange} />
            <button type='submit' className='bg-red-500 p-1 rounded-md text-red-50 hover:bg-red-600 transition-colors font-medium w-full mx-auto'>Submit</button>
        </form>
    </div>
    </>
  )
}

export default Submission