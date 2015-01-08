// Title: Tigra Menu (v2.1 06/26/2007)
// URL: http://www.javascript-menu.com/
// Tech. Support: http://www.softcomplex.com/forum/forumdisplay_29/
// Notes: This script is free. Visit official site for further details.

var A_MENUS = [];
function menu(F, I) {
	if (!document.body || !document.body.style)
		return;
	this.B = F;
	this.I = I;
	this.b = A_MENUS.length;
	this.D = [];
	this.A = [];
	this.expand = R;
	this.collapse = Q;
	this.onclick = T;
	this.onmouseout = V;
	this.onmouseover = W;
	this.onmousedown = U;
	this.J = {
		'block_top' : 16,
		'block_left' : 16,
		'top' : 20,
		'left' : 4,
		'width' : 120,
		'height' : 22,
		'hide_delay' : 0,
		'expd_delay' : 0,
		'css' : {
			'inner' : '',
			'outer' : ''
		}
	};
	this.O = function (p) {
		return this.J[p];
	};
	this.n = this;
	this.a = -1;
	this.g = 0;
	this.h = 0;
	for (c = 0; c < F.length; c++)
		new S(this, c);
	A_MENUS[this.b] = this;
	for (var c = 0; c < this.A.length; c++)
		this.A[c].N.style.visibility = 'visible';
}
function Q(b) {
	clearTimeout(this.o);
	var f = (b ? this.D[b].a : 0);
	for (b = 0; b < this.D.length; b++) {
		var j = this.D[b];
		if (j.a > f && j.L) {
			j.N.style.visibility = 'hidden';
			j.L = false;
		}
	}
	if (!b)
		this.i = null;
}
function R(b) {
	if (this.k)
		return;
	var l = this.D[b];
	if (this.i && this.i.a >= l.a)
		this.collapse(l.b);
	this.i = l;
	if (!l.A)
		return;
	for (var c = 0; c < l.A.length; c++) {
		var j = l.A[c];
		j.N.style.visibility = 'visible';
		j.L = true;
	}
}
function T(b) {
	var l = this.D[b];
	var q = l.B[1];
	if (!q)
		return true;
	if (String(q).toLowerCase().indexOf('javascript:') == 0)
		return eval(q);
	if (l.B[2] && l.B[2]['tw'])
		window.open(q, l.B[2]['tw']);
	else
		window.location = q;
	return true;
}
function V(b) {
	var l = this.D[b];
	l.N.className = l.P(0, 0);
	l.M.className = l.P(1, 0);
	l.s(7);
	this.k = setTimeout('A_MENUS[' + this.b + '].collapse();', l.O('hide_delay'));
}
function W(b) {
	clearTimeout(this.k);
	this.k = null;
	clearTimeout(this.o);
	var l = this.D[b];
	l.s();
	l.N.className = l.P(0, 1);
	l.M.className = l.P(1, 1);
	if (l.O('expd_delay') < 0)
		return;
	this.o = setTimeout('A_MENUS[' + this.b + '].expand(' + b + ');', l.O('expd_delay'));
}
function U(b) {
	var l = this.D[b];
	l.N.className = l.P(0, 2);
	l.M.className = l.P(1, 2);
	this.expand(b);
}
function S(m, c) {
	this.a = m.a + 1;
	this.B = m.B[c + (this.a ? 3 : 0)];
	if (!this.B)
		return;
	this.n = m.n;
	this.m = m;
	this.c = c;
	this.b = this.n.D.length;
	this.n.D[this.b] = this;
	m.A[c] = this;
	var n = this.n,
	I = this.n.I;
	this.O = X;
	this.P = Y;
	this.s = Z;
	this.g = c ? m.A[c - 1].g + this.O('left') : m.g + this.O('block_left');
	this.h = c ? m.A[c - 1].h + this.O('top') : m.h + this.O('block_top');
	document.write('<div id="e', n.b, '_', this.b, 'o" class="', this.P(0, 0), '"', (this.B[2] && this.B[2]['tt'] ? ' title="' + this.B[2]['tt'] + '"' : ''), ' style="position:absolute;top: ', this.h, 'px;left:', this.g, 'px;width:', this.O('width'), 'px;height:', this.O('height'), 'px;visibility:hidden;', ' z-index: ', this.a, ';cursor:', (this.B[1] ? 'pointer' : 'default'), '" ', 'onclick="return A_MENUS[', n.b, '].onclick(', this.b, ');" onmouseout="A_MENUS[', n.b, '].onmouseout(', this.b, ');" onmouseover="A_MENUS[', n.b, '].onmouseover(', this.b, ');" onmousedown="A_MENUS[', n.b, '].onmousedown(', this.b, ');"><div id="e', n.b, '_', this.b, 'i" class="', this.P(1, 0), '">', this.B[0], "</div></div>");
	this.M = document.getElementById('e' + n.b + '_' + this.b + 'i');
	this.N = document.getElementById('e' + n.b + '_' + this.b + 'o');
	this.L = !this.a;
	if (this.B.length < 4)
		return;
	this.A = [];
	for (var c = 0; c < this.B.length - 3; c++)
		new S(this, c);
}
function X(p) {
	var r = null,
	G = this.n.I[this.a];
	if (G)
		r = G[p];
	return (r == null ? this.m.O(p) : r);
}
function Y(d, e) {
	var C = this.O('css');
	var H = C[d ? 'inner' : 'outer'];
	if (typeof(H) == 'string')
		return H;
	for (var _ = e; _ >= 0; _--)
		if (H[_])
			return H[_];
}
function Z(K) {
	window.setTimeout("window.status=unescape('" + (K ? '' : (this.B[2] && this.B[2]['sb'] ? escape(this.B[2]['sb']) : escape(this.B[0]) + (this.B[1] ? ' (' + escape(this.B[1]) + ')' : ''))) + "')", 10);	}