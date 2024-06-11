import React from 'react'
import { MdWork } from 'react-icons/md'
import TEN from '../Screenshot (93).png'
import dexter from '..//2250239359.jpg'
import {HiOutlineExternalLink} from 'react-icons/hi'
const PastWork = () => {
    return (
        <div id="past-work">
                <h1 align="center" className='heading'>Work Experience <MdWork /></h1>
                <div className='card'>
                <img src={dexter} alt="" />
                    <h3>Pyrax Dental Mart</h3>
                    <p>May 2023- Present</p>
                    <ul>
                    <li> Full-stack MERN project for comparing products from multiple online shopping apps.</li>
                    <li>Front-end: React.js — Back-end: Express.js, MongoDB —Data scrapping:Python</li>
                    <li>Showcases data scraping skills and full-stack development.</li>
                    </ul>
                <a href="https://drive.google.com/file/d/1QRblFWqlQPfg2jKX3aN6tmvr7vh5Uh-7/view?usp=sharing" target='_blank' rel="noreferrer">Certificate <HiOutlineExternalLink/></a>
                </div>
                <div className='card'>
                <img src={TEN} alt="" />
                    <h3>Travel Junction Indo Company Pvt. Ltd.</h3>
                    <p>April 2023- May 2023</p>
                    <ul>
                        <li>
                        Collaborated closely with a diverse team of developers, designers, and content creators to deliver high-quality projects on time.</li>
                    </ul>
                <a href="https://drive.google.com/file/d/1l9OlVn5ONjZQhsZ2o0e4tLbwMCMxu_Yq/view?usp=sharing" rel="noopener noreferrer" target='_blank'>Certificate <HiOutlineExternalLink/></a>
                </div>
        </div>
    )
}

export default PastWork
