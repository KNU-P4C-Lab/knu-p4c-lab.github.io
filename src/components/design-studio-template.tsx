import React from 'react'
import {FaFigma} from 'react-icons/fa'
import {PiSlideshow} from "react-icons/pi";
import {FaAward} from "react-icons/fa6";
import {H6, H5, Span} from "./typography";


const DesignStudioItem = ({team, name, figma, video, slide, award}: {team: string, name: string, figma: string, video: string, slide: string, award?: string}) => {
    return (
        <div className="p-4 bg-white space-y-4 border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
            {
                award && <div className='flex items-center space-x-2'>
                    <FaAward className='h-5 w-5'/>
                    <H5>{award}</H5>
                </div>
            }
            <div>
                <iframe
                    src={video}
                    className='rounded-lg aspect-video w-full'
                />
            </div>
            <div>
                <Span>Team {team}</Span>
                <H6>{name}</H6>
            </div>
            <div className='flex items-start text-gray-500 space-x-3'>
                <a target='_blank'
                   href={figma}
                   className='text-gray-500 hover:text-gray-900 dark:hover:text-white'>
                    <FaFigma className='h-5 w-5'/>
                </a>
                <a target='_blank'
                   href={slide}
                   className='text-gray-500 hover:text-gray-900 dark:hover:text-white'>
                    <PiSlideshow className='h-5 w-5'/>
                </a>
            </div>
        </div>
    )
}

export {DesignStudioItem}