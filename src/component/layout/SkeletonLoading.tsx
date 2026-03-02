export function SkeletonLoading() {
  const placeholders = Array.from({ length: 8 });

  return (
    <div className="mb-20 w-full px-5 md:mt-0 md:px-24">
      <div className="flex flex-col items-center justify-center">
        <section className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {placeholders.map((_, index) => (
            <div
              key={index}
              className="translate-y-8 rounded-2xl border border-stone-200 bg-linear-to-br from-stone-50 to-stone-100 p-6"
            >
              <div className="mb-4 flex justify-center">
                <div className="h-20 w-20 animate-pulse rounded-full border-4 border-white bg-stone-200" />
              </div>

              <div className="flex flex-1 flex-col justify-between text-center">
                <div>
                  <div className="mx-auto mb-2 h-5 w-3/4 animate-pulse rounded bg-stone-200" />
                  <div className="mx-auto mb-5 h-4 w-5/6 animate-pulse rounded bg-stone-200" />
                </div>

                <div className="space-y-3">
                  <div className="h-9 w-full animate-pulse rounded-full bg-stone-300" />
                  <div className="h-9 w-full animate-pulse rounded-full border border-stone-300/50 bg-stone-200/80" />
                </div>
                
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
