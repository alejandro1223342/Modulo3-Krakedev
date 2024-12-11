export const getAllPostService = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => { return response.json() })
        .then((json) => (console.log(json)));

}

export const createPostService = (post, fnExito) => {
    const config = {
        method: 'POST',
        body: JSON.stringify({
            title: post.title,
            body: post.body,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json',
        }
    };

    fetch('https://jsonplaceholder.typicode.com/posts', config)
        .then((response) => { return response.json() })
        .then((json) => { console.log(json); fnExito() })

}

export const updatePostService = () => {
    const config = {
        method: 'PUT',
        body: JSON.stringify({
            id: 1,
            title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
            body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json',
        }
    };
    fetch('https://jsonplaceholder.typicode.com/posts/1', config)
        .then((response) => response.json())
        .then((json) => console.log(json))

}

export const getByUserIdService = () => {

    fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
        .then((response) => { return response.json() })
        .then((json) => (console.log(json)));

}


//Apis publicas

//Traer todos los productos
export const getAllProductsService = () => {
    fetch('https://fakestoreapi.com/products')
        .then((response) => { return response.json() })
        .then((json) => (console.log(json)));

}

export const postProductsService = () => {
    const config = {
        method: "POST",
        body: JSON.stringify(
            {
                title: 'test product',
                price: 13.5,
                description: 'lorem ipsum set',
                image: 'https://i.pravatar.cc',
                category: 'electronic'
            }
        )
    };
    fetch('https://fakestoreapi.com/products', config)
        .then(res => res.json())
        .then(json => console.log(json))
}

export const updateProductsService = () => {
    const config = {
        method: "PUT",
        body: JSON.stringify(
            {
                title: 'test product',
                price: 13.5,
                description: 'lorem ipsum set',
                image: 'https://i.pravatar.cc',
                category: 'electronic'
            }
        )
    };

    fetch('https://fakestoreapi.com/products/7', config)
        .then(res => res.json())
        .then(json => console.log(json))

}

//Traer Documetos de Api

export const getDocumentsTypes = () => {
    fetch('http://192.168.1.45:8080/inventarios/rest/tiposdocumento/recuperar')
        .then((response) => { return response.json() })
        .then((json) => (console.log(json)));

}


export const postDocumentTypes = (post, fnExito) => {
    const config = {
        method: 'POST',
        body: JSON.stringify({
            catIdTipoDc: post.title,
            catNombre: post.body,
        }),
        headers: {
            'Content-type': 'application/json',
        }
    };

    fetch('http://192.168.1.45:8080/inventarios/rest/tiposdocumento/crear', config)
        .then((response) => { return response.json() })
        .then((json) => { console.log(json); fnExito() })

}