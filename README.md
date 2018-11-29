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
```html
El código JavaScript se encierra entre etiquetas "script" y se incluye en cualquier parte del documento. Aunque es correcto incluir cualquier bloque de código en cualquier zona de la página,se recomienda definir el código JavaScript dentro de la cabecera del documento (dentro de la etiqueta <head>):

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Ejemplo de código JavaScript en el propio documento</title>
<script type="text/javascript">
  alert("Un mensaje de prueba");
</script>
</head>
 
<body>
<p>Un párrafo de texto.</p>
</body>
</html>

Para que la página XHTML resultante sea válida, es necesario añadir el atributo type a la etiqueta "script". Los valores que se incluyen en el atributo type están estandarizados y para el caso de JavaScript, el valor correcto es text/javascript.
```
- ¿Que diferencia hay entre una clase y una ID
```html
“id” de un elemento es único; es decir, no debería haber otro elemento con el mismo nombre de identificador (id) dentro de tu documento HTML.

<div id="unico">Charmander</div>

#unico {
  background: yellow;
  margin: 1rem;
  padding: 1rem;
  text-align: center;
  color: orange;
  font-size: 2rem;
}

“class”, a diferencia del valor del atributo “id”, puede ser utilizado en más de un elemento de tu documento HTML, esto nos es muy beneficioso cuando tenemos que aplicar los mismos estilos a diferentes elementos.

<div class="pokemon">Squirtle</div>

.pokemon {
  background: #02B1FC;
  margin: 1rem;
  padding: 1rem;
  text-align: center;
  color: white;
  font-size: 2rem;
}

```
- Código para hacer un enlace a otra página y que esta se abra en una nueva ventana

Para forzar la apertura de un enlace en una ventana nueva, basta añadirle el atributo HTML target con valor _blank de esta manera: 
```html
<a href="pagina.html" target="_blank">Título del enlace</a>.

```
- ¿Qué son las pseudoclases?, pon ejemplos.

Una pseudoclase CSS es una palabra clave que se añade a los selectores y que especifica un estado especial del elemento seleccionado. Por ejemplo, :hover aplicará un estilo cuando el usuario haga hover sobre el elemento especificado por el selector.
```html
div:hover {
  background-color: #F89B4D;
}
```

Algunos ejemplos:

:active

:checked

:default

:dir()

:disabled

:empty

:enabled

:first

:first-child

:first-of-type

:fullscreen

:focus

- Explica el modelo de caja de CSS (margin, border y padding)
Las partes que componen cada caja y su orden de visualización desde el punto de vista del usuario son las siguientes:

   - Contenido (content): se trata del contenido HTML del elemento (las palabras de un párrafo, una imagen, el texto de una lista               de elementos, etc.)
   - Relleno (padding): espacio libre opcional existente entre el contenido y el borde.
   - Borde (border): línea que encierra completamente el contenido y su relleno.
   - Imagen de fondo (background image): imagen que se muestra por detrás del contenido y el espacio de relleno.
   - Color de fondo (background color): color que se muestra por detrás del contenido y el espacio de relleno.
   - Margen (margin): separación opcional existente entre la caja y el resto de cajas adyacentes.
   ![](https://www.laurachuburu.com.ar/images/tutoriales/css/modelo-de-caja.png)


- Explica que son los selectores de CSS y pon ejemplos

Los selectores son patrones que se usan para seleccionar elementos a los que se quiere instertar un estilo.
```
* -> * -> Selecciona todos los elementos

elemento -> p -> Selecciona todos los elementos <p>
    
elemento,elemento -> div, p -> Selecciona todos los elementos <div> y todos los elementos <p>
    
elemento elemento -> div p -> Selects all <p> elements inside <div> elements
```
- Di a quien afectan:

    p a { color: red;

    p > a { color: red; }

    h1 + h2 { color: red }

    a[class] { color: blue; }

    a[class="externo"] { color: blue; }

    a[href="http://www.ejemplo.com"] { color: blue; }
    
Actividades de clase:

2col_v1:

```html

<!DOCTYPE HTML>
<html>
<head>
<meta charset="UTF-8">
<title>2 column layout</title>
<!--[if lt IE 9]>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
<style>
aside, article, section, header, footer, nav {
	display: block;
}
html, body {
	margin: 0;
	padding: 0;
}
html {
	background: rgb(123, 121, 143);
}
body {
	width: 960px;
	background: #fff;
	margin: 0 auto 2em;
	font: 100% Georgia, "Times New Roman", Times, serif;
}
header {
	background: rgb(76, 67, 65);
	margin-bottom: 20px;
}
header h1 {
	font: normal 2em Arial, Helvetica, sans-serif;
	color: white;
	text-align: center;
	line-height: 4em;
	text-transform: uppercase;
	letter-spacing:.1em;
	margin: 0;
}
.col1 {
	background: rgb(237, 228, 214);
	height: 500px;
	float: left;
	width: 600px;
	padding: 20px;
}
.col2 {
	background: rgb(173, 169, 130);
	height: 500px;
	padding: 20px;
	margin-left :660px;
}
footer {
	background: rgb(100, 98, 102);
	line-height: 3em;
	font-size: .6em;
	color: white;
	padding: 0 2em;
	clear: both;
}
</style>
</head>
<body>
<header>
<h1>Cool company header</h1>
</header>
<section class="col1">
This is where the really important stuff goes.
</section>
<aside class="col2">
This is where the related content goes.
</aside>
<footer>Copyright stuff....</footer>
</body>
</html>

```

2colv2:

```html

<!DOCTYPE HTML>
<html>
<head>
<meta charset="UTF-8">
<title>2 column layout</title>
<!--[if lt IE 9]>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
<style>
aside, article, section, header, footer, nav {
	display: block;
}
html, body {
	margin: 0;
	padding: 0;
}
html {
	background: rgb(123, 121, 143);
}
body {
	width: 960px;
	background: #fff;
	margin: 0 auto 2em;
	font: 100% Georgia, "Times New Roman", Times, serif;
}
header {
	background: rgb(76, 67, 65);
	margin-bottom: 20px;
}
header h1 {
	font: normal 2em Arial, Helvetica, sans-serif;
	color: white;
	text-align: center;
	line-height: 4em;
	text-transform: uppercase;
	letter-spacing:.1em;
	margin: 0;
}
.col1 {
	background: rgb(237, 228, 214);
	height: 500px;
	float:left;
	width: 600px;
	padding : 20px;
	margin-right: 20px;
}
.col2 {
	background: rgb(173, 169, 130);
	height: 500px;
	padding :20px ;
	float: left;
	width: 260px;

}
footer {
	background: rgb(100, 98, 102);
	line-height: 3em;
	font-size: .6em;
	color: white;
	padding: 0 2em;
	clear: both;
}
</style>
</head>
<body>
<header>
<h1>Cool company header</h1>
</header>
<section class="col1">
This is where the really important stuff goes.
</section>
<aside class="col2">
This is where the related content goes.
</aside>
<footer>Copyright stuff....</footer>
</body>
</html>

```

2col_v3:

```html
<!DOCTYPE HTML>
<html>
<head>
<meta charset="UTF-8">
<title>2 column layout</title>
<!--[if lt IE 9]>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
<style>
aside, article, section, header, footer, nav {
	display: block;
}
html, body {
	margin: 0;
	padding: 0;
}
html {
	background: rgb(123, 121, 143);
}
body {
	width: 960px;
	background: #fff;
	margin: 0 auto 2em;
	font: 100% Georgia, "Times New Roman", Times, serif;
}
header {
	background: rgb(76, 67, 65);
	margin-bottom: 20px;
}
header h1 {
	font: normal 2em Arial, Helvetica, sans-serif;
	color: white;
	text-align: center;
	line-height: 4em;
	text-transform: uppercase;
	letter-spacing:.1em;
	margin: 0;
}
.col1 {
	background: rgb(237, 228, 214);
	height: 500px;
	float: left;
	width: 600px;
	padding: 20px;
}
.col2 {
	background: rgb(173, 169, 130);
	height: 500px;
	float: right;
	padding: 20px;
	width: 260px;
}
footer {
	background: rgb(100, 98, 102);
	line-height: 3em;
	font-size: .6em;
	color: white;
	padding: 0 2em;
	clear: both;
}
</style>
</head>
<body>
<header>
<h1>Cool company header</h1>
</header>
<section class="col1">
This is where the really important stuff goes.
</section>
<aside class="col2">
This is where the related content goes.
</aside>
<footer>Copyright stuff....</footer>
</body>
</html>

```

3col_v1:

```html

<!DOCTYPE HTML>
<html>
<head>
<meta charset="UTF-8">
<title>3 column layout</title>
<!--[if lt IE 9]>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
<style>
aside, article, section, header, footer, nav {
	display: block;
}
html, body {
	margin: 0;
	padding: 0;
}
html {
	background: rgb(123, 121, 143);
}
body {
	width: 960px;
	background: #fff;
	margin: 0 auto 2em;
	font: 100% Georgia, "Times New Roman", Times, serif;
}
header {
	background: rgb(76, 67, 65);
	margin-bottom: 20px;
}
header h1 {
	font: normal 2em Arial, Helvetica, sans-serif;
	color: white;
	text-align: center;
	line-height: 4em;
	text-transform: uppercase;
	letter-spacing:.1em;
	margin: 0;
}
.col1 {
	background: rgb(237, 228, 214);
	height: 500px;
	float:left;
	padding: 20px;
	width: 266.6px;
	margin-right: 20px;
}
.col2 {
	background: rgb(219,126,64);
	height: 500px;
	float:left;
	padding: 20px;
	width: 266.6px;
	margin-right: 20px;
}

.col3 {
	background: rgb(173, 169, 130);
	height: 500px;
	float: right;
	padding: 20px;
	width: 266.6px;

}
footer {
	background: rgb(100, 98, 102);
	line-height: 3em;
	font-size: .6em;
	color: white;
	padding: 0 2em;
	clear: both;
}
</style>
</head>
<body>
<header>
<h1>Cool company header</h1>
</header>
<section class="col1">
This is where the really important stuff goes.
</section>
<section class="col2">
This is where equally important stuff goes.
</section>
<aside class="col3">
This is where the related content goes.
</aside>
<footer>Copyright stuff....</footer>
</body>
</html>

```

3col_v2:

```html

<!DOCTYPE HTML>
<html>
<head>
<meta charset="UTF-8">
<title>3 column layout</title>
<!--[if lt IE 9]>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
<style>
aside, article, section, header, footer, nav {
	display: block;
}
html, body {
	margin: 0;
	padding: 0;
}
html {
	background: rgb(123, 121, 143);
}
body {
	width: 960px;
	background: #fff;
	margin: 0 auto 2em;
	font: 100% Georgia, "Times New Roman", Times, serif;
}
header {
	background: rgb(76, 67, 65);
	margin-bottom: 20px;
}
header h1 {
	font: normal 2em Arial, Helvetica, sans-serif;
	color: white;
	text-align: center;
	line-height: 4em;
	text-transform: uppercase;
	letter-spacing:.1em;
	margin: 0;
}
.col1 {
	background: rgb(237, 228, 214);
	height: 500px;
	float: left;
	padding: 20px;
	width: 266px;
	
}
.col2 {
	background: rgb(219,126,64);
	height: 500px;
	float:right;
	padding:20px;
	width: 266px;
}
.col3 {
	background: rgb(173, 169, 130);
	height: 500px;
	width: 266px;
	padding:20px;
	margin:0 auto;
}
footer {
	background: rgb(100, 98, 102);
	line-height: 3em;
	font-size: .6em;
	color: white;
	padding: 0 2em;
	clear: both;
}
</style>
</head>
<body>
<header>
<h1>Cool company header</h1>
</header>
<section class="col1">
This is where the really important stuff goes.
</section>
<section class="col2">
I have to be the far right column.
</section>
<section class="col3">
I have to be the middle column.
</section>
<footer>Copyright stuff....</footer>
</body>
</html>

```

col3_v3:

```html

<!DOCTYPE HTML>
<html>
<head>
<meta charset="UTF-8">
<title>3 column layout</title>
<!--[if lt IE 9]>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
<style>
aside, article, section, header, footer, nav {
	display: block;
}
html, body {
	margin: 0;
	padding: 0;
}
html {
	background: rgb(123, 121, 143);
}
body {
	width: 960px;
	background: #fff;
	margin: 0 auto 2em;
	font: 100% Georgia, "Times New Roman", Times, serif;
}
header {
	background: rgb(76, 67, 65);
	margin-bottom: 20px;
}
header h1 {
	font: normal 2em Arial, Helvetica, sans-serif;
	color: white;
	text-align: center;
	line-height: 4em;
	text-transform: uppercase;
	letter-spacing:.1em;
	margin: 0;
}
article {
	float:left;
	width: 634px;
}
aside {
	float:right;
	background-color: red;
	width: 266px;
	padding: 20px;
	height: 500px;	
}
.col1 {
	float:left;
	background-color: blue;
	padding: 20px;
	height: 500px;
	width: 266px;
}
.col2 {
	float: right;
	background-color:aqua;
	padding:20px;
	height: 500px;
	width: 266px;
}
footer {
	background: rgb(100, 98, 102);
	line-height: 3em;
	font-size: .6em;
	color: white;
	padding: 0 2em;
	clear: both;
}
</style>
</head>
<body>
<header>
<h1>Cool company header</h1>
</header>
<article>
<section class="col1">
This is where the really important stuff goes.
</section>
<section class="col2">
This is equally important stuff.
</section>
</article>
<aside>
I am related content.
</aside>
<footer>Copyright stuff....</footer>
</body>
</html>

```

Layout:

```html

<!DOCTYPE html>
<html>
<meta charset="utf-8" />

<head>

    <title>Layout</title>
    <style type="text/css">
        #espacio {
            display: inline-block;
            height: 100%;
            margin-left: 25%;
            position: absolute;
            width: 60%;
        }

        #topicos {
            text-align: right;
            margin-left: 76%;
            width: 20%;
            position: absolute;
            height: 55%;
            display: inline-block;
            font-size: 15px;
        }

        #buscador {
            position: absolute;
            width: 20%;
            display: inline-block;
            height: 45%;
            text-align: right;
            margin-left: 76%;
            top: 65%;
        }

        #logo {
            padding: 20px;
            width: 20%;
            display: inline-block;
            height: 50%;
            position: absolute;
            border: 1px solid black;
            text-align: center;
        }

        #nav {
            padding: 20px;
            height: 2%;
            margin-top: 15px;
            margin-left: 5px;
            margin-right: 5px;
            font-size: 18px;
            text-align: center;
            border: 2px solid black;
        }

        #outer {
            width: 800px;
            height: 800px;
            background-color: #979797e1;
            margin: 0px auto;
            position: relative;

        }

        #outer header {
            height: 10%;
            border: solid black 2px;
            position: relative;

        }

        #izquierda {
            display: inline-block;
            text-align: center;
            padding: 20px;
            margin-top: 10px;
            margin-left: 5px;
            border: 2px solid black;
            width: 20%;
            height: 72%;
        }

        #derecha {
            display: inline-block;
            text-align: center;
            padding: 20px;
            margin-top: 10px;
            border: 2px solid black;
            width: 20%;
            height: 72%;
            position: absolute;
            right: 5px;
        }

        #relleno {
            width: 20%;
            height: 20%;
            padding-left: 26%;
            padding-right: 26%;
            display: inline-block;
            position: absolute;
        }
    </style>
</head>

<body>
    <div id="outer">
        <header>
            <div id="logo">logo</div>
            <div id="espacio"></div>
            <div id="topicos">Topico1 Topico2 Topico3</div>
            <div id="buscador">buscador</div>
        </header>
        <nav id="nav">section1 section2 section3</nav>
        <aside id="izquierda">
            <div style="padding-top: 6em">
                <p>section 1</p>
                <p>section 2</p>
                <p>section 3</p>
                <p>section 4</p>
                <p>section 5</p>
                <p>section 6</p>
                <p>section 7</p>
                <p>section 8</p>
            </div>
        </aside>
        <aside id="derecha">
            <div style="padding-top: 6em">
                <p>section 1</p>
                <p>section 2</p>
                <p>section 3</p>
                <p>section 4</p>
                <p>section 5</p>
                <p>section 6</p>
                <p>section 7</p>
                <p>section 8</p>
            </div>
        </aside>
        <section id="relleno">
            <p>
                ¿Qué es Lorem Ipsum?

                Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha
                sido el
                texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona
                que se
                dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer
                un
                libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno
                en
                documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la
                creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con
                software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
            </p>
        </section>
    </div>
</body>

</html>

```

clear: 

```html

<!DOCTYPE HTML>
<html>
<head>
<meta charset="UTF-8">
<title>The float property</title>
<!--[if lt IE 9]>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
<style>
aside, article, section, header, footer, nav {
    display: block;
}
html, body {
    margin: 0;
    padding: 0;
}
html {
    background: #ccc;
}
body {
    width: 600px;
    background: #fff;
    margin: 2em auto 2em;
    font: 100% Arial, Helvetica, sans-serif;
}
div {
    margin-bottom: 1em;
    width: 150px;
    height: 50px;
    border: 1px solid #000;
    padding: 25px;
}
/*add styles here*/
.element1 {
    background: rgb(211, 206, 61);
    float: right;
    width: 50px;
    height: 300px;
}
.element2 {
    background: rgb(85, 66, 54);
    float:left;
    width: 50px;
    height: 300px
}
.element3 {
    background: rgb(247,120,37);
    clear:both;   
}
.element4 {
    background: rgb(26, 78, 175);
}
.element5 {
    background: rgb(195, 156, 61);
}
.element6 {
    background: rgb(225,68,37);
}
</style>
</head>
<body>
<p>The clear property has five possible values: left | right | both | inherit | none<p>
<p>By clearing an element, you can ensure the element does not appear to the left or the right of any floated element. This has the result of turning a float "off" and restoring normal document flow to the remaining elements.</p>
<div class="element1">one</div>
<div class="element2">two</div>
<div class="element3">three</div>
<div class="element4">four</div>
<div class="element5">five</div>
<div class="element6">six</div>
</body>
</html>

```

clearfix: 

```html

<!DOCTYPE HTML>
<html>
<head>
<meta charset="UTF-8">
<title>clearfix</title>
<!--[if lt IE 9]>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
<style>
aside, article, section, header, footer, nav {
display: block;
}
html, body {
margin: 0;
padding: 0;
}
body {
width: 600px;
margin: 0 auto;
font: 90% Georgia, "Times New Roman", Times, serif;
}
div {
width: 50px;
height: 50px;
padding: 50px;
margin-right: 25px;
}
section {
background: rgb(178,155,107);
border: 1px solid black;
padding: 25px 0 25px 50px;
margin-top: 50px;
}
.clearfix:before, .clearfix:after {
    content: "";
    display: table;
    clear: both;
}
.clearfix:after {
    clear: both;
}
.one {
background: rgb(207, 255, 245);
float: left;
}
.two {
background: rgb(101,209,255);
float: left;
}
.three {
background: rgb(255, 231, 181);
float: left;
}
</style>
 
</head>
<body>
<section class="clearfix">
<div class="one">One</div>
<div class="two">Two</div>
<div class="three">Three</div>
</section>
</body>
</html>

```

containing: 

```html

<!DOCTYPE HTML>
<html>
<head>
<meta charset="UTF-8">
<title>containing floats</title>
<!--[if lt IE 9]>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
<style>
aside, article, section, header, footer, nav {
    display: block;
}
html, body {
    margin: 0;
    padding: 0;
}
html {
    background: rgb(108,135,178);
}
body {
    width: 600px;
    background: #fff;
    margin: 0 auto;
    font: 90% Georgia, "Times New Roman", Times, serif;
}
div {
    width: 50px;
    height: 50px;
    padding: 50px;
}
section {
    background: rgb(178,155,107);
    border: 1px solid black;
    padding: 10px;
    width: 480px;
    float: left;
}
.one {
    background: rgb(207, 255, 245);
    float: left;
}
.two {
    background: rgb(101,209,255);
    float: left;
}
.three {
    background: rgb(255, 231, 181);
    float: left;
}   
</style>
</head>
<body>
<section>
<div class="one">One</div>
<div class="two">Two</div>
<div class="three">Three</div>
</section>
</body>
</html>

```

divs: 

```html

<!DOCTYPE html>
<html>
<head>
	<style type="text/css">
		#cubos1 {
			background-color: blue;
			width:50px;
			height:50px;
			border:dotted red;}
		#cubos2 {
			background-color: red;
			width:50px;
			height:50px;
			border: dotted blue;}
		#cubos3 {
			background-color: green;
			width:50px;
			height:50px;}
		header{
			position: relative;
			background-color: green;
			width: 120px;
			height: 120px;
		}
		section{
			position: relative;
			background-color: red;
			width: 120px;
			height: 120px;
		}
		aside{
			position: relative;
			background-color: blue;
			width: 120px;
			height: 120px;
		}




	</style>
	<title></title>
</head>
<body>
	<header>hola</header>
	<section>seccion</section>
	<aside>adios</aside>
<div id="cubos1">box 1</div>
<div id="cubos2">box 2</div>
<div id="cubos3">box 3</div>
</body>
</html>

```

float: 

```html

<!DOCTYPE HTML>
<html>
<head>
<meta charset="UTF-8">
<title>The float property</title>
<!--[if lt IE 9]>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
<style>
aside, article, section, header, footer, nav {
    display: block;
}
html, body {
    margin: 0;
    padding: 0;
}
html {
    background: #ccc;
}
body {
    width: 600px;
    background: #fff;
    margin: 2em auto 2em;
}
div {
    margin-bottom: 1em;
    width: 100px;
    height: 100px;
}
/*add styles here*/
.element1 {
    background: rgb(211, 206, 61);
    float: left;
    margin-right: 1em;
    width: 200px;
}
.element2 {
    background: rgb(85, 66, 54);
    float: left;
    margin-right: 1em;
    width: 200px;
}
.element3 {
    background: rgb(247,120,37);
    float: left;
    margin-right: 1em;
    width: 200px;
}
</style>
</head>
<body>
<p>La propiedad float tiene 4 valores posibles: left | right | inherit | none<p>
<p>Floating an element to the left or to the right will cause it to move to the left-most or right-most edge of its parent container. Floating removes the element from normal flow, and will cause elements below it to shift accordingly.</p>
<div class="element1"></div>
<div class="element2"></div>
<div class="element3"></div>
</body>
</html>

```

inline-block:

```html

<!DOCTYPE html>
<html>
<head>
	<title></title>
	<style type="text/css">
		div,p,img,span{border:2px solid red; padding:5px; margin:5px;}
		
	</style>
</head>
<body>
<div>Esto es un DIV</div>
<p>Esto es un parrafo</p>
<img src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Everest_kalapatthar.jpg" width="240">
<span>Esto es un SPAN</span>
<p>Hola</p>
</body>
</html>

```

listas:

```html

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Page Title</title>
    <style>
        li{display: inline;border: dotted rgb(255, 0, 0)5px;background-color: aquamarine;font-family: Arial, Helvetica, sans-serif;}
        #foto_grande{display: block;}
    </style>
</head>
<body>
    <img id="foto_grande" src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Everest_kalapatthar.jpg" width="240">
    <img src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Everest_kalapatthar.jpg" width= "240">
    <img src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Everest_kalapatthar.jpg" width= "240">
    <img src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Everest_kalapatthar.jpg" width= "240">
    <img src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Everest_kalapatthar.jpg" width="240">
    <ul>
        <li>Inicio</li>
        <li>Carrito</li>
        <li>Contacto</li>
        <li>Login</li>
    </ul>
</body>
</html>

```