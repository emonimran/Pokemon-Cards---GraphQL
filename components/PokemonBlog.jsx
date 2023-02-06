import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Sidebar from "../assets/media_assets/Left.png";
import Image1 from "../assets/media_assets/Image01.png";
import Image2 from "../assets/media_assets/Image02.png";
import Image3 from "../assets/media_assets/Image03.png";
import Image4 from "../assets/media_assets/Image04.png";
import Image5 from "../assets/media_assets/Image05.png";
import useMediaQuery from "../components/hooks/useMediaQuery";

function PokemonBlog() {
  const isSmallScreen = useMediaQuery("(max-width: 430px)");

  return (
    <section className="xs:flex">
      {!isSmallScreen ? (
        <>
          <Image src={Sidebar} alt="sidebar" className="w-[6%]"></Image>

          <div className="bg-white w-15/16 py-20">
            {/* Heading */}

            <div className="flex items-center justify-center">
              <div
                className={`${styles.background_brush} text-blue text-4xl font-bold before:w-[400px] before:left-0 text-center`}
              >
                Ash & Pikachu Arrive in <br /> Pokémon Universe
              </div>
            </div>

            {/* Blog */}
            <div className="flex mt-16 text-sm mx-10 text-justify">
              {/* Left Side */}
              <div className="w-1/2 mr-4">
                <div className="float-right ml-4">
                  <Image src={Image3} alt="pika" className=" mb-4 w-44 h-44" />
                  <Image src={Image2} alt="pika" className="w-44 h-44" />
                </div>

                <h5>
                  Lorem ipsum dolor sit amet consectetur. Risus cursus nibh
                  elementum ornare a aliquet ac. Feugiat scelerisque ultrices
                  tempor facilisi tempus risus nunc. Proin quis morbi posuere
                  nisl etiam scelerisque. Proin pretium gravida semper ut erat
                  nisi. Pulvinar ac mattis porta amet et. Nisl urna non fames
                  felis leo. Vitae pulvinar sed viverra sit pretium lorem
                  elementum. Iaculis sit maecenas sodales mi convallis justo
                  aliquam. Tincidunt semper ut ornare vivamus lectus.
                </h5>
                <h5 className="my-4">
                  <Image
                    src={Image4}
                    alt="pickachu"
                    className="w-44 h-44 md:float-right sm:float-left m-3 md:mr-0 sm:ml-0 md:ml-3 mt-0"
                  />
                  Lorem ipsum dolor sit amet consectetur. Turpis integer massa
                  consectetur sed enim quis viverra. Vestibulum eu nibh dolor
                  semper. Nisl feugiat quis nec odio pulvinar feugiat velit.
                  Nulla massa sit morbi morbi. Tortor viverra eget lacus
                  feugiat. Tempus vitae vitae orci at ultrices nisi diam
                  faucibus. Ultricies in cursus volutpat aliquam turpis urna in
                  sed. Hendrerit arcu sit lectus adipiscing egestas semper nunc.
                  Ante consectetur id congue pulvinar libero tristique et orci.
                  Platea convallis dictum dui augue. Tincidunt mattis urna sit
                  semper sed duis feugiat mi.
                </h5>

                <h5 className="mb-4">
                  Lorem ipsum dolor sit amet consectetur. Tincidunt at cras
                  tortor non volutpat quisque facilisis. Ultricies consequat sed
                  vitae ac. Nisl eu nam id lectus tellus sit egestas. Orci
                  iaculis et vehicula nisi facilisi neque lorem. In vulputate
                  feugiat lobortis eros viverra. Turpis viverra vel fames enim
                  tortor. Scelerisque dictumst aliquam gravida eget ut accumsan.
                  A est dis platea vitae blandit quis. Ultricies ac at urna vel
                  morbi diam. Donec ut sit sit et. Etiam cum faucibus eu
                  elementum ut fermentum in cursus.{" "}
                </h5>

                <h5 className="my-4">
                  At a enim parturient id. Suspendisse ullamcorper fermentum
                  accumsan diam tellus. Nibh pretium ultrices scelerisque dolor
                  at etiam lectus gravida sed. Sit in turpis suspendisse et
                  aliquam. Vulputate sit phasellus proin eget arcu. Enim nec
                  ante velit erat nibh nunc amet. Tellus at sit imperdiet non.
                  Cras dictum curabitur urna mauris in. Ut dui odio sagittis ut
                  imperdiet ultricies mauris ac.
                </h5>
              </div>

              {/* Right Side */}
              <div className="w-1/2">
                <h5 className="mb-3">
                  Lorem ipsum dolor sit amet consectetur. Risus cursus nibh
                  elementum ornare a aliquet ac. Feugiat scelerisque ultrices
                  tempor facilisi tempus risus nunc. Proin quis morbi posuere
                  nisl etiam scelerisque. Proin pretium gravida semper ut erat
                  nisi. Pulvinar ac mattis porta amet et. Nisl urna non fames
                  felis leo. Vitae pulvinar sed viverra .
                </h5>

                <h5 className="my-4 clear-left">
                  <Image
                    src={Image5}
                    alt="pickachu"
                    className="w-44 h-44 float-left m-3 mt-2 ml-0"
                  />
                  Lorem ipsum dolor sit amet consectetur. Turpis integer massa
                  consectetur sed enim quis viverra. Ante consectetur id congue
                  pulvinar libero tristique et orci. Platea convallis dictum dui
                  augue. Vestibulum eu nibh dolor semper. Nisl feugiat quis nec
                  odio pulvinar feugiat velit. Nulla massa sit morbi morbi.
                  Tortor viverra eget lacus feugiat. Tempus vitae vitae orci at
                  ultrices nisi diam faucibus. Ultricies in cursus volutpat
                  aliquam turpis urna in sed. Hendrerit arcu sit lectus
                  adipiscing egestas semper nunc. Ante consectetur id congue
                  pulvinar libero tristique et orci. Ante consectetur id congue
                </h5>

                <h5 className="mb-4 mt-4 clear-left">
                  <Image
                    src={Image1}
                    alt="pickachu"
                    className="w-44 h-44 float-left m-3 mt-2 ml-0"
                  />
                  Lorem ipsum dolor sit amet consectetur. Tincidunt at cras
                  tortor non volutpat quisque facilisis. Ultricies consequat sed
                  vitae ac. Nisl eu nam id lectus tellus sit egestas. Orci
                  iaculis et vehicula nisi facilisi neque lorem. In vulputate
                  feugiat lobortis eros viverra. Turpis viverra vel fames enim
                  tortor. Scelerisque dictumst aliquam gravida eget ut accumsan.
                  A est dis platea vitae blandit quis. Ultricies ac at urna vel
                  morbi diam. Donec ut sit sit et. Etiam cum faucibus eu
                  elementum ut fermentum in cursus. Ante consectetur id congue
                  Ante consectetur id congue Ante consectetur id congue pulvinar
                  libero tristique et orci. Platea convallis dictum dui augue.
                </h5>

                <h5 className="my-4 clear-left">
                  At a enim parturient id. Suspendisse ullamcorper fermentum
                  accumsan diam tellus. Nibh pretium ultrices scelerisque dolor
                  at etiam lectus gravida sed. Sit in turpis suspendisse et
                  aliquam. At a enim parturient id. Suspendisse ullamcorper
                  fermentum accumsan diam tellus. Nibh pretium ultrices
                  scelerisque dolor at etiam lectus gravida sed. Sit in turpis
                  suspendisse et aliquam. Vulputate sit phasellus proin eget
                  arcu. Enim nec ante velit erat nibh nunc amet. Tellus at sit
                  imperdiet non. Cras dictum curabitur urna mauris in. Ut dui
                  odio sagittis ut imperdiet ultricies mauris ac. A sit id etiam
                  vitae non posuere tristique. Morbi sit mi sed nam amet
                  tristique tellus. Sed quam aliquam pharetra.
                </h5>
              </div>
            </div>
          </div>
          <Image src={Sidebar} alt="sidebar" className="w-[6%]"></Image>
        </>
      ) : (
        <>
          <div className="flex items-center justify-center mb-8">
            <div
              className={`${styles.background_brush} text-blue text-2xl font-bold before:w-[300px] text-center before:left-[-14px] mt-16`}
            >
              Ash & Pikachu Arrive in <br /> Pokémon Universe
            </div>
          </div>
          <div className="mx-4">
            <h5>
              Lorem ipsum dolor sit amet consectetur. Risus cursus nibh
              elementum ornare a aliquet ac. Feugiat scelerisque ultrices tempor
              facilisi tempus risus nunc. Proin quis morbi posuere nisl etiam
              scelerisque. Proin pretium gravida semper ut erat nisi. Pulvinar
              ac mattis porta amet et. Nisl urna non fames felis leo. Vitae
              pulvinar sed viverra sit pretium lorem elementum. Iaculis sit
              maecenas sodales mi convallis justo aliquam. Tincidunt semper ut
              ornare vivamus lectus.
            </h5>
            <div className="flex items-center justify-center">
              <div className="flex my-8 h-72 gap-3">
                <div className="mt-16">
                  <Image src={Image4} alt="pickachu" className="w-28 h-28" />
                </div>
                <div>
                  <Image src={Image3} alt="pika" className="w-28 h-28 mb-3" />
                  <Image src={Image2} alt="pika" className="w-28 h-28" />
                </div>
                <div className="mt-16">
                  <Image
                    src={Image5}
                    alt="pickachu"
                    className="w-28 h-28 mb-3"
                  />
                  <Image src={Image1} alt="pickachu" className="w-28 h-28" />
                </div>
              </div>
            </div>
            <h5>
              Lorem ipsum dolor sit amet consectetur. Risus cursus nibh
              elementum ornare a aliquet ac. Feugiat scelerisque ultrices tempor
              facilisi tempus risus nunc. Proin quis morbi posuere nisl etiam
              scelerisque. Proin pretium gravida semper ut erat nisi. Pulvinar
              ac mattis porta amet et. Nisl urna non fames felis leo. Vitae
              pulvinar sed viverra sit pretium lorem elementum. Iaculis sit
              maecenas sodales mi convallis justo aliquam. Tincidunt semper ut
              ornare vivamus lectus.
            </h5>
          </div>
        </>
      )}
    </section>
  );
}

export default PokemonBlog;
