import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom'
import './CommentModal.css'



const CommentModal = () => {


  const { id } = useParams()
  const [Modalİnfo, setModalİnfo] = useState([])

  const history = useHistory()




  const [Like, setLike] = useState("")
  const [Unlike, setUnlike] = useState("")
  const [save, setSave] = useState("")
  const [unSave, setUnsave] = useState("")

  const [Logged, setLogged] = useState()


  useEffect(() => {

    const GetModalPost = async () => {
      await axios.post('http://localhost:5000/ModalPost', { id }, { withCredentials: true }).then((response) => {
        setModalİnfo(response.data.result)
        setLogged(response.data.User)

      })
    }
    GetModalPost()
  }, [Like, Unlike, save, unSave])


  //Likes Request
  const LikePost = async (id) => {
    await axios.put('http://localhost:5000/likes', { id }, { withCredentials: true }).then((response) => {
      setLike(response)
    })
  }

  const Unlikes = async (id) => {
    await axios.put('http://localhost:5000/unlike', { id }, { withCredentials: true }).then((response) => {
      setUnlike(response)
    })
  }

  //save Request
  const SavePost = async (id) => {
    await axios.put('http://localhost:5000/save', { id }, { withCredentials: true }).then(response => {
      setSave(response.data)
    })
  }

  const UnSavePost = async (id) => {
    await axios.put('http://localhost:5000/unsave', { id }, { withCredentials: true }).then(response => {
      setUnsave(response.data)
    })
  }



  const ModalClose = (e) => {

    const ClassName = e.target.className

    if (ClassName === 'wrapper') {
      history.push('/')
      document.body.style.overflow = ""
    } else {
      return console.log('')
    }
  }


  return (
    <>
      {
        Modalİnfo.Userİnfo && <div onClick={(e) => ModalClose(e)} className='wrapper'>


          <div className='Modal'>
            <div className='Postİmg'>
              <img src={`http://localhost:5000/Uploads/img/${Modalİnfo.photo}`} alt="" />
            </div>

            <div className='PostComments'>
              <div className="LoggedUser">
                <div className='loggedAvatar'>
                  <img src={Modalİnfo.Userİnfo.ProfilePhoto} alt="" />
                  <Link to={`/User/${Modalİnfo.Userİnfo.userName}`} >
                    <p>{Modalİnfo.Userİnfo.userName}</p>
                  </Link>
                </div>
                <svg aria-label="Seçenekler" class="_8-yf5 " color="#262626" fill="#262626" height="32" role="img" viewBox="0 0 24 24" width="32"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6.5" cy="12" r="1.5"></circle><circle cx="17.5" cy="12" r="1.5"></circle></svg>
              </div>


              <div className='Comments'>

                {

                  Modalİnfo.comments.map(comment => (
                    <div className='User'>
                      <img src={comment.postedBy.Picture} alt="" />
                      <div className='CommentWrapper'>
                        <Link to={`/User/${comment.postedBy.userName}`}>{comment.postedBy.userName}</Link>
                        <div className='Comment'>{comment.text}</div>
                      </div>

                    </div>
                  ))

                }

                

              </div>


              <div className="CommentLikesWrapper">

                <div className='CommentLikes'>

                  <div>

                    {
                      Logged && Modalİnfo.likes.includes(Logged._id) ?

                        <button onClick={() => Unlikes(Modalİnfo._id)} ><svg aria-label="Beğenmekten Vazgeç" class="_8-yf5 " color="#ed4956" fill="#ed4956" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg></button>
                        :
                        <button onClick={() => LikePost(Modalİnfo._id)} > <svg aria-label="Beğen" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg></button>
                    }


                    <button> <svg aria-label="Yorum Yap" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path></svg></button>
                    <button> <svg aria-label="Gönderi Paylaş" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg></button>
                  </div>

                  <div>
                    {
                      Logged && Logged.saved.includes(Modalİnfo._id) ?
                        <button onClick={() => UnSavePost(Modalİnfo._id)} type="button"> <svg aria-label="Kaldır" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20 22a.999.999 0 01-.687-.273L12 14.815l-7.313 6.912A1 1 0 013 21V3a1 1 0 011-1h16a1 1 0 011 1v18a1 1 0 01-1 1z"></path></svg></button>
                        :
                        <button onClick={() => SavePost(Modalİnfo._id)} type="button"> <svg aria-label="Kaydet" class="_8-yf5 " color="#8e8e8e" fill="#8e8e8e" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg> </button>
                    }
                  </div>

                </div>

                <span className='likesPost'>{Modalİnfo.likes.length} Beğenme</span>

                <div className='commentİnp'>
                  <input type="text" placeholder="Yorum ekle..." />
                  <button>Paylaş</button>
                </div>


              </div>

            </div>

          </div>

        </div >
      }
    </>
  );
}

export default CommentModal;