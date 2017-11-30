'use strict'

import test from 'ava'
import m from '.'

test('when making one small BBQ Chicken Pizza', async t => {
	const pizza = await m({size: 'small',  topping: ['BBQ Chicken']})

	t.is(pizza, 'Your 1 small pizza is ready! BBQ Chicken')
})

test('when making one large BBQ Chicken and one Sunny Side Up Pizza', async t => {
	const pizza = await m({size: 'large',  topping: ['BBQ Chicken', 'Sunny Side Up']})

	t.is(pizza, 'Your 2 large pizzas are ready! BBQ Chicken, Sunny Side Up')
})

test('when has no sizes', async t => {
  const error = await t.throws(m({ size: 'a', topping: ['BBQ Chicken'] }))

  t.is(error.message, 'Choose one of these sizes: small, medium, large')
})