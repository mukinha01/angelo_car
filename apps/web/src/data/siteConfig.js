// EDITÁVEL: altere aqui os dados de contato da oficina.
export const contato = {
  whatsapp: '551141585031',
  whatsappExibicao: '(11) 4158-5031',
  telefone: '(11) 4158-5031',
  telefoneLink: '+551141585031',
  email: 'm.aoficinamecanica2012@gmail.com',
  endereco: 'R. Ambrosina Maria de Jesus, 169 — Jardim Bela Vista, Vargem Grande Paulista - SP, CEP 06730-470',
  horario: 'Segunda a Sábado, 08h00 às 18h00',
  instagram: '@angelocar.premium',
  instagramUrl: 'https://instagram.com/angelocar.premium',
  tiktokUrl: 'https://tiktok.com/@angelocar.premium',
  mapaUrl:
    'https://www.google.com/maps?q=R.+Ambrosina+Maria+de+Jesus,+169+Jardim+Bela+Vista+Vargem+Grande+Paulista+SP&output=embed',
};

export const mensagemWhatsApp =
  'Olá! Gostaria de agendar uma avaliação para o meu veículo na Angelo Car Center.';

export const whatsappLink = `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(
  mensagemWhatsApp,
)}`;
