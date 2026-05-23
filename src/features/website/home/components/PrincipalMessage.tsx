import principalImage from "../../../../assets/images/principal/principa-nems-ghotan.jpg"

function PrincipalMessage() {
  
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Message Content */}
          <div>
            <span className="text-secondary font-semibold uppercase tracking-wide">
              Principal’s Message
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-primary mt-3">
              Leading with 
              <span className="text-secondary">
                {" "}Vision & Commitment
              </span>
            </h2>

            <div className="mt-8">
              <h3 className="text-2xl font-bold text-primary">
                Mr. Prashant Kolhe Sir
              </h3>

              <p className="text-secondary font-medium mt-1">
                Principal
              </p>
            </div>

            <div className="mt-6 space-y-5 text-slate-600 leading-relaxed">
              <p>
                At Nathsagar English Medium School,
                we believe that education is not only
                about academic success but also about
                shaping responsible, disciplined, and
                confident individuals.
              </p>

              <p>
                Our mission is to create a learning
                environment where every student feels
                encouraged, supported, and inspired to
                discover their true potential.
              </p>

              <p>
                We remain committed to carrying forward
                the vision of quality English education
                while nurturing values, creativity,
                discipline, and overall development.
              </p>

              <p>
                Together with parents and teachers,
                we strive to build a brighter future
                for every child.
              </p>
            </div>
          </div>

          {/* Principal Image Placeholder */}
          <div className="relative order-2 md:order-2 flex justify-center">
            <div className="bg-white p-4 md:p-6 rounded-[2rem] shadow-xl border border-orange-100 w-full max-w-[360px] md:max-w-full">
                <div className="bg-gradient-to-b from-orange-50 to-white rounded-[1.5rem] p-4 flex justify-center items-center overflow-hidden">
                    <img
                        src={principalImage}
                        alt="Mr. Adinath D. Garje Sir"
                        className="w-full max-w-[280px] md:max-w-[420px] object-contain object-center rounded-[1rem]"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default PrincipalMessage;