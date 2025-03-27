const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

const GOOGLE_BOOKS_API_KEY = 'AIzaSyAQletl-Idxf1eTEEZn5OJbyfqpmxdi9Aw';

const getTopBooks = async () => {
    try {
        const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
            params: {
                q: 'bestsellers',
                maxResults: 10,
                orderBy: 'newest',
                key: GOOGLE_BOOKS_API_KEY
            }
        });

        return response.data.items || [];
    } catch (error) {
        console.error('Erro ao consultar a API do Google Books:', error);
        return [];
    }
};

app.get('/livros-mais-lidos-2025', async (req, res) => {
    const livros = await getTopBooks();

    if (livros.length === 0) {
        return res.status(404).json({ message: 'Nenhum livro encontrado.' });
    }

    const livroInfo = livros.map(livro => ({
        titulo: livro.volumeInfo.title,
        autor: livro.volumeInfo.authors
            ? livro.volumeInfo.authors.join(', ')
            : 'Desconhecido',
        descricao: livro.volumeInfo.description || 'Sem descrição',
        link: livro.volumeInfo.infoLink,
        capa: livro.volumeInfo.imageLinks
            ? livro.volumeInfo.imageLinks.thumbnail
            : null
    }));

    res.json(livroInfo);
});

// Inicializando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
