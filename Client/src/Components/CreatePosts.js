import React, { useState , useContext } from 'react'
import {DataProvider} from './CONTEXT'
//csss
import './styles/CreatePosts.css'

const CreatePosts = () => {

    const {CreatePost} = useContext(DataProvider)


    const [Title, setTitle] = useState("")
    const [Body, setbody] = useState("")
    const [Photo, setphoto] = useState("")


    const handlePost = async (e) => {
        e.preventDefault()

       await CreatePost(Title , Body , Photo)
    }


    return (
        <div className='CreatePosts'>

            <form>
                <div className="d-flex">
                    <input onChange={(e) => setTitle(e.target.value)} value={Title} type="text" className="form-control mt-2 pt-2 " required name="Title" placeholder="Title" />
                </div>
                <textarea onChange={(e) => setbody(e.target.value)} rows="10" value={Body} type="text" className="form-control mt-2 pt-2 " name="Body" placeholder="explanation" />

                <input type="file" name="photos"  accept="image/*" onChange={(e) => setphoto(e.target.files[0])} />

                <input type="submit" onClick={(e) => handlePost(e)} className="btn btn-warning mt-2 m-1" value="Add Post" />

            </form>


        </div>

    )
}

export default CreatePosts
