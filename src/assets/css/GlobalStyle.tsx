import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@font-face {
	font-family: 'SCoreDream';
	font-weight: 100; 
	font-style: normal; 
	src: url(https://cdn.jsdelivr.net/gh/webfontworld/SCoreDream/SCoreDream1.woff2) format('woff2'),
				url(https://cdn.jsdelivr.net/gh/webfontworld/SCoreDream/SCoreDream1.woff) format('woff');
	font-display: swap;
}
@font-face {
	font-family: 'SCoreDream';
	font-weight: 200; 
	font-style: normal; 
	src: url(https://cdn.jsdelivr.net/gh/webfontworld/SCoreDream/SCoreDream2.woff2) format('woff2'),
			url(https://cdn.jsdelivr.net/gh/webfontworld/SCoreDream/SCoreDream2.woff) format('woff');
	font-display: swap;
}
@font-face {
	font-family: 'SCoreDream';
	font-weight: 300; 
	font-style: normal; 
	src: url(https://cdn.jsdelivr.net/gh/webfontworld/SCoreDream/SCoreDream3.woff2) format('woff2'),
				url(https://cdn.jsdelivr.net/gh/webfontworld/SCoreDream/SCoreDream3.woff) format('woff');
	font-display: swap;
}
@font-face {
	font-family: 'SCoreDream';
	font-weight: 400; 
	font-style: normal; 
	src: url(https://cdn.jsdelivr.net/gh/webfontworld/SCoreDream/SCoreDream4.woff2) format('woff2'),
				url(https://cdn.jsdelivr.net/gh/webfontworld/SCoreDream/SCoreDream4.woff) format('woff');
	font-display: swap;
}
@font-face {
	font-family: 'SCoreDream';
	font-weight: 500; 
	font-style: normal; 
	src: url(https://cdn.jsdelivr.net/gh/webfontworld/SCoreDream/SCoreDream5.woff2) format('woff2'),
				url(https://cdn.jsdelivr.net/gh/webfontworld/SCoreDream/SCoreDream5.woff) format('woff');
	font-display: swap;
}
@font-face {
	font-family: 'SCoreDream';
	font-weight: 600; 
	font-style: normal; 
	src: url(https://cdn.jsdelivr.net/gh/webfontworld/SCoreDream/SCoreDream6.woff2) format('woff2'),
				url(https://cdn.jsdelivr.net/gh/webfontworld/SCoreDream/SCoreDream6.woff) format('woff');
	font-display: swap;
}
@font-face {
	font-family: 'SCoreDream';
	font-weight: 700; 
	font-style: normal; 
	src: url(https://cdn.jsdelivr.net/gh/webfontworld/SCoreDream/SCoreDream7.woff2) format('woff2'),
				url(https://cdn.jsdelivr.net/gh/webfontworld/SCoreDream/SCoreDream7.woff) format('woff');
	font-display: swap;
}
@font-face {
	font-family: 'SCoreDream';
	font-weight: 900; 
	font-style: normal; 
	src: url(https://cdn.jsdelivr.net/gh/webfontworld/SCoreDream/SCoreDream9.woff2) format('woff2'),
				url(https://cdn.jsdelivr.net/gh/webfontworld/SCoreDream/SCoreDream9.woff) format('woff');
	font-display: swap;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video,button {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	box-sizing: border-box;
	font-family: 'SCoreDream';
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
img {
  vertical-align: bottom;
}
a {
  text-decoration: none;
  color: inherit;
}
button {
	outline: none;
	background: none;
	border: none;
	cursor: pointer;
}
input,textarea {
	font-family: 'SCoreDream';
	
}
`;

export default GlobalStyle;
