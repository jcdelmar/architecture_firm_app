import {
  close,
  logo_notext,
  menu,
  fr1,
  fr2,
  fr3,
  fr4,
  fr5,
  fr6,
  house1,
  house2,
  house3,
  house4,
  house5,
  house6,
  house7,
  house8,
} from "../assets";

import styles from "../style";

const Hero = () => {
  return (
    <div className={`bg-gray-100 min-h-auto mb-auto ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <section id="home">
          <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            <div className="rounded overflow-hidden shadow-md">
              <img className="w-full h-80" src={fr1} alt="Mountain" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Project 1</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
            </div>

            <div className="rounded overflow-hidden shadow-md">
              <img className="w-full h-80 " src={fr2} alt="Mountain" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Project 2</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
            </div>

            <div className="rounded overflow-hidden shadow-md">
              <img className="w-full h-80" src={fr3} alt="Mountain" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Project 3</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
            </div>

            <div className="rounded overflow-hidden shadow-md">
              <img className="w-full h-80" src={fr4} alt="Mountain" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Project 4</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
            </div>

            <div className="rounded overflow-hidden shadow-md">
              <img className="w-full h-80" src={fr5} alt="Mountain" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Project 5</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
            </div>

            <div className="rounded overflow-hidden shadow-md">
              <img className="w-full h-80" src={fr6} alt="Mountain" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Project 6</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
            </div>

            <div className="rounded overflow-hidden shadow-md">
              <img className="w-full h-80" src={fr1} alt="Mountain" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">DA</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
