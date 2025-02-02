const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();

// Enable CORS
app.use(cors());
app.use(express.json());

// Mock data
let products = [
  {
    id: uuidv4(),
    name: 'MAYDAY First Album',
    description: 'They went on to release their first full-length studio album titled Mayday First Album (第一張創作專輯) under Rock Records on 7 July 1999.',
    price: 5525,
    imageUrl: 'https://s.eslite.com/b2b/newItem/2024/05/27/2456_152221722_145_mainCoverImage1.jpg'
  },
  {
    id: uuidv4(),
    name: 'Viva Love',
    description: 'The band second album Viva Love (愛情萬歲) was released on 7 July 2000.',
    price: 5525,
    imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/af/c2/33/afc233f6-d570-8f22-0a91-14a3e289a30d/dj.uhlsejtl.jpg/632x632bb.webp'
  },
  {
    id: uuidv4(),
    name: 'People Life, Ocean Wild',
    description: 'Mayday released their third album People Life Ocean Wild (人生海海) on 6 July 2001',
    price: 5525,
    imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Features/v4/a1/e8/12/a1e81253-0391-707a-828c-4f656bbe88b3/dj.dtjckmea.jpg/632x632bb.webp'
  },
  {
    id: uuidv4(),
    name: 'Time Machine',
    description: 'On 11 November 2003, the band released their 4th studio album Time Machine (時光機)',
    price: 1999,
    imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/59/03/0a/59030ac6-3c18-c5f4-3770-ae08beaa2de2/dj.qlguzxkk.jpg/632x632bb.webp'
  },
  {
    id: uuidv4(),
    name: 'God’s Children are all Dancing',
    description: 'On 5 November 2004, Mayday released their fifth studio album God’s Children are all Dancing (神的孩子都在跳舞)',
    price: 1999,
    imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music/07/f2/90/mzi.xhevnauo.jpg/632x632bf.webp'
  },
  {
    id: uuidv4(),
    name: 'Born to Love',
    description: 'On 29 December 2006, they released their sixth studio album Born to Love (為愛而生)',
    price: 1999,
    imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/6f/69/4a/6f694aa4-0be7-8949-d50d-59e28c1f4e74/BD0005-_-.jpg/632x632bb.webp'
  },
  {
    id: uuidv4(),
    name: 'Poetry of the Day After',
    description: 'On 23 October 2008, Mayday released their seventh studio album, Poetry of the Day After (後青春期的詩)',
    price: 5525,
    imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music69/v4/fd/ba/9e/fdba9e89-6336-d3e4-ee00-94184f9a5c2c/BD0016-_-.jpg/632x632bb.webp'
  },
  {
    id: uuidv4(),
    name: 'Second Round',
    description: 'On 16 December 2011, Mayday released their 8th studio album, Second Round (第二人生)',
    price: 5525,
    imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/7d/43/10/7d4310fc-3583-7628-d28c-e336b664d35b/BD0055-_-.jpg/632x632bb.webp'
  },
  {
    id: uuidv4(),
    name: 'History of Tomorrow',
    description: 'The first Single,"Party Animal", was released on May 20. It was released on July 21, 2016.',
    price: 5525,
    imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/64/a0/f1/64a0f1b8-a36b-ff10-509a-9a8f5fef53ff/dj.zfoqlnar.jpg/632x632bb.webp'
  },
  {
    id: uuidv4(),
    name: 'Mayday 5525 USA TOUR',
    description: 'Mayday’s First High-Caliber Stadium Concert in the US. Delivering the Best and Most Complete 5525 Experience',
    price: 5526,
    imageUrl: 'https://cdn11.bigcommerce.com/s-ef1p3ag8/images/stencil/1280x1280/products/211/841/IG-Mayday_25th_US-01__35402.1737478833.jpg?c=2'
  }
];

// GET /api/products - Get all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// DELETE /api/products/:id - Delete a product
app.delete('/api/products/:id', (req, res) => {
  const { id } = req.params;
  const initialLength = products.length;
  products = products.filter(product => product.id !== id);
  
  if (products.length === initialLength) {
    return res.status(404).json({ message: 'Product not found' });
  }
  
  res.status(200).json({ message: 'Product deleted successfully' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 