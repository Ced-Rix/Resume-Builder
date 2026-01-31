import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div class="grid grid-cols-1 lg:grid-cols-2">
  <main class="flex lg:h-screen h-auto items-center justify-center order-2 lg:order-1">
    <form class="flex w-full max-w-lg flex-col items-center justify-center pl-7 pr-4 py-9">
      <div class="w-full space-y-8">
        <div class="flex flex-col items-start gap-7">
          <Link to="/" class="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Home
          </Link>
          <div class="flex flex-col items-start gap-4">
            <h1 class="text-[1.8rem] font-bold leading-none text-slate-900">Welcome to Aino!</h1>
            <span class="text-sm text-slate-600">Create your account and start building ATS-optimized tech resumes with AI-powered tools.</span>
          </div>
        </div>
        <div class="gap-6 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
          <div class="flex flex-col gap-2 col-span-1">
            <label for="first-name" class="text-sm font-medium text-slate-700">First Name</label>
            <input type="text" id="first-name" placeholder="John"
              class="h-10 w-full rounded-md border border-slate-300 bg-white px-4 text-sm transition duration-300 ease-in-out focus:border-slate-900 focus:ring-2 focus:ring-slate-900" />
          </div>
          <div class="flex flex-col gap-2 col-span-1">
            <label for="last-name" class="text-sm font-medium text-slate-700">Last Name</label>
            <input type="text" id="last-name" placeholder="Doe"
              class="h-10 w-full rounded-md border border-slate-300 bg-white px-4 text-sm transition duration-300 ease-in-out focus:border-slate-900 focus:ring-2 focus:ring-slate-900" />
          </div>
          <div class="flex flex-col gap-2 lg:col-span-2 md:col-span-2 col-span-1">
            <label for="email" class="text-sm font-medium text-slate-700">Email Address</label>
            <input type="email" id="email" placeholder="john@email.com"
              class="h-10 w-full rounded-md border border-slate-300 bg-white px-4 text-sm transition duration-300 ease-in-out focus:border-slate-900 focus:ring-2 focus:ring-slate-900" />
          </div>
          <div class="flex flex-col gap-2 col-span-1">
            <label for="password" class="text-sm font-medium text-slate-700">Password</label>
            <input type="password" id="password" placeholder="•••••••••••"
              class="h-10 w-full rounded-md border border-slate-300 bg-white px-4 text-sm transition duration-300 ease-in-out focus:border-slate-900 focus:ring-2 focus:ring-slate-900" />
          </div>
          <div class="flex flex-col gap-2 col-span-1">
            <label for="confirm-password" class="text-sm font-medium text-slate-700">Confirm Password</label>
            <input type="password" id="confirm-password" placeholder="•••••••••••"
              class="h-10 w-full rounded-md border border-slate-300 bg-white px-4 text-sm transition duration-300 ease-in-out focus:border-slate-900 focus:ring-2 focus:ring-slate-900" />
          </div>
        </div>
        <div>
          <input id="subscription-checkbox" type="checkbox"
            class="cursor-pointer rounded border border-slate-300 bg-white text-slate-900 transition duration-300 ease-in-out focus:ring-2 focus:ring-slate-900" />
          <label for="subscription-checkbox" class="ms-2 text-sm text-slate-600">I want to receive emails about events,
            product updates and company announcements.</label>
        </div>
        <div class="flex flex-col gap-6">
          <button
            class="w-full rounded-md border border-slate-900 bg-slate-900 py-2.5 font-medium text-sm text-white transition duration-300 ease-in-out hover:bg-slate-800 focus:ring-2 focus:ring-slate-900">Create
            account</button>
          <span class="text-center text-sm text-slate-700">Already have an account? <Link to = '/sign-in'
              class="ml-1 cursor-pointer font-semibold text-slate-900 hover:text-slate-700 underline">Login</Link></span>
        </div>
      </div>
    </form>
  </main>
  <aside class="relative h-80 lg:h-full order-1 lg:order-2">
    <img class="absolute z-0 h-full w-full rounded-3-xl object-cover p-2 md:rounded-4xl md:p-3"
      src="https://images.unsplash.com/photo-1750402908183-424ccc5d1210?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Authentication Illustration" />
    <div class="absolute bottom-10 mx-10 md:bottom-14 md:mx-14">
      <h1 class="mb-4 text-[2.6rem] font-bold leading-none text-zinc-200 md:text-[3.6rem]">Land your dream tech job.</h1>
      <span class="text-sm text-zinc-300">Aino is an open-source AI-powered resume builder designed to help you create ATS-optimized resumes that stand out. Join thousands of developers who've successfully landed their tech jobs with our platform.</span>
    </div>
  </aside>
</div>
  )
}

export default SignUp