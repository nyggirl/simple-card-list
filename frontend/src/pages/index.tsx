import { useEffect, useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Grid, 
  Container, 
  IconButton,
  Box
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

// Product interface
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch products from backend
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Delete product
  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3001/api/products/${id}`);
      setProducts(products.filter(product => product.id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', py: 4 }}>
      <Container maxWidth="lg">
      <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', marginBottom: '40px' }}>
        Simple Card List
      </Typography>
        <Grid container spacing={3} justifyContent="center">
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  position: 'relative',
                  boxShadow: 1,
                  borderRadius: 2
                }}
              >
                <IconButton
                  sx={{
                    position: 'absolute',
                    left: 8,
                    top: 8,
                    bgcolor: 'rgba(255, 255, 255, 0.8)',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.9)',
                    },
                    padding: '4px',
                    minWidth: '24px',
                    minHeight: '24px'
                  }}
                  onClick={() => handleDelete(product.id)}
                  size="small"
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.imageUrl}
                  alt={product.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1, p: 2 }}>
                  <Typography variant="body1" sx={{ fontWeight: 500, mb: 1 }}>
                    {product.name}
                  </Typography>
                  <Typography variant="h6" component="h2" sx={{ color: '#e2231a', mb: 1 }}>
                    ¥{product.price.toFixed(2)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
