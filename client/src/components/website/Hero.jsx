import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
export default function Hero() {
    return (
        <div>
            <div class="hero min-h-screen justify-items-start  lg:text-left" >
              <div class="hero-overlay justify-items-start bg-hero-pattern bg-no-repeat bg-cover bg-opacity-60"><Nav/></div>
              <div class=" ml-8 mt-8 ">
                <div class="max-w-md lg:text-left">
                  <h1 class="mb-2 text-5xl font-bold css-3d-text">Read hieroglyphics Like a PRO  with{"\n"} Jko Ai</h1>
                  <p class="mb-5 mt-2">With Jko Ai you can upload any hieroglyphics symbols and let your friend Jko detect and Translate for YOU</p>
                    <Link to={'/detect'}><button class=" css-button">Get Started</button></Link>
                </div>
              </div>
            </div>
        </div>


    )
}
