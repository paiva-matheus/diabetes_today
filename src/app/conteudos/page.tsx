import { Carousel, Footer as FlowbiteFooter } from "flowbite-react";
import { BsInstagram, BsYoutube, BsTiktok } from "react-icons/bs";
import { Header } from "@/src/components/header";
import { Footer } from "@/src/components/footer";
import "../../styles/globals.css";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen gap-2 bg-gray-50 dark:bg-gray-800">
      <Header />
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center p-6">
        <section>
          <h1 className="mb-4 pt-2 text-center text-3xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-4xl">
            Canais que Educam sobre Diabetes
          </h1>
          <p className="mb-3 text-gray-600 dark:text-gray-400">
            Aqui, você encontrará uma seleção de criadores de conteúdo que, com
            suas experiências e conhecimentos, ajudam a aumentar a
            conscientização, disseminar informações e inspirar aqueles que
            convivem com a doença. Esses influenciadores, por meio de vídeos,
            postagens, blogs e outros formatos, abordam desde dicas sobre o
            controle do diabetes até histórias inspiradoras de superação,
            proporcionando um apoio essencial para quem busca entender melhor a
            condição e como viver de forma saudável com ela. Acompanhar essas
            pessoas não só é uma maneira de aprender, mas também de se conectar
            com uma comunidade engajada e solidária, onde a troca de
            experiências se torna um grande diferencial. Navegue por nossos
            destaques e descubra aqueles que mais se conectam com sua jornada!
          </p>
        </section>

        <section>
          <h2 className="py-4 text-2xl font-extrabold dark:text-white">
            Duda Dantas - Pâncreas Artificial
          </h2>

          <div className="flex  flex-col gap-4 md:flex-row">
            <Image
              src="/duda-pancreas-artificial.jpg"
              className="mx-auto rounded-md md:mx-0"
              alt="Logo"
              width={180}
              height={450}
            />
            <p className="mb-3 pb-2 text-gray-600 dark:text-gray-400 lg:w-[26rem]">
              ​Duda Dantas, conhecida como &quot;Pâncreas Artificial&quot;, é
              uma influenciadora digital e estudante de medicina que compartilha
              sua experiência com o diabetes tipo 1 para auxiliar outras pessoas
              a gerenciar a condição.
            </p>
          </div>

          <h3 className="py-2 text-lg font-extrabold dark:text-white">
            Presença Online:
          </h3>

          <ul className="flex flex-col gap-4">
            <li>
              <p className="mb-3 ml-2 text-gray-600 dark:text-gray-400">
                <strong>YouTube:</strong> No canal &quot;Duda Dantas - Pâncreas
                Artificial&quot;, ela compartilha dicas sobre controle
                glicêmico, desmistifica informações sobre diabetes e oferece
                orientações práticas para uma vida saudável com a doença.
              </p>
            </li>

            <li>
              <p className="mb-3 ml-2 text-gray-600 dark:text-gray-400">
                <strong>Instagram:</strong> Com mais de 198 mil seguidores, seu
                perfil &quot;Duda Dantas | Medicina&quot; é dedicado a promover
                hábitos saudáveis, disciplina e motivação para diabéticos.
              </p>
            </li>
          </ul>

          <h3 className="py-2 text-lg font-extrabold dark:text-white">
            Programas e Iniciativas:
          </h3>

          <p className="mb-3 ml-2 text-gray-600 dark:text-gray-400">
            <strong>Alta Performance com Diabetes (APD): </strong> Duda
            desenvolveu o APD, um programa que integra mentalidade, alimentação
            e exercício físico para ajudar diabéticos a adotarem hábitos
            saudáveis e alcançarem um controle glicêmico eficaz.
          </p>

          <p className="mb-3 pb-2 text-gray-600 dark:text-gray-400">
            <strong>Histórico Pessoal:</strong> Diagnosticada com diabetes tipo
            1 aos 8 anos, Duda enfrentou desafios relacionados à hipoglicemia e
            hiperglicemia. Determinada a melhorar seu controle glicêmico, ela
            aprofundou seus estudos sobre a doença e transformou sua experiência
            em conteúdo educativo para outros diabéticos.
          </p>

          <div className="mt-4 flex items-center space-x-6 sm:mt-0 ">
            <h3 className="py-2 text-lg font-extrabold dark:text-white">
              Redes sociais:
            </h3>
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <FlowbiteFooter.Icon
                href="https://www.youtube.com/@pancreasartificial"
                icon={BsYoutube}
                target="_blank"
              />
              <FlowbiteFooter.Icon
                href="https://www.instagram.com/pancreasartificial/"
                icon={BsInstagram}
                target="_blank"
              />
              <FlowbiteFooter.Icon
                href="https://www.tiktok.com/@pancreasartificial"
                icon={BsTiktok}
                target="_blank"
              />
            </div>
          </div>

          <div className="h-56 sm:h-64 xl:h-[30rem] 2xl:h-[30rem]">
            <Carousel slide={false}>
              <iframe
                className="h-[28rem] w-full"
                src="https://www.youtube.com/embed/CKkDyH4b4qs"
              ></iframe>
              <iframe
                className="h-[28rem] w-full"
                src="https://www.youtube.com/embed/AxA2oH-34tk"
              ></iframe>
              <iframe
                className="h-[28rem] w-full"
                src="https://www.youtube.com/embed/n_vX-NAlYD4"
              ></iframe>

              <iframe
                className="h-[28rem] w-full"
                src="https://www.youtube.com/embed/60hOS06uwNk"
              ></iframe>
            </Carousel>
          </div>
        </section>

        <section>
          <h2 className="py-4 text-2xl font-extrabold dark:text-white">
            Um Diabético
          </h2>

          <div className="flex  flex-col gap-4 md:flex-row">
            <Image
              src="/um-diabetico.jpg"
              className="mx-auto rounded-md md:mx-0"
              alt="Logo"
              width={180}
              height={450}
            />
            <p className="mb-3 pb-2 text-gray-600 dark:text-gray-400 lg:w-[26rem]">
              &quot;Um Diabético&quot; é um canal digital fundado por Tom Bueno,
              dedicado a informar e conscientizar sobre o diabetes. Com presença
              no YouTube e no Instagram, o canal compartilha conteúdo relevante
              sobre os tipos 1 e 2 da doença, abordando temas como monitoramento
              glicêmico, avanços tecnológicos no tratamento e histórias
              inspiradoras de pessoas que convivem com o diabetes.
            </p>
          </div>

          <h3 className="py-2 text-lg font-extrabold dark:text-white">
            Marcos Importantes:
          </h3>

          <ul className="flex flex-col gap-4">
            <li>
              <p className="mb-3 ml-2 text-gray-600 dark:text-gray-400">
                <strong>20 Milhões de Visualizações:</strong> Em outubro de
                2024, o canal atingiu a marca de 20 milhões de visualizações,
                refletindo seu impacto e relevância na comunidade diabética.
              </p>
            </li>

            <li>
              <p className="mb-3 ml-2 text-gray-600 dark:text-gray-400">
                <strong>
                  Edição Especial &quot;Diabetes Informa 2024&quot;:
                </strong>{" "}
                Para celebrar o Dia Mundial do Diabetes, foi lançada uma edição
                especial discutindo diagnóstico precoce, monitoramento contínuo
                e políticas públicas relacionadas ao diabetes.
              </p>
            </li>
          </ul>

          <h3 className="py-2 text-lg font-extrabold dark:text-white">
            Conteúdo Destacado:
          </h3>

          <ul className="flex flex-col gap-4">
            <li>
              <p className="mb-3 ml-2 text-gray-600 dark:text-gray-400">
                <strong>Vídeos Educativos:</strong> O canal oferece vídeos que
                desmistificam aspectos do diabetes, como o episódio &quot;O QUE
                NINGUÉM TE FALA&quot;, abordando desafios e realidades da
                convivência com a doença.
              </p>
            </li>

            <li>
              <p className="mb-3 ml-2 text-gray-600 dark:text-gray-400">
                <strong>Histórias Inspiradoras:</strong> Compartilha relatos de
                pessoas que superam desafios impostos pelo diabetes,
                incentivando a comunidade a manter hábitos saudáveis e
                positivos.
              </p>
            </li>
          </ul>

          <p className="mb-3 pb-2 text-gray-600 dark:text-gray-400">
            O canal &quot;Um Diabético&quot; se consolidou como uma fonte
            confiável de informação, apoio e inspiração para aqueles que
            convivem com o diabetes, promovendo a educação e o bem-estar da
            comunidade diabética.
          </p>

          <div className="mt-4 flex items-center space-x-6 sm:mt-0 ">
            <h3 className="py-2 text-lg font-extrabold dark:text-white">
              Redes sociais:
            </h3>
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <FlowbiteFooter.Icon
                href="https://www.youtube.com/@Umdiabetico"
                icon={BsYoutube}
                target="_blank"
              />
              <FlowbiteFooter.Icon
                href="https://www.instagram.com/umdiabetico/"
                icon={BsInstagram}
                target="_blank"
              />
              <FlowbiteFooter.Icon
                href="https://www.tiktok.com/@umdiabeticooficial"
                icon={BsTiktok}
                target="_blank"
              />
            </div>
          </div>

          <div className="h-56 sm:h-64 xl:h-[30rem] 2xl:h-[30rem]">
            <Carousel slide={false}>
              <iframe
                className="h-[28rem] w-full"
                src="https://www.youtube.com/embed/c1ibVExi8lc"
              ></iframe>
              <iframe
                className="h-[28rem] w-full"
                src="https://www.youtube.com/embed/2QnTDjcAXCE"
              ></iframe>
              <iframe
                className="h-[28rem] w-full"
                src="https://www.youtube.com/embed/yfS0N17oUWE"
              ></iframe>

              <iframe
                className="h-[28rem] w-full"
                src="https://www.youtube.com/embed/D1HYwzb8n9w"
              ></iframe>
            </Carousel>
          </div>
        </section>

        <section>
          <h2 className="py-4 text-2xl font-extrabold dark:text-white">
            Nunca vi 1 cientista
          </h2>

          <div className="flex flex-col gap-4 md:flex-row">
            <Image
              src="/nunca-vi-1.jpg"
              className="mx-auto rounded-md md:mx-0"
              alt="Foto com as influenciadoras Ana Bonassa e Laura
              Marise"
              width={220}
              height={480}
            />
            <p className="mb-3 pb-2 text-gray-600 dark:text-gray-400 lg:w-[26rem]">
              &quot;​Nunca Vi 1 Cientista&quot; é um projeto de divulgação
              científica fundado em 2018 pelas pesquisadoras Ana Bonassa e Laura
              Marise. O nome surgiu durante uma reunião de equipe, refletindo a
              ideia de que muitas pessoas, mesmo dentro de ambientes acadêmicos,
              não reconhecem cientistas em seu cotidiano.
            </p>
          </div>

          <p className="mb-3 mt-4 pb-2 text-gray-600 dark:text-gray-400">
            O objetivo principal do projeto é promover o entendimento sobre o
            funcionamento da ciência, desenvolver o pensamento crítico e
            combater a disseminação de informações falsas. Eles produzem
            conteúdo em diversas plataformas, como YouTube, Instagram, TikTok e
            Twitter, abordando temas das ciências exatas, humanas e biológicas.
            Seus vídeos desconstroem soluções milagrosas, ensinam a interpretar
            artigos científicos e apresentam outros divulgadores científicos.
          </p>

          <p className="mb-3 pb-2 text-gray-600 dark:text-gray-400">
            Este canal faz parte do Science Vlogs Brasil, um selo de qualidade
            colaborativo que reúne divulgadores de ciência confiáveis do Youtube
            Brasil.
          </p>

          <div className="mt-4 flex items-center space-x-6 sm:mt-0 ">
            <h3 className="py-2 text-lg font-extrabold dark:text-white">
              Redes sociais:
            </h3>
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <FlowbiteFooter.Icon
                href="https://www.youtube.com/@nuncavi1cientista"
                icon={BsYoutube}
                target="_blank"
              />
              <FlowbiteFooter.Icon
                href="https://www.instagram.com/nuncavi1cientista/"
                icon={BsInstagram}
                target="_blank"
              />
              <FlowbiteFooter.Icon
                href="https://www.tiktok.com/@nuncavi1cientista"
                icon={BsTiktok}
                target="_blank"
              />
            </div>
          </div>

          <div className="h-56 sm:h-64 xl:h-[30rem] 2xl:h-[30rem]">
            <Carousel slide={false}>
              <iframe
                className="h-[28rem] w-full"
                src="https://www.youtube.com/embed/D9wblEiP3f0"
              ></iframe>
              <iframe
                className="h-[28rem] w-full"
                src="https://www.youtube.com/embed/PxUijh1-oIY"
              ></iframe>
              <iframe
                className="h-[28rem] w-full"
                src="https://www.youtube.com/embed/mlyqICh87Gc"
              ></iframe>
              <iframe
                className="h-[28rem] w-full"
                src="https://www.youtube.com/embed/lNiiaU6XL4k"
              ></iframe>
            </Carousel>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
