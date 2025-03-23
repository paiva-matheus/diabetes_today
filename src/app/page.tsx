import { Carousel } from "flowbite-react";
import { Header } from "@/src/components/header";
import { Footer } from "@/src/components/footer";
import "../styles/globals.css";

export default function Home() {
  return (
    <main className="min-h-screen gap-2 bg-gray-50 dark:bg-gray-800">
      <Header />
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center p-6">
        <section>
          <h1 className="mb-4 pt-2 text-center text-3xl text-gray-900 dark:text-white md:text-3xl lg:text-4xl">
            O que é Diabetes
          </h1>
          <p className="mb-3 text-gray-600 dark:text-gray-400">
            A diabetes é uma doença crônica que ocorre quando o corpo não
            consegue produzir insulina suficiente ou não consegue utilizá-la de
            forma eficiente. A insulina é um hormônio fundamental para o
            controle da glicose (açúcar) no sangue. Quando esse controle falha,
            o nível de glicose no sangue pode se elevar, causando uma série de
            complicações de saúde a longo prazo, como doenças cardíacas,
            problemas renais, danos nos nervos, entre outros.
          </p>

          <div className="h-56 sm:h-64 xl:h-[30rem] 2xl:h-[30rem]">
            <Carousel slide={false}>
              <iframe
                className="h-[28rem] w-full"
                src="https://www.youtube.com/embed/Lx_iVRnjk7o"
              ></iframe>
              <iframe
                className="h-[28rem] w-full"
                src="https://www.youtube.com/embed/aErKsc2D8qQ"
              ></iframe>
              <iframe
                className="h-[28rem] w-full"
                src="https://www.youtube.com/embed/lNiiaU6XL4k"
              ></iframe>
            </Carousel>
          </div>
        </section>

        <section>
          <h2 className="py-4 text-2xl font-extrabold dark:text-white">
            Principais Tipos de Diabetes
          </h2>

          <ol className="flex flex-col gap-4">
            <li>
              <h3 className="dark:text-white">1. Diabetes Tipo 1</h3>
              <p className="mb-3 ml-2 text-gray-600 dark:text-gray-400">
                É uma condição autoimune, geralmente diagnosticada em crianças e
                jovens adultos, onde o sistema imunológico do corpo ataca as
                células do pâncreas que produzem insulina. Isso leva a uma
                produção insuficiente ou inexistente de insulina. O tratamento
                envolve a administração diária de insulina.
              </p>
            </li>
            <li>
              <h3 className="dark:text-white">2. Diabetes Tipo 2</h3>
              <p className="mb-3 ml-2 text-gray-600 dark:text-gray-400">
                O tipo mais comum, geralmente associado a fatores como
                sobrepeso, sedentarismo e genética. Nesse caso, o corpo se torna
                resistente à insulina, ou o pâncreas não consegue produzir o
                suficiente. A diabetes tipo 2 pode ser controlada com mudanças
                no estilo de vida, medicamentos orais e, em alguns casos,
                insulina.
              </p>
            </li>

            <li>
              <h3 className="dark:text-white">3. Diabetes Gestacional</h3>
              <p className="mb-3 ml-2 text-gray-600 dark:text-gray-400">
                Acontece durante a gravidez e geralmente desaparece após o
                parto, mas aumenta o risco da mãe desenvolver diabetes tipo 2 no
                futuro. Para o bebê, pode haver risco de nascimentos mais
                pesados ou complicações no nascimento.
              </p>
            </li>
          </ol>
        </section>

        <section>
          <h2 className="py-4 text-2xl font-extrabold dark:text-white">
            Primeiros Passos Após o Diagnóstico
          </h2>

          <p className="mb-3 pb-2 text-gray-600 dark:text-gray-400">
            Receber o diagnóstico de diabetes pode ser um momento assustador,
            mas é importante manter a calma e entender que a doença é
            controlável com os cuidados certos. Após o diagnóstico, alguns
            primeiros passos são essenciais:
          </p>

          <ol className="flex flex-col gap-4">
            <li>
              <h3 className="dark:text-white">1. Educação sobre a doença</h3>
              <p className="mb-3 ml-2 text-gray-600 dark:text-gray-400">
                Entender como a diabetes afeta o corpo e como controlar os
                níveis de glicose é fundamental. Busque informações confiáveis e
                converse com seu médico ou educador em diabetes.
              </p>
            </li>
            <li>
              <h3 className="dark:text-white">
                2. Adotar uma alimentação saudável
              </h3>
              <p className="mb-3 ml-2 text-gray-600 dark:text-gray-400">
                Uma dieta balanceada, com baixo teor de açúcar e rica em fibras,
                pode ajudar a controlar os níveis de glicose. Consultar um
                nutricionista especializado pode ser útil para elaborar um plano
                alimentar adequado.
              </p>
            </li>

            <li>
              <h3 className="dark:text-white">
                3. Praticar atividades físicas
              </h3>
              <p className="mb-3 ml-2 text-gray-600 dark:text-gray-400">
                O exercício regular melhora a sensibilidade do corpo à insulina
                e ajuda a controlar os níveis de glicose. Consulte um médico
                antes de iniciar qualquer regime de atividades físicas.
              </p>
            </li>

            <li>
              <h3 className="dark:text-white">
                4. Monitoramento constante da glicose
              </h3>
              <p className="mb-3 ml-2 text-gray-600 dark:text-gray-400">
                O acompanhamento regular dos níveis de glicose no sangue é
                essencial para garantir que a doença esteja sendo bem
                controlada.
              </p>
            </li>

            <li>
              <h3 className="dark:text-white">
                5. Uso de medicamentos, se necessário
              </h3>
              <p className="mb-3 ml-2 text-gray-600 dark:text-gray-400">
                Dependendo do tipo de diabetes, pode ser necessário tomar
                medicamentos orais ou injetáveis, como insulina. Siga sempre as
                orientações do seu médico.
              </p>
            </li>
          </ol>

          <p className="mb-3 text-gray-600 dark:text-gray-400">
            <strong>Lembre-se:</strong> com a abordagem certa, é possível levar
            uma vida saudável e equilibrada mesmo com a diabetes. O controle
            eficaz começa com cuidados simples, mas essenciais, que você pode
            incorporar ao seu dia a dia!
          </p>
        </section>
      </div>

      <Footer />
    </main>
  );
}
