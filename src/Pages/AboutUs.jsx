import HomeLayout from "../Layouts/HomeLayout";
import aboutMain from '../assets/Images/aboutMaintainnance.png'
import aboutImage from '../assets/Images/aboutMainImage.png'
import apj from '../assets/Images/apj.png'
import billgates from '../assets/Images/billGates.png'
import nelson from '../assets/Images/nelsonMandela.png'
import steve from '../assets/Images/stevejobs.png'
import { CarauselSlide } from "../Components/CarauselSlide.jsx";

export default function AboutUs() {

    const persons = [
        {
            title: "APJ Abdul Kalam",
            description: "Failure will never overtake me if my determination to succeed is strong enough.",
            image: apj,
            slideNumber: 1
        },

        {
            title: "Bill Gates",
            description: "Your time is limited, so don't waste it living someone else's life",
            image: billgates,
            slideNumber: 2
        },

        {
            title: "Nelson Mandela",
            description: "Educations is the most powerful tool you can use to change the world.",
            image: nelson,
            slideNumber: 3
        },

        {
            title: "Steve Jobs",
            description: "It Is Very Easy To Defeat Someone, But It Is Very Hard To Win Someone.",
            image: apj,
            slideNumber: 4
        },
    ]

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

                <div className="carousel w-1/2 my-16 mb-10 m-auto h-auto">

                    {persons && persons.map(person => (<CarauselSlide
                        {...person}
                        key={person.slideNumber}
                        totalSlides={persons.length}

                    />))}

                </div>

            </div>
        </HomeLayout>

    )
}