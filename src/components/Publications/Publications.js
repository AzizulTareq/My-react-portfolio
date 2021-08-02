import React from 'react'
import { Container } from 'react-bootstrap'
import { IoIosPaper } from 'react-icons/io'

const Publications = () => {
    return (
        <Container className='my-3 px-6' style={{backgroundColor: 'white'}}>
            <br />
            <h5><IoIosPaper /> Conference Papers</h5>
            <ul>
                <li style={{textAlign: 'justify'}}>
                G. K. Anik, <strong>A. H. Tareq</strong>, M. A. Haque Abir, M. H. Islam and M. M. Khan, <strong>"Development of Web Based Tour Package System"</strong>, 2021 IEEE World AI IoT Congress(AIIoT), 2021, pp. 0313-0317 <br /> DOI: <a style={{textDecoration: 'none'}} target="blank" href="https://doi.org/10.1109/AIIoT52608.2021.9454226"><span style={{color: '#08B9CD', fontWeight: 'bold'}}>https:// doi.org/ 10.1109/ AIIoT52608.2021.9454226</span></a>
                </li>
                <br />
                <li style={{textAlign: 'justify'}}>
                <strong>A. H. Tareq</strong>, M.A.Abir, G.K. Anik , M.Ariful K., Dr. Rashedur Rahman, <strong>"Skin Diseases Classification Using Machine Learning and Deep Learning"</strong> In IWANN 2021: International Work Conference on Artificial Neural Networks – <strong>ACCEPTED</strong> (will be live by September, 2021).
                </li>
            </ul> 
            <br />
            <br />
        </Container>
    )
}

export default Publications
