import React from 'react'
import { useStateValue } from '../../../contextapi/StateProvider'
import * as classes from './intro.module.css'

const Intro = () => {
    const [{lightMode}] = useStateValue();
    return (
        <div className={`${classes.introdiv} ${(lightMode && classes.light)}`}>

            <svg className={classes.logocontainer} width="250" viewBox="0 0 349 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.9 29.15C21.8 20.45 26.4 16.1 32.7 16.1C37.7 16.1 41.2 19.1 43.2 25.1C45 30.4 47.35 43.4 50.25 64.1C53.35 63.7 55.1 63.5 55.5 63.5C58.5 63.5 60 65 60 68C60 69.2 59.55 70.2 58.65 71C57.75 71.8 56.7 72.3 55.5 72.5L51.6 72.95C52.6 81.25 53.1 87.45 53.1 91.55C53.1 95.65 52.05 98.75 49.95 100.85C47.85 102.95 45.4 104 42.6 104C39.9 104 37.3 102.85 34.8 100.55C32.4 98.25 30.5 95.6 29.1 92.6C26.1 86.1 24.6 81.25 24.6 78.05C24.6 71.95 30.15 67.75 41.25 65.45C38.15 44.25 36.1 32.25 35.1 29.45C34.2 26.55 33.4 25.1 32.7 25.1C30.7 25.1 28.95 27.35 27.45 31.85C22.85 45.65 19.8 55.55 18.3 61.55C16.8 67.55 15.2 74.1 13.5 81.2C11.8 88.3 10.5 93.55 9.6 96.95C8.8 100.25 8.05 102.25 7.35 102.95C6.75 103.65 5.8 104 4.5 104C1.5 104 0 102.5 0 99.5L0.3 97.7C1.6 92.5 3.1 86.35 4.8 79.25C6.6 72.15 7.9 66.9 8.7 63.5C11.1 54.1 14.5 42.65 18.9 29.15ZM42.6 74.45C36.6 75.75 33.6 77.2 33.6 78.8C33.6 80.6 34.75 83.75 37.05 88.25C39.45 92.75 41.3 95 42.6 95C43.6 95 44.1 93.35 44.1 90.05C44.1 86.65 43.6 81.45 42.6 74.45Z" stroke="#371BB1" strokeWidth="1" />
                <path d="M100.72 29.6C102.32 29.6 103.97 30.35 105.67 31.85C107.37 33.25 108.22 34.75 108.22 36.35C108.22 37.85 107.52 39 106.12 39.8C104.82 40.6 103.37 41 101.77 41C100.17 41 98.8203 40.3 97.7203 38.9C96.7203 37.4 96.2203 35.8 96.2203 34.1C96.2203 31.1 97.7203 29.6 100.72 29.6ZM87.2203 85.4C81.6203 91.4 75.9203 95.7 70.1203 98.3C68.3203 99.1 66.8703 99.5 65.7703 99.5C62.7703 99.5 61.2703 98 61.2703 95C61.2703 93.1 62.7703 91.55 65.7703 90.35C67.3703 89.75 69.4703 88.55 72.0703 86.75C74.7703 84.95 76.5703 83.6 77.4703 82.7C78.3703 81.8 79.9203 80.15 82.1203 77.75C84.4203 75.35 86.2203 73.55 87.5203 72.35C88.8203 71.05 90.5703 69.75 92.7703 68.45C95.0703 67.15 97.1703 66.5 99.0703 66.5C102.97 66.5 105.97 67.9 108.07 70.7C110.17 73.5 111.42 76.6 111.82 80C112.92 89 114.67 93.5 117.07 93.5C118.97 93.5 121.42 93 124.42 92C127.42 91 129.07 90.5 129.37 90.5C132.37 90.5 133.87 92 133.87 95C133.87 97.2 132.37 98.8 129.37 99.8C123.97 101.6 119.57 102.5 116.17 102.5C112.87 102.5 110.17 101.1 108.07 98.3C105.97 95.5 104.72 92.4 104.32 89C103.22 80 101.47 75.5 99.0703 75.5C97.7703 75.5 96.2703 76.35 94.5703 78.05C92.9703 79.65 91.6703 80.95 90.6703 81.95C89.6703 82.85 88.5203 84 87.2203 85.4Z" stroke="#371BB1" strokeWidth="1" />
                <path d="M214.859 95C214.859 99 210.259 101 201.059 101C196.759 101 193.409 100.05 191.009 98.15C188.709 96.25 187.559 92.95 187.559 88.25C187.559 83.55 187.159 79.5 186.359 76.1C185.559 72.7 184.459 71 183.059 71C178.859 71 174.859 74.9 171.059 82.7C169.459 85.9 167.759 89.15 165.959 92.45C164.159 95.65 161.759 98.4 158.759 100.7C155.859 102.9 152.459 104 148.559 104C139.559 104 135.059 95.3 135.059 77.9C135.059 65.4 136.409 53.25 139.109 41.45C141.909 29.65 145.759 19.95 150.659 12.35C155.659 4.64999 160.909 0.799995 166.409 0.799995C171.909 0.799995 176.059 2.8 178.859 6.8C181.659 10.8 183.059 16 183.059 22.4C183.059 28.7 181.259 34.95 177.659 41.15C174.159 47.25 169.859 52.2 164.759 56C162.259 58 160.359 59 159.059 59C156.059 59 154.559 57.5 154.559 54.5C154.559 53.3 156.259 51.4 159.659 48.8C163.059 46.2 166.309 42.5 169.409 37.7C172.509 32.8 174.059 27.1 174.059 20.6C174.059 17.9 173.459 15.45 172.259 13.25C171.059 10.95 169.159 9.79999 166.559 9.79999C163.559 9.79999 160.309 12.95 156.809 19.25C153.409 25.45 150.409 33.95 147.809 44.75C145.309 55.55 144.059 66.65 144.059 78.05C144.059 89.35 145.559 95 148.559 95C152.759 95 156.759 91.1 160.559 83.3C162.159 80.1 163.859 76.9 165.659 73.7C167.459 70.4 169.809 67.65 172.709 65.45C175.709 63.15 179.159 62 183.059 62C192.059 62 196.559 70.5 196.559 87.5C196.559 90.5 198.009 92 200.909 92C203.909 92 206.159 91.75 207.659 91.25C209.159 90.75 210.059 90.5 210.359 90.5C213.359 90.5 214.859 92 214.859 95Z" stroke="#371BB1" strokeWidth="1" />
                <path d="M277.564 91.7C277.564 91.7 279.164 91.3 282.364 90.5C285.364 90.5 286.864 92 286.864 95C286.864 97.2 285.364 98.8 282.364 99.8C280.564 100.4 278.764 100.7 276.964 100.7C275.264 100.7 273.614 100.3 272.014 99.5C270.414 98.7 269.164 97.5 268.264 95.9C266.764 93.3 265.664 90.5 264.964 87.5L264.364 84.95C262.664 87.85 258.514 91.25 251.914 95.15C245.414 99.05 238.464 101 231.064 101C227.064 101 223.564 99.5 220.564 96.5C217.564 93.5 216.064 90 216.064 86C216.064 76.3 220.064 67.9 228.064 60.8C236.064 53.6 244.164 50 252.364 50C256.864 50 260.714 50.85 263.914 52.55C267.214 54.15 268.864 55.8 268.864 57.5C268.864 60.5 267.364 62 264.364 62C263.764 62 262.314 61.5 260.014 60.5C257.714 59.5 255.164 59 252.364 59C246.964 59 241.064 61.65 234.664 66.95C228.264 72.15 225.064 78.5 225.064 86C225.064 87.5 225.664 88.9 226.864 90.2C228.164 91.4 229.564 92 231.064 92C236.964 92 242.464 90.45 247.564 87.35C252.664 84.15 255.914 81.55 257.314 79.55C258.714 77.45 259.864 75.55 260.764 73.85C261.664 72.15 262.314 71.05 262.714 70.55C263.214 69.95 264.214 69.65 265.714 69.65C267.214 69.65 268.364 70.2 269.164 71.3C269.964 72.4 270.714 74.15 271.414 76.55C272.114 78.85 272.814 81.45 273.514 84.35C274.214 87.25 274.814 89.2 275.314 90.2C275.914 91.2 276.664 91.7 277.564 91.7Z" stroke="#371BB1" strokeWidth="1" />
                <path d="M315.135 95C322.035 95 327.735 92.6 332.235 87.8C336.835 83 339.135 78.8 339.135 75.2C339.135 72 333.635 69.9 322.635 68.9C318.535 68.5 314.735 67.15 311.235 64.85C307.835 62.55 306.135 59.2 306.135 54.8C306.135 53.3 306.935 49.45 308.535 43.25C310.135 36.95 310.935 32.85 310.935 30.95C310.935 29.05 310.885 27.85 310.785 27.35C310.785 26.85 310.535 26.35 310.035 25.85C309.535 25.35 308.835 25.1 307.935 25.1C305.735 25.1 303.385 28.75 300.885 36.05C298.385 43.35 297.135 49.6 297.135 54.8C297.135 60 298.435 67.8 301.035 78.2C301.235 78.8 301.335 79.4 301.335 80C301.335 83 299.835 84.5 296.835 84.5C294.435 84.5 292.835 83 292.035 80C289.435 69.6 288.135 61.2 288.135 54.8C288.135 49 289.535 41.5 292.335 32.3C293.735 27.7 295.785 23.85 298.485 20.75C301.285 17.65 304.585 16.1 308.385 16.1C312.185 16.1 315.035 17.35 316.935 19.85C318.935 22.35 319.935 25.65 319.935 29.75C319.935 33.75 319.135 38.85 317.535 45.05C315.935 51.15 315.135 54.4 315.135 54.8C315.135 58 320.635 60.1 331.635 61.1C335.735 61.5 339.485 62.85 342.885 65.15C346.385 67.45 348.135 70.8 348.135 75.2C348.135 81.3 344.985 87.65 338.685 94.25C332.485 100.75 324.635 104 315.135 104C310.535 104 306.335 102.7 302.535 100.1C298.735 97.5 296.835 95.3 296.835 93.5C296.835 90.5 298.335 89 301.335 89C302.035 89 303.785 90 306.585 92C309.485 94 312.335 95 315.135 95Z" stroke="#371BB1" strokeWidth="1" />
            </svg>

        </div>
    )
}

export default Intro