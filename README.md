# LM
- Estructura mínima de una web
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Documento</title>
</head>
<body>
    
</body>
</html>
```
- Explica las 3 formas de usar CSS en HTML
```html
- 1.CSS externo:
    En la cabecera del HTML, el bloque <head></head>, incluimos una relación al archivo CSS en cuestión:

<link rel="stylesheet" type="text/css" href="index.css"/>
    
    De esta forma, los navegadores sabrán que deben aplicar los estilos de este archivo (index.css) al documento HTML actual.

- 2.CSS interno:
    Otra de las formas que existen para incluir estilos en un documento HTML es la de añadirlos directamente en la cabecera HTML del documento:

    <!DOCTYPE html>
<html>
<head>
    <title>Título de la página</title>
    <style type="text/css">
        div {
            background:#FFFFFF;
        }
    </style>
</head>
...

    Este sistema puede servir en algunos casos, pero hay que tener en cuenta que utilizándolo, arruinamos la ventaja de tener los estilos en un documento independiente

- 3.CSS embebido:
    Por último, la tercera forma de aplicar estilos en un documento HTML es hacerlo directamente en las propias etiquetas, a través del atributo style:

    <p>¡Hola <span style="color:#FF0000">amigo lector</span>!</p>

    Al igual que en el método anterior, se recomienda no utilizarse salvo casos muy específicos, ya que se pierde la independencia de la presentación y contenido.
```
- Crea una lista sin ordenar con 5 ingredientes de una receta de cocina
```html
<h2>Receta para hacer macarrones con tomate</h2>
<ul>
    <li>Una olla con aprox. 1 l. de agua</li>
    <li>Aceite</li>
    <li>Tomate frito</li>
    <li>Medio kilo de macarrones</li>
    <li>Una pizca de oregano</li>
</ul>
```
- Como se puede incluir javascript en HTML

- ¿Que diferencia hay entre una clase y una ID

- Código para hacer un enlace a otra página y que esta se abra en una nueva ventana

- ¿Qué son las pseudoclases?, pon ejemplos.

- Explica el modelo de caja de CSS (margin, border y padding)

- Explica que son los selectores de CSS y pon ejemplos

- Di a quien afectan:

    p a { color: red;

    p > a { color: red; }

    h1 + h2 { color: red }

    a[class] { color: blue; }

    a[class="externo"] { color: blue; }

    a[href="http://www.ejemplo.com"] { color: blue; }
    
