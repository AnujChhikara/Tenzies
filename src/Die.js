export default function Die(props){
    return(
        
            <div onClick={props.holdDice} className={`bg-gray-200 w-12  h-12 flex justify-center mr-4 mb-4 pt-2 shadow-xl rounded-lg ${props.isHeld ? "bg-green-400" : ""} `}>{props.value}</div>
            
     
    )
}