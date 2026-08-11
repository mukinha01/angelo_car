# Angelo Car Center

Site estático em React + Vite para a Angelo Car Center.

## Estrutura do projeto

- `apps/package.json` - scripts principais do monorepo
- `apps/web/` - aplicação React + Vite
- `dist/apps/web/` - build de produção gerado após rodar `npm run build`

## Instalação

No diretório raiz do projeto:

```bash
npm install
```

## Desenvolvimento local

```bash
npm run dev --prefix apps/web
```

Ou, se estiver usando o monorepo diretamente:

```bash
npm run dev
```

A aplicação ficará disponível em `http://localhost:3000`.

## Build de produção

```bash
npm run build --prefix apps/web
```

O conteúdo final será gerado em:

```text
dist/apps/web
```

## Hospedagem recomendada

Para o cliente acessar de casa, os melhores serviços são:

- **Netlify**
- **Vercel**
- **Cloudflare Pages**

### Deploy rápido

1. Gere o build:

   ```bash
   npm run build --prefix apps/web
   ```

2. Publique a pasta `dist/apps/web` no serviço escolhido.

### Configuração para Netlify / Vercel

- Build command: `npm run build --prefix apps/web`
- Publish directory: `dist/apps/web`

## Observações

- O projeto é um site estático sem backend.
- O Vite está configurado para usar `base: '/'`, o que facilita a hospedagem em domínio raiz.

## Se quiser usar GitHub Pages

Se optar por GitHub Pages e deployment via branch `gh-pages`, será necessário alterar `apps/web/vite.config.js` para `base: '/angelo_car/'` ou para o nome do repositório.
