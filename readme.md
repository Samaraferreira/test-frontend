# Teste Front-end

<strong>
Deploy -> <a href="https://test-onyma.vercel.app/">Veja o site</a>
<br />
Repositório da API: https://github.com/Samaraferreira/test-api
</strong>

## Como executar

```bash
$ npm run dev
```

## Processo de desenvolvimento

* Tecnologias utilizadas
  * webpack
  * typescript
  * react
  * react-router-dom
  * axios
  * node.js
  * mongoDB

* Features desenvolvidas
  * API
  * Responsividade
  * Listagem e cadastro de clínicas
  * Abrir whatsapp
  * Pesquisar entre as clínicas cadastradas
  * Ondenar por ordem alfabética
  * Preencher o campo cidade de acordo com o CEP, utilizando a API via cep

* Onde encontrou mais dificuldade?

  * Consumir os dados da tabela em nodejs e formatá-los para salvar no banco com os atributos que achei melhor de trabalhar.

    ```json
      -> Estrutura de antes

      {
        "NOME": "EHS SOLUÇÕES INTELIGENTES",
        "ENDEREÇO": "Rua Barão do Triunfo, 612 / CJ 901",
        "CEP": "04602-002",
        "EMAIL": "contato@ehsss.com.br",
        "WHATSAPP": "(11) 93477-9755",
        "SERVIÇOS DISPONÍVEIS": "Exames Clínicos, Exames Complementares, PPRA, PCMSO"
      }
    ```
    ```json
      -> Estrutura que achei melhor

      {
        "_id": "5fdbfe5d4224ac2bc81fe273",
        "name": "EHS SOLUÇÕES INTELIGENTES",
        "address": "Rua Barão do Triunfo, 612 / CJ 901",
        "cep": "04602-002",
        "email": "contato@ehsss.com.br",
        "whatsapp": "(11) 93477-9755",
        "services": "Exames Clínicos, Exames Complementares, PPRA, PCMSO"
      }
    ```


* O que não conseguiu fazer (e o motivo pelo qual não conseguiu)
  * API do Google Maps: era necessário fazer cadastro e gerar uma API key

* Qual material de apoio buscou para a execução do exercício?
  * Configurei o webpack da forma que aprendi no curso de [Reactjs com Clean Architecture do Rodrigo Manguinho](https://www.udemy.com/course/react-com-mango/)
