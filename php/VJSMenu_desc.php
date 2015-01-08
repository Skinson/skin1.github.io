<html>
<head>
<title>Vertical JavaScript Menu</title>
<link rel="stylesheet" type="text/css" href="../cchelpstyle.css">
</head>
<body>
<p><a href="../Default.php">Main page</a></p>
<h1>Vertical JavaScript Menu</h1>
<h2>Description</h2>
<p>This <a href="../php/VJSMenu.php">menu example</a> demonstrates an implemention
of a vertical JavaScript menu based on <a href="http://www.softcomplex.com/products/tigra_menu/" target="_new"><font color="#800080">Tigra
menu</font></a> component.
<p>Supported Web browsers as of December 2004 include: Internet Explorer 5 and
above, Opera 7 and above, Netscape 6 and above, Mozilla Firefox 0.9 and Mozilla
1.7. 
<p><b>Note:</b> This example is implemented as a three-level menu. If two menu
levels are sufficient you can use the Directory component to output the array
used by the JavaScript menu, as shown in <a href="../HorizontalJSMenu/HJSMenu.php">Horizontal
JavaScript Menu</a>).</p>
<h2>Steps to recreate</h2>
<ol>
  <li>Switch to the HTML mode and add the folowing section into the &lt;head&gt;
  tag 
  <li><pre class="code">&lt;script language="JavaScript" src="menu.js"&gt;&lt;<b></b>/script&gt;
  &lt;script language="JavaScript" src="menu_tpl.js"&gt;&lt;/script&gt;
  &lt;script language="JavaScript"&gt; &lt;/script&gt;</pre> 
  <li>Place the mouse cursor in front of the last <i><b>&lt;/script&gt;</b></i> tag and 
  add the new <b>Label1</b> label control clicking on the Label icon in the 
  Toolbox and set its <b>Content</b> property to <i>HTML</i>. 
  <li>Insert the &lt;style&gt; section&nbsp;as shown in the HTML of the example. 
  <li>Insert the following section into the &lt;body&gt; tag <pre class="code">&lt;script
  language="JavaScript"&gt; new menu (MENU_ITEMS, MENU_POS);<b></b>&lt;/script&gt;</pre> 
  <li>Add the appropriate programming code to the label's <b>Before Show</b> event
  or copy it from the provided example.&nbsp; Also add the <b>CCDLookUpTreeToArray</b> function
  to the events file but outside of defined events (event&nbsp;functions), as
  shown in the example.</li>
</ol>
 
<p>&nbsp;</p>
 
<p>This example uses the free license of JavaScript-based <a href="http://www.softcomplex.com/products/tigra_menu/" target="_blank">Tigra
menu</a> and it works by using the Directory component to output an array
of values for the menu script. Similar method can be used with various other
menu scripts. If necessary modify the function CCDLookUpTreeToArray as needed.</p>
 
<h2>Database Tables used</h2>
<p>Database: <i>Intranet</i></p>
<p>Tables: <i>menu</i></p>
<h2>Events Used</h2>
<p><b><i>CCDLookUpTreeToArray</i></b> function - retrieves the list of menu
items from the database and outputs JavaScript array. 
<p>Label's <b><i>Before Show</i></b> event - calls the above function and
assigns the resulting JavaScript array code to the Label.</p>
</body>
</html>