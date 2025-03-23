import { Header } from "@/src/components/header";
import { Footer } from "@/src/components/footer";
import "../../styles/globals.css";

export default function Home() {
  return (
    <main className="min-h-screen gap-2 bg-gray-50 dark:bg-gray-800">
      <Header />
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center p-6">
        <section>
          <h1 className="mb-4 pt-2 text-center text-3xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-4xl">
            Tratamentos para Diabetes: A Importância do Acompanhamento Médico
          </h1>
          <p className="mb-3 text-gray-600 dark:text-gray-400">
            A diabetes é uma doença crônica que afeta a capacidade do corpo de
            produzir ou usar a insulina, um hormônio essencial para o controle
            dos níveis de glicose no sangue. O tratamento adequado da diabetes é
            crucial para evitar complicações a longo prazo, como doenças
            cardiovasculares, danos nos rins, problemas de visão e neuropatias.
            Existem diferentes tipos de tratamento para diabetes, sendo
            essencial que cada paciente seja acompanhado por um médico
            especializado para um manejo eficaz da condição.
          </p>
        </section>

        <section>
          <h2 className="py-4 text-2xl font-extrabold dark:text-white">
            Tratamentos para Diabetes Tipo 1
          </h2>

          <p className="mb-3 pb-2 text-gray-600 dark:text-gray-400">
            O tratamento para a diabetes tipo 1 gira em torno do fornecimento de
            insulina ao corpo, visto que ele não é capaz de produzir o hormônio
            de forma suficiente. O acompanhamento médico regular é essencial
            para ajustar as doses de insulina de acordo com a necessidade do
            paciente, além de monitorar a glicose no sangue. Os principais
            métodos de tratamento incluem:
          </p>

          <ul className="flex flex-col gap-4">
            <li>
              <p className="mb-3 ml-2 text-gray-600 dark:text-gray-400">
                <strong className="dark:text-white">Insulina:</strong> O
                principal tratamento para diabetes tipo 1 é a administração de
                insulina. Existem diferentes tipos de insulina, como de ação
                rápida, intermediária e prolongada, que são usadas conforme a
                necessidade de controle glicêmico do paciente.
              </p>
            </li>

            <li>
              <p className="mb-3 ml-2 text-gray-600 dark:text-gray-400">
                <strong className="dark:text-white">
                  Contagem de carboidratos:
                </strong>{" "}
                Pacientes com diabetes tipo 1 precisam aprender a contar os
                carboidratos em suas refeições para ajustar as doses de insulina
                de acordo com a quantidade de carboidratos consumidos.
              </p>
            </li>

            <li>
              <p className="mb-3 ml-2 text-gray-600 dark:text-gray-400">
                <strong className="dark:text-white">
                  Monitores contínuos de glicose:
                </strong>{" "}
                Alguns pacientes utilizam dispositivos que medem os níveis de
                glicose continuamente, ajudando a ajustar os tratamentos de
                forma mais precisa.
              </p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="py-4 text-2xl font-extrabold dark:text-white">
            Tratamentos para Diabetes Tipo 2
          </h2>

          <p className="mb-3 pb-2 text-gray-600 dark:text-gray-400">
            No tratamento da diabetes tipo 2, o objetivo principal é melhorar a
            resposta do corpo à insulina e controlar os níveis de glicose no
            sangue. Em muitos casos, mudanças no estilo de vida, como dieta e
            exercício físico, são fundamentais para o controle da doença. Os
            tratamentos para diabetes tipo 2 incluem:
          </p>

          <ul className="flex flex-col gap-4">
            <li>
              <p className="mb-3 ml-2 text-gray-600 dark:text-gray-400">
                <strong className="dark:text-white">Medicamentos orais:</strong>{" "}
                Diversos medicamentos são prescritos para pacientes com diabetes
                tipo 2. Alguns ajudam a melhorar a ação da insulina no corpo,
                enquanto outros estimulam a produção de insulina ou retardam a
                absorção de glicose no intestino.
              </p>
            </li>

            <li>
              <p className="mb-3 ml-2 text-gray-600 dark:text-gray-400">
                <strong className="dark:text-white">Insulina:</strong> Em casos
                mais avançados, quando os medicamentos orais não são
                suficientes, a insulina pode ser necessária, especialmente se a
                função do pâncreas se deteriorar ao longo do tempo.
              </p>
            </li>

            <li>
              <p className="mb-3 ml-2 text-gray-600 dark:text-gray-400">
                <strong className="dark:text-white">
                  Mudanças no estilo de vida:
                </strong>{" "}
                A perda de peso, uma alimentação balanceada e a prática regular
                de exercícios são fundamentais para controlar a glicose no
                sangue. Pacientes com diabetes tipo 2 frequentemente precisam de
                acompanhamento de nutricionistas e educadores físicos.
              </p>
            </li>

            <li>
              <p className="mb-3 ml-2 text-gray-600 dark:text-gray-400">
                <strong className="dark:text-white">
                  Controle da pressão arterial e colesterol:
                </strong>{" "}
                Pacientes com diabetes tipo 2 têm maior risco de doenças
                cardiovasculares, por isso o controle da pressão arterial e dos
                níveis de colesterol também é parte do tratamento.
              </p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="py-4 text-2xl font-extrabold dark:text-white">
            O Papel Crucial do Acompanhamento Médico
          </h2>

          <p className="mb-3 pb-2 text-gray-600 dark:text-gray-400">
            Independente do tipo de diabetes, o acompanhamento médico é
            essencial para garantir que o tratamento esteja funcionando
            corretamente e para ajustar as abordagens conforme necessário. Cada
            paciente tem necessidades específicas, e os tratamentos devem ser
            personalizados. O médico é quem pode:
          </p>

          <ul className="flex flex-col gap-4">
            <li>
              <p className="mb-3 ml-2 text-gray-600 dark:text-gray-400">
                <strong className="dark:text-white">
                  Ajustar a medicação:
                </strong>{" "}
                À medida que a doença evolui, a necessidade de ajuste nas doses
                de insulina ou medicamentos orais pode ser necessária.
              </p>
            </li>

            <li>
              <p className="mb-3 ml-2 text-gray-600 dark:text-gray-400">
                <strong className="dark:text-white">
                  Prevenir complicações:
                </strong>{" "}
                Com um acompanhamento adequado, o médico pode monitorar a
                presença de complicações associadas à diabetes, como doenças
                renais ou problemas circulatórios, realizando exames periódicos.
              </p>
            </li>

            <li>
              <p className="mb-3 ml-2 text-gray-600 dark:text-gray-400">
                <strong className="dark:text-white">
                  Educar sobre o autocontrole:
                </strong>{" "}
                O médico também orienta sobre como o paciente pode monitorar a
                glicose no sangue, como interpretar os resultados e como lidar
                com flutuações nos níveis de glicose.
              </p>
            </li>

            <li>
              <p className="mb-3 ml-2 text-gray-600 dark:text-gray-400">
                <strong className="dark:text-white">
                  Orientação sobre mudanças no estilo de vida:
                </strong>{" "}
                Além de medicação, a orientação médica é essencial para a
                implementação de hábitos de vida saudáveis que impactam
                diretamente no controle da doença.
              </p>
            </li>
          </ul>

          <p className="my-3 pb-2 text-gray-600 dark:text-gray-400">
            O tratamento da diabetes exige uma abordagem cuidadosa, baseada no
            tipo da doença e nas necessidades individuais de cada paciente. Seja
            por meio da administração de insulina, medicamentos orais ou
            mudanças no estilo de vida, a chave para o controle eficaz da doença
            é a combinação de tratamento médico adequado e monitoramento
            contínuo. Acompanhado por um profissional de saúde qualificado, o
            paciente pode viver de forma saudável e prevenir complicações
            graves. Portanto, é essencial seguir as orientações médicas e
            realizar consultas regulares para garantir um manejo eficaz da
            diabetes. Em caso de dúvida sobre o tratamento adequado para a sua
            condição, não hesite em buscar o apoio de um médico especialista.
          </p>
        </section>
      </div>

      <Footer />
    </main>
  );
}
