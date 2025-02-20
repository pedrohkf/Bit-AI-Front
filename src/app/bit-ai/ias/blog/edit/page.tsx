'use client'
import { useBlogContext } from '@/context/BlogContext';
import Button from '@/app/Components/forms/button';
import { FormEvent, useState } from 'react';
import { useFormStatus } from 'react-dom';
import PostBlog from '@/actions/blog-post';

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

export default function Page() {
  const { posts } = useBlogContext();
  const [imgLink, setImgLink] = useState("");

  const titleRegex = /#(.*)/
  const catchyPhraseTextRegex = /#####(.*)/
  const introductoryTextRegex = /##(.*)/
  const developmentTextRegex = /###(.*)/
  const complementTextRegex = /####(.*)/
  const conclusionRegex = /#####(.*)/
  const subTitleRegex = /@(.*)/
  const textComplementRegex = /@@(.*)/

  const titleMatch = posts.match(titleRegex)
  const catchyPhraseMatch = posts.match(catchyPhraseTextRegex)
  const introductoryMatch = posts.match(introductoryTextRegex)
  const developmentMatch = posts.match(developmentTextRegex)
  const complementMatch = posts.match(complementTextRegex)
  const conclusionMatch = posts.match(conclusionRegex)
  const subTitleMatch = posts.match(subTitleRegex)
  const textComplementMatch = posts.match(textComplementRegex)

  const title = titleMatch ? titleMatch[1].trim() : '';
  const catchyPhrase = catchyPhraseMatch ? catchyPhraseMatch[1].trim() : '';
  const introductory = introductoryMatch ? introductoryMatch[1].trim() : '';
  const development = developmentMatch ? developmentMatch[1].trim() : '';
  const complementTitle = complementMatch ? complementMatch[1].trim() : '';
  const conclusion = conclusionMatch ? conclusionMatch[1].trim() : '';
  const subTitle = subTitleMatch ? subTitleMatch[1].trim() : '';
  const textComplement = textComplementMatch ? textComplementMatch[1].trim() : '';

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    await PostBlog(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Titulo</p>
      <input type='text' name="title" value={title} />
      
      <p>SubTitulo</p>
      <input type='text' name="subTitle" value={subTitle} />

      <p>Titulo complementar</p>
      <input type='text' name="complementTitle" value={complementTitle} />
      
      <p>Frase de efeito</p>
      <input type='text' name="catchyPhrase" value={catchyPhrase} />

      <p>Introduçao</p>
      <input type='text' name="introductory" value={introductory} /> 

      <p>Desenvolvimento</p>
      <input type='text' name="development" value={development} />
      
      <p>Texto complementar</p>
      <input type='text' name="textComplement" value={textComplement} />
      
      <p>Conclusao</p>
      <input type='text' name="conclusion" value={conclusion} />

      <img src={imgLink} alt="Adicione uma imagem" />
      <input type='text' name="imgLink" placeholder='URL' value={imgLink} onChange={(e) => setImgLink(e.target.value)} />

      <FormButton />
    </form>

  )
}
