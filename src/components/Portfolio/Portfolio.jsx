import React from 'react'
import './Portfolio.css'
import IMG1 from '../../Assets/portfolio1.webp'
import IMG2 from '../../Assets/portfolio2.webp'
import IMG3 from '../../Assets/portfolio3.webp'
import IMG4 from '../../Assets/heroFoodOne.svg'


const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Book a ride App',
        github: 'https://github.com/YINCOOS/Ride-App',
        demo: 'https://github.com/YINCOOS/Ride-App'
    },
    {
        id: 2,
        image: IMG2,
        title: 'A Discount Landing-Page',
        github: 'https://github.com/YINCOOS/DISCOUNT-LANDING-PAGE',
        demo: 'https://github.com/YINCOOS/DISCOUNT-LANDING-PAGE'
    },
    {
        id: 3,
        image: IMG3,
        title: 'User Registration API',
        github: 'https://github.com/YINCOOS/DISCOUNT-LANDING-PAGE',
        demo: 'https://github.com/YINCOOS/DISCOUNT-LANDING-PAGE'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Food Vendor App',
        github: 'https://github.com/YINCOOS/DISCOUNT-LANDING-PAGE',
        demo: 'https://github.com/YINCOOS/DISCOUNT-LANDING-PAGE'
    },
]

const Portfolio = () => {
    return (
        <section id="Portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className='container portfolio__container'>
                {
                    data.map(({id, image, title, github, demo})=>{
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title}/>
                                </div>
                                <h3>{title}</h3>
                                <div className='portfolio__item-cta'>
                                    <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                                    <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio