# RESTful-API
Simple RESTful API with Node

Esta es una API que permite acceder a un repositorio de artículos con un titulo, contenido y un ID almacenados en una base de Datos con MongoDB.

La API permite usar las siguientes peticiones en la ruta "/articles":  
  **get:** Devuelve todos los artículos.  
  **post:** Almacena un nuevo artículo en la DB.  
  **delete:** Borra todos los artículos en la DB.  
  
La API permite usar las siguientes peticiones en la ruta "/articles/article-title":  
  **get:** Devuelve el artículo.  
  **put:** Borra el artículo y lo remplaza por el nuevo.  
  **patch:** Actualiza el artículo con los datos enviados.  
  **delete:** Borra el artículo.  
