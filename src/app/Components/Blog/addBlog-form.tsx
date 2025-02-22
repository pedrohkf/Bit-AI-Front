'use client'
import Button from '@/app/Components/forms/button';
import { useFormStatus } from "react-dom";
import { useBlogContext } from '@/context/BlogContext';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

function FormButton() {
    const { pending } = useFormStatus();

    return (
        <>
            {pending ? (
                <Button disabled={pending}>Criando...</Button>
            ) : (
                <Button>Criar</Button>
            )}
        </>
    );
}

export default function AddBlog() {
    const [message, setMessage] = useState<string>('')
    const { posts, setPosts } = useBlogContext()
    const router = useRouter();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const formattedPrompt = `Escreva um artigo profissional e detalhado sobre o tema "${message}" no formato de blog, estruturado da seguinte forma:

        -O título principal deve ser precedido por #.

        -A frase de efeito deve ser impactante e precedida por @.

        -O texto introdutório deve ter pelo menos quatro parágrafos e ser precedido por %, ele deve ser envolvente, apresentar o tema de forma clara e atrativa, utilizando storytelling ou dados relevantes para prender a atenção do leitor.

        - O desenvolvimento deve conter no mínimo quatro parágrafos, ser precedido por $ e aprofundar a discussão, trazendo exemplos, estatísticas, estudos de caso ou análises críticas para enriquecer o conteúdo.

        -Um subtítulo para dividir o conteúdo e melhorar a organização do texto deve ser precedido por |.

        -Um texto adicional que explore outro ângulo ou detalhe interessante do tema deve ser precedido por ?.

        - Um texto complementar precedido por &, que cative o leitor fazendo voltar e ler mais blogs por ser uma assunto recompensador

        -A conclusão deve ser impactante, encerrando o artigo com um pensamento final, uma chamada para ação ou uma reflexão, e ser precedida por *.

        O tom do texto deve ser profissional, fluido e rico em detalhes, utilizando uma linguagem clara e acessível para que o público compreenda e se envolva com o conteúdo. O artigo deve seguir as melhores práticas de SEO, incorporando palavras-chave estratégicas para melhorar a indexação e a experiência do leitor.

        Exemplo:

        #Liberdade de Expressão no Brasil: Desafios e Conquistas

        @ A liberdade de expressão é um dos pilares fundamentais de uma democracia saudável, mas no Brasil, ela é constantemente desafiada por questões políticas, sociais e culturais. 

        % A liberdade de expressão no Brasil tem uma história longa e conturbada. Em um país com tantas diversidades étnicas, culturais e políticas, o direito de se manifestar livremente sempre foi alvo de debates acirrados. Durante a ditadura militar (1964-1985), a censura impediu muitas vozes de se expressarem, e a luta por essa liberdade tem sido uma constante desde então. Atualmente, a democracia brasileira assegura esse direito, mas ainda existem várias questões a serem enfrentadas, principalmente em relação à polarização política e a disseminação de discursos de ódio. Embora a Constituição de 1988 garanta a liberdade de expressão, a prática desse direito no Brasil é muitas vezes complicada por atos de censura velada, acusações de fake news e limitações impostas por instituições e redes sociais. Além disso, o ambiente político brasileiro frequentemente leva à repressão de vozes críticas, colocando em risco a liberdade de expressão como um todo. No contexto digital, as redes sociais tornaram-se um campo fértil para debates e manifestações, mas também para o espalhamento de desinformação e ataques a figuras públicas. Essa complexa realidade coloca à prova o equilíbrio entre garantir o direito de expressão e combater conteúdos prejudiciais à sociedade.

        $ A Constituição Brasileira de 1988 é clara ao garantir a liberdade de expressão, mas na prática, essa garantia encontra limites, especialmente quando é confrontada com discursos de ódio, fake news e violência virtual. O marco legal das redes sociais, por exemplo, tenta regular esse equilíbrio, mas gera controvérsias sobre censura e controle da informação. Casos como os de jornalistas e influencers sendo alvos de processos judiciais por suas postagens nas redes sociais ilustram como a linha entre liberdade e abuso pode ser tênue. A polarização política no Brasil também afeta diretamente a liberdade de expressão. Ao longo dos últimos anos, a crítica ao governo e a expressão de opiniões contrárias se tornaram uma linha tênue, com perseguições e ameaças a quem se posiciona de forma crítica. Por outro lado, o uso de plataformas digitais por movimentos políticos para difundir suas ideias contribui para a formação de bolhas de informação, limitando a troca saudável de ideias. Além disso, o cenário de violência contra jornalistas é alarmante. De acordo com a Federação Nacional dos Jornalistas (FENAJ), o Brasil é um dos países mais perigosos para jornalistas, com frequentes ameaças e ataques. Essa realidade evidencia a fragilidade da proteção à liberdade de expressão, especialmente para aqueles que se arriscam a revelar verdades incómodas sobre a política e a corrupção.

        & A Lei de Liberdade de Imprensa, embora essencial para garantir a proteção da expressão jornalística, é frequentemente alvo de críticas. Muitos alegam que a lei não é suficientemente robusta para proteger jornalistas e críticos do governo de perseguições judiciais e da violência física. Além disso, as fake news e os discursos de ódio ainda são desafios que não têm uma solução definitiva no Brasil, o que gera a necessidade de um debate contínuo sobre a melhor forma de garantir uma internet livre, mas segura para todos.

        | O Papel das Redes Sociais na Liberdade de Expressão

        ? As redes sociais desempenham um papel central na disseminação da informação e na garantia da liberdade de expressão. No entanto, a falta de regulação eficaz dessas plataformas torna difícil monitorar e controlar abusos. A crescente influência dessas redes sociais na formação de opinião pública tornou-as protagonistas em discussões sobre democracia e censura. Mas até onde vai o direito de se expressar livremente nesses ambientes, sem prejudicar a ordem pública

        * A liberdade de expressão no Brasil está em um momento decisivo. As conquistas são muitas, mas ainda há muito a fazer para que esse direito seja de fato acessível a todos, sem restrições injustas ou perigos para a democracia. É essencial que o Brasil continue a lutar por um equilíbrio entre liberdade e responsabilidade, criando um ambiente onde todas as vozes possam ser ouvidas de maneira justa e respeitosa.

        Atenção:

        - Nada de respostas curtas ou superficiais. Cada seção deve ser rica em detalhes.

        - Nada de enrolação. O texto precisa ser direto, relevante e informativo.

        - Nada de reciclar frases. Cada parágrafo deve acrescentar algo novo e significativo.

        - Utilize palavras-chave estratégicas para otimização em SEO e melhore a escaneabilidade do texto com frases bem estruturadas.

        - Seja criativo e profissional. O objetivo é entregar um artigo que realmente agregue valor ao leitor e pareça escrito por um especialista no assunto.

        - Tudo em portugues Brasil.
    `

        const response = await axios.post(`http://localhost:2700/ia`, { message: formattedPrompt });

        const data = response.data;

        setPosts(data.response)

        console.log(posts)

        router.push('edit');
    }

    useEffect(() => {
        console.log(posts);
    }, [posts]);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="text" placeholder="text" value={message} onChange={(e) => setMessage(e.target.value)} />
                <FormButton />
            </form>
        </>
    )
}