import React from 'react'
import img1 from '../img/main.png'
import img2 from '../img/about.png'
import img3 from '../img/1.png'
import img4 from '../img/21.png'
import img5 from '../img/41.png'
import logo from '../img/logo.png'
const About = () => {
    return (
        <section>
            <article>
                <img src={img1} alt="" style={{ width: '50%', paddingLeft: '25rem' }} />
                <ul className='about-link'>
                    <li>telegram</li>
                    <li>chart</li>
                    <li>twitter</li>
                </ul>
                <input className="input" type='text' placeholder='CA:' />
            </article>
            <article className='about'>
                <div className='about-info'>
                    <img src={img2} alt="" style={{ width: '20rem', paddingLeft: '8rem' }} />
                    <div>
                        <h1 style={{ fontWeight: 'lighter', color: 'white', paddingBottom: '2rem', paddingTop: '3rem', paddingLeft: "5rem", fontSize: '3rem' }}>About</h1>
                        <p style={{ color: 'white', paddingLeft: '3rem', width: '28rem' }}>Dr. Jordan B. Puterson is a renowned psychologist, author,
                            and online educator. His bestselling books, including
                            “12 Rules for Life” and “Beyond Order,” have sold millions
                            of copies worldwide. Dr. Puterson’s lectures and podcasts
                            consistently attract large audiences, providing valuable
                            insights into topics such as mythology, psychology,
                            and personal development.</p>
                    </div>
                </div>
            </article>
            <article className='buy'>
                <h1 style={{ fontSize: '2rem' }}>how to buy</h1><br /><br />
                <h3 style={{ fontWeight: 'bold' }}>CREATE A WALLET</h3>
                <br />
                <p>Download Phantom or your wallet of choice from the app store or Google Play for free.
                    Desktop users, download the Google Chrome extension by going to Phantom.</p>
                <br />
                <h3>Get Some SOL</h3>
                <br />
                <p>Have SOL in your wallet to switch to $Puterson. If you don’t have any SOL, you can buy directly on
                    Phantom, transfer from another wallet, or buy on another exchange and send it to your wallet.</p>

                <br />
                <h3>Go to Raydium</h3>
                <br />
                <p>Connect to Raydium. Go to Raydium in google chrome or on the browser inside your Phantom app.
                    Connect your wallet. Paste the $Puterson token address into Raydium, select $Puterson, and confirm.
                    When Phantom prompts you for a wallet signature, sign.</p>
                <br />
                <h3>Puterson</h3> <br />
                <p>Switch SOL for $Puterson. We have Zero taxes so you don’t need to worry about buying with a
                    specific slippage, although you may</p>
            </article>
            <article className='meme'>
                <h1 style={{ color: 'white', fontSize: '2.5rem', fontWeight: 'normal', paddingLeft: '42rem', paddingTop: '2rem', paddingBottom: '2rem' }}>memes</h1>
                <div className="meme-img">
                    <img src={img3} alt="" />
                    <img src={img2} alt="" />
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                </div>
            </article>
            <article className='foot'>
                <div className='logo-info'>
                    <img src={logo} alt="" style={{ width: '40px', margin: '1rem' }} />
                    <h1 className='foot-name'>Jordan <br></br> Puterson</h1>
                </div>
            </article>
        </section>
    )
}

export default About