import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Icon1 from './bba1acab429c4064a45868af07c3e384.png';
import BG from './Wave.svg';
import BG2 from './AdobeStock_163634120-2560x1458.jpg';




const navigation = [
  { name: 'NFTs', href: 'https://crypto.com/nft/profile/kevthefisherman?tab=collectibles' },
  { name: 'Roadmap', href: '#' },
  { name: 'Merch', href: '#' },
  { name: 'Sponsors', href: '#' },
]

 
export default function Example() {
    return (
      <div className="relative overflow-hidden">
        <div className="w-full w-screen md:mx-auto lg:mx-28 max-w-7xl">
          <div className="relative z-10 pt-6 pb-4 bg-white lg:bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">

  
            <Popover>
              <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
                <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                  <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                    <div className="flex items-center justify-between w-full pt-12 md:w-auto">
                      <a href="#">
                        <span className="sr-only ">Workflow</span>
                            <img
           
                            src={Icon1}
                            className=""
                            
                            />
                      </a>
                      <div className="flex items-center -mr-2 md:hidden">
                        <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Open main menu</span>
                          <MenuIcon className="w-6 h-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden text-2xl md:block md:ml-10 md:pr-4 md:space-x-4">
                    {navigation.map((item) => (
                      <a key={item.name} href={item.href} className="font-semibold text-teal-700 hover:underline hover:text-sky-400">
                        {item.name}
                      </a>
                    ))}
                  </div>
                </nav>
              </div>
  
              <Transition
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  className="absolute inset-x-0 top-0 z-10 p-2 transition origin-top-right transform md:hidden"
                >
                  <div className="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
                    <div className="flex items-center justify-between px-5 pt-4 ">
                      <div>
                        <img
                          className="w-auto h-8"
                          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                          alt=""
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Close main menu</span>
                          <XIcon className="w-6 h-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="px-2 pt-2 pb-3 space-y-1 ">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-3 py-2 font-medium text-gray-500 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
  
            <main className="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
 
              <div className="sm:text-center lg:text-left">
  
                <h1 className="pb-16 text-4xl font-extrabold tracking-tight text-teal-600 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Ocean Cleanup</span>{' '}
                </h1>
                <h2>
                    <span className="text-4xl font-bold tracking-tight text-sky-500 sm:text-5xl md:text-5xl">Join the fight against pollution & overfishing!</span>
                </h2>

                
                <div className="pt-10 mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white border border-transparent rounded-md bg-sky-600 hover:bg-sky-700 md:py-4 md:text-lg md:px-10"
                    >
                      Donate!
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3 ">
                    <a
                      href="#"
                      className="flex items-center justify-center w-full px-8 py-3 text-base font-medium border border-transparent rounded-md bg-cyan-100 text-sky-700 hover:bg-cyan-200 md:py-4 md:text-lg md:px-10"
                    >
                      About Me
                    </a>
                  </div>
                  
                </div>
                
              </div>
              
            </main>
            
          </div>
        </div>
 
        <div className="flex items-center justify-center lg:absolute z-5 lg:inset-y-0 lg:right-0 lg:w-face">
            

                <img 
                    src={BG2}
                    className="object-cover h-56 opacity-50 sm:h-70 md:h-96 lg:w-full lg:h-full"
                    
                    />
        </div>


       
         
                            <img src={BG}
                              className=""
                            />
        

      </div>
      
    )
  }