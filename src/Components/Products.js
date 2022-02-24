import IM1 from './198030912_2249794015156868_1377223952098544743_n-2.jpg';
import IM2 from './201588236_2251508324985437_678393345566770122_n.jpg';

  
  export default function Example() {
    return (
      <div className="flex items-center bg-gray-50">
                  <div className="z-0">
                <img
 
                src={IM2}
                className="flex invisible md:visible opacity-20 "
                layout="fixed"
                height="820"
                width="600"
                alt="alt"
                />
                </div>
        <div className="absolute grid items-center max-w-2xl grid-cols-1 px-4 py-24 lg:ml-24 z-5 gap-y-16 gap-x-20 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-20 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Kevin Gale</h2>
            <p className="mt-4 text-xl font-medium text-gray-900">I'm A Fishermen from Nova Scotia, who is concerned about the impact we are making on our Ocean's sustainability and the preservation of the wildlife that inhabit it. 
I am reaching out for your support so we can make sure Canada's Ocean Playground, will stay just that. 
I have donated and reached out to other organizations in the past trying to assist in the work and have been ignored or, there were no projects going on in my area. 
I cannot sit idle and wait for a chance to help with other projects, so I am laying down the foundation for a new effort with the Big Dirty Ocean Clean Up Association.
Our team is a bunch of like-minded individuals, passionate about the environment and motivated to make a difference.
Together with your help we can create a community of environmentally driven individuals, that can support and assist each other in the great work so our reach will span across the globe. 

            </p>
  

          </div>
          <div className="">
          <div>
                <img
 
                src={IM1}
                className="invisible object-cover rounded md:visible "
                layout=""
                alt="alt"
                />
                </div>

          </div>

        </div>
      </div>
    )
  }