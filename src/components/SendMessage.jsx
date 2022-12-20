import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import { auth, db } from '../firebase'


const style = {
    form: `h-14 w-full max-w-[728px] flex absolute bottom-0`,
    input: `w-full p-3 bg-gray-200 outline-none border-none`,
    button: `w-[20%] bg-gray-400 hover:bg-blue-500 hover:text-white`
}

const SendMessage = ({scroll}) => {

	const [input, setInput] = useState('');

	const sendMessage = async (e) => {
		e.preventDefault()
		if (input === '') {
			alert('Messages must be 1 or more characters')
			return
		}
		const {uid, displayName} = auth.currentUser
		await addDoc(collection(db, 'messages'), {
			text: input,
			name: displayName,
			uid,
			timestamp: serverTimestamp()
		})
		setInput('')
		scroll.current.scrollIntoView({behavior: 'smooth'})
	}

  return (
    <form onSubmit={sendMessage} className={style.form}>
			<input 
			onChange={(e) => setInput(e.target.value)}
			value={input} 
			className={style.input} 
			type='text' 
			placeholder='Enter Message' />
			<button className={style.button} type="submit">
					Send
			</button>
    </form>
  )
}

export default SendMessage;