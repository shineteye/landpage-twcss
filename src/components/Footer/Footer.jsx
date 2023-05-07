import React from 'react'
import instagram from '../../assets/Instagram_480px.png'
import youtube from '../../assets/YouTube_480px.png'
import logo from '../../assets/cyber-physical-system.png'
import facebook from '../../assets/facebook_480px.png'
import pinterest from '../../assets/pinterest_480px.png'
import twitter from '../../assets/twitter_480px.png'
import ImgLinks from './ImgLinks'
import InputContainer from './InputContainer'
import ListItems from './ListItems'

function Footer() {
    return (
        <div className='bg-gray-800'>
            {/* Flex Container */}
            <div className='container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0'>
                {/* Logo and Social Links Container */}
                <div className='flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start'>
                    <div className='mx-auto my-6 text-center text-white md:hidden'>
                        Copyright &copy; 2023, All rights reserved
                    </div>
                    {/* Logo */}
                    <div>
                        <img src={logo} className='w-10 my-4' alt="machine" />
                    </div>
                    {/* Social Link Container */}
                    <div className='flex justify-center space-x-4'>
                        <ImgLinks imgSource={facebook} linkTo={'#'} imgAlt={'facebook'} />
                        <ImgLinks imgSource={youtube} linkTo={'#'} imgAlt={'youtube'} />
                        <ImgLinks imgSource={twitter} linkTo={'#'} imgAlt={'twitter'} />
                        <ImgLinks imgSource={instagram} linkTo={'#'} imgAlt={'instagram'} />
                        <ImgLinks imgSource={pinterest} linkTo={'#'} imgAlt={'pinterest'} />
                    </div>
                </div>
                {/* List Container */}
                <div className='flex justify-around space-x-32'>
                    <div className='flex flex-col space-y-3 text-white'>
                        <ListItems link={''} linkText={'Home'} />
                        <ListItems link={''} linkText={'Pricing'} />
                        <ListItems link={''} linkText={'Products'} />
                        <ListItems link={''} linkText={'About'} />
                    </div>
                    <div className='flex flex-col space-y-3 text-white'>
                        <ListItems link={''} linkText={'Careers'} />
                        <ListItems link={''} linkText={'Community'} />
                        <ListItems link={''} linkText={'Privacy-Policy'} />
                    </div>
                </div>
                {/* Input Container */}
                <InputContainer />
            </div>
        </div>
    )
}

export default Footer
