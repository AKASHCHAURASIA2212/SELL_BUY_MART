import React from 'react'
import img from '../../assets/react.svg'

function Banner() {
    return (
        <section className="bg-gray-50">
            <div className="mx-auto px-4 py-32 lg:flex lg:h-screen lg:items-center">
                <div className="mx-auto max-w-xl text-center my-8 py-8">
                    <span className="text-5xl font-extrabold sm:text-5xl" style={{ fontSize: "50px" }}>
                        Understand User Flow.
                        <strong className="font-extrabold text-blue-700 sm:block"> Increase Conversion. </strong>
                    </span>

                    <p className="mt-4 sm:text-xl/relaxed" style={{ fontSize: "20px" }}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
                        numquam ea!
                    </p>

                    <div className="mt-8 flex flex-row flex-wrap justify-center gap-4">
                        <a
                            className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                            href="#"
                        >
                            Get Started
                        </a>

                        <a
                            className="block w-full rounded px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-blue-700 focus:outline-none focus:ring active:text-blue-500 sm:w-auto"
                            href="#"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner