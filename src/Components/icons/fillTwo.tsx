import React from "react"
import { IconProps } from "./icons.types"
const Icon = ({ color = "#27374d", size = 2.4 }: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        id="_x32_"
        width={size * 10}
        height={size * 10}
        fill={color}
        viewBox="0 0 512 512"
    >
        <g id="SVGRepo_iconCarrier">
            <style>{`.st0{fill:${color}}`}</style>
            <path
                d="M448.282 367.411H63.712c-19.812 0-35.928 16.114-35.928 35.924 0 19.814 16.116 35.932 35.928 35.932h384.57c19.814 0 35.934-16.118 35.934-35.932 0-19.809-16.12-35.924-35.934-35.924zM425.958 340.707c-8.653-14.375-13.226-30.765-13.226-47.396v-78.824c0-78.145-57.706-144.27-134.748-155.09 5.693-6.534 8.793-14.759 8.793-23.474 0-19.81-16.12-35.924-35.934-35.924-19.808 0-35.924 16.114-35.924 35.924 0 9.324 3.729 18.272 10.326 24.996-73.187 14.559-125.976 78.643-125.976 153.569v78.824c0 16.627-4.573 33.016-13.224 47.396l-1.45 2.41h342.813l-1.45-2.411zM201.956 470.773A49.487 49.487 0 0 0 250.84 512a49.496 49.496 0 0 0 48.896-41.227l.32-1.86h-98.42l.32 1.86z"
                className="st0"
            />
        </g>
    </svg>
)
export default Icon
