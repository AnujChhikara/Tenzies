export default function Footer(){
    return (
        <footer className="text-white flex flex-col space-y-2 " >
            <div className="flex space-x-6 ml-4">
            <a href="https://twitter.com/AnujChhikara07"><img src="./icons/twitter.png" alt=""  className="w-8  shadow-md bg-white animate-bounce rounded-3xl border-2"/></a>
            <a href="https://www.linkedin.com/in/anuj-chhikara-webdeveloper/" >
               <img src="./icons/linkedin-logo.png" alt=""  className="w-8 shadow-full bg-white rounded-3xl border-2 animate-bounce" />  
            </a>
            
         <a href="https://github.com/AnujChhikara"><img src="./icons/github.png" alt=""  className="w-8  shadow-md bg-white rounded-3xl border-2 animate-bounce "/></a>
       </div>
            <div> Anuj Chhikara &#169; 2022</div>

           
        </footer>
    )
}