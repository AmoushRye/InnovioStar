import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"
const Home = () => {
    return (
        <>
            <div className="home" id='home'>
                <main>
                    <h1>TechyStar</h1>
                    <p>Solution to all your problems</p>
                </main>
            </div>
            <div className="home2">
                <img src={vg} alt="Graphics" />
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempore veritatis, explicabo quidem impedit doloremque,
                        sequi dolore nisi soluta expedita omnis. Dolores in soluta repellat exercitationem aliquam perspiciatis, hic similique nesciunt. Inventore, ex nam!</p>
                </div>
            </div>
            <div className="home3" id="about">
                <div>
                    <h1>Who we are?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, perferendis. Aliquam debitis quidem veniam architecto rerum, saepe odio voluptatum optio accusantium laborum aut dolores reprehenderit non aperiam ratione maxime illo at minus illum incidunt, quam consequuntur quia? Quis doloremque magnam perferendis alias velit est explicabo itaque fugiat numquam impedit possimus laborum perspiciatis pariatur deleniti, rem vero provident odit tenetur quo?</p>
                </div>
            </div>
            <div className="home4" id = "brands">
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style ={{
                            animationDelay:"0.3s",
                        }}>
                            <AiFillGoogleCircle/>
                            <p>Google</p>

                        </div>
                        <div style ={{
                            animationDelay:"0.5s",
                        }}>
                            <AiFillAmazonCircle/>
                            <p>Amazon</p>

                        </div>
                        <div style ={{
                            animationDelay:"0.7s",
                        }}>
                            <AiFillYoutube/>
                            <p>YouTube</p>

                        </div>
                        <div style ={{
                            animationDelay:"1s",
                        }}>
                            <AiFillInstagram/>
                            <p>Instagram</p>

                        </div>
                    </article>
                </div>
            </div>

        </>
    );
};

export default Home
