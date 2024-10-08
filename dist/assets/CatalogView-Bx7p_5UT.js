import {
	B as A,
	f as C,
	p as D,
	q as E,
	d as F,
	s as G,
	_ as L,
	n as M,
	v as O,
	b as T,
	l as U,
	x as W,
	h as d,
	o as e,
	F as g,
	i as h,
	t as i,
	m as j,
	k,
	j as m,
	g as n,
	c as o,
	u as q,
	a as s,
	r as w,
	e as x,
	w as z,
} from './index-CJep6T-l.js'
const P = {},
	R = {
		width: '14',
		height: '14',
		version: '1.1',
		id: 'Capa_1',
		xmlns: 'http://www.w3.org/2000/svg',
		'xmlns:xlink': 'http://www.w3.org/1999/xlink',
		x: '0px',
		y: '0px',
		viewBox: '0 0 94.926 94.926',
		style: { 'enable-background': 'new 0 0 94.926 94.926' },
		'xml:space': 'preserve',
	},
	H = s(
		'g',
		null,
		[
			s('path', {
				d: 'M55.931,47.463L94.306,9.09c0.826-0.827,0.826-2.167,0-2.994L88.833,0.62C88.436,0.224,87.896,0,87.335,0 c-0.562,0-1.101,0.224-1.498,0.62L47.463,38.994L9.089,0.62c-0.795-0.795-2.202-0.794-2.995,0L0.622,6.096 c-0.827,0.827-0.827,2.167,0,2.994l38.374,38.373L0.622,85.836c-0.827,0.827-0.827,2.167,0,2.994l5.473,5.476 c0.397,0.396,0.936,0.62,1.498,0.62s1.1-0.224,1.497-0.62l38.374-38.374l38.374,38.374c0.397,0.396,0.937,0.62,1.498,0.62 s1.101-0.224,1.498-0.62l5.473-5.476c0.826-0.827,0.826-2.167,0-2.994L55.931,47.463z',
				fill: '#668567',
				style: { fill: '#668567' },
			}),
		],
		-1
	),
	J = [H]
function K(v, f) {
	return e(), o('svg', R, J)
}
const Q = L(P, [['render', K]]),
	X = {},
	Y = {
		width: '42',
		height: '42',
		viewBox: '0 0 64 64',
		xmlns: 'http://www.w3.org/2000/svg',
		'xmlns:xlink': 'http://www.w3.org/1999/xlink',
	},
	Z = T(
		'<linearGradient id="linear-gradient" gradientUnits="userSpaceOnUse" x1="3.25" x2="60.75" y1="32" y2="32"><stop offset="0" stop-color="#5bb4f6"></stop><stop offset=".61" stop-color="#2191e5"></stop><stop offset="1" stop-color="#007edb"></stop></linearGradient><g id="Layer_31" data-name="Layer 31"><circle cx="32" cy="32" fill="url(#linear-gradient)" r="28.75" style="fill:rgb(149, 184, 142);"></circle><g fill="#fff"><path d="m49 17.29h-34a3.75 3.75 0 0 0 0 7.5h34a3.75 3.75 0 0 0 0-7.5zm0 6h-34a2.25 2.25 0 0 1 0-4.5h34a2.25 2.25 0 0 1 0 4.5z" fill="#fff" style="fill:rgb(255, 255, 255);"></path><path d="m44 31.25h-24a3.75 3.75 0 0 0 0 7.5h24a3.75 3.75 0 0 0 0-7.5zm0 6h-24a2.25 2.25 0 0 1 0-4.5h24a2.25 2.25 0 0 1 0 4.5z" fill="#fff" style="fill:rgb(255, 255, 255);"></path><path d="m39 45.21h-14a3.75 3.75 0 0 0 0 7.5h14a3.75 3.75 0 0 0 0-7.5zm0 6h-14a2.25 2.25 0 0 1 0-4.5h14a2.25 2.25 0 0 1 0 4.5z" fill="#fff" style="fill:rgb(255, 255, 255);"></path></g></g>',
		2
	),
	tt = [Z]
function et(v, f) {
	return e(), o('svg', Y, tt)
}
const st = L(X, [['render', et]]),
	ot = { class: 'card__wrapper' },
	lt = ['onClick'],
	at = { class: 'card__text-wrapper' },
	ct = { class: 'card__title' },
	nt = { key: 0, class: 'card__description' },
	rt = { key: 1, class: 'card__description' },
	it = { class: 'card__pay-wrapper' },
	ut = { class: 'modal__container' },
	_t = ['src'],
	dt = {
		key: 1,
		class: 'carousel-img',
		src: 'https://supstep-serverpechenki-4819.twc1.net/photos/default.jpg',
	},
	pt = { class: 'custom-arrow' },
	ht = ['onClick'],
	vt = ['onClick'],
	ft = { class: 'modal__info-wrapper' },
	mt = { key: 0 },
	wt = { key: 1 },
	gt = { key: 2 },
	yt = { class: 'modal__container' },
	kt = { key: 0, class: 'carousel-slide' },
	bt = ['src'],
	xt = { key: 1, class: 'carousel-description box' },
	Ct = ['src'],
	$t = { key: 1, class: 'carousel-description box' },
	Bt = { class: 'custom-arrow_box' },
	St = ['onClick'],
	zt = ['onClick'],
	Lt = { class: 'modal__info-wrapper' },
	It = {
		__name: 'productCard',
		props: { data: Array },
		setup(v) {
			const f = w(!1),
				b = w(!1),
				l = w([]),
				c = w([]),
				I = r => {
					r.items && r.items.length
						? ((c.value = r), (b.value = !0))
						: ((l.value = r), (f.value = !0))
				},
				u = q(),
				y = r => {
					u.addToCart(r)
				},
				$ = F(() => {
					const r = window.innerWidth
					let a = '30%'
					return (
						r < 1100 && (a = '40%'),
						r < 900 && (a = '50%'),
						r < 768 && (a = '80%'),
						r < 425 && (a = '95%'),
						{ width: a }
					)
				})
			return (r, a) => {
				const p = x('n-carousel'),
					B = x('n-infinite-scroll'),
					S = x('n-modal')
				return (
					e(),
					o(
						g,
						null,
						[
							s('div', ot, [
								(e(!0),
								o(
									g,
									null,
									C(
										v.data,
										t => (
											e(),
											o(
												'article',
												{ class: 'card', key: t.id, onClick: _ => I(t) },
												[
													s(
														'div',
														{
															class: 'card__img',
															style: M({
																backgroundImage:
																	'url(https://supstep-serverpechenki-4819.twc1.net/photos/' +
																	(t.photos.length
																		? t.photos[0]
																		: 'default.jpg') +
																	')',
															}),
														},
														null,
														4
													),
													s('div', at, [
														s('h3', ct, i(t.name), 1),
														t.description
															? (e(), o('p', nt, i(t.description), 1))
															: n('', !0),
														t.description
															? n('', !0)
															: (e(), o('p', rt, i(t.structure), 1)),
													]),
													s('div', it, [
														s('span', null, i(t.price) + '₽', 1),
														d(
															A,
															{
																onClick: z(_ => y(t), ['stop']),
																title: 'В корзину',
															},
															null,
															8,
															['onClick']
														),
													]),
												],
												8,
												lt
											)
										)
									),
									128
								)),
							]),
							d(
								S,
								{
									show: f.value,
									'onUpdate:show': a[0] || (a[0] = t => (f.value = t)),
									class: 'custom-card',
									preset: 'card',
									style: M($.value),
									title: l.value.name,
									bordered: !1,
									size: 'small',
								},
								{
									default: h(() => [
										l.value
											? (e(),
											  m(
													B,
													{
														key: 0,
														style: { 'max-height': '80vh' },
														distance: 10,
													},
													{
														default: h(() => [
															s('div', ut, [
																d(
																	p,
																	{ 'show-arrow': '', class: 'carousel' },
																	{
																		arrow: h(({ prev: t, next: _ }) => [
																			s('div', pt, [
																				s(
																					'button',
																					{
																						type: 'button',
																						class: 'custom-arrow--left',
																						onClick: t,
																					},
																					[(e(), m(k(U)))],
																					8,
																					ht
																				),
																				s(
																					'button',
																					{
																						type: 'button',
																						class: 'custom-arrow--right',
																						onClick: _,
																					},
																					[(e(), m(k(j)))],
																					8,
																					vt
																				),
																			]),
																		]),
																		default: h(() => [
																			l.value.photos.length
																				? (e(!0),
																				  o(
																						g,
																						{ key: 0 },
																						C(
																							l.value.photos,
																							(t, _) => (
																								e(),
																								o(
																									'img',
																									{
																										key: _,
																										class: 'carousel-img',
																										src:
																											'https://supstep-serverpechenki-4819.twc1.net/photos/' +
																											t,
																									},
																									null,
																									8,
																									_t
																								)
																							)
																						),
																						128
																				  ))
																				: n('', !0),
																			l.value.photos.length
																				? n('', !0)
																				: (e(), o('img', dt)),
																		]),
																		_: 1,
																	}
																),
																s('div', ft, [
																	l.value.description
																		? (e(),
																		  o('p', mt, i(l.value.description), 1))
																		: (e(),
																		  o('p', wt, i(l.value.structure), 1)),
																	l.value.composition
																		? (e(),
																		  o(
																				'p',
																				gt,
																				' Состав: ' + i(l.value.composition),
																				1
																		  ))
																		: n('', !0),
																	s('p', null, 'Цена: ' + i(l.value.price), 1),
																]),
															]),
														]),
														_: 1,
													}
											  ))
											: n('', !0),
									]),
									_: 1,
								},
								8,
								['show', 'style', 'title']
							),
							d(
								S,
								{
									show: b.value,
									'onUpdate:show': a[1] || (a[1] = t => (b.value = t)),
									class: 'custom-card',
									preset: 'card',
									style: M($.value),
									title: c.value.name,
									bordered: !1,
									size: 'small',
								},
								{
									default: h(() => [
										c.value
											? (e(),
											  m(
													B,
													{
														key: 0,
														style: { 'max-height': '80vh' },
														distance: 10,
													},
													{
														default: h(() => [
															s('div', yt, [
																d(
																	p,
																	{
																		'show-dots': !1,
																		'show-arrow': '',
																		class: 'carousel',
																	},
																	{
																		arrow: h(({ prev: t, next: _ }) => [
																			s('div', Bt, [
																				s(
																					'button',
																					{
																						type: 'button',
																						class: 'custom-arrow--left',
																						onClick: t,
																					},
																					[(e(), m(k(U)))],
																					8,
																					St
																				),
																				s(
																					'button',
																					{
																						type: 'button',
																						class: 'custom-arrow--right',
																						onClick: _,
																					},
																					[(e(), m(k(j)))],
																					8,
																					zt
																				),
																			]),
																		]),
																		default: h(() => [
																			c.value.photos.length || c.value.structure
																				? (e(),
																				  o('div', kt, [
																						c.value.photos.length
																							? (e(),
																							  o(
																									'img',
																									{
																										key: 0,
																										class: 'carouselBox-img',
																										src:
																											'https://supstep-serverpechenki-4819.twc1.net/photos/' +
																											c.value.photos[0],
																									},
																									null,
																									8,
																									bt
																							  ))
																							: n('', !0),
																						c.value.structure
																							? (e(),
																							  o(
																									'p',
																									xt,
																									i(c.value.structure),
																									1
																							  ))
																							: n('', !0),
																				  ]))
																				: n('', !0),
																			c.value.items.length
																				? (e(!0),
																				  o(
																						g,
																						{ key: 1 },
																						C(
																							c.value.items,
																							(t, _) => (
																								e(),
																								o(
																									'div',
																									{
																										key: _,
																										class: 'carousel-slide',
																									},
																									[
																										t.photos.length
																											? (e(),
																											  o(
																													'img',
																													{
																														key: 0,
																														class:
																															'carouselBox-img',
																														src:
																															'https://supstep-serverpechenki-4819.twc1.net/photos/' +
																															t.photos[0],
																													},
																													null,
																													8,
																													Ct
																											  ))
																											: n('', !0),
																										t.description
																											? (e(),
																											  o(
																													'p',
																													$t,
																													i(t.description),
																													1
																											  ))
																											: n('', !0),
																									]
																								)
																							)
																						),
																						128
																				  ))
																				: n('', !0),
																		]),
																		_: 1,
																	}
																),
																s('div', Lt, [
																	s('p', null, 'Цена: ' + i(c.value.price), 1),
																]),
															]),
														]),
														_: 1,
													}
											  ))
											: n('', !0),
									]),
									_: 1,
								},
								8,
								['show', 'style', 'title']
							),
						],
						64
					)
				)
			}
		},
	},
	V = L(It, [['__scopeId', 'data-v-6851a8ec']]),
	N = v => (O('data-v-8285c048'), (v = v()), W(), v),
	Mt = { class: 'page__container' },
	Vt = N(() => s('h1', { class: 'page__title' }, 'КАТАЛОГ', -1)),
	Nt = { class: 'filter__menu' },
	Ut = { class: 'filter__list' },
	jt = ['onClick'],
	qt = { key: 0, class: 'section' },
	Ft = N(() => s('h2', { class: 'section__catalog-title' }, 'Рецепты', -1)),
	Tt = { key: 1, class: 'section' },
	At = N(() => s('h2', { class: 'section__catalog-title' }, 'Боксы', -1)),
	Dt = { class: 'section__catalog-title' },
	Et = {
		__name: 'CatalogView',
		setup(v) {
			const f = D(),
				b = q(),
				l = w([]),
				c = w(!1),
				I = () => {
					c.value = !c.value
				},
				u = w('Все'),
				y = a => {
					;(u.value = a), (c.value = !1)
				},
				$ = () => {
					u.value = 'Все'
				},
				r = F(() =>
					u.value === 'Все'
						? l.value.productsBySections
						: l.value.productsBySections.filter(a => a.section_name === u.value)
				)
			return (
				E(async () => {
					try {
						const a = await b.getAllProduct()
						;(l.value = a),
							console.log(l.value),
							f.query.filter && (u.value = f.query.filter),
							window.scrollTo(0, 0)
					} catch (a) {
						console.error('Error fetching products:', a)
					}
				}),
				(a, p) => {
					const B = x('n-back-top'),
						S = x('n-infinite-scroll')
					return (
						e(),
						o(
							g,
							null,
							[
								d(B, { right: 0, bottom: 50, style: { 'z-index': '20' } }),
								s('div', Mt, [
									Vt,
									s('nav', Nt, [
										s('button', { onClick: I, class: 'filter__button' }, [
											(e(), m(k(st))),
										]),
										s('button', { onClick: $, class: 'filter__close-button' }, [
											s('p', null, i(u.value), 1),
											u.value !== 'Все'
												? (e(), m(k(Q), { key: 0 }))
												: n('', !0),
										]),
										s(
											'div',
											{
												class: G([
													'filter__list-wrapper',
													{ 'filter__list-wrapper-active': c.value },
												]),
											},
											[
												s('ul', Ut, [
													d(
														S,
														{ style: { 'max-height': '200px' }, distance: 10 },
														{
															default: h(() => [
																s(
																	'li',
																	{
																		class: 'filter__item',
																		onClick:
																			p[0] ||
																			(p[0] = z(t => y('Все'), ['prevent'])),
																	},
																	' Все '
																),
																s(
																	'li',
																	{
																		class: 'filter__item',
																		onClick:
																			p[1] ||
																			(p[1] = z(
																				t => y('Рецепты'),
																				['prevent']
																			)),
																	},
																	' Рецепты '
																),
																s(
																	'li',
																	{
																		class: 'filter__item',
																		onClick:
																			p[2] ||
																			(p[2] = z(t => y('Боксы'), ['prevent'])),
																	},
																	' Боксы '
																),
																(e(!0),
																o(
																	g,
																	null,
																	C(
																		l.value.productsBySections,
																		t => (
																			e(),
																			o(
																				'li',
																				{
																					class: 'filter__item',
																					key: t.section_name,
																					onClick: _ => y(t.section_name),
																				},
																				i(t.section_name),
																				9,
																				jt
																			)
																		)
																	),
																	128
																)),
															]),
															_: 1,
														}
													),
												]),
											],
											2
										),
									]),
									u.value === 'Все' || u.value === 'Рецепты'
										? (e(),
										  o('section', qt, [
												Ft,
												d(V, { data: l.value.recipes }, null, 8, ['data']),
										  ]))
										: n('', !0),
									u.value === 'Все' || u.value === 'Боксы'
										? (e(),
										  o('section', Tt, [
												At,
												d(V, { data: l.value.boxes }, null, 8, ['data']),
										  ]))
										: n('', !0),
									(e(!0),
									o(
										g,
										null,
										C(
											r.value,
											t => (
												e(),
												o(
													'section',
													{ class: 'section', key: t.section_name },
													[
														s('h2', Dt, i(t.section_name), 1),
														d(V, { data: t.products }, null, 8, ['data']),
													]
												)
											)
										),
										128
									)),
								]),
							],
							64
						)
					)
				}
			)
		},
	},
	Ot = L(Et, [['__scopeId', 'data-v-8285c048']])
export { Ot as default }
