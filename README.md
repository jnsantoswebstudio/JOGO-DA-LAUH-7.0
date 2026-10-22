# Reino das Marés da Lauana — Correção Visual e Mobile

Esta é uma edição separada da versão anterior (não substitui as outras).

## O que mudou
- A **abertura aprovada foi mantida**.
- A **tela de entrada** foi redesenhada com convite à Lauana e acesso de convidado.
- O **menu** tem botões verticais à esquerda e **carrossel com as 49 missões** à direita, com avanço automático, setas e miniaturas próprias.
- A tela **Personagens** e o **Guarda-roupa** mostram miniaturas à esquerda e um **modelo animado no Canvas à direita**, composto em camadas (cabelo, rosto, tronco, braços, cauda e adornos), sem usar uma fotografia inteira no lugar do personagem.
- As heroínas de Monster High usam **transformação sereia** durante o gameplay, com cor de cabelo e acessórios identificáveis, e cauda articulada. Jonathas é o guardião em terra e assume forma marítima na água.
- Os inimigos são diferentes por região: livros vivos, bonecas, robôs, aves, caranguejos, peixes, águas-vivas, marinheiros, fantasmas apenas onde combinam com o tema, criaturas vegetais e mecânicas.
- As novas miniaturas de fases usam arte ambiental individual e sobreposições de objetivo; os portais bosque, cidade, templo e abismo têm fundos próprios.
- Preservada a progressão de **8 portais x 6 fases e resgate final**.
- Funciona com teclado e controles mobile; toque apenas durante gameplay.

## Como jogar
Extraia o ZIP e abra `index.html` no computador. Para celular e PWA offline, publique a pasta no GitHub Pages ou outro servidor HTTPS; abra no navegador e adicione à tela inicial. Recomendamos orientação horizontal.

## Contas
A opção **convidado salva localmente**. Login com senha somente funciona após configurar uma instância real de Supabase e seguir `supabase-schema.sql` e `config.js`. Não é um login simulado.

## Limitações importantes
Os modelos são personagens 2D animados em camadas, **não personagens 3D detalhados no nível de Free Fire**. A arte cinematográfica da referência ainda exige produção específica de modelos, rigging, animações e cenários. As fases mantêm a estrutura original, com melhorias de variedade de inimigos e cenários, e ainda não equivalem a 49 níveis artesanais independentes.

## Arquivos principais
`index.html`, `game.js`, `style.css`, `assets/`, `sw.js`, `manifest.webmanifest`, `cloud.js`, `config.js`.
