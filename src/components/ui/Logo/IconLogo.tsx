import React from 'react';

type Props = React.SVGProps<SVGSVGElement>;

export default function IconLogo(props: Props) {
    return (
        <svg
            {...props}
            width="104"
            height="118"
            viewBox="0 0 104 118"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M41.8924 22.8087L56.4809 26.8545L56.8231 25.6206C58.1438 20.8581 55.3438 15.9092 50.5814 14.5884L52.6344 7.18559C61.4787 9.63834 66.6789 18.8293 64.2261 27.6738L63.8839 28.9077L78.4723 32.9534C89.4778 36.0055 95.9483 47.4422 92.8962 58.4476C92.1939 60.9801 91.0455 63.2706 89.5618 65.2609L15.7473 44.7903C15.5006 42.3201 15.6959 39.7655 16.3983 37.2328C19.4502 26.2272 30.8867 19.7566 41.8924 22.8087Z"
                fill="fill-current"
            />

            <path
                d="M83.9149 71.6671L81.7534 79.4612C78.5426 91.0391 70.0898 99.4799 57.3086 103.871C47.9685 107.081 39.6025 106.991 39.2507 106.986L38.2488 106.97L37.3821 106.468C37.078 106.291 29.8606 102.059 23.5073 94.4978C14.8135 84.1505 11.9154 72.5618 15.1262 60.9841L17.2877 53.19L83.9149 71.6671Z"
                fill="fill-current"
            />
        </svg>
    );
}
