

export default function Home() {

  return (
    <div class="flex flex-col items-center justify-center min-h-screen py-2">
      <div class="flex items-center justify-center mt-[50px] spacing-y-4 font-PlayfairDisplay text-8xl">
        <h1 class="flex items-center mt-[125px]">Kenneth Ross</h1>
      </div>
      <h1 class="flex items-center mt-[25px] text-xl">Mechanical Engineering</h1>

      <div class="h-screen m-[100px]"></div>

      <div class="flex flex-row items-start justify-start ml-[25px] space-x-4 w-full font-PlayfairDisplay">
        <h1 class="text-6xl"> Background </h1>
      </div>

      <div class="flex flex-row items-start justify-start ml-[25px] space-x-4 w-full font-PlayfairDisplay">
        <h1 class="text-2xl w-1/4 m-[10px]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </h1>
      </div>


      <div class="flex flex-row items-start justify-start mt-[10px] ml-[25px] space-x-4 w-full font-PlayfairDisplay">
        <h1 class="text-6xl"> U.C Riverside </h1>
      </div>

      <div class="flex flex-row items-start justify-start ml-[45px] mt-[20px] w-full font-PlayfairDisplay">
        
        <img src="/ucr.png" alt="UCR Logo" class="h-[150px] w-auto" />
        <div class="flex flex-col items-start justify-start ml-[10px]">
          
          <h1 class="text-xl"> B.S Mechanical Engineering </h1>
          <h1 class="text-l"> Pursuing Computer Science Minor </h1>
          <h1 class="text-l"> Class of 2028 </h1>

        </div>

      </div>
      
      <div class="h-screen"></div>

    </div>
  );
}
