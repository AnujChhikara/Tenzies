export default function Body() {
    return(
        <div className="bg-white shadow-2xl border rounded-lg w-96 h-96 flex flex-col items-center py-10 px-5 space-y-4">
          <h1 className="text-3xl font-nunito font-bold">Tenzies</h1>  
          
        <p className="font-nunito text-md font-semibold">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        
        <button className="bg-blue-700 px-8 text-white font-nunito font-bold rounded-lg  hover:bg-blue-600 py-2">Roll</button>
        </div>
    )
}