import SocialMediaIcons from "../components/SocialMediaIcons";


const Footer = ()=>{
    return(
        <div className={`bg-red h-20 p-7 flex  flex-col justify-center items-center`}>
            <SocialMediaIcons />
            <div className={`flex justify-between items-center`}>
                <p className={`font-serif text-sm mr-3 hover:text-green-500 cursor-pointer hover:underline  `}>Matheos Belay</p>
                <p className={`font-serif text-sm text-black`}>@All rights reserved 2023</p>
            </div>
        </div>
    ) 
}
export default Footer;