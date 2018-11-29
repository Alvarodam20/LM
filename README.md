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

