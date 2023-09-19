export default function RSVPSkeleton() {
  return (
    <div className="mx-auto mb-4 w-[350px] rounded-lg border border-gray-200 bg-white shadow-xl dark:border-cyan-800 dark:bg-very-dark-blue dark:shadow-cyan-900">
      <h1 className="mt-4 text-center text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
        RSVP
      </h1>
      <div className="mx-auto my-1 flex w-full flex-row items-center justify-center">
        <svg
          className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth={4}
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        <h2 className="text-center text-lg font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
          Loading
        </h2>
      </div>
      <div className="px-6 py-4">
        <div className="flex animate-pulse flex-col">
          <section id="skeleton-toggles" className="mb-6">
            <div id="skeleton-toggle-coming" className="flex h-[30px] w-full">
              <div className="my-auto h-6 w-11 rounded-full bg-slate-700" />
              <div className="my-auto ml-3 h-6 w-14 rounded-full bg-slate-700" />
            </div>
            <div id="skeleton-toggle-avec" className="flex h-[30px] w-full">
              <div className="my-auto h-6 w-11 rounded-full bg-slate-700" />
              <div className="my-auto ml-3 h-6 w-14 rounded-full bg-slate-700" />
            </div>
          </section>
          <section id="skeleton-text-fields" className="mb-3">
            <div
              id="skeleton-food-restrictions"
              className="mb-4 flex h-[70px] w-full flex-col"
            >
              <div className="my-auto h-4 w-24 rounded-full bg-slate-700" />
              <div className="my-auto h-10 w-full rounded-lg bg-slate-700" />
            </div>
            <div
              id="skeleton-extra-info"
              className="flex h-[70px] w-full flex-col"
            >
              <div className="my-auto h-4 w-24 rounded-full bg-slate-700" />
              <div className="my-auto h-10 w-full rounded-lg bg-slate-700" />
            </div>
          </section>
          <section id="skeleton-submit">
            <div className="my-auto h-9 w-full rounded-lg bg-slate-700" />
          </section>
        </div>
      </div>
    </div>
  );
}
