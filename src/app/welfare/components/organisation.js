'use client';

import { useState, useEffect } from 'react';

export default function Organisation({ title, desc, imageSrc, routeLink }) {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    // This forces a rerender, so the date is rendered
    // the second time but not the first
    setHydrated(true);
  }, []);
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }

  const data = [
    {
      title: 'KidSTART',
      desc: 'We are looking for volunteers with their own transport to help distribute milk powder and cereals to our KidSTART families!',
      imageSrc:
        'https://www.volunteer.gov.sg/images/default-source/opportunity/3bcb5731-f181-49dd-9370-8ccb74790782.png?Status=Master&sfvrsn=17cb870f_1',
      routeLink: 'https://www.volunteer.gov.sg/volunteer/opportunity/details/?id=1e837722-d1fa-ed11-aa0f-c25428dca539',
    },
    {
      title: 'KidSTART',
      desc: 'We are looking for volunteers to help us pack Welcome Packs for our KidSTART children.',
      imageSrc:
        'https://www.volunteer.gov.sg/images/default-source/opportunity/2b95d36b-f032-4b02-ba4e-7e55fe9c95d0.png?Status=Master&sfvrsn=52c2e764_0',
      routeLink: 'https://www.volunteer.gov.sg/volunteer/opportunity/details/?id=f9eb35c5-65f5-ed11-aa0e-f8536593cd90',
    },
    {
      title: 'Youth Corps Singapore',
      desc: 'Join us in this meaningful event by signing up to be a Game Facilitator, Befriender or Event Runner!',
      imageSrc:
        'https://www.volunteer.gov.sg/images/default-source/opportunity/1e8f7b39-3627-4dc5-9615-524292bbb824.jpg?Status=Master&sfvrsn=58af1931_0',
      routeLink: 'https://www.volunteer.gov.sg/volunteer/opportunity/details/?id=fc40d8a0-43fa-ed11-aa0a-c22f118e55a9',
    },
    {
      title: 'Youth Corps Singapore',
      desc: 'If you are interested to lead your own YEP trip, come join us for our upcoming YEP info-session – Lead with YEPtitude: Inspiring Youth Leaders! ',
      imageSrc:
        'https://www.volunteer.gov.sg/images/default-source/opportunity/3a514905-69c3-4a87-b40c-5d8e05a57843.jpg?Status=Master&sfvrsn=831b61af_1',
      routeLink: 'https://www.volunteer.gov.sg/volunteer/opportunity/details/?id=a2edcb0c-22f6-ed11-aa0a-c22f118e55a9',
    },
    {
      title: 'Team Nila',
      desc: 'Join us and be part of the celebration through sports by volunteering in the competitions as a Team Nila Volunteer now!',
      imageSrc:
        'https://www.volunteer.gov.sg/images/default-source/opportunity/b91119ad-b84b-46a1-ac2e-0cb1b65943ce.jpg?Status=Master&sfvrsn=f80d2e9e_0',
      routeLink: 'https://www.volunteer.gov.sg/volunteer/opportunity/details/?id=796a291e-ebf9-ed11-aa0a-c22f118e55a9',
    },
    {
      title: 'Team Nila',
      desc: 'Assist Active Health Coach with their engagement to advocate for AH and its assessments, screenings and programmes available!',
      imageSrc:
        'https://www.volunteer.gov.sg/images/default-source/opportunity/3f7ab89f-baa4-46bc-b136-f2f99979c776.png?Status=Master&sfvrsn=ca86499f_0',
      routeLink: 'https://www.volunteer.gov.sg/volunteer/opportunity/details/?id=f2008352-b6f6-ed11-aa0a-c22f118e55a9',
    },
    {
      title: 'Team Nila',
      desc: 'Assist the Active Health Coaches on the assessment that will be conducted on-site for the participates!',
      imageSrc:
        'https://www.volunteer.gov.sg/images/default-source/opportunity/47df6366-4c7a-44d8-a936-bbfd23c303e8.jpg?Status=Master&sfvrsn=ba4b3f38_0',
      routeLink: 'https://www.volunteer.gov.sg/volunteer/opportunity/details/?id=0749d409-6cf5-ed11-aa0e-f8536593cd90',
    },
  ];

  return (
    <div>
      <div>
        <h1 className="my-5 text-center text-2xl font-semibold text-cyan-700"> Start Volunteering! </h1>
      </div>
      <div className="mx-auto grid max-h-[70vh] w-8/12 grid-cols-1 gap-4 overflow-auto md:w-full md:grid-cols-3 lg:w-11/12 lg:grid-cols-4">
        {data.map((item, index) => (
          <div className="flex justify-center p-4" key={index}>
            <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow">
              <div className="p-5">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                <div className=" ">
                  <img src={item.imageSrc} />
                </div>

                <div className="overflow-hidden md:h-[16vh] lg:h-[15vh]">
                  <p className="text-md my-3 font-normal text-gray-700 dark:text-gray-400">{item.desc}</p>
                </div>
                <p className="text-sm text-gray-600">5 points</p>
                <a
                  href={item.routeLink}
                  className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    aria-hidden="true"
                    className="-mr-1 ml-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
