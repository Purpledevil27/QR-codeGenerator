import { useState, useRef, useEffect } from 'react'
import Img from './../assets/images/home-img.png'
import Spinner from '../assets/images/pre.svg'
import QRCode from 'qrcode'

const Main = () => {
    const [url, setURL] = useState('')
    const [size, setSize] = useState('300')
    const [show, setShow] = useState(false)
    const [qr, setQR] = useState('')

    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        console.log(qr)
        scrollToBottom()
    }, [qr]);

    const generateQRCode = (e) => {
        e.preventDefault()
        setShow(true)
        setTimeout(() => {
            setShow(false)
            QRCode.toDataURL(url, {
                width: size,
                height: size
            }, (err, url) => {
                if (err) {
                    console.log(err)
                }
                else {
                    setQR(url)
                }
            })
        }, 500);
        setURL('')
        setSize('300')
    }

    return (
        <main>
            <div className="flex flex-col-reverse align-center justify-center p-10 m-auto md:max-w-4xl md:flex-row">
                <div className="w-full md:w-2/3 mr-24">
                    {/* <h1 className='text-5xl mb-5 md:text-4xl text-white'></h1> */}
                    <p className='mb-4 text-white font-bold text-0.5xl'>
                        <span className='text-blue-400'>QR Code</span> allow smartphone users to access your website simply and quickly.
                    </p>
                    <p className='text-white font-bold text-0.5xl'>
                        Enter your URL below to generate a QR Code and download the image.
                    </p>
                    <form id='generate-form' className='mt-4' onSubmit={generateQRCode}>
                        <input id='url' type='text' placeholder='Enter a URL' className='w-full border-2 border-gray-200 rounded p-3 text-gray-dark mr-2 focus:outline-none mb-5' autoComplete='off' value={url} onChange={(e) => setURL(e.target.value)} required />
                        <select id='size' className='w-full border-2 border-gray-200 rounded p-3 text-gray-dark mr-2 focus:outline-none' value={size} onChange={(e) => setSize(e.target.value)}>
                            <option value="100">100x100</option>
                            <option value="200">200x200</option>
                            <option value="300">300x300</option>
                            <option value="400">400x400</option>
                            <option value="500">500x500</option>
                            <option value="600">600x600</option>
                            <option value="700">700x700</option>
                        </select>

                        <button className='bg-blue-600 rounded w-full text-white py-3 px-4 mt-5 hover:bg-blue-800 hover:text-gray-100' type='submit'>Generate QR Code</button>
                    </form>
                </div>
                <div className="w-full md:w-1/3 self-center">
                    <img src={Img} alt="" className="w-1/2 m-auto mb-10 md:w-full" />
                </div>
            </div>

            {/* QR Code */}
            <div className="max-w-5xl m-auto flex flex-col text-center align-center justify-center">
                <div id="spinner" role='status' className={show ? "max-w-5xl m-auto flex flex-col text-center align-center justify-center mt-10" : "invisible"}>
                    <img src={Spinner} alt='' />
                    <span className='pt-5 text-white align-center mt-5 text-xl'>Loading...</span>
                </div>
                <div id="qrcode" className="m-auto pb-10 mb-10 justify-center align-center">
                    <img src={show ? '#' : qr} alt='' className='mb-10 m-auto' ref={messagesEndRef} />
                    {qr && <a className='bg-blue-600 rounded w-full text-white py-3 px-4 mt-5 hover:bg-blue-800 hover:text-gray-100' download='qrcode.png' href={qr}>Save Image</a>}
                </div>
                <div ref={messagesEndRef} />
            </div >
        </main >
    )
}

Main.defaultProps = {
    size: 300
}

export default Main