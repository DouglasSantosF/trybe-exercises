const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const product2 = {
  name: 'Computador',
  price: '5000.10',
  seller: 'Casas Bahia',
};

const product3 = {
  name: 'Samsung Galaxy 21',
  price: '8899.05',
  seller: 'Casa & Vídeo',
  size: 'Medium'
};


const printProductDetails = ({ name, price, seller }) => {
  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
};

printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas
printProductDetails(product2);
printProductDetails(product3);