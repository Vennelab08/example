import image from "next/image";

export default function Page() {
  return <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"></main>
    <div> 
      <h1 className = "text-6xl">welcome to Nextjs App </h1>
     

      <ol className="list-inside list-decimal text-lg text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started 
            
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>


      
    </div>
    </div>
        
}


