import HomeLayout from "../Layouts/HomeLayout";
import aboutMain from '../assets/Images/aboutMaintainnance.png'
import aboutImage from '../assets/Images/aboutMainImage.png'
import apj from '../assets/Images/apj.png'
import billgates from '../assets/Images/billGates.png'
import nelson from '../assets/Images/nelsonMandela.png'
import steve from '../assets/Images/stevejobs.png'

export default function AboutUs() {
    return (
        <HomeLayout>
            <div className="pl-20 pr-20 pt-20 flex flex-col text-white">
                <div className="flex items-center  mx-10 ">
                    <section className="w-1/2 space-y-10 ">
                        <h1 className="text-5xl text-yellow-500 font-semibold">
                            Affordable and quality education
                        </h1>
                        <p className="text-xl text-gray-200">
                            Our goal is to provide the affordable and qualified education to the world.
                            we are providing the plateform for the aspiring teachers and students to share
                            their skills, creativity and knowledge to each other to empower and contribute
                            in the growth and wellness of mankind.
                        </p>
                    </section>

                    <div className="w-1/2">
                        {/* <img src={aboutMain} className="drop-shadow-2xl" id="test1" alt="" /> */}
                        <img id="test1" style={
                            {
                                filter: "drop-shadow(0px 10px 10px rgb(0,0,0);"
                            }
                        } src={aboutImage}
                            alt="about main page"
                            className="drop-shadow-2xl m-auto" />
                    </div>

                </div>

                <div className="carousel w-[500px] h-[500px] mb-10 m-auto">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img
                            src={apj}
                            className="w-[500px] h-[500px]" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img
                            src={billgates}
                            className="w-[500px] h-[500px]" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img
                            src={nelson}
                            className="w-[500px] h-[500px]" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img
                            src={steve}
                            className="w-[500px] h-[500px]" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>

            </div>
        </HomeLayout>

    )
}