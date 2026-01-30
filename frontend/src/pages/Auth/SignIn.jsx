import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div class="grid grid-cols-1 lg:grid-cols-2">
  <aside class="relative h-[20rem] lg:h-full">
    <img class="absolute z-0 h-full w-full rounded-[1.5rem] object-cover p-2 md:rounded-[2rem] md:p-3" src="https://images.unsplash.com/photo-1750402908183-424ccc5d1210?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Authentication Illustration" />
    <div class="absolute bottom-10 mx-10 md:bottom-14 md:mx-14">
      <h1 class="mb-4 text-[2.6rem] font-bold leading-none text-zinc-200 md:text-[3.6rem]">Welcome back to Rixsume.</h1>
      <span class="text-sm text-zinc-300">Continue building your perfect resume with AI-powered tools. Create ATS-optimized tech resumes in minutes and 3x your interview chances with intelligent resume tailoring.</span>
    </div>
  </aside>
  <main class="flex lg:h-screen h-auto items-center justify-center">
    <form class="flex w-full max-w-md flex-col items-center justify-center px-7 py-9">
      <div class="w-full space-y-8">
        <div class="flex flex-col items-start gap-7">
          <Link to="/" class="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Home
          </Link>
          <div class="flex flex-col items-start gap-4 w-full">
            <h1 class="text-[1.8rem] font-bold leading-none text-gray-900">Welcome back!</h1>
            <span class="text-sm text-gray-600">Please enter your credentials to continue</span>
          </div>
        </div>
        <div class="flex flex-col gap-6">
          <div class="flex flex-col gap-2">
            <span class="text-sm font-medium text-gray-700">Email Address</span>
            <input type="email" placeholder="john@email.com" class="h-10 w-full rounded-md border border-gray-300 bg-white px-4 text-sm transition duration-300 ease-in-out focus:border-blue-600 focus:ring-2 focus:ring-blue-600" />
          </div>
          <div class="flex flex-col gap-2">
            <span class="text-sm font-medium text-gray-700">Password</span>
            <div class="relative w-full">
              <input type="password" placeholder="•••••••••••" class="h-10 w-full rounded-md border border-gray-300 bg-white px-4 pr-10 text-sm transition duration-300 ease-in-out focus:border-blue-600 focus:ring-2 focus:ring-blue-600" />
              <button class="absolute right-0 top-1/2 h-full -translate-y-1/2 transform rounded-full px-2">
                <svg class="h-auto w-4 text-neutral-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
                  <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
                  <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
                </svg>
              </button>
            </div>
            <div class="flex justify-between">
              <div class="flex items-center">
                <input id="remember-checkbox" type="checkbox" class="cursor-pointer rounded border border-gray-300 bg-white text-blue-600 transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-600" />
                <label for="remember-checkbox" class="ms-2 text-sm font-medium text-gray-700">Remember password</label>
              </div>
              <span class="cursor-pointer text-sm font-semibold text-blue-600 hover:text-blue-700 underline">Forgot password</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-6">
          <button class="w-full rounded-md border border-blue-600 bg-blue-600 py-2 text-sm font-medium text-white transition duration-300 ease-in-out hover:bg-blue-700 focus:ring-2 focus:ring-blue-600 shadow-lg">Sign in</button>
          <span class="text-center text-sm text-gray-700">Don't have an account? <Link to="/sign-up" class="ml-1 cursor-pointer font-semibold text-blue-600 hover:text-blue-700 underline">Create account</Link></span>
        </div>
      </div>
    </form>
  </main>
</div>
  )
}

export default SignIn